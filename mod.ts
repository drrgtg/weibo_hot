import { zhihuQuestions } from "./zhihu-questions.ts";
import { zhihuSearch } from "./zhihu-search.ts";
import { weiboSearch } from "./weibo-search.ts";
import { toutiaoSearch } from "./toutiao-search.ts";
import { zhihuVideo } from "./zhihu-video.ts";

export async function init() {
  await zhihuQuestions();
  await zhihuSearch();
  await weiboSearch();
  await toutiaoSearch();
  await zhihuVideo();
}

init();
