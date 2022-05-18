export interface NetworksDto {
    networks: Networks[];
  }
  
  export interface Networks {
    name: string;
    id: string;
    logo_path: string | null;
    origin_country: string;
  }