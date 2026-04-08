import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Head from 'next/head';

const appealSchema = z.object({
  appealReason: z.string().min(1, 'Please enter a reason for your appeal'),
});

type AppealForm = z.infer<typeof appealSchema>;

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<AppealForm>({ resolver: zodResolver(appealSchema) });

  const onSubmit = async (data: AppealForm) => {
    setIsSubmitting(true);
    console.log('Submitting appeal:', data);
    // TODO: Call API to submit appeal
    setIsSubmitting(false);
  };

  return (
    <div>
      <Head>
        <title>Steam Appeal Process Automator</title>
      </Head>
      <h1>Steam Appeal Process Automator</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Appeal Reason:</label>
        <textarea {...register('appealReason')} />
        {errors.appealReason && <p>{errors.appealReason.message}</p>}
        <button type='submit' disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Appeal'}</button>
      </form>
    </div>
  );
}