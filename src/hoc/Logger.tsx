import { useEffect, ComponentType } from "react";

interface LoggerProps {
  componentName: string;
  message?: string;
}

const withLogger = ({ componentName, message = "Hello from" }: LoggerProps) => {
  return function <T extends ComponentType<any>>(WrappedComponent: T) {
    const WithLogger: React.FC<any> = (props) => {
      useEffect(() => {
        console.log(`${message} ${componentName}`);
      }, [componentName, message]);

      return <WrappedComponent {...props} />;
    };

    return WithLogger;
  };
};

export default withLogger;
