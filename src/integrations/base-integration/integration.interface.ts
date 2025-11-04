export interface IntegrationMetadata {
  apiUrl: string;
  requestUrl: string;
  [key: string]: any; // permite agregar más campos (como digimonName, etc)
}

export interface ExternalIntegration {
  fetchData(metadata: IntegrationMetadata): Promise<any>;
  transformData(rawData: any): any;
}
