export interface ErrorResponse {
  error: boolean;
  message: string;
  statusCode: number;
  errorCode?: string;
}
