import MainNavigation from './MainNavigation';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};
export default Layout;
