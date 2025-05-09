export type ApiResponse<T> =
  | {
      success: true;
      data: T;
      statusCode?: number;
    }
  | {
      error: true;
      message: string;
      errorCode?: string;
      statusCode?: number;
    };
