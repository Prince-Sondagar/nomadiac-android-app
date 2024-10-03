import {useFormContext} from 'react-hook-form';

const WithProfileCompletionCheck = (WrappedComponent: any) => {
  const formMethods = useFormContext(); // Get the form methods from the context

  const ComponentWithProfileCompletionCheck = (props: any) => {
    const handleAction = (action: any) => {
      if (typeof action === 'function') {
        action();
      }
    };

    return (
      <WrappedComponent
        {...props}
        handleAction={handleAction}
        formMethods={formMethods} // Pass the form methods as props
      />
    );
  };

  return ComponentWithProfileCompletionCheck;
};

export default WithProfileCompletionCheck;
