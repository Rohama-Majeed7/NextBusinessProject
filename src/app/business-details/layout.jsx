import BusinessDetailHeader from "@/app/components/BusinessDetails/BusinessDetailHeader";
export const metadata = {
  title: "business-details",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased bg-[#eaeef4]`}>
        <BusinessDetailHeader />
        {children}
      </body>
    </html>
  );
}
