import React from 'react'

interface Props {
  title: string
  description?: string
}
const PageHeading = ({ description, title }: Props) => {
  return (
    <div className="pb-10 space-y-2">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && (
        <p className="text-muted-foreground text-sm">{description}</p>
      )}
    </div>
  )
}

export default PageHeading
