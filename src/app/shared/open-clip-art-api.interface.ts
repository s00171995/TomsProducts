// interface needed for getting data from open clip art api
interface IOpenClipArt {
    payload: IPayLoad []
}
interface IPayLoad {
    title: string
    svg: ISvg;
}
interface ISvg {
    url: string
}