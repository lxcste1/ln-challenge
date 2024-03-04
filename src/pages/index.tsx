import { QueryClient, QueryClientProvider } from 'react-query';
import Articles from '@/components/Articles';

const queryClient = new QueryClient();

export default function Home() {

  return (
    <QueryClientProvider client={queryClient}>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <Articles />
    </main>
    </QueryClientProvider>
  );
}
