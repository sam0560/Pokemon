import MainImg from '../../img/main_img.svg'

interface LogoProps {
  width: number
  height: number
}

export default function Logo({width, height}:LogoProps) {
  
  return (
    <div>
        <img src={MainImg} alt="Pokeman landing page image" width={width} height={height}/>
    </div>
  )
}
