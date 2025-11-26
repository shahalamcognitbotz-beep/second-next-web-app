

export default function RootLayout({ children }) {
  return (
   <>
        <header style={{background:"pink"}}>Header (Application)</header>
        {children}
        <header style={{background:"blue"}}>Header (Application)</header>
      </>
  );
}
