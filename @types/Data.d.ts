type Data = {
	id: string;
	bio: string;
	country: string;
	post: string;
	company: string;
	github_url: string;
	portfolio_url: string;
	languages: string[];
	programmingLanguage: string[];
	filters: Filters;
};

type Filters = {
  country: string;
  post: string[];
  programmingLanguage: string[];
}