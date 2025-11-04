  import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
  import axios from 'axios';
  import { IntegrationMetadata } from './integration.interface';

  @Injectable()
  export class BaseIntegrationService {
    /**
     * Hace la llamada HTTP a la API externa usando la metadata
     */
    async fetchData(metadata: IntegrationMetadata): Promise<any> {
      try {
        const response = await axios.get(metadata.requestUrl);
        return response.data;
      } catch (error) {
        throw new HttpException(
          {
            statusCode: error.response?.status || 500,
            message: error.response?.data?.message || 'External API error',
            errorCode: 'EXTERNAL_API_ERROR',
            details: error.message,
          },
          error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }

    transformData(data: any): any {
      return data;
    }
  }
