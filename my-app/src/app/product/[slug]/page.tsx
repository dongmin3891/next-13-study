interface Props {
  params : {
    slug: string;
  }
}

export default function PantsPage({params} : Props) {
  return (
    <h1>{params.slug}PantsPage</h1>
  )
}