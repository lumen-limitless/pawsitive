interface SectionProps
  extends React.DetailedHTMLProps<React.HTMLProps<HTMLElement>, HTMLElement> {
  fullscreen?: boolean
  centered?: boolean
  col?: boolean
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  fullscreen,
  centered,
  col,
  ...props
}: SectionProps) => {
  return (
    <section
      className={[
        'relative flex h-full w-full flex-grow items-center',
        col ? 'flex-col' : 'flex-row',
        centered ? ' justify-center' : 'justify-start',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </section>
  )
}

Section.displayName = 'Section'
