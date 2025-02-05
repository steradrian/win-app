"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApolloProvider } from "@apollo/client";
import "../styles/globals.css";
import apolloClient from "@componentes/lib/apollo-client/apolloClient";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
