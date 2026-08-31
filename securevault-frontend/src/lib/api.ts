// export const API_BASE = "http://localhost:8080/api";

// export async function apiFetch(path: string, options: any = {}) {
//   const token = localStorage.getItem("securevault_token");

//   const res = await fetch(`http://localhost:8080/api${path}`, {
//     ...options,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token ? `Bearer ${token}` : "",
//       ...(options.headers || {})
//     }
//   });

//   if (res.status === 401) {
//     throw new Error("Unauthorized (401)");
//   }

//   return await res.json();
// }


const rawBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api";
export const API_BASE = rawBaseUrl.replace(/\/+$/, "");

export async function apiFetch(path: string, options: any = {}) {
  const token = localStorage.getItem("securevault_token");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  const isFormData = options.body instanceof FormData;

  try {
    const res = await fetch(`${API_BASE}${cleanPath}`, {
      ...options,
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        Authorization: token ? `Bearer ${token}` : "",
        ...(options.headers || {})
      }
    });

    if (!res.ok) {
      let data = null;
      try {
        data = await res.json();
      } catch {}

      return {
        success: false,
        status: res.status,
        message: data?.message || `HTTP Error ${res.status}`
      };
    }

    return await res.json();
  } catch (err: any) {
    console.error("API Fetch Error:", err);
    return {
      success: false,
      message: err.message || "Failed to connect to backend server"
    };
  }
}
