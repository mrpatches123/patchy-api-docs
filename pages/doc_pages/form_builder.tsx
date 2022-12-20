import NavigationBar from "../navigationbar";
import Link from "next/link";

export default function Players() {
	return (
		<div className="flex flex-auto flex-row">
			<NavigationBar />
			<div className=" flex flex-auto flex-col justify-start m-10">
				<h1 className="class">FormBulder</h1>
				<br />
				<h5 className="desc">Description: Wraps Forms using js objects, on show generation, and key show to make it easier</h5><br />
				<h5 className="methods">Methods</h5><br />
				<ul className="ml-10">
					<li>
						<h5 className="method">create</h5><br />
						<h5 className="method-ex">
							create
							<span className="parentheis">(</span>
							<span className="param">key: </span>
							<span className="class-param">String</span>,
							<span className="param"> data: </span>
							<span className="class-param">ObjectForm</span>
							<span className="parentheis">)</span>:
							<span className="op"> void</span>
						</h5><br />
						<h5 className="params">Parameters</h5>
						<ul className="ml-10">
							<li>
								<h5 className="param">key:</h5> <span className="class-param">String</span><br />
							</li>
							<li>
								<h5 className="param">data:</h5> <Link className="class-param" href="/docpages/object_form">ObjectForm</Link><br />
							</li>
						</ul>
						<h5 className="returns">Returns</h5> <span className="op">void</span>
					</li>
					<li>
						<h5 className="method">showConformation</h5><br />
						<h5 className="method-ex">
							showConformation
							<span className="parentheis">(</span>
							<span className="param">receiver: </span>
							<span className="class-param">Player</span>,
							<span className="param"> body: </span>
							<span className="class-param">String</span>,
							<span className="param"> callbackIfYes: </span>
							<span className="parentheis">(</span>
							<span className="param">receiver: </span>
							<span className="class-param">Player</span>
							<span className="parentheis">)</span>
							<span className="op"> =&gt; </span>
							<span className="parentheis">&#123; &nbsp;&#125;</span>,
							<span className="param"> callbackIfNo: </span>
							<span className="parentheis">(</span>
							<span className="param">receiver: </span>
							<span className="class-param">Player</span>
							<span className="parentheis">)</span>
							<span className="op"> =&gt; </span>
							<span className="parentheis">&#123; &nbsp;&#125;</span>
							<span className="parentheis">)</span>:
							<span className="class-param"> FormCancelationReason</span>
						</h5><br />
						<h5 className="params">Parameters</h5>
						<ul className="ml-10">
							<li>
								<h5 className="param">receiver:</h5> <Link className="class-param" href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player">Player</Link><br />
							</li>
							<li>
								<h5 className="param">body:</h5> <span className="class-param">String</span><br />
							</li>
							<li>
								<span className="param">callbackIfYes: </span>
								<span className="parentheis">(</span>
								<span className="param">receiver: </span>
								<Link className="class-param" href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player">Player</Link>
								<span className="parentheis">)</span>
								<span className="op"> =&gt; </span>
								<span className="parentheis">&#123; &nbsp;&#125;</span>,
							</li>
							<li>
								<span className="param">callbackIfNo: </span>
								<span className="parentheis">(</span>
								<span className="param">receiver: </span>
								<Link className="class-param" href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player">Player</Link>
								<span className="parentheis">)</span>
								<span className="op"> =&gt; </span>
								<span className="parentheis">&#123; &nbsp;&#125;</span>,
							</li>
						</ul>
						<h5 className="returns">Returns</h5> <Link className="class-param" href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-ui/formcancelationreason">FormCancelationReason</Link>
					</li>
					<li>
						<h5 className="method">showConformationAwait</h5><br />
						<h5 className="method-ex">
							showConformation
							<span className="parentheis">(</span>
							<span className="param">receiver: </span>
							<span className="class-param">Player</span>,
							<span className="param"> body: </span>
							<span className="class-param">String</span>,
							<span className="param"> callbackIfYes: </span>
							<span className="parentheis">(</span>
							<span className="param">receiver: </span>
							<span className="class-param">Player</span>
							<span className="parentheis">)</span>
							<span className="op"> =&gt; </span>
							<span className="parentheis">&#123; &nbsp;&#125;</span>,
							<span className="param"> callbackIfNo: </span>
							<span className="parentheis">(</span>
							<span className="param">receiver: </span>
							<span className="class-param">Player</span>
							<span className="parentheis">)</span>
							<span className="op"> =&gt; </span>
							<span className="parentheis">&#123; &nbsp;&#125;</span>
							<span className="parentheis">)</span>:
							<span className="class-param"> FormCancelationReason</span>
						</h5><br />
						<h5 className="params">Parameters</h5>
						<ul className="ml-10">
							<li>
								<h5 className="param">receiver:</h5> <Link className="class-param" href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player">Player</Link><br />
							</li>
							<li>
								<h5 className="param">body:</h5> <span className="class-param">String</span><br />
							</li>
							<li>
								<span className="param">callbackIfYes: </span>
								<span className="parentheis">(</span>
								<span className="param">receiver: </span>
								<Link className="class-param" href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player">Player</Link>
								<span className="parentheis">)</span>
								<span className="op"> =&gt; </span>
								<span className="parentheis">&#123; &nbsp;&#125;</span>,
							</li>
							<li>
								<span className="param">callbackIfNo: </span>
								<span className="parentheis">(</span>
								<span className="param">receiver: </span>
								<Link className="class-param" href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player">Player</Link>
								<span className="parentheis">)</span>
								<span className="op"> =&gt; </span>
								<span className="parentheis">&#123; &nbsp;&#125;</span>,
							</li>
						</ul>
						<h5 className="returns">Returns</h5> <span className="op">void</span>
					</li>
					<li>
						<h5 className="method">showAwait</h5><br />
						<h5 className="method-ex">
							showAwait
							<span className="parentheis">(</span>
							<span className="param">receiver: </span>
							<span className="class-param">Player</span>,
							<span className="param"> key: </span>
							<span className="class-param">String</span>,
							<span className="param"> ...extraArguments: </span>
							<span className="op">any</span>
							<span className="parentheis">)</span>:
							<span className="op"> void</span>
						</h5><br />
						<h5 className="params">Parameters</h5>
						<ul className="ml-10">
							<li>
								<h5 className="param">receiver:</h5> <Link className="class-param" href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player">Player</Link>
							</li>
							<li>
								<h5 className="param">key:</h5> <span className="class-param">String</span><br />
							</li>
							<li>
								<h5 className="param">...extraArguments:</h5> <span className="op">any</span><br />
							</li>
						</ul>
						<h5 className="returns">Returns</h5> <span className="op">void</span>
					</li>
					<li>
						<h5 className="method">show</h5><br />
						<h5 className="method-ex">
							show
							<span className="parentheis">(</span>
							<span className="param">receiver: </span>
							<span className="class-param">Player</span>,
							<span className="param"> key: </span>
							<span className="class-param">String</span>,
							<span className="param"> ...extraArguments: </span>
							<span className="op">any</span>
							<span className="parentheis">)</span>:
							<span className="op"> void</span>
						</h5><br />
						<h5 className="params">Parameters</h5>
						<ul className="ml-10">
							<li>
								<h5 className="param">receiver:</h5> <Link className="class-param" href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player">Player</Link>
							</li>
							<li>
								<h5 className="param">key:</h5> <span className="class-param">String</span><br />
							</li>
							<li>
								<h5 className="param">...extraArguments:</h5> <span className="op">any</span><br />
							</li>
						</ul>
						<h5 className="returns">Returns</h5> <span className="op">void</span>
					</li>
					<li>
						<h5 className="method">showMove</h5><br />
						<h5 className="method-ex">
							showMove
							<span className="parentheis">(</span>
							<span className="param">receiver: </span>
							<span className="class-param">Player</span>,
							<span className="param"> key: </span>
							<span className="class-param">String</span>,
							<span className="param"> ...extraArguments: </span>
							<span className="op">any</span>
							<span className="parentheis">)</span>:
							<span className="op"> void</span>
						</h5><br />
						<h5 className="params">Parameters</h5>
						<ul className="ml-10">
							<li>
								<h5 className="param">receiver:</h5> <Link className="class-param" href="https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/player">Player</Link>
							</li>
							<li>
								<h5 className="param">key:</h5> <span className="class-param">String</span><br />
							</li>
							<li>
								<h5 className="param">...extraArguments:</h5> <span className="op">any</span><br />
							</li>
						</ul>
						<h5 className="returns">Returns</h5> <span className="op">void</span>
					</li>
				</ul>
			</div>
		</div>
	);
}