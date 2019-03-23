goog.provide('mranderson048.reagent.v0v8v0.reagent.ratom');
goog.require('cljs.core');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v8v0.reagent.debug');
goog.require('mranderson048.reagent.v0v8v0.reagent.impl.batching');
goog.require('clojure.set');
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom.debug !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.debug = false;
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom.generation !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.generation = (0);
}
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom._running !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
mranderson048.reagent.v0v8v0.reagent.ratom.reactive_QMARK_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$reactive_QMARK_(){
return (!((mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
mranderson048.reagent.v0v8v0.reagent.ratom.running = (function mranderson048$reagent$v0v8v0$reagent$ratom$running(){
return cljs.core.deref(mranderson048.reagent.v0v8v0.reagent.ratom._running);
});
mranderson048.reagent.v0v8v0.reagent.ratom.arr_len = (function mranderson048$reagent$v0v8v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
mranderson048.reagent.v0v8v0.reagent.ratom.arr_eq = (function mranderson048$reagent$v0v8v0$reagent$ratom$arr_eq(x,y){
var len = mranderson048.reagent.v0v8v0.reagent.ratom.arr_len(x);
var and__4120__auto__ = (len === mranderson048.reagent.v0v8v0.reagent.ratom.arr_len(y));
if(and__4120__auto__){
var i = (0);
while(true){
var or__4131__auto__ = (i === len);
if(or__4131__auto__){
return or__4131__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__27689 = (i + (1));
i = G__27689;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__4120__auto__;
}
});
mranderson048.reagent.v0v8v0.reagent.ratom.in_context = (function mranderson048$reagent$v0v8v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__27545 = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__27546 = obj;
mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__27546;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__27545;
}});
mranderson048.reagent.v0v8v0.reagent.ratom.deref_capture = (function mranderson048$reagent$v0v8v0$reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = mranderson048.reagent.v0v8v0.reagent.ratom.generation = (mranderson048.reagent.v0v8v0.reagent.ratom.generation + (1));


var res = mranderson048.reagent.v0v8v0.reagent.ratom.in_context(r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(mranderson048.reagent.v0v8v0.reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
mranderson048.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5461__auto__ = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5461__auto__ == null)){
return null;
} else {
var r = temp__5461__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
mranderson048.reagent.v0v8v0.reagent.ratom.check_watches = (function mranderson048$reagent$v0v8v0$reagent$ratom$check_watches(old,new$){
if(mranderson048.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson048.reagent.v0v8v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
mranderson048.reagent.v0v8v0.reagent.ratom.add_w = (function mranderson048$reagent$v0v8v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = mranderson048.reagent.v0v8v0.reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f));

return this$.watchesArr = null;
});
mranderson048.reagent.v0v8v0.reagent.ratom.remove_w = (function mranderson048$reagent$v0v8v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = mranderson048.reagent.v0v8v0.reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key));

return this$.watchesArr = null;
});
mranderson048.reagent.v0v8v0.reagent.ratom.notify_w = (function mranderson048$reagent$v0v8v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv(((function (w){
return (function (p1__27552_SHARP_,p2__27553_SHARP_,p3__27554_SHARP_){
var G__27556 = p1__27552_SHARP_;
G__27556.push(p2__27553_SHARP_);

G__27556.push(p3__27554_SHARP_);

return G__27556;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_27690 = (a[i]);
var f_27691 = (a[(i + (1))]);
(f_27691.cljs$core$IFn$_invoke$arity$4 ? f_27691.cljs$core$IFn$_invoke$arity$4(k_27690,this$,old,new$) : f_27691.call(null,k_27690,this$,old,new$));

var G__27692 = ((2) + i);
i = G__27692;
continue;
} else {
return null;
}
break;
}
});
mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom = (function mranderson048$reagent$v0v8v0$reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write(writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR__orig_val__27562 = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__27563 = null;
mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__27563;

try{return cljs.core._deref(a);
}finally {mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__27562;
}})(),writer,opts);

return cljs.core._write(writer,">");
});
if((typeof mranderson048 !== 'undefined') && (typeof mranderson048.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0 !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom !== 'undefined') && (typeof mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue !== 'undefined')){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue = null;
}
mranderson048.reagent.v0v8v0.reagent.ratom.rea_enqueue = (function mranderson048$reagent$v0v8v0$reagent$ratom$rea_enqueue(r){
if((mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue == null)){
mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue = [];

mranderson048.reagent.v0v8v0.reagent.impl.batching.schedule();
} else {
}

return mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue.push(r);
});
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$flush_BANG_(){
while(true){
var q = mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.rea_queue = null;

var n__4607__auto___27696 = q.length;
var i_27697 = (0);
while(true){
if((i_27697 < n__4607__auto___27696)){
(q[i_27697])._queued_run();

var G__27699 = (i_27697 + (1));
i_27697 = G__27699;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
mranderson048.reagent.v0v8v0.reagent.impl.batching.ratom_flush = mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_;

/**
 * @interface
 */
mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
*/
mranderson048.reagent.v0v8v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Atom:");
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new mranderson048.reagent.v0v8v0.reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson048.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$type = true;

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.ratom/RAtom";

mranderson048.reagent.v0v8v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"mranderson048.reagent.v0v8v0.reagent.ratom/RAtom");
});

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.ratom/RAtom.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.__GT_RAtom = (function mranderson048$reagent$v0v8v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.atom = (function mranderson048$reagent$v0v8v0$reagent$ratom$atom(var_args){
var G__27602 = arguments.length;
switch (G__27602) {
case 1:
return mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___27712 = arguments.length;
var i__4731__auto___27713 = (0);
while(true){
if((i__4731__auto___27713 < len__4730__auto___27712)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27713]));

var G__27714 = (i__4731__auto___27713 + (1));
i__4731__auto___27713 = G__27714;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return mranderson048.reagent.v0v8v0.reagent.ratom.__GT_RAtom(x,null,null,null);
});

mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__27607){
var map__27608 = p__27607;
var map__27608__$1 = (((((!((map__27608 == null))))?(((((map__27608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27608):map__27608);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27608__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27608__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return mranderson048.reagent.v0v8v0.reagent.ratom.__GT_RAtom(x,meta,validator,null);
});

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq27598){
var G__27599 = cljs.core.first(seq27598);
var seq27598__$1 = cljs.core.next(seq27598);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27599,seq27598__$1);
});

mranderson048.reagent.v0v8v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

mranderson048.reagent.v0v8v0.reagent.ratom.cache_key = "reagReactionCache";
mranderson048.reagent.v0v8v0.reagent.ratom.cached_reaction = (function mranderson048$reagent$v0v8v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if((!((r == null)))){
return cljs.core._deref(r);
} else {
if((mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__27613 = f;
var G__27614 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__27615 = ((function (G__27613,G__27614,m,m__$1,r){
return (function (x){
if(mranderson048.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __27717 = (o["reagReactionCache"]);
var __27718__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__27717,k);
(o["reagReactionCache"] = __27718__$1);

if((!((obj == null)))){
obj.reaction = null;
} else {
}

if((!((destroy == null)))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});})(G__27613,G__27614,m,m__$1,r))
;
return (mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__27613,G__27614,G__27615) : mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.call(null,G__27613,G__27614,G__27615));
})();
var v = cljs.core._deref(r__$1);
(o["reagReactionCache"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(mranderson048.reagent.v0v8v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson048.reagent.v0v8v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
*/
mranderson048.reagent.v0v8v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
mranderson048.reagent.v0v8v0.reagent.ratom.Track.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
return mranderson048.reagent.v0v8v0.reagent.ratom.cached_reaction(((function (temp__5459__auto__,this$__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
});})(temp__5459__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref(r);
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson048.reagent.v0v8v0.reagent.ratom.Track)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
});

mranderson048.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

mranderson048.reagent.v0v8v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Track:");
});

mranderson048.reagent.v0v8v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson048.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$type = true;

mranderson048.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.ratom/Track";

mranderson048.reagent.v0v8v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"mranderson048.reagent.v0v8v0.reagent.ratom/Track");
});

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.ratom/Track.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.__GT_Track = (function mranderson048$reagent$v0v8v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.Track(f,args,reaction));
});

mranderson048.reagent.v0v8v0.reagent.ratom.make_track = (function mranderson048$reagent$v0v8v0$reagent$ratom$make_track(f,args){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.Track(f,args,null));
});
mranderson048.reagent.v0v8v0.reagent.ratom.make_track_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$make_track_BANG_(f,args){
var t = mranderson048.reagent.v0v8v0.reagent.ratom.make_track(f,args);
var r = (function (){var G__27619 = ((function (t){
return (function (){
return t.cljs$core$IDeref$_deref$arity$1(null);
});})(t))
;
var G__27620 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__27621 = true;
return (mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__27619,G__27620,G__27621) : mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.call(null,G__27619,G__27620,G__27621));
})();
cljs.core.deref(r);

return r;
});
mranderson048.reagent.v0v8v0.reagent.ratom.track = (function mranderson048$reagent$v0v8v0$reagent$ratom$track(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27722 = arguments.length;
var i__4731__auto___27723 = (0);
while(true){
if((i__4731__auto___27723 < len__4730__auto___27722)){
args__4736__auto__.push((arguments[i__4731__auto___27723]));

var G__27724 = (i__4731__auto___27723 + (1));
i__4731__auto___27723 = G__27724;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.reagent.v0v8v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson048.reagent.v0v8v0.reagent.ratom.make_track(f,args);
});

mranderson048.reagent.v0v8v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq27625){
var G__27626 = cljs.core.first(seq27625);
var seq27625__$1 = cljs.core.next(seq27625);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27626,seq27625__$1);
});

mranderson048.reagent.v0v8v0.reagent.ratom.track_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$track_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27726 = arguments.length;
var i__4731__auto___27728 = (0);
while(true){
if((i__4731__auto___27728 < len__4730__auto___27726)){
args__4736__auto__.push((arguments[i__4731__auto___27728]));

var G__27729 = (i__4731__auto___27728 + (1));
i__4731__auto___27728 = G__27729;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson048.reagent.v0v8v0.reagent.ratom.make_track_BANG_(f,args);
});

mranderson048.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq27627){
var G__27628 = cljs.core.first(seq27627);
var seq27627__$1 = cljs.core.next(seq27627);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27628,seq27627__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
*/
mranderson048.reagent.v0v8v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__27632 = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__27633 = null;
mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__27633;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__27632;
}});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if((!((self__.watches == null)))){
return mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson048.reagent.v0v8v0.reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)));
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__27636 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__27636) : f.call(null,G__27636));
})());
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__27637 = a__$1._peek();
var G__27638 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__27637,G__27638) : f.call(null,G__27637,G__27638));
})());
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__27639 = a__$1._peek();
var G__27640 = x;
var G__27641 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__27639,G__27640,G__27641) : f.call(null,G__27639,G__27640,G__27641));
})());
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
});})(temp__5459__auto__,oldstate,this$__$1))
:((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
});})(temp__5459__auto__,oldstate,this$__$1))
);
return mranderson048.reagent.v0v8v0.reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$type = true;

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.ratom/RCursor";

mranderson048.reagent.v0v8v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"mranderson048.reagent.v0v8v0.reagent.ratom/RCursor");
});

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.ratom/RCursor.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.__GT_RCursor = (function mranderson048$reagent$v0v8v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

mranderson048.reagent.v0v8v0.reagent.ratom.cursor = (function mranderson048$reagent$v0v8v0$reagent$ratom$cursor(src,path){
if((function (){var or__4131__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom,src));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && ((!(cljs.core.vector_QMARK_(src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return mranderson048.reagent.v0v8v0.reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
mranderson048.reagent.v0v8v0.reagent.ratom.with_let_destroy = (function mranderson048$reagent$v0v8v0$reagent$ratom$with_let_destroy(v){
var temp__5461__auto__ = v.destroy;
if((temp__5461__auto__ == null)){
return null;
} else {
var f = temp__5461__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
mranderson048.reagent.v0v8v0.reagent.ratom.with_let_values = (function mranderson048$reagent$v0v8v0$reagent$ratom$with_let_values(key){
var temp__5459__auto__ = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5459__auto__ == null)){
return [];
} else {
var c = temp__5459__auto__;
return mranderson048.reagent.v0v8v0.reagent.ratom.cached_reaction(cljs.core.array,c,key,null,mranderson048.reagent.v0v8v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
mranderson048.reagent.v0v8v0.reagent.ratom.IDisposable = function(){};

mranderson048.reagent.v0v8v0.reagent.ratom.dispose_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.dispose_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_ = (function mranderson048$reagent$v0v8v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4434__auto__.call(null,this$,f));
} else {
var m__4431__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4431__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
mranderson048.reagent.v0v8v0.reagent.ratom.IRunnable = function(){};

mranderson048.reagent.v0v8v0.reagent.ratom.run = (function mranderson048$reagent$v0v8v0$reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.mranderson048$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.mranderson048$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.run[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (mranderson048.reagent.v0v8v0.reagent.ratom.run["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.handle_reaction_change = (function mranderson048$reagent$v0v8v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IDisposable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IReactiveAtom}
 * @implements {mranderson048.reagent.v0v8v0.reagent.ratom.IRunnable}
*/
mranderson048.reagent.v0v8v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__27648 = mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__27649 = null;
mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__27649;

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__27648;
}});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return mranderson048.reagent.v0v8v0.reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
self__.watching = derefed;

var seq__27656_27750 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__27657_27751 = null;
var count__27658_27752 = (0);
var i__27659_27753 = (0);
while(true){
if((i__27659_27753 < count__27658_27752)){
var w_27755 = chunk__27657_27751.cljs$core$IIndexed$_nth$arity$2(null,i__27659_27753);
cljs.core._add_watch(w_27755,this$,mranderson048.reagent.v0v8v0.reagent.ratom.handle_reaction_change);


var G__27756 = seq__27656_27750;
var G__27757 = chunk__27657_27751;
var G__27758 = count__27658_27752;
var G__27759 = (i__27659_27753 + (1));
seq__27656_27750 = G__27756;
chunk__27657_27751 = G__27757;
count__27658_27752 = G__27758;
i__27659_27753 = G__27759;
continue;
} else {
var temp__5457__auto___27760 = cljs.core.seq(seq__27656_27750);
if(temp__5457__auto___27760){
var seq__27656_27761__$1 = temp__5457__auto___27760;
if(cljs.core.chunked_seq_QMARK_(seq__27656_27761__$1)){
var c__4550__auto___27762 = cljs.core.chunk_first(seq__27656_27761__$1);
var G__27763 = cljs.core.chunk_rest(seq__27656_27761__$1);
var G__27764 = c__4550__auto___27762;
var G__27765 = cljs.core.count(c__4550__auto___27762);
var G__27766 = (0);
seq__27656_27750 = G__27763;
chunk__27657_27751 = G__27764;
count__27658_27752 = G__27765;
i__27659_27753 = G__27766;
continue;
} else {
var w_27767 = cljs.core.first(seq__27656_27761__$1);
cljs.core._add_watch(w_27767,this$,mranderson048.reagent.v0v8v0.reagent.ratom.handle_reaction_change);


var G__27768 = cljs.core.next(seq__27656_27761__$1);
var G__27769 = null;
var G__27770 = (0);
var G__27771 = (0);
seq__27656_27750 = G__27768;
chunk__27657_27751 = G__27769;
count__27658_27752 = G__27770;
i__27659_27753 = G__27771;
continue;
}
} else {
}
}
break;
}

var seq__27660 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__27661 = null;
var count__27662 = (0);
var i__27663 = (0);
while(true){
if((i__27663 < count__27662)){
var w = chunk__27661.cljs$core$IIndexed$_nth$arity$2(null,i__27663);
cljs.core._remove_watch(w,this$);


var G__27772 = seq__27660;
var G__27773 = chunk__27661;
var G__27774 = count__27662;
var G__27775 = (i__27663 + (1));
seq__27660 = G__27772;
chunk__27661 = G__27773;
count__27662 = G__27774;
i__27663 = G__27775;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27660);
if(temp__5457__auto__){
var seq__27660__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27660__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27660__$1);
var G__27776 = cljs.core.chunk_rest(seq__27660__$1);
var G__27777 = c__4550__auto__;
var G__27778 = cljs.core.count(c__4550__auto__);
var G__27779 = (0);
seq__27660 = G__27776;
chunk__27661 = G__27777;
count__27662 = G__27778;
i__27663 = G__27779;
continue;
} else {
var w = cljs.core.first(seq__27660__$1);
cljs.core._remove_watch(w,this$);


var G__27780 = cljs.core.next(seq__27660__$1);
var G__27781 = null;
var G__27782 = (0);
var G__27783 = (0);
seq__27660 = G__27780;
chunk__27661 = G__27781;
count__27662 = G__27782;
i__27663 = G__27783;
continue;
}
} else {
return null;
}
}
break;
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return mranderson048.reagent.v0v8v0.reagent.ratom.deref_capture(f__$1,this$);
}catch (e27667){var e = e27667;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):mranderson048.reagent.v0v8v0.reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__27668){
var self__ = this;
var map__27669 = p__27668;
var map__27669__$1 = (((((!((map__27669 == null))))?(((((map__27669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27669):map__27669);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27669__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27669__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27669__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27669__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
this$.auto_run = auto_run__$1;
} else {
}

if((!((on_set == null)))){
this$.on_set = on_set;
} else {
}

if((!((on_dispose == null)))){
this$.on_dispose = on_dispose;
} else {
}

if((!((no_cache == null)))){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(a__$1)),":"].join(''));
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__27671_27789 = cljs.core.seq(cljs.core.set(wg));
var chunk__27672_27790 = null;
var count__27673_27791 = (0);
var i__27674_27792 = (0);
while(true){
if((i__27674_27792 < count__27673_27791)){
var w_27793 = chunk__27672_27790.cljs$core$IIndexed$_nth$arity$2(null,i__27674_27792);
cljs.core._remove_watch(w_27793,this$__$1);


var G__27794 = seq__27671_27789;
var G__27795 = chunk__27672_27790;
var G__27796 = count__27673_27791;
var G__27797 = (i__27674_27792 + (1));
seq__27671_27789 = G__27794;
chunk__27672_27790 = G__27795;
count__27673_27791 = G__27796;
i__27674_27792 = G__27797;
continue;
} else {
var temp__5457__auto___27798 = cljs.core.seq(seq__27671_27789);
if(temp__5457__auto___27798){
var seq__27671_27799__$1 = temp__5457__auto___27798;
if(cljs.core.chunked_seq_QMARK_(seq__27671_27799__$1)){
var c__4550__auto___27800 = cljs.core.chunk_first(seq__27671_27799__$1);
var G__27801 = cljs.core.chunk_rest(seq__27671_27799__$1);
var G__27802 = c__4550__auto___27800;
var G__27803 = cljs.core.count(c__4550__auto___27800);
var G__27804 = (0);
seq__27671_27789 = G__27801;
chunk__27672_27790 = G__27802;
count__27673_27791 = G__27803;
i__27674_27792 = G__27804;
continue;
} else {
var w_27805 = cljs.core.first(seq__27671_27799__$1);
cljs.core._remove_watch(w_27805,this$__$1);


var G__27806 = cljs.core.next(seq__27671_27799__$1);
var G__27807 = null;
var G__27808 = (0);
var G__27809 = (0);
seq__27671_27789 = G__27806;
chunk__27672_27790 = G__27807;
count__27673_27791 = G__27808;
i__27674_27792 = G__27809;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5461__auto__ = this$__$1.on_dispose_arr;
if((temp__5461__auto__ == null)){
return null;
} else {
var a = temp__5461__auto__;
var n__4607__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4607__auto__)){
var fexpr__27675_27811 = (a[i]);
(fexpr__27675_27811.cljs$core$IFn$_invoke$arity$1 ? fexpr__27675_27811.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__27675_27811.call(null,this$__$1));

var G__27812 = (i + (1));
i = G__27812;
continue;
} else {
return null;
}
break;
}
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = this$__$1.on_dispose_arr;
if((temp__5459__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__5459__auto__;
return a.push(f__$1);
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__27676 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__27676) : f__$1.call(null,G__27676));
})());
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__27677 = a__$1._peek_at();
var G__27678 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__27677,G__27678) : f__$1.call(null,G__27677,G__27678));
})());
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__27679 = a__$1._peek_at();
var G__27680 = x;
var G__27681 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__27679,G__27680,G__27681) : f__$1.call(null,G__27679,G__27680,G__27681));
})());
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.mranderson048$reagent$v0v8v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();

return this$__$1._run(false);
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f__$1);
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
mranderson048.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);

if((((!(was_empty))) && (cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))){
return this$__$1.mranderson048$reagent$v0v8v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(null);
} else {
return null;
}
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5461__auto___27817 = self__.caught;
if((temp__5461__auto___27817 == null)){
} else {
var e_27818 = temp__5461__auto___27817;
throw e_27818;
}

var non_reactive_27819 = (mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_27819){
mranderson048.reagent.v0v8v0.reagent.ratom.flush_BANG_();
} else {
}

if(((non_reactive_27819) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_27820 = self__.state;
self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_27820,self__.state)))){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,oldstate_27820,self__.state);
}
} else {
}
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$type = true;

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.ratom/Reaction";

mranderson048.reagent.v0v8v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"mranderson048.reagent.v0v8v0.reagent.ratom/Reaction");
});

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.ratom/Reaction.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.__GT_Reaction = (function mranderson048$reagent$v0v8v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction = (function mranderson048$reagent$v0v8v0$reagent$ratom$make_reaction(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27823 = arguments.length;
var i__4731__auto___27824 = (0);
while(true){
if((i__4731__auto___27824 < len__4730__auto___27823)){
args__4736__auto__.push((arguments[i__4731__auto___27824]));

var G__27825 = (i__4731__auto___27824 + (1));
i__4731__auto___27824 = G__27825;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__27684){
var map__27685 = p__27684;
var map__27685__$1 = (((((!((map__27685 == null))))?(((((map__27685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27685):map__27685);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27685__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27685__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27685__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = mranderson048.reagent.v0v8v0.reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
});

mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq27682){
var G__27683 = cljs.core.first(seq27682);
var seq27682__$1 = cljs.core.next(seq27682);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27683,seq27682__$1);
});

mranderson048.reagent.v0v8v0.reagent.ratom.temp_reaction = mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction(null);
mranderson048.reagent.v0v8v0.reagent.ratom.run_in_reaction = (function mranderson048$reagent$v0v8v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = mranderson048.reagent.v0v8v0.reagent.ratom.temp_reaction;
var res = mranderson048.reagent.v0v8v0.reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
mranderson048.reagent.v0v8v0.reagent.ratom.temp_reaction = mranderson048.reagent.v0v8v0.reagent.ratom.make_reaction(null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
});})(r,res))
;

(obj[key] = r);
}

return res;
});
mranderson048.reagent.v0v8v0.reagent.ratom.check_derefs = (function mranderson048$reagent$v0v8v0$reagent$ratom$check_derefs(f){
var ctx = ({});
var res = mranderson048.reagent.v0v8v0.reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((mranderson048.reagent.v0v8v0.reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(mranderson048.reagent.v0v8v0.reagent.debug.has_console){
((mranderson048.reagent.v0v8v0.reagent.debug.tracking)?mranderson048.reagent.v0v8v0.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0))].join(''));
} else {
}
} else {
}


return self__.state;
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if((!((self__.watches == null)))){
mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper)) && ((!(self__.changed))) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)));
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.add_w(this$__$1,key,f);
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.remove_w(this$__$1,key);
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson048.reagent.v0v8v0.reagent.ratom.pr_atom(a__$1,w,opts,"Wrap:");
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$type = true;

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "mranderson048.reagent.v0v8v0.reagent.ratom/Wrapper";

mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"mranderson048.reagent.v0v8v0.reagent.ratom/Wrapper");
});

/**
 * Positional factory function for mranderson048.reagent.v0v8v0.reagent.ratom/Wrapper.
 */
mranderson048.reagent.v0v8v0.reagent.ratom.__GT_Wrapper = (function mranderson048$reagent$v0v8v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new mranderson048.reagent.v0v8v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

mranderson048.reagent.v0v8v0.reagent.ratom.make_wrapper = (function mranderson048$reagent$v0v8v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return mranderson048.reagent.v0v8v0.reagent.ratom.__GT_Wrapper(value,mranderson048.reagent.v0v8v0.reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});

//# sourceMappingURL=mranderson048.reagent.v0v8v0.reagent.ratom.js.map