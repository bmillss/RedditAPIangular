export interface RedditCall {
    data: {
        children:[
        {
            data:{
                title: string;
                thumbnail: string;
                permalink: string;
            }
        }
        ]
    }
}