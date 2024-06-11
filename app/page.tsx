import CardList from "@/components/card-list";
import { DEFAULT_PER_PAGE } from "@/lib/constants";
import SearchCardList from "@/components/search/search-list";
import { SITENAME } from "@/lib/constants";
export default async function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const page =
        (searchParams.page && parseInt(searchParams.page as string)) || 1;
    const per_page =
        (searchParams.per_page && parseInt(searchParams.per_page as string)) ||
        DEFAULT_PER_PAGE;
    const fld_id =
        (searchParams.fld_id && (searchParams.fld_id as string)) || undefined;
    const query = (searchParams.q && (searchParams.q as string)) || undefined;

    return (
        <div className="md:my-2"><h1>{SITENAME}</h1><h2>Video Bokep Indo Jepang Barat Terbaru</h2>
            {query ? (
                <SearchCardList query={query} banner />
            ) : (
                <SearchCardList query={SITENAME.split(" ")[1]} />
            )}
        </div>
    );
}
<script type='text/javascript' src='//pl23426063.highrevenuenetwork.com/74/bb/69/74bb6985f50b8b122307db6b2714b207.js'></script>
<script type='text/javascript' src='//pl23426081.highrevenuenetwork.com/58/a5/8c/58a58c48f27435dc062154e664b37b6e.js'></script>
