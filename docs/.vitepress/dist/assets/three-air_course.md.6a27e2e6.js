import{_ as n,c as s,o as a,a as t}from"./app.363355ad.js";const m='{"title":"\u5F00\u59CB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F00\u59CB","slug":"\u5F00\u59CB"},{"level":2,"title":"\u521B\u5EFAWebGL\u6E32\u67D3\u5BB9\u5668","slug":"\u521B\u5EFAwebgl\u6E32\u67D3\u5BB9\u5668"},{"level":2,"title":"\u5FEB\u901F\u542F\u52A8","slug":"\u5FEB\u901F\u542F\u52A8"},{"level":2,"title":"\u6A21\u578B\u5206\u7C7B","slug":"\u6A21\u578B\u5206\u7C7B"}],"relativePath":"three-air/course.md"}',p={},o=t(`<h2 id="\u5F00\u59CB" tabindex="-1">\u5F00\u59CB <a class="header-anchor" href="#\u5F00\u59CB" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;zqsdk.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><div class="language-javascript"><pre><code><span class="token keyword">const</span> zqsdk <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;zqsdk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="language-javascript"><pre><code><span class="token keyword">import</span> zqsdk <span class="token keyword">from</span> <span class="token string">&#39;zqsdk&#39;</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u521B\u5EFAwebgl\u6E32\u67D3\u5BB9\u5668" tabindex="-1">\u521B\u5EFAWebGL\u6E32\u67D3\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFAwebgl\u6E32\u67D3\u5BB9\u5668" aria-hidden="true">#</a></h2><p>\u6CE8\uFF1A\u542F\u52A8\u524D\u9700\u8981\u521B\u5EFAdom\u6807\u7B7E\u4F5C\u4E3A\u6E32\u67D3\u5BB9\u5668</p><div class="language-javascript"><pre><code>#renderer<span class="token operator">-</span>stage <span class="token punctuation">{</span>
  <span class="token literal-property property">position</span><span class="token operator">:</span> absolute<span class="token punctuation">;</span>
  <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
  <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span>
  z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;renderer-stage&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre></div><h2 id="\u5FEB\u901F\u542F\u52A8" tabindex="-1">\u5FEB\u901F\u542F\u52A8 <a class="header-anchor" href="#\u5FEB\u901F\u542F\u52A8" aria-hidden="true">#</a></h2><ul><li><p>\u542F\u52A8\u524D\u5148\u83B7\u53D6\u6A21\u578B\u6570\u636E\uFF0C\u83B7\u53D6\u65B9\u5F0F\u8BF7\u8054\u7CFB\u4F17\u8DA3\u5546\u52A1\u4EBA\u5458</p></li><li><p>\u8C03\u7528runStart\u63A5\u53E3</p></li></ul><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>bootData \u6A21\u578B\u6570\u636E\u683C\u5F0F\u8BF7\u53C2\u8003 <a href="./course.html#\u6A21\u578B\u5206\u7C7B">\u6A21\u578B\u5206\u7C7B</a></p></div><div class="language-javascript"><pre><code><span class="token comment">// \u542F\u52A8SDK</span>
zqsdk<span class="token punctuation">.</span>boot<span class="token punctuation">.</span><span class="token function">runStart</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span> bootData<span class="token punctuation">,</span>
    <span class="token function-variable function">onFirstPanoLoaded</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;\u9996\u5165\u70B9\u5929\u7A7A\u76D2\u52A0\u8F7D\u5B8C\u6210&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onModelLoaded</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;3D\u6A21\u578B\u52A0\u8F7D\u5B8C\u6210&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onLoaded</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;\u6838\u5FC3\u52A0\u8F7D\u5B8C\u6210&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zqsdk<span class="token punctuation">.</span>ext<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token string">&#39;navigator-reticule&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zqsdk<span class="token punctuation">.</span>ext<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token string">&#39;entrypoint-manager&#39;</span><span class="token punctuation">)</span>
        zqsdk<span class="token punctuation">.</span>ext<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token string">&#39;photos-wall-manager&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zqsdk<span class="token punctuation">.</span>ext<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token string">&#39;videos-wall-manager&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zqsdk<span class="token punctuation">.</span>ext<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token string">&#39;navigator-view-manager&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zqsdk<span class="token punctuation">.</span>ext<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token string">&#39;waypoint-manager&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u6B64\u65F6\u70B9\u4F4D\u7BA1\u7406\u5DE5\u5177\u5B89\u88C5\u5B8C\u6210\uFF0C\u5728\u6B64\u56DE\u8C03\u4E2D\u9700\u8981\u9002\u914D\u70B9\u4F4D\u76F8\u5173\u6570\u636E,\u5177\u4F53\u53C2\u6570\u8BF7\u79FB\u6B65\u70B9\u4F4D\u7BA1\u7406API\u8BF4\u660E</span>
            zqsdk<span class="token punctuation">.</span>waypointManager<span class="token punctuation">.</span><span class="token function">adapterWaypointsData</span><span class="token punctuation">(</span>pointData<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        zqsdk<span class="token punctuation">.</span>ext<span class="token punctuation">.</span><span class="token function">install</span><span class="token punctuation">(</span><span class="token string">&#39;tags-manager&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u6B64\u65F6\u6807\u7B7E\u7BA1\u7406\u5DE5\u5177\u5B89\u88C5\u5B8C\u6210\uFF0C\u5728\u6B64\u56DE\u8C03\u4E2D\u9700\u8981\u9002\u914D\u6807\u7B7E\u76F8\u5173\u6570\u636E,\u5177\u4F53\u53C2\u6570\u8BF7\u79FB\u6B65\u6807\u7B7E\u7BA1\u7406API\u8BF4\u660E</span>
            zqsdk<span class="token punctuation">.</span>tagsManager<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span>tagData<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//\u7528\u6765\u8BBE\u7F6E\u6807\u7B7E\u663E\u793A\u8303\u56F4\uFF0C\u5728\u6807\u7B7E\u52A0\u8F7D\u5B8C\u6210\u540E\u8C03\u7528\uFF0C\u5177\u4F53\u53C2\u6570\u8BF7\u79FB\u6B65\u6807\u7B7E\u7BA1\u7406API\u8BF4\u660E</span>
            zqsdk<span class="token punctuation">.</span>tagsManager<span class="token punctuation">.</span><span class="token function">setVisualRange</span><span class="token punctuation">(</span>visualRange<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;\u52A0\u8F7D\u8FDB\u5EA6&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6A21\u578B\u5206\u7C7B" tabindex="-1">\u6A21\u578B\u5206\u7C7B <a class="header-anchor" href="#\u6A21\u578B\u5206\u7C7B" aria-hidden="true">#</a></h2><p>\u6A21\u578B\u5206\u4E3A <strong>\u5B9E\u62CD\u6A21\u578B</strong>\u3001<strong>\u865A\u62DF\u6A21\u578B</strong>\u3001<strong>\u5168\u666F\u56FE\u7247</strong> \u4E09\u79CD\u7C7B\u578B\uFF0C\u52A0\u8F7D\u4E0D\u540C\u7C7B\u578B\u7684\u6A21\u578B\u9700\u8981\u5728\u542F\u52A8\u65F6\u4F20\u5165\u4E0D\u540C\u7684\u6570\u636E\u53C2\u6570</p><ul><li>\u5B9E\u62CD\u6A21\u578B\u6570\u636E</li></ul><div class="language-javascript"><pre><code><span class="token keyword">var</span> bootData <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span>id<span class="token operator">:</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u7D20\u6750ID</span>
    <span class="token operator">&lt;</span>type<span class="token operator">:</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&#39;model&#39;</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u7D20\u6750\u7C7B\u522B</span>
    <span class="token operator">&lt;</span>version<span class="token operator">:</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u7248\u672C</span>
    <span class="token operator">&lt;</span>entry_info<span class="token operator">:</span>object<span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// \u9996\u5165\u4FE1\u606F\u5B57\u6BB5</span>
        <span class="token operator">&lt;</span>mode<span class="token operator">:</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u5165\u53E3\u6A21\u5F0F\uFF0C \u9ED8\u8BA4\u503C\uFF1Apanorama</span>
        <span class="token punctuation">[</span>point<span class="token operator">:</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u9996\u5165\u70B9\u4F4DID, \u9ED8\u8BA4\u503C\uFF1Anull</span>
        <span class="token punctuation">[</span>rotation<span class="token operator">:</span>quaternion<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u9996\u5165\u70B9\u65CB\u8F6C\u56DB\u5143\u6570, \u9ED8\u8BA4\u503C\uFF1Anull</span>
        <span class="token punctuation">[</span>lon_lat<span class="token operator">:</span>object<span class="token punctuation">]</span> <span class="token comment">// \u9996\u5165\u6A21\u5F0F\u76F8\u673A\u63A7\u5236\u7ECF\u7EAC\u5EA6\uFF0C\u9ED8\u8BA4\u503C\uFF1Anull</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>lod_loading<span class="token operator">:</span>object<span class="token punctuation">]</span> <span class="token comment">// \u5206\u7EA7\u52A0\u8F7D\u914D\u7F6E</span>
        <span class="token operator">&lt;</span>enalbe<span class="token operator">:</span>boolean<span class="token operator">&gt;</span><span class="token punctuation">,</span>
        <span class="token operator">&lt;</span>mode<span class="token operator">:</span>Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u865A\u62DF\u6A21\u578B\u6570\u636E</li></ul><div class="language-javascript"><pre><code><span class="token keyword">var</span> bootData <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span>id<span class="token operator">:</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u7D20\u6750ID</span>
    <span class="token operator">&lt;</span>type<span class="token operator">:</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&#39;virtual&#39;</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u7D20\u6750\u7C7B\u522B</span>
    <span class="token operator">&lt;</span>version<span class="token operator">:</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u7248\u672C</span>
    <span class="token operator">&lt;</span>entry_info<span class="token operator">:</span>object<span class="token operator">&gt;</span>\uFF0C<span class="token punctuation">{</span> <span class="token comment">// \u9996\u5165\u4FE1\u606F\u5B57\u6BB5</span>
        <span class="token operator">&lt;</span>mode<span class="token operator">:</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u5165\u53E3\u6A21\u5F0F\uFF0C \u9ED8\u8BA4\u503C\uFF1Apanorama</span>
        <span class="token punctuation">[</span>point<span class="token operator">:</span>string<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u9996\u5165\u70B9\u4F4DID, \u9ED8\u8BA4\u503C\uFF1Anull</span>
        <span class="token punctuation">[</span>rotation<span class="token operator">:</span>quaternion<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u9996\u5165\u70B9\u65CB\u8F6C\u56DB\u5143\u6570, \u9ED8\u8BA4\u503C\uFF1Anull</span>
        <span class="token punctuation">[</span>lon_lat<span class="token operator">:</span>object<span class="token punctuation">]</span> <span class="token comment">// \u9996\u5165\u6A21\u5F0F\u76F8\u673A\u63A7\u5236\u7ECF\u7EAC\u5EA6\uFF0C\u9ED8\u8BA4\u503C\uFF1Anull</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>lod_loading<span class="token operator">:</span>object<span class="token punctuation">]</span> <span class="token comment">// \u5206\u7EA7\u52A0\u8F7D\u914D\u7F6E</span>
        <span class="token operator">&lt;</span>enalbe<span class="token operator">:</span>boolean<span class="token operator">&gt;</span><span class="token punctuation">,</span>
        <span class="token operator">&lt;</span>mode<span class="token operator">:</span>Array<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5168\u666F\u56FE\u7247\u6570\u636E</li></ul><div class="language-javascript"><pre><code><span class="token keyword">var</span> bootData <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">&lt;</span>id<span class="token operator">:</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u7D20\u6750ID</span>
    <span class="token operator">&lt;</span>type<span class="token operator">:</span><span class="token function">string</span><span class="token punctuation">(</span><span class="token string">&#39;purepano&#39;</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u7D20\u6750\u7C7B\u522B,</span>
    <span class="token operator">&lt;</span>pano_pic<span class="token operator">:</span>object<span class="token operator">&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// \u5168\u666F\u56FE\u7247\u5B57\u6BB5</span>
        <span class="token operator">&lt;</span>src<span class="token operator">:</span>string<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token comment">// \u56FE\u7247\u5730\u5740</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token operator">&lt;</span>entry_info<span class="token operator">:</span>object<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
        <span class="token operator">&lt;</span>rotation<span class="token operator">:</span>quaternion<span class="token operator">&gt;</span> <span class="token comment">// \u65CB\u8F6C\u56DB\u5143\u6570\uFF0C\u9ED8\u8BA4\u503C: { x: 0, y: 0, z: 0, w: 1 }</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,19),e=[o];function c(l,u,r,k,i,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{m as __pageData,f as default};
