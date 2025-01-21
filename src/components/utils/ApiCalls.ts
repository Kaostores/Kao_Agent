import { Instance } from "./ApiConfig";

export const Logins = async (data: any) => {
    try {
        console.log("Sending data:", data);
        const response = await Instance.post("/user/login", data);
        console.log("Response received:", response);
        return response;
    } catch (err: any) {
        console.error("Login error:", err.response?.data || err.message || err);
        return err.response?.data || err.message || err;
    }
};

// export const CreateCategory = async (data: any) => {
//     try {
//         const response = await Instance.post("/categories/create", data, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             }
//         });
//         console.log("Response received:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error creating category:", err.response?.data || err.message || err);
//         return err;
//     }
// };

// export const GetCategories = async () => {
//     try {
//         const response = await Instance.get("/categories");
//         console.log("Fetched categories response:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error fetching categories:", err.response?.data || err.message || err);
//         return err;
//     }
// }

// export const CreateSubcategory = async (subcategoryData: any) => {
//     try {
//         const response = await Instance.post("/categories/create/subcategory", subcategoryData);
//         console.log("Sub-category creation response:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error creating sub-category:", err.response?.data || err.message || err);
//         return err;
//     }
// };

// export const UpdateCategory = async (categoryId: string, data: any) => {
//     try {
//         // Use POST instead of PUT
//         const response = await Instance.post(`/categories/update/${categoryId}`, data);
//         console.log("Category updated:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error updating category:", err.response?.data || err.message || err);
//         return err;
//     }
// };

// export const DeleteCategory = async (categoryId: string) => {
//     try {
//         const response = await Instance.delete(`/categories/delete/${categoryId}`);
//         console.log("Category deleted:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error deleting category:", err.response?.data || err.message || err);
//         return err;
//     }
// };

// export const GetCategoriesWithSubs = async () => {
//     try {
//         const response = await Instance.get("/categories/with/subcategories");
//         console.log("Fetched categories with sub-categories response:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error fetching categories with sub-categories:", err.response?.data || err.message || err);
//         return err;
//     }
// };

// export const GetSubcategories = async (categoryId: string) => {
//   try {
//     const response = await Instance.get(`/categories/subcategories/${categoryId}`);
//     return response;
//   } catch (err: any) {
//     console.error('Error fetching subcategories:', err.response?.data || err.message || err);
//     throw new Error(err.response?.data || err.message || 'Error fetching subcategories');
//   }
// };

// export const UpdateSubcategory = async (subCategoryId: string, data: any) => {
//     try {
//         const response = await Instance.post(`/categories/update/subcategory/${subCategoryId}`, data);
//         console.log("Sub-category update response:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error updating sub-category:", err.response?.data || err.message || err);
//         return err;
//     }
// };

// export const DeleteSubcategory = async (subCategoryId: string) => {
//     try {
//         const response = await Instance.delete(`/categories/delete/subcategory/${subCategoryId}`);
//         console.log("Sub-category deleted:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error deleting sub-category:", err.response?.data || err.message || err);
//         return err;
//     }
// };

// export const CreateCoupon = async (data: any) => {
//   try {
//     const response = await Instance.post('/coupons/create', data);
//     return response;
//   } catch (err: any) {
//     console.error('Error creating coupon:', err.response?.data || err.message || err);
//     throw err;
//   }
// };

// export const GetProducts = async () => {
//   try {
//     const response = await Instance.get('/products');
//     return response;
//   } catch (err: any) {
//     console.error('Error fetching products:', err.response?.data || err.message || err);
//     throw new Error(err.response?.data || err.message || 'Error fetching products');
//   }
// };

// export const GetCoupons = async () => {
//   try {
//     const response = await Instance.get("/coupons");
//     return response;
//   } catch (err: any) {
//     console.error("Error fetching coupons:", err.response?.data || err.message || err);
//     throw err;
//   }
// };

// export const UpdateCoupon = async (couponId: string, data: any) => {
//   try {
//     const response = await Instance.post(`/coupons/update/${couponId}`, data);
//     return response;
//   } catch (err: any) {
//     console.error("Error updating coupon:", err.response?.data || err.message || err);
//     throw err;
//   }
// };

// export const DeleteCoupon = async (couponId: string) => {
//   try {
//     const response = await Instance.delete(`/coupons/delete/${couponId}`);
//     return response;
//   } catch (err: any) {
//     console.error("Error deleting coupon:", err.response?.data || err.message || err);
//     throw err;
//   }
// };

// export const CreateBrand = async (data: any) => {
//     try {
//         const response = await Instance.post("/brands/create", data);
//         return response;
//     } catch (err: any) {
//         console.error("Error creating brand:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const GetBrands = async () => {
//     try {
//         const response = await Instance.get('/brands');
//         console.log("Fetched brands response:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error fetching brands:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const UpdateBrand = async (brandId: string, data: any) => {
//     try {
//         const response = await Instance.post(`/brands/update/${brandId}`, data);
//         console.log("Brand updated:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error updating brand:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const DeleteBrand = async (brandId: string) => {
//     try {
//         const response = await Instance.delete(`/brands/delete/${brandId}`);
//         console.log("Brand deleted:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error deleting brand:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const UpdateHeroBanner = async (formData: any) => {
//     try {
//         const response = await Instance.post("/settings/home/banner/update", formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             },
//         });
//         console.log("Hero banner updated:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error updating hero banner:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const UpdateMiddleAdvert = async (formData: any) => {
//     try {
//         const response = await Instance.post("/settings/home/middle/advert/update", formData, {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//             },
//         });
//         console.log("Middle advert updated:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error updating middle advert:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const CreateSpotlight = async (formData: FormData) => {
//     try {
//         const response = await Instance.post('/posters/create', formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//             },
//         });
//         return response;
//     } catch (err: any) {
//         console.error('Error creating spotlight:', err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const GetUsersByType = async (type: string) => {
//     try {
//         const response = await Instance.get(`/user/users`, {
//             params: { type }
//         });
//         console.log("Fetched users response:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error fetching users:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const UpdateUser = async (userId: string, data: any) => {
//     try {
//         const response = await Instance.post(`/user/update/${userId}`, data);
//         console.log("User updated:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error updating user:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const GetStoresByStatus = async (status: any) => {
//     try {
//         console.log("API Response:", status);
//         const response = await Instance.get(`/stores`);
//         return response.data;
//     } catch (err: any) {
//         console.error("Error fetching stores:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const GetAllPosters = async () => {
//     try {
//         const response = await Instance.get('/posters');
//         return response;
//     } catch (err: any) {
//         console.error('Error fetching posters:', err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const GetSpotlightsByStore = async (storeId: string) => {
//     try {
//         const response = await Instance.get(`/posters/store/${storeId}`);
//         return response;
//     } catch (err: any) {
//         console.error('Error fetching spotlights by store:', err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const UpdatePosterInfo = async (posterUuid: string, data: { title: string; description: string }) => {
//     try {
//         const response = await Instance.post(`/posters/update/info/${posterUuid}`, data);
//         console.log("Poster info updated:", response);
//         return response.data;
//     } catch (err: any) {
//         console.error("Error updating poster info:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const UpdatePosterImage = async (posterUuid: string, formData: FormData) => {
//     try {
//         const response = await Instance.post(`/posters/update/image/${posterUuid}`, formData);
//         console.log("Poster image updated:", response);
//         return response.data;
//     } catch (err: any) {
//         console.error("Error updating poster image:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const DeletePoster = async (posterUuid: string) => {
//     try {
//         const response = await Instance.delete(`/posters/delete/${posterUuid}`);
//         console.log("Poster deleted:", response);
//         return response.data;
//     } catch (err: any) {
//         console.error("Error deleting poster:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const GetAddressById = async (addressUuid: string) => {
//     try {
//         const response = await Instance.get(`/user/address/${addressUuid}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching address:', error);
//         throw error;
//     }
// };

// export const GetOrders = async () => {
//     try {
//         const response = await Instance.get("/orders/admin");
//         console.log("Fetched orders response:", response);
//         return response;
//     } catch (err: any) {
//         console.error("Error fetching orders:", err.response?.data || err.message || err);
//         throw err;
//     }
// };

// export const GetUserAddress = async (address_uuid: string) => {
//   try {
//     const response = await Instance.get(`/user/address/${address_uuid}`);
//     return response.data;  // Return the response data
//   } catch (error) {
//     console.error('Error fetching user address:', error);
//     throw error;
//   }
// };


// export const UpdateStore = async (storeUuid: string, formData: FormData) => {
//     try {
//         const response = await Instance.post(`/stores/update/${storeUuid}`, formData, {
//             headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//         })
//         return response.data;
//     } catch (error) {
//         console.error('Error updating store:', error);
//         throw error;
//     }
// }

// export const ApproveStore = async (storeUuid: string) => {
//     try {
//         const response = await Instance.post(`/stores/approve/${storeUuid}`);
//         if (response.data.success) {
//             console.log(response.data.message);
//         }
//         return response.data;
//     } catch (error) {
//         console.error("Error approving store:", error);
//         throw error;
//     }
// };

// export const SuspendStore = async (storeUuid: string, note: string) => {
//     try {
//         const response = await Instance.post(`/stores/suspend/${storeUuid}`, note);
//         if (response.data.success) {
//             console.log(response.data.message);
//         }
//         return response.data;
//     } catch (error) {
//         console.error("Error suspending store:", error);
//         throw error;
//     }
// };

// export const GetAdminMetrics  = async () => {
//     try {
//         const response = await Instance.get("/analytics/admin/metrics?timeline=last_week&store&userId");
//         console.log("this is response", response)
//         return response.data;
//     } catch (err: any) {
//         console.error("Error fetching analytics data:", err.response?.data || err.message || err)
//         throw err;
//     }
// };

// export const getTransactionHistory = async () => {
//   try {
//     const response = await Instance.get('/transactions/get/transactions');
//     console.log("this is the transaction history",response)
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching transaction history:', error);
//     throw error;
//   }
// };

export const GetComplaints = async () => {
    try {
        const response = await Instance.get('/complains');
         console.log("Fetched complaints response:", response);
         return response.data;
     } catch (err: any) {
         console.error("Error fetching complaints:", err.response?.data || err.message || err);
         throw err;
     }
 };

// export const updateAgent = async (user_uuid: any, data: any) => {
//   try {
//     const response = await Instance.post(`/user/update/${user_uuid}`, data);
//     return response.data;
//   } catch (error) {
//     console.error('Error updating agent:', error);
//     throw error;
//   }
// };

// export const getPaymentMethodMetrics = async () => {
//   try {
//     const response = await Instance.get('/analytics/admin/top/payment/methods/metrics');
//     console.log("this is payment method metrics", response)
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching payment method metrics:', error);
//     throw error;
//   }
// };

// export const getTopStores = async () => {
//   try {
//     const response = await Instance.get('/analytics/admin/top/selling/stores/metrics');
//     console.log("this is top selling stores", response)
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching top stores:', error);
//     throw error;
//   }
// };

// export const createVendorAccount = async (vendorData: {
//   firstname: string;
//   lastname: string;
//   phone: string;
//   email: string;
//   password: string;
//   role: string;
//   country: string;
//   currency: string;
// }) => {
//   try {
//     const response = await Instance.post('/user/create/account', vendorData);
//     console.log('Vendor account created successfully:', response.data);
//     return response.data;
//   } catch (err: any) {
//     console.error('Error creating vendor account:', err.response?.data || err.message);
//     throw err;
//   }
// };

// export const deleteVendorById = async (id: string) => {
//     try {
//         const response = await Instance.delete(`/user/delete/account/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error deleting vendor:", error);
//         throw error;
//     }
// };

// export const updatePassword = async (email: any, currentPassword: any, newPassword: any) => {
//   try {
//     const response = await Instance.post(`/user/password/update`, {
//       email,
//       password: newPassword,
//       current_password: currentPassword,
//     });

//     return response.data; 
//   } catch (error: any) {
//     console.error('Error updating password:', error.response?.data || error.message);
//     throw error.response?.data?.message || "An error occurred";
//   }
// };