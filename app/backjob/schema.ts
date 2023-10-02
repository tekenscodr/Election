import { z } from 'zod'


export const RegisterSchema = z.object({
    firstname : z.string().nonempty('first name is required'),
    surname : z.string().nonempty('surname is required'),
    email: z.string().nonempty('email iss required'),
    level : z.string().nonempty('role is required'),
    password: z.string().nonempty('password is required')
    .min(6, {message: 'Password must be at least 6 characters'}),
    region : z.string().nonempty('region is required'),
    constituency : z.string().nonempty('Constituency is required'),
    phoneNumber : z.string()
    .nonempty('phoneNumber is required')
    .min(10, {message: 'Must be a valid mobile number'})
    .max(13, {message: 'Must be a valid mobile number'})
}) 

export const VoteSchema = z.object({
    name: z.string(),
    count: z.number(),
  });
  
export const DataSchema = z.object({
    agent: z.string(),
    votes: z.array(VoteSchema),
    image: z.string(),
  });


export const FormDataSchema = z.object({
    bawumiaVotes: z.number().min(0).optional(), // Add validation rules as needed
    kennedyVotes: z.number().min(0).optional(),
    akotoVotes: z.number().min(0).optional(),
    nimoVotes: z.number().min(0).optional(),
  });
  