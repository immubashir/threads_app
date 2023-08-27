import * as z from 'zod';

export const ThreadValidation = z.object({
    thread: z.string().nonempty().min(2, {message: 'Your thread should atleast have 2 characters'}),
    accountId: z.string(),
})

export const CommentValidation = z.object({
    thread: z.string().nonempty().min(2, {message: 'Your thread should atleast have 2 characters'}),
})