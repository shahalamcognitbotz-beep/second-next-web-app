

export default function RootLayout({ children }) {
  return (
   <>
        <header style={{background:"orange"}}>Header (Marketing)</header>
        {children}
        <header style={{background:"green"}}>Header (Marketing)</header>
      </>
  );
}
