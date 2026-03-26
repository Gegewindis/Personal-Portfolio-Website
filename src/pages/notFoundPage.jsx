import Header from "../components/Header.jsx"

function NotFoundPage() {

  const styles = {
    display: "flex",
    justifyContent: "center",
    marginTop: "50vh"
  }

  return (
    <>
      <Header
        menuContainerWidth="var(--header-menu-container)"
        logoContainerWidth="var(--header-logo-container)"
        backgroundColor="var(--color-grey-dark-background)"
        menus={[
          { to: "/Personal-Portfolio-Website/#about-me", text: "About Me", offset: 80 },
          { to: "/Personal-Portfolio-Website/#latest", text: "Projects", offset: 80 }
        ]} />
      <div style={styles}><h1>Page Not found: error 404!</h1></div>
    </>
  );
}

export default NotFoundPage