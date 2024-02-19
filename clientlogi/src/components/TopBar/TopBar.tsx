import Image from 'next/image'

const TopBar: React.FC = () => {
    return (<div>
        <Image priority src={`/logifuture-full-logo.svg`} alt={"logo"} width="200" height="64" /></div>)
}

export default TopBar;