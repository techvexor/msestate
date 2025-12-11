// API utility functions for form submissions

export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
  propertyName?: string;
  propertyLocation?: string;
  propertyPrice?: string;
  source?: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function sendQuoteRequest(data: QuoteFormData): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/send-quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send quote request');
    }

    return { success: true, message: result.message };
  } catch (error) {
    console.error('Error sending quote request:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}
