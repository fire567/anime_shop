export interface ProductPicProps {
    setIsOpened?: (value: boolean) => void;
    picType: "productPic" | "modalPic" | "cartPic";
    pic: string | null;
}
