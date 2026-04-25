type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span className={`font-body text-xs uppercase tracking-widest text-primary font-medium ${className}`}>
      {children}
    </span>
  );
}
