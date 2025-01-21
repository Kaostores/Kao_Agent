import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://kaostores.onrender.com/api/v1",
    prepareHeaders: (headers) => {
      const token = cookies.get("Kao_cookie_admin");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      } else {
        console.warn("No token found in cookies.");
      }
    }
  }),
  tagTypes: ["category", "subcategory", "stores", "complaints", "metrics", "vendors", "agents", "Currencies"],
  endpoints: (builder) => ({
    createCategory: builder.mutation({
      query: (formData) => ({
        url: "/admin/category/create",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["category"]
    }),
    createSubcategory: builder.mutation({
      query: (formData) => ({
        url: "/admin/subcategory/create",
        method: "POST",
        body: {
          name: formData.name,
          categoryId: formData.categoryId,
          tags: formData.tags,
        },
      }),
      invalidatesTags: ["subcategory"]
    }),
    viewAllStores: builder.query({
      query: () => `stores`,
      providesTags: ["stores"],
    }),
    approveStore: builder.mutation({
      query: (storeUuid) => ({
        url: `stores/approve/${storeUuid}`,
        method: "POST",
      }),
      invalidatesTags: ["stores"],
    }),

    addReplyToComplaint: builder.mutation({
      query: (body) => ({
        url: `/complains/add/reply/${body.complainID}`,
        method: "POST",
        body: body
      }),
      invalidatesTags: ["complaints"]
    }),
    SuspendStore: builder.mutation({
			query: (body) => ({
				url: `/stores/suspend/${body.store_uuid}`,
				method: "POST",
				body: body,
			}),
			invalidatesTags: ["stores"],
    }),
    getSubcategories: builder.query({
      query: (categoryId) => `categories/subcategories/${categoryId}`,
      providesTags: ["subcategory"]
    }),
    getMetrics: builder.query({
      query: ({ userId }) => 
        `/analytics/admin/metrics?timeline=last_week&store&userId=${userId}`,
      providesTags: ["metrics"]
    }),
    getAdminMetrics: builder.query({
      query: () => 
        `/analytics/admin/metrics?timeline=last_week&store&userId`,
      providesTags: ["metrics"]
    }),

    deleteVendorById: builder.mutation({
      query: (vendorId) => ({
        url: `/user/delete/account/${vendorId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["vendors"],  
    }),

    deleteStoreById: builder.mutation({
      query: (storeId) => ({
        url: `/stores/delete/${storeId}`,
        method: "DELETE"
      }),
      invalidatesTags: ["stores"]
    }),

    getUsersByType: builder.query({
      query: (type) => ({
        url: `/users?type=${type}`,
        method: "GET",
      }),
      providesTags: ["vendors"],
    }),
    getUserAddress: builder.query({
      query: (addressUuid) => ({
        url: `/user/address/${addressUuid}`,
        method: "GET",
      }),
    }),
      updateAgent: builder.mutation({
      query: ({ user_uuid, data }) => ({
        url: `/user/update/${user_uuid}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["agents"],
    }),
    createVendorAccount: builder.mutation({
      query: (vendorData) => ({
        url: `/user/create/account`,
        method: "POST",
        body: vendorData,
      }),
      invalidatesTags: ["vendors"],
    }),
     getStoreById: builder.query<any, string>({
      query: (storeUuid) => `/stores/update//${storeUuid}`, 
    }),

    
    updateStore: builder.mutation({
      query: ({ store_uuid, ...formData }) => {
        const data = new FormData();
        for (const key in formData) {
          data.append(key, formData[key]);
        }
        return {
          url: `/stores/update/${store_uuid}`,
          method: 'POST',
          body: data,
        };
      },
    }),

    getUserData: builder.query({
      query: () => 'user/userdata',
    }),
    addCurrency: builder.mutation({
      query: (newCurrency) => ({
        url: '/currencies/create',
        method: 'POST',
        body: newCurrency,
      }),
    }),
    getCurrencies: builder.query({
      query: () => '/currencies',
      providesTags: ['Currencies'],
    }),
    updateCurrency: builder.mutation({
      query: (currency) => ({
        url: `/currencies/update/${currency.currency_uuid}`,
        method: 'POST',
        body: currency,
      }),
      invalidatesTags: ['Currencies'],
    }),
    deleteCurrency: builder.mutation({
      query: (currency) => ({
        url: `currencies/delete`,
        method: 'DELETE',
        params: { currency },
      }),
      invalidatesTags: ['Currencies'],
    }),
    fetchAdminGraphData: builder.query({
      query: ({ timeline = 'last_week', store = '', userId }) => 
        `/analytics/admin/graph?timeline=${timeline}&store=${store}&userId=${userId}`,
    }),
    updateProfileImage: builder.mutation<any, FormData>({
      query: (image) => ({
        url: '/update/profile/picture',
        method: 'POST',
        body: image,
      }),
    }),
    getNotifications: builder.query({
      query: () => '/notifications',
    }),
    
     }),
});

export const {
  useDeleteStoreByIdMutation,
  useGetUserDataQuery ,
  useCreateCategoryMutation,
  useCreateSubcategoryMutation,
  useViewAllStoresQuery,
  useApproveStoreMutation,
  useSuspendStoreMutation,
  useAddReplyToComplaintMutation,
  useGetSubcategoriesQuery,
  useGetMetricsQuery,
  useGetAdminMetricsQuery,
  useDeleteVendorByIdMutation,
  useGetUsersByTypeQuery,  
  useGetUserAddressQuery,
  useUpdateAgentMutation,
  useCreateVendorAccountMutation,
  useGetStoreByIdQuery,
  useUpdateStoreMutation,
  useAddCurrencyMutation,
  useGetCurrenciesQuery,
  useUpdateCurrencyMutation,
  useDeleteCurrencyMutation,
  useFetchAdminGraphDataQuery,
  useUpdateProfileImageMutation,
  useGetNotificationsQuery
} = api;
