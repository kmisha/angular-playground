export default function Profile({src, alt, id, isAvatar}) {
  return <img src={src} alt={alt} key={id} className={isAvatar && 'rounded-full'} />
}
