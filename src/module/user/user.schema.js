import z from 'zod';
import { extractValidationData } from '../../common/utils/extractErrorData.js';

const registerSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'Name is too short'
    })
    .max(50, { message: 'Name is too long' }),

    account: z
    .number()
    .min(3, {
      message: 'Account is too short'
    })
    .max(10000, { message: 'Account is too long' }),

    amount: z
    .number()
    .min(3, {
      message: 'Account is too short'
    })
    .max(50, { message: 'Account is too long' }),

    password: z
    .string()
    .min(3, {
      message: 'Account is too short'
    })
    .max(50, { message: 'Account is too long' }),

    status: z
    .boolean()
    
});

export function validateUser(data) {
  const result = registerSchema.safeParse(data);
 
  const {
    hasError,
    errorMessages,
    data: userData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    userData
  }
}

export function validatePartialUser(data) {
  const result = registerSchema.partial().safeParse(data);
 
  const {
    hasError,
    errorMessages,
    data: userData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    userData
  }
}
