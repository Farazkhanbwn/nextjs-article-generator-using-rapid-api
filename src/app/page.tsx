"use client";
import StoreProvider from "@/shared/store/store-provider";
import HomePage from "./home-page/page";

export default function Home() {
  return (
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
}
