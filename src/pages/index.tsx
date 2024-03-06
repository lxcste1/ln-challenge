/**
 * Masterpage - Contenedor principal.
 * @author Lucas Tello
 * @created 06/03/2024
 */

import { QueryClient, QueryClientProvider } from 'react-query';
import Articles from '@/components/Articles';

const queryClient = new QueryClient();

export default function Home() {

  return (
    <QueryClientProvider client={queryClient}>
    <main
      className={`flex min-h-screen flex-col items-center xl:justify-between lg:p-24`}
    >
      <h1 className={`border-b-[1px] border-[#CCCCCC] lg:w-[925px] md:w-[680px] w-[360px] font-['suecaslab-bold'] text-left text-[24px] lg:pb-2 lg:mb-3 p-2 m-3`}>Focal Izquierdo</h1>
      <Articles />
    </main>
    </QueryClientProvider>
  );
}
