import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@clerk/clerk-react";
import apiClient from "../lib/api";

export interface User {
  _id: string;
  clerkId: string;
  firstName?: string;
  lastName?: string;
  username?: string;
  email?: string;
  imageUrl?: string;
  role: "user" | "admin";
  address?: any;
  lastSyncedAt: string;
  createdAt: string;
  updatedAt: string;
  displayName: string;
}

// Get current user profile
export const useCurrentUser = () => {
  const { isSignedIn, getToken } = useAuth();

  return useQuery({
    queryKey: ["user", "me"],
    queryFn: async (): Promise<{ user: User; message: string }> => {
      const token = await getToken();
      const response = await apiClient.get("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    enabled: isSignedIn,
  });
};

// Get all users (admin)
export const useUsers = (page = 1, limit = 10, search = "") => {
  const { isSignedIn, getToken } = useAuth();

  return useQuery({
    queryKey: ["users", page, limit, search],
    queryFn: async () => {
      const token = await getToken();
      const response = await apiClient.get("/users", {
        params: { page, limit, search },
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    enabled: isSignedIn,
  });
};

// Update user profile
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation({
    mutationFn: async (userData: Partial<User>) => {
      const token = await getToken();
      const response = await apiClient.put("/users/me", userData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", "me"] });
    },
  });
};

// Sync user from Clerk
export const useSyncUser = () => {
  const queryClient = useQueryClient();
  const { getToken } = useAuth();

  return useMutation({
    mutationFn: async () => {
      const token = await getToken();
      const response = await apiClient.post(
        "/users/sync",
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user", "me"] });
    },
  });
};

// Send custom event
export const useSendEvent = () => {
  const { getToken } = useAuth();

  return useMutation({
    mutationFn: async ({
      eventName,
      data,
    }: {
      eventName: string;
      data?: any;
    }) => {
      const token = await getToken();
      const response = await apiClient.post(
        "/users/events",
        { eventName, data },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return response.data;
    },
  });
};
