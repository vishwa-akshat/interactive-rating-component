export default interface StoreType {
    rating: number | null;
    isRatingSubmitted: boolean;
    setRating: (value: number) => void;
    setIsRatingSubmitted: (value: boolean) => void;
}
