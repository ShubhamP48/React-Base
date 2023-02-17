interface InputProps {
    label: string;
    type: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    status?: 'success' | 'error' | 'warning';
    error?: string;
  }
  
  export default InputProps;
  