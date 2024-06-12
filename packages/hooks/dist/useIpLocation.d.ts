export type ipLocationResult = {
  ip: string;
  ip_version: number;
  response_code: number;
  response_message: string;
};
export declare function useIpLocation(): import("@w2e/types").CallResult<ipLocationResult>;
export type ipLocationCodeResult = {
  ip: string;
  ip_number: string;
  ip_version: number;
  country_name: string;
  country_code2: string;
  isp: string;
  response_code: string;
  response_message: string;
};
export declare function useIpLocationCode(): import("@w2e/types").CallResult<string>;
// # sourceMappingURL=useIpLocation.d.ts.map
