import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCardContent } from "@/components/ui/hover-card";
import { time_ago } from "@/lib/utils";
import { CalendarDays, MapPin } from "lucide-react";
import { Suspense } from "react";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

interface Data {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: any;
  blog: string;
  location: string;
  email: any;
  hireable: boolean;
  bio: string;
  twitter_username: any;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

async function Card() {
  const data = await fetch("https://api.github.com/users/Kaolhou");
  const result = (await data.json()) as Data;
  return (
    <HoverCardContent className="w-80">
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/kaolhou.png" />
          <AvatarFallback>Kaolhou</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">
            {result.html_url ? (
              <Link href={result.html_url} target="_blank">
                @Kaolhou
              </Link>
            ) : (
              <span>@Kaolhou</span>
            )}
          </h4>
          <p className="text-sm">
            {result.bio ?? (
              <span className="flex flex-col gap-1">
                <Skeleton className="h-3 w-60 rounded-full" />
                <Skeleton className="h-3 w-60 rounded-full" />
                <Skeleton className="h-3 w-48 rounded-full" />
              </span>
            )}
          </p>
          <div className="flex items-center pt-2">
            <MapPin className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              {result.location ?? (
                <Skeleton className="h-3 w-28 rounded-full" />
              )}
            </span>
          </div>
          <div className="flex items-center pt-2">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              {result.created_at ? (
                `Joined ${time_ago(new Date(result.created_at))}`
              ) : (
                <Skeleton className="h-3 w-28 rounded-full" />
              )}
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  );
}

function GitHubCardLoading() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default function GitHubCard() {
  return (
    <Suspense fallback={<GitHubCardLoading />}>
      <Card />
    </Suspense>
  );
}
