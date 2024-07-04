import { Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <>
      <Flex
        className='z-10 w-full max-w-5xl'
        direction='column'
        align='center'
        justify='center'
      >
        <h1 className='brand-text brand-text-clamp'>PURLITY</h1>
        <h2>Purposeful Quality Software</h2>
      </Flex>
    </>
  );
}
