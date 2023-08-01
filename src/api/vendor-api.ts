import axios, { userConf } from '../lib/axios';
import { PaginatedResponse, Vendor } from '../types';
import { AxiosRequestConfig } from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

export function useVendors(
  params?: AxiosRequestConfig['params'],
  options?: Exclude<UseQueryOptions<PaginatedResponse<Vendor[]>, Error>, 'queryKey' | 'queryFn'>
) {
  return useQuery<PaginatedResponse<Vendor[]>, Error>({
    queryKey: [`/api/v1/vendors`, params],
    queryFn: ({ queryKey: [url, params] }) => axios.get(`${url}`, { ...userConf, params }).then((res) => res.data),
    ...options,
  });
}

export function useVendor(id: string, options?: Exclude<UseQueryOptions<Vendor, Error>, 'queryKey' | 'queryFn'>) {
  const fetcher = async (queryKey: [string, string]) => {
    const [url, id] = queryKey;
    return axios
      .get(`${url}/${id}`, {
        baseURL: window.location.origin,
      })
      .then((res) => res.data.data);
  };
  return useQuery<Vendor, Error>({
    queryKey: ['/api/vendors', id],
    queryFn: ({ queryKey }) => fetcher(queryKey as [string, string]),
    ...options,
  });
}

export function useVendorBySlug(
  slug: string,
  options?: Exclude<UseQueryOptions<Vendor, Error>, 'queryKey' | 'queryFn'>
) {
  return useQuery<Vendor, Error>({
    queryKey: ['/api/v1/vendors', slug],
    queryFn: ({ queryKey: [url, slug] }) => axios.get(`${url}/${slug}`, userConf).then((res) => res.data.data),
    ...options,
  });
}
