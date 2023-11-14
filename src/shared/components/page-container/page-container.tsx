import React, { PropsWithChildren } from "react";
import Loader from "../loader/loader";

interface PageContainerProps extends PropsWithChildren {
  loading?: boolean;
  className?: string;
}

const PageContainer: React.FC<PageContainerProps> = ({
  loading,
  className = "",
  children,
}) => {
  if (loading) {
    return <Loader />;
  }
  return <div className={className}>{children}</div>;
};

export default PageContainer;
