"use strict";
var rC = Object.defineProperty, oC = Object.defineProperties, aC = Object.getOwnPropertyDescriptors, vx = Object.getOwnPropertySymbols, lC = Object.prototype.hasOwnProperty, cC = Object.prototype.propertyIsEnumerable, _x = (St, Pe, V) => Pe in St ? rC(St, Pe, { enumerable: !0, configurable: !0, writable: !0, value: V }) : St[Pe] = V, Gm = (St, Pe) => { for (var V in Pe || (Pe = {}))
    lC.call(Pe, V) && _x(St, V, Pe[V]); if (vx)
    for (var V of vx(Pe))
        cC.call(Pe, V) && _x(St, V, Pe[V]); return St; }, $m = (St, Pe) => oC(St, aC(Pe));
(self.webpackChunkEzFarma = self.webpackChunkEzFarma || []).push([[179], { 2340: (St, Pe, V) => { V.d(Pe, { N: () => _ }); const _ = { production: !0, mapBoxToken: "pk.eyJ1IjoiZGVveGlkZXMiLCJhIjoiY2wyejNuZ2VsMGphYjNib3dtYWZrdHBrcSJ9.NhZEdsSkS0Y6gRs84VIJgQ", BaseUrl: "http://localhost:8080" }; }, 2865: (St, Pe, V) => { var _ = V(2313), j = V(5e3), ie = V(5020); const _e = [{ path: "", loadChildren: () => Promise.all([V.e(206), V.e(62)]).then(V.bind(V, 6062)).then(ke => ke.HomeModule) }, { path: "auth", loadChildren: () => Promise.all([V.e(206), V.e(696)]).then(V.bind(V, 8696)).then(ke => ke.AuthModule) }]; let Ae = (() => { class ke {
        } return ke.\u0275fac = function (qe) { return new (qe || ke); }, ke.\u0275mod = j.oAB({ type: ke }), ke.\u0275inj = j.cJS({ imports: [[ie.Bz.forRoot(_e)], ie.Bz] }), ke; })(), Te = (() => { class ke {
            constructor() { this.title = "EzFarma"; }
        } return ke.\u0275fac = function (qe) { return new (qe || ke); }, ke.\u0275cmp = j.Xpm({ type: ke, selectors: [["app-root"]], decls: 1, vars: 0, template: function (qe, Je) { 1 & qe && j._UZ(0, "router-outlet"); }, directives: [ie.lC], styles: [""] }), ke; })(); var Le = V(6360), Ve = V(2155), Ee = V(520), de = V(483); let ce = (() => { class ke {
        } return ke.\u0275fac = function (qe) { return new (qe || ke); }, ke.\u0275mod = j.oAB({ type: ke, bootstrap: [Te] }), ke.\u0275inj = j.cJS({ providers: [], imports: [[_.b2, ie.Bz, Ee.JF, Ae, Le.PW, Ve.o9, de.vQ]] }), ke; })(); V(2340).N.production && (0, j.G48)(), _.q6().bootstrapModule(ce).catch(ke => console.error(ke)); }, 1135: (St, Pe, V) => { V.d(Pe, { X: () => j }); var _ = V(7579); class j extends _.x {
            constructor(_e) { super(), this._value = _e; }
            get value() { return this.getValue(); }
            _subscribe(_e) { const Ae = super._subscribe(_e); return !Ae.closed && _e.next(this._value), Ae; }
            getValue() { const { hasError: _e, thrownError: Ae, _value: Te } = this; if (_e)
                throw Ae; return this._throwIfClosed(), Te; }
            next(_e) { super.next(this._value = _e); }
        } }, 8306: (St, Pe, V) => { V.d(Pe, { y: () => de }); var _ = V(930), j = V(727), ie = V(8822), _e = V(4671); var Le = V(2416), Ve = V(576), Ee = V(2806); let de = (() => { class Ne {
            constructor(Je) { Je && (this._subscribe = Je); }
            lift(Je) { const Ke = new Ne; return Ke.source = this, Ke.operator = Je, Ke; }
            subscribe(Je, Ke, Ct) { const rt = function ke(Ne) { return Ne && Ne instanceof _.Lv || function fe(Ne) { return Ne && (0, Ve.m)(Ne.next) && (0, Ve.m)(Ne.error) && (0, Ve.m)(Ne.complete); }(Ne) && (0, j.Nn)(Ne); }(Je) ? Je : new _.Hp(Je, Ke, Ct); return (0, Ee.x)(() => { const { operator: yt, source: tt } = this; rt.add(yt ? yt.call(rt, tt) : tt ? this._subscribe(rt) : this._trySubscribe(rt)); }), rt; }
            _trySubscribe(Je) { try {
                return this._subscribe(Je);
            }
            catch (Ke) {
                Je.error(Ke);
            } }
            forEach(Je, Ke) { return new (Ke = ce(Ke))((Ct, rt) => { let yt; yt = this.subscribe(tt => { try {
                Je(tt);
            }
            catch (he) {
                rt(he), null == yt || yt.unsubscribe();
            } }, rt, Ct); }); }
            _subscribe(Je) { var Ke; return null === (Ke = this.source) || void 0 === Ke ? void 0 : Ke.subscribe(Je); }
            [ie.L]() { return this; }
            pipe(...Je) { return function Te(Ne) { return 0 === Ne.length ? _e.y : 1 === Ne.length ? Ne[0] : function (Je) { return Ne.reduce((Ke, Ct) => Ct(Ke), Je); }; }(Je)(this); }
            toPromise(Je) { return new (Je = ce(Je))((Ke, Ct) => { let rt; this.subscribe(yt => rt = yt, yt => Ct(yt), () => Ke(rt)); }); }
        } return Ne.create = qe => new Ne(qe), Ne; })(); function ce(Ne) { var qe; return null !== (qe = null != Ne ? Ne : Le.v.Promise) && void 0 !== qe ? qe : Promise; } }, 7579: (St, Pe, V) => { V.d(Pe, { x: () => Le }); var _ = V(8306), j = V(727); const _e = (0, V(3888).d)(Ee => function () { Ee(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"; }); var Ae = V(8737), Te = V(2806); let Le = (() => { class Ee extends _.y {
            constructor() { super(), this.closed = !1, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null; }
            lift(ce) { const fe = new Ve(this, this); return fe.operator = ce, fe; }
            _throwIfClosed() { if (this.closed)
                throw new _e; }
            next(ce) { (0, Te.x)(() => { if (this._throwIfClosed(), !this.isStopped) {
                const fe = this.observers.slice();
                for (const ke of fe)
                    ke.next(ce);
            } }); }
            error(ce) { (0, Te.x)(() => { if (this._throwIfClosed(), !this.isStopped) {
                this.hasError = this.isStopped = !0, this.thrownError = ce;
                const { observers: fe } = this;
                for (; fe.length;)
                    fe.shift().error(ce);
            } }); }
            complete() { (0, Te.x)(() => { if (this._throwIfClosed(), !this.isStopped) {
                this.isStopped = !0;
                const { observers: ce } = this;
                for (; ce.length;)
                    ce.shift().complete();
            } }); }
            unsubscribe() { this.isStopped = this.closed = !0, this.observers = null; }
            get observed() { var ce; return (null === (ce = this.observers) || void 0 === ce ? void 0 : ce.length) > 0; }
            _trySubscribe(ce) { return this._throwIfClosed(), super._trySubscribe(ce); }
            _subscribe(ce) { return this._throwIfClosed(), this._checkFinalizedStatuses(ce), this._innerSubscribe(ce); }
            _innerSubscribe(ce) { const { hasError: fe, isStopped: ke, observers: Ne } = this; return fe || ke ? j.Lc : (Ne.push(ce), new j.w0(() => (0, Ae.P)(Ne, ce))); }
            _checkFinalizedStatuses(ce) { const { hasError: fe, thrownError: ke, isStopped: Ne } = this; fe ? ce.error(ke) : Ne && ce.complete(); }
            asObservable() { const ce = new _.y; return ce.source = this, ce; }
        } return Ee.create = (de, ce) => new Ve(de, ce), Ee; })(); class Ve extends Le {
            constructor(de, ce) { super(), this.destination = de, this.source = ce; }
            next(de) { var ce, fe; null === (fe = null === (ce = this.destination) || void 0 === ce ? void 0 : ce.next) || void 0 === fe || fe.call(ce, de); }
            error(de) { var ce, fe; null === (fe = null === (ce = this.destination) || void 0 === ce ? void 0 : ce.error) || void 0 === fe || fe.call(ce, de); }
            complete() { var de, ce; null === (ce = null === (de = this.destination) || void 0 === de ? void 0 : de.complete) || void 0 === ce || ce.call(de); }
            _subscribe(de) { var ce, fe; return null !== (fe = null === (ce = this.source) || void 0 === ce ? void 0 : ce.subscribe(de)) && void 0 !== fe ? fe : j.Lc; }
        } }, 930: (St, Pe, V) => { V.d(Pe, { Hp: () => ke, Lv: () => fe }); var _ = V(576), j = V(727), ie = V(2416), _e = V(7849), Ae = V(5032); const Te = Ee("C", void 0, void 0); function Ee(Ct, rt, yt) { return { kind: Ct, value: rt, error: yt }; } var de = V(3410), ce = V(2806); class fe extends j.w0 {
            constructor(rt) { super(), this.isStopped = !1, rt ? (this.destination = rt, (0, j.Nn)(rt) && rt.add(this)) : this.destination = Ke; }
            static create(rt, yt, tt) { return new ke(rt, yt, tt); }
            next(rt) { this.isStopped ? Je(function Ve(Ct) { return Ee("N", Ct, void 0); }(rt), this) : this._next(rt); }
            error(rt) { this.isStopped ? Je(function Le(Ct) { return Ee("E", void 0, Ct); }(rt), this) : (this.isStopped = !0, this._error(rt)); }
            complete() { this.isStopped ? Je(Te, this) : (this.isStopped = !0, this._complete()); }
            unsubscribe() { this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null); }
            _next(rt) { this.destination.next(rt); }
            _error(rt) { try {
                this.destination.error(rt);
            }
            finally {
                this.unsubscribe();
            } }
            _complete() { try {
                this.destination.complete();
            }
            finally {
                this.unsubscribe();
            } }
        } class ke extends fe {
            constructor(rt, yt, tt) { let he; if (super(), (0, _.m)(rt))
                he = rt;
            else if (rt) {
                let at;
                ({ next: he, error: yt, complete: tt } = rt), this && ie.v.useDeprecatedNextContext ? (at = Object.create(rt), at.unsubscribe = () => this.unsubscribe()) : at = rt, he = null == he ? void 0 : he.bind(at), yt = null == yt ? void 0 : yt.bind(at), tt = null == tt ? void 0 : tt.bind(at);
            } this.destination = { next: he ? Ne(he) : Ae.Z, error: Ne(null != yt ? yt : qe), complete: tt ? Ne(tt) : Ae.Z }; }
        } function Ne(Ct, rt) { return (...yt) => { try {
            Ct(...yt);
        }
        catch (tt) {
            ie.v.useDeprecatedSynchronousErrorHandling ? (0, ce.O)(tt) : (0, _e.h)(tt);
        } }; } function qe(Ct) { throw Ct; } function Je(Ct, rt) { const { onStoppedNotification: yt } = ie.v; yt && de.z.setTimeout(() => yt(Ct, rt)); } const Ke = { closed: !0, next: Ae.Z, error: qe, complete: Ae.Z }; }, 727: (St, Pe, V) => { V.d(Pe, { Lc: () => Te, w0: () => Ae, Nn: () => Le }); var _ = V(576); const ie = (0, V(3888).d)(Ee => function (ce) { Ee(this), this.message = ce ? `${ce.length} errors occurred during unsubscription:\n${ce.map((fe, ke) => `${ke + 1}) ${fe.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = ce; }); var _e = V(8737); class Ae {
            constructor(de) { this.initialTeardown = de, this.closed = !1, this._parentage = null, this._teardowns = null; }
            unsubscribe() { let de; if (!this.closed) {
                this.closed = !0;
                const { _parentage: ce } = this;
                if (ce)
                    if (this._parentage = null, Array.isArray(ce))
                        for (const Ne of ce)
                            Ne.remove(this);
                    else
                        ce.remove(this);
                const { initialTeardown: fe } = this;
                if ((0, _.m)(fe))
                    try {
                        fe();
                    }
                    catch (Ne) {
                        de = Ne instanceof ie ? Ne.errors : [Ne];
                    }
                const { _teardowns: ke } = this;
                if (ke) {
                    this._teardowns = null;
                    for (const Ne of ke)
                        try {
                            Ve(Ne);
                        }
                        catch (qe) {
                            de = null != de ? de : [], qe instanceof ie ? de = [...de, ...qe.errors] : de.push(qe);
                        }
                }
                if (de)
                    throw new ie(de);
            } }
            add(de) { var ce; if (de && de !== this)
                if (this.closed)
                    Ve(de);
                else {
                    if (de instanceof Ae) {
                        if (de.closed || de._hasParent(this))
                            return;
                        de._addParent(this);
                    }
                    (this._teardowns = null !== (ce = this._teardowns) && void 0 !== ce ? ce : []).push(de);
                } }
            _hasParent(de) { const { _parentage: ce } = this; return ce === de || Array.isArray(ce) && ce.includes(de); }
            _addParent(de) { const { _parentage: ce } = this; this._parentage = Array.isArray(ce) ? (ce.push(de), ce) : ce ? [ce, de] : de; }
            _removeParent(de) { const { _parentage: ce } = this; ce === de ? this._parentage = null : Array.isArray(ce) && (0, _e.P)(ce, de); }
            remove(de) { const { _teardowns: ce } = this; ce && (0, _e.P)(ce, de), de instanceof Ae && de._removeParent(this); }
        } Ae.EMPTY = (() => { const Ee = new Ae; return Ee.closed = !0, Ee; })(); const Te = Ae.EMPTY; function Le(Ee) { return Ee instanceof Ae || Ee && "closed" in Ee && (0, _.m)(Ee.remove) && (0, _.m)(Ee.add) && (0, _.m)(Ee.unsubscribe); } function Ve(Ee) { (0, _.m)(Ee) ? Ee() : Ee.unsubscribe(); } }, 2416: (St, Pe, V) => { V.d(Pe, { v: () => _ }); const _ = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 }; }, 7272: (St, Pe, V) => { V.d(Pe, { z: () => Ae }); var _ = V(8189), ie = V(3269), _e = V(2076); function Ae(...Te) { return function j() { return (0, _.J)(1); }()((0, _e.D)(Te, (0, ie.yG)(Te))); } }, 515: (St, Pe, V) => { V.d(Pe, { E: () => j }); const j = new (V(8306).y)(Ae => Ae.complete()); }, 2076: (St, Pe, V) => { V.d(Pe, { D: () => cn }); var _ = V(8421), j = V(9672), ie = V(4482), _e = V(5403); function Ae(vt, ht = 0) { return (0, ie.e)((pe, Se) => { pe.subscribe(new _e.Q(Se, Oe => (0, j.f)(Se, vt, () => Se.next(Oe), ht), () => (0, j.f)(Se, vt, () => Se.complete(), ht), Oe => (0, j.f)(Se, vt, () => Se.error(Oe), ht))); }); } function Te(vt, ht = 0) { return (0, ie.e)((pe, Se) => { Se.add(vt.schedule(() => pe.subscribe(Se), ht)); }); } var Ee = V(8306), ce = V(2202), fe = V(576); function Ne(vt, ht) { if (!vt)
            throw new Error("Iterable cannot be null"); return new Ee.y(pe => { (0, j.f)(pe, ht, () => { const Se = vt[Symbol.asyncIterator](); (0, j.f)(pe, ht, () => { Se.next().then(Oe => { Oe.done ? pe.complete() : pe.next(Oe.value); }); }, 0, !0); }); }); } var qe = V(3670), Je = V(8239), Ke = V(1144), Ct = V(6495), rt = V(2206), yt = V(4532), tt = V(3260); function cn(vt, ht) { return ht ? function at(vt, ht) { if (null != vt) {
            if ((0, qe.c)(vt))
                return function Le(vt, ht) { return (0, _.Xf)(vt).pipe(Te(ht), Ae(ht)); }(vt, ht);
            if ((0, Ke.z)(vt))
                return function de(vt, ht) { return new Ee.y(pe => { let Se = 0; return ht.schedule(function () { Se === vt.length ? pe.complete() : (pe.next(vt[Se++]), pe.closed || this.schedule()); }); }); }(vt, ht);
            if ((0, Je.t)(vt))
                return function Ve(vt, ht) { return (0, _.Xf)(vt).pipe(Te(ht), Ae(ht)); }(vt, ht);
            if ((0, rt.D)(vt))
                return Ne(vt, ht);
            if ((0, Ct.T)(vt))
                return function ke(vt, ht) { return new Ee.y(pe => { let Se; return (0, j.f)(pe, ht, () => { Se = vt[ce.h](), (0, j.f)(pe, ht, () => { let Oe, We; try {
                    ({ value: Oe, done: We } = Se.next());
                }
                catch (ut) {
                    return void pe.error(ut);
                } We ? pe.complete() : pe.next(Oe); }, 0, !0); }), () => (0, fe.m)(null == Se ? void 0 : Se.return) && Se.return(); }); }(vt, ht);
            if ((0, tt.L)(vt))
                return function he(vt, ht) { return Ne((0, tt.Q)(vt), ht); }(vt, ht);
        } throw (0, yt.z)(vt); }(vt, ht) : (0, _.Xf)(vt); } }, 8421: (St, Pe, V) => { V.d(Pe, { Xf: () => ke }); var _ = V(5987), j = V(1144), ie = V(8239), _e = V(8306), Ae = V(3670), Te = V(2206), Le = V(4532), Ve = V(6495), Ee = V(3260), de = V(576), ce = V(7849), fe = V(8822); function ke(tt) { if (tt instanceof _e.y)
            return tt; if (null != tt) {
            if ((0, Ae.c)(tt))
                return function Ne(tt) { return new _e.y(he => { const at = tt[fe.L](); if ((0, de.m)(at.subscribe))
                    return at.subscribe(he); throw new TypeError("Provided object does not correctly implement Symbol.observable"); }); }(tt);
            if ((0, j.z)(tt))
                return function qe(tt) { return new _e.y(he => { for (let at = 0; at < tt.length && !he.closed; at++)
                    he.next(tt[at]); he.complete(); }); }(tt);
            if ((0, ie.t)(tt))
                return function Je(tt) { return new _e.y(he => { tt.then(at => { he.closed || (he.next(at), he.complete()); }, at => he.error(at)).then(null, ce.h); }); }(tt);
            if ((0, Te.D)(tt))
                return Ct(tt);
            if ((0, Ve.T)(tt))
                return function Ke(tt) { return new _e.y(he => { for (const at of tt)
                    if (he.next(at), he.closed)
                        return; he.complete(); }); }(tt);
            if ((0, Ee.L)(tt))
                return function rt(tt) { return Ct((0, Ee.Q)(tt)); }(tt);
        } throw (0, Le.z)(tt); } function Ct(tt) { return new _e.y(he => { (function yt(tt, he) { var at, cn, vt, ht; return (0, _.mG)(this, void 0, void 0, function* () { try {
            for (at = (0, _.KL)(tt); !(cn = yield at.next()).done;)
                if (he.next(cn.value), he.closed)
                    return;
        }
        catch (pe) {
            vt = { error: pe };
        }
        finally {
            try {
                cn && !cn.done && (ht = at.return) && (yield ht.call(at));
            }
            finally {
                if (vt)
                    throw vt.error;
            }
        } he.complete(); }); })(tt, he).catch(at => he.error(at)); }); } }, 6451: (St, Pe, V) => { V.d(Pe, { T: () => Te }); var _ = V(8189), j = V(8421), ie = V(515), _e = V(3269), Ae = V(2076); function Te(...Le) { const Ve = (0, _e.yG)(Le), Ee = (0, _e._6)(Le, 1 / 0), de = Le; return de.length ? 1 === de.length ? (0, j.Xf)(de[0]) : (0, _.J)(Ee)((0, Ae.D)(de, Ve)) : ie.E; } }, 9646: (St, Pe, V) => { V.d(Pe, { of: () => ie }); var _ = V(3269), j = V(2076); function ie(..._e) { const Ae = (0, _.yG)(_e); return (0, j.D)(_e, Ae); } }, 5403: (St, Pe, V) => { V.d(Pe, { Q: () => j }); var _ = V(930); class j extends _.Lv {
            constructor(_e, Ae, Te, Le, Ve) { super(_e), this.onFinalize = Ve, this._next = Ae ? function (Ee) { try {
                Ae(Ee);
            }
            catch (de) {
                _e.error(de);
            } } : super._next, this._error = Le ? function (Ee) { try {
                Le(Ee);
            }
            catch (de) {
                _e.error(de);
            }
            finally {
                this.unsubscribe();
            } } : super._error, this._complete = Te ? function () { try {
                Te();
            }
            catch (Ee) {
                _e.error(Ee);
            }
            finally {
                this.unsubscribe();
            } } : super._complete; }
            unsubscribe() { var _e; const { closed: Ae } = this; super.unsubscribe(), !Ae && (null === (_e = this.onFinalize) || void 0 === _e || _e.call(this)); }
        } }, 262: (St, Pe, V) => { V.d(Pe, { K: () => _e }); var _ = V(8421), j = V(5403), ie = V(4482); function _e(Ae) { return (0, ie.e)((Te, Le) => { let de, Ve = null, Ee = !1; Ve = Te.subscribe(new j.Q(Le, void 0, void 0, ce => { de = (0, _.Xf)(Ae(ce, _e(Ae)(Te))), Ve ? (Ve.unsubscribe(), Ve = null, de.subscribe(Le)) : Ee = !0; })), Ee && (Ve.unsubscribe(), Ve = null, de.subscribe(Le)); }); } }, 4351: (St, Pe, V) => { V.d(Pe, { b: () => ie }); var _ = V(5577), j = V(576); function ie(_e, Ae) { return (0, j.m)(Ae) ? (0, _.z)(_e, Ae, 1) : (0, _.z)(_e, 1); } }, 1884: (St, Pe, V) => { V.d(Pe, { x: () => _e }); var _ = V(4671), j = V(4482), ie = V(5403); function _e(Te, Le = _.y) { return Te = null != Te ? Te : Ae, (0, j.e)((Ve, Ee) => { let de, ce = !0; Ve.subscribe(new ie.Q(Ee, fe => { const ke = Le(fe); (ce || !Te(de, ke)) && (ce = !1, de = ke, Ee.next(fe)); })); }); } function Ae(Te, Le) { return Te === Le; } }, 9300: (St, Pe, V) => { V.d(Pe, { h: () => ie }); var _ = V(4482), j = V(5403); function ie(_e, Ae) { return (0, _.e)((Te, Le) => { let Ve = 0; Te.subscribe(new j.Q(Le, Ee => _e.call(Ae, Ee, Ve++) && Le.next(Ee))); }); } }, 8746: (St, Pe, V) => { V.d(Pe, { x: () => j }); var _ = V(4482); function j(ie) { return (0, _.e)((_e, Ae) => { try {
            _e.subscribe(Ae);
        }
        finally {
            Ae.add(ie);
        } }); } }, 4004: (St, Pe, V) => { V.d(Pe, { U: () => ie }); var _ = V(4482), j = V(5403); function ie(_e, Ae) { return (0, _.e)((Te, Le) => { let Ve = 0; Te.subscribe(new j.Q(Le, Ee => { Le.next(_e.call(Ae, Ee, Ve++)); })); }); } }, 8189: (St, Pe, V) => { V.d(Pe, { J: () => ie }); var _ = V(5577), j = V(4671); function ie(_e = 1 / 0) { return (0, _.z)(j.y, _e); } }, 5577: (St, Pe, V) => { V.d(Pe, { z: () => Ve }); var _ = V(4004), j = V(8421), ie = V(4482), _e = V(9672), Ae = V(5403), Le = V(576); function Ve(Ee, de, ce = 1 / 0) { return (0, Le.m)(de) ? Ve((fe, ke) => (0, _.U)((Ne, qe) => de(fe, Ne, ke, qe))((0, j.Xf)(Ee(fe, ke))), ce) : ("number" == typeof de && (ce = de), (0, ie.e)((fe, ke) => function Te(Ee, de, ce, fe, ke, Ne, qe, Je) { const Ke = []; let Ct = 0, rt = 0, yt = !1; const tt = () => { yt && !Ke.length && !Ct && de.complete(); }, he = cn => Ct < fe ? at(cn) : Ke.push(cn), at = cn => { Ne && de.next(cn), Ct++; let vt = !1; (0, j.Xf)(ce(cn, rt++)).subscribe(new Ae.Q(de, ht => { null == ke || ke(ht), Ne ? he(ht) : de.next(ht); }, () => { vt = !0; }, void 0, () => { if (vt)
            try {
                for (Ct--; Ke.length && Ct < fe;) {
                    const ht = Ke.shift();
                    qe ? (0, _e.f)(de, qe, () => at(ht)) : at(ht);
                }
                tt();
            }
            catch (ht) {
                de.error(ht);
            } })); }; return Ee.subscribe(new Ae.Q(de, he, () => { yt = !0, tt(); })), () => { null == Je || Je(); }; }(fe, ke, Ee, ce))); } }, 3099: (St, Pe, V) => { V.d(Pe, { B: () => Te }); var _ = V(2076), j = V(5698), ie = V(7579), _e = V(930), Ae = V(4482); function Te(Ve = {}) { const { connector: Ee = (() => new ie.x), resetOnError: de = !0, resetOnComplete: ce = !0, resetOnRefCountZero: fe = !0 } = Ve; return ke => { let Ne = null, qe = null, Je = null, Ke = 0, Ct = !1, rt = !1; const yt = () => { null == qe || qe.unsubscribe(), qe = null; }, tt = () => { yt(), Ne = Je = null, Ct = rt = !1; }, he = () => { const at = Ne; tt(), null == at || at.unsubscribe(); }; return (0, Ae.e)((at, cn) => { Ke++, !rt && !Ct && yt(); const vt = Je = null != Je ? Je : Ee(); cn.add(() => { Ke--, 0 === Ke && !rt && !Ct && (qe = Le(he, fe)); }), vt.subscribe(cn), Ne || (Ne = new _e.Hp({ next: ht => vt.next(ht), error: ht => { rt = !0, yt(), qe = Le(tt, de, ht), vt.error(ht); }, complete: () => { Ct = !0, yt(), qe = Le(tt, ce), vt.complete(); } }), (0, _.D)(at).subscribe(Ne)); })(ke); }; } function Le(Ve, Ee, ...de) { return !0 === Ee ? (Ve(), null) : !1 === Ee ? null : Ee(...de).pipe((0, j.q)(1)).subscribe(() => Ve()); } }, 8675: (St, Pe, V) => { V.d(Pe, { O: () => _e }); var _ = V(7272), j = V(3269), ie = V(4482); function _e(...Ae) { const Te = (0, j.yG)(Ae); return (0, ie.e)((Le, Ve) => { (Te ? (0, _.z)(Ae, Le, Te) : (0, _.z)(Ae, Le)).subscribe(Ve); }); } }, 3900: (St, Pe, V) => { V.d(Pe, { w: () => _e }); var _ = V(8421), j = V(4482), ie = V(5403); function _e(Ae, Te) { return (0, j.e)((Le, Ve) => { let Ee = null, de = 0, ce = !1; const fe = () => ce && !Ee && Ve.complete(); Le.subscribe(new ie.Q(Ve, ke => { null == Ee || Ee.unsubscribe(); let Ne = 0; const qe = de++; (0, _.Xf)(Ae(ke, qe)).subscribe(Ee = new ie.Q(Ve, Je => Ve.next(Te ? Te(ke, Je, qe, Ne++) : Je), () => { Ee = null, fe(); })); }, () => { ce = !0, fe(); })); }); } }, 5698: (St, Pe, V) => { V.d(Pe, { q: () => _e }); var _ = V(515), j = V(4482), ie = V(5403); function _e(Ae) { return Ae <= 0 ? () => _.E : (0, j.e)((Te, Le) => { let Ve = 0; Te.subscribe(new ie.Q(Le, Ee => { ++Ve <= Ae && (Le.next(Ee), Ae <= Ve && Le.complete()); })); }); } }, 2722: (St, Pe, V) => { V.d(Pe, { R: () => Ae }); var _ = V(4482), j = V(5403), ie = V(8421), _e = V(5032); function Ae(Te) { return (0, _.e)((Le, Ve) => { (0, ie.Xf)(Te).subscribe(new j.Q(Ve, () => Ve.complete(), _e.Z)), !Ve.closed && Le.subscribe(Ve); }); } }, 8505: (St, Pe, V) => { V.d(Pe, { b: () => Ae }); var _ = V(576), j = V(4482), ie = V(5403), _e = V(4671); function Ae(Te, Le, Ve) { const Ee = (0, _.m)(Te) || Le || Ve ? { next: Te, error: Le, complete: Ve } : Te; return Ee ? (0, j.e)((de, ce) => { var fe; null === (fe = Ee.subscribe) || void 0 === fe || fe.call(Ee); let ke = !0; de.subscribe(new ie.Q(ce, Ne => { var qe; null === (qe = Ee.next) || void 0 === qe || qe.call(Ee, Ne), ce.next(Ne); }, () => { var Ne; ke = !1, null === (Ne = Ee.complete) || void 0 === Ne || Ne.call(Ee), ce.complete(); }, Ne => { var qe; ke = !1, null === (qe = Ee.error) || void 0 === qe || qe.call(Ee, Ne), ce.error(Ne); }, () => { var Ne, qe; ke && (null === (Ne = Ee.unsubscribe) || void 0 === Ne || Ne.call(Ee)), null === (qe = Ee.finalize) || void 0 === qe || qe.call(Ee); })); }) : _e.y; } }, 3410: (St, Pe, V) => { V.d(Pe, { z: () => _ }); const _ = { setTimeout(...j) { const { delegate: ie } = _; return ((null == ie ? void 0 : ie.setTimeout) || setTimeout)(...j); }, clearTimeout(j) { const { delegate: ie } = _; return ((null == ie ? void 0 : ie.clearTimeout) || clearTimeout)(j); }, delegate: void 0 }; }, 2202: (St, Pe, V) => { V.d(Pe, { h: () => j }); const j = function _() { return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"; }(); }, 8822: (St, Pe, V) => { V.d(Pe, { L: () => _ }); const _ = "function" == typeof Symbol && Symbol.observable || "@@observable"; }, 3269: (St, Pe, V) => { V.d(Pe, { jO: () => _e, yG: () => Ae, _6: () => Te }); var _ = V(576), j = V(3532); function ie(Le) { return Le[Le.length - 1]; } function _e(Le) { return (0, _.m)(ie(Le)) ? Le.pop() : void 0; } function Ae(Le) { return (0, j.K)(ie(Le)) ? Le.pop() : void 0; } function Te(Le, Ve) { return "number" == typeof ie(Le) ? Le.pop() : Ve; } }, 4742: (St, Pe, V) => { V.d(Pe, { D: () => Ae }); const { isArray: _ } = Array, { getPrototypeOf: j, prototype: ie, keys: _e } = Object; function Ae(Le) { if (1 === Le.length) {
            const Ve = Le[0];
            if (_(Ve))
                return { args: Ve, keys: null };
            if (function Te(Le) { return Le && "object" == typeof Le && j(Le) === ie; }(Ve)) {
                const Ee = _e(Ve);
                return { args: Ee.map(de => Ve[de]), keys: Ee };
            }
        } return { args: Le, keys: null }; } }, 8737: (St, Pe, V) => { function _(j, ie) { if (j) {
            const _e = j.indexOf(ie);
            0 <= _e && j.splice(_e, 1);
        } } V.d(Pe, { P: () => _ }); }, 3888: (St, Pe, V) => { function _(j) { const _e = j(Ae => { Error.call(Ae), Ae.stack = (new Error).stack; }); return _e.prototype = Object.create(Error.prototype), _e.prototype.constructor = _e, _e; } V.d(Pe, { d: () => _ }); }, 1810: (St, Pe, V) => { function _(j, ie) { return j.reduce((_e, Ae, Te) => (_e[Ae] = ie[Te], _e), {}); } V.d(Pe, { n: () => _ }); }, 2806: (St, Pe, V) => { V.d(Pe, { x: () => ie, O: () => _e }); var _ = V(2416); let j = null; function ie(Ae) { if (_.v.useDeprecatedSynchronousErrorHandling) {
            const Te = !j;
            if (Te && (j = { errorThrown: !1, error: null }), Ae(), Te) {
                const { errorThrown: Le, error: Ve } = j;
                if (j = null, Le)
                    throw Ve;
            }
        }
        else
            Ae(); } function _e(Ae) { _.v.useDeprecatedSynchronousErrorHandling && j && (j.errorThrown = !0, j.error = Ae); } }, 9672: (St, Pe, V) => { function _(j, ie, _e, Ae = 0, Te = !1) { const Le = ie.schedule(function () { _e(), Te ? j.add(this.schedule(null, Ae)) : this.unsubscribe(); }, Ae); if (j.add(Le), !Te)
            return Le; } V.d(Pe, { f: () => _ }); }, 4671: (St, Pe, V) => { function _(j) { return j; } V.d(Pe, { y: () => _ }); }, 1144: (St, Pe, V) => { V.d(Pe, { z: () => _ }); const _ = j => j && "number" == typeof j.length && "function" != typeof j; }, 2206: (St, Pe, V) => { V.d(Pe, { D: () => j }); var _ = V(576); function j(ie) { return Symbol.asyncIterator && (0, _.m)(null == ie ? void 0 : ie[Symbol.asyncIterator]); } }, 576: (St, Pe, V) => { function _(j) { return "function" == typeof j; } V.d(Pe, { m: () => _ }); }, 3670: (St, Pe, V) => { V.d(Pe, { c: () => ie }); var _ = V(8822), j = V(576); function ie(_e) { return (0, j.m)(_e[_.L]); } }, 6495: (St, Pe, V) => { V.d(Pe, { T: () => ie }); var _ = V(2202), j = V(576); function ie(_e) { return (0, j.m)(null == _e ? void 0 : _e[_.h]); } }, 8239: (St, Pe, V) => { V.d(Pe, { t: () => j }); var _ = V(576); function j(ie) { return (0, _.m)(null == ie ? void 0 : ie.then); } }, 3260: (St, Pe, V) => { V.d(Pe, { Q: () => ie, L: () => _e }); var _ = V(5987), j = V(576); function ie(Ae) { return (0, _.FC)(this, arguments, function* () { const Le = Ae.getReader(); try {
            for (;;) {
                const { value: Ve, done: Ee } = yield (0, _.qq)(Le.read());
                if (Ee)
                    return yield (0, _.qq)(void 0);
                yield yield (0, _.qq)(Ve);
            }
        }
        finally {
            Le.releaseLock();
        } }); } function _e(Ae) { return (0, j.m)(null == Ae ? void 0 : Ae.getReader); } }, 3532: (St, Pe, V) => { V.d(Pe, { K: () => j }); var _ = V(576); function j(ie) { return ie && (0, _.m)(ie.schedule); } }, 4482: (St, Pe, V) => { V.d(Pe, { A: () => j, e: () => ie }); var _ = V(576); function j(_e) { return (0, _.m)(null == _e ? void 0 : _e.lift); } function ie(_e) { return Ae => { if (j(Ae))
            return Ae.lift(function (Te) { try {
                return _e(Te, this);
            }
            catch (Le) {
                this.error(Le);
            } }); throw new TypeError("Unable to lift unknown Observable type"); }; } }, 3268: (St, Pe, V) => { V.d(Pe, { Z: () => _e }); var _ = V(4004); const { isArray: j } = Array; function _e(Ae) { return (0, _.U)(Te => function ie(Ae, Te) { return j(Te) ? Ae(...Te) : Ae(Te); }(Ae, Te)); } }, 5032: (St, Pe, V) => { function _() { } V.d(Pe, { Z: () => _ }); }, 7849: (St, Pe, V) => { V.d(Pe, { h: () => ie }); var _ = V(2416), j = V(3410); function ie(_e) { j.z.setTimeout(() => { const { onUnhandledError: Ae } = _.v; if (!Ae)
            throw _e; Ae(_e); }); } }, 4532: (St, Pe, V) => { function _(j) { return new TypeError(`You provided ${null !== j && "object" == typeof j ? "an invalid object" : `'${j}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`); } V.d(Pe, { z: () => _ }); }, 5987: (St, Pe, V) => { function Ve(pe, Se, Oe, We) { return new (Oe || (Oe = Promise))(function (Me, Xt) { function Zt(ve) { try {
            It(We.next(ve));
        }
        catch (lt) {
            Xt(lt);
        } } function Cn(ve) { try {
            It(We.throw(ve));
        }
        catch (lt) {
            Xt(lt);
        } } function It(ve) { ve.done ? Me(ve.value) : function ut(Me) { return Me instanceof Oe ? Me : new Oe(function (Xt) { Xt(Me); }); }(ve.value).then(Zt, Cn); } It((We = We.apply(pe, Se || [])).next()); }); } function Ke(pe) { return this instanceof Ke ? (this.v = pe, this) : new Ke(pe); } function Ct(pe, Se, Oe) { if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined."); var ut, We = Oe.apply(pe, Se || []), Me = []; return ut = {}, Xt("next"), Xt("throw"), Xt("return"), ut[Symbol.asyncIterator] = function () { return this; }, ut; function Xt(je) { We[je] && (ut[je] = function (mt) { return new Promise(function (Bt, yn) { Me.push([je, mt, Bt, yn]) > 1 || Zt(je, mt); }); }); } function Zt(je, mt) { try {
            !function Cn(je) { je.value instanceof Ke ? Promise.resolve(je.value.v).then(It, ve) : lt(Me[0][2], je); }(We[je](mt));
        }
        catch (Bt) {
            lt(Me[0][3], Bt);
        } } function It(je) { Zt("next", je); } function ve(je) { Zt("throw", je); } function lt(je, mt) { je(mt), Me.shift(), Me.length && Zt(Me[0][0], Me[0][1]); } } function yt(pe) { if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined."); var Oe, Se = pe[Symbol.asyncIterator]; return Se ? Se.call(pe) : (pe = function fe(pe) { var Se = "function" == typeof Symbol && Symbol.iterator, Oe = Se && pe[Se], We = 0; if (Oe)
            return Oe.call(pe); if (pe && "number" == typeof pe.length)
            return { next: function () { return pe && We >= pe.length && (pe = void 0), { value: pe && pe[We++], done: !pe }; } }; throw new TypeError(Se ? "Object is not iterable." : "Symbol.iterator is not defined."); }(pe), Oe = {}, We("next"), We("throw"), We("return"), Oe[Symbol.asyncIterator] = function () { return this; }, Oe); function We(Me) { Oe[Me] = pe[Me] && function (Xt) { return new Promise(function (Zt, Cn) { !function ut(Me, Xt, Zt, Cn) { Promise.resolve(Cn).then(function (It) { Me({ value: It, done: Zt }); }, Xt); }(Zt, Cn, (Xt = pe[Me](Xt)).done, Xt.value); }); }; } } V.d(Pe, { mG: () => Ve, qq: () => Ke, FC: () => Ct, KL: () => yt }); }, 1777: (St, Pe, V) => { V.d(Pe, { l3: () => ie, _j: () => _, LC: () => j, ZN: () => Ct, jt: () => Ae, pV: () => ke, F4: () => de, IO: () => qe, vP: () => Le, SB: () => Ee, oB: () => Ve, eR: () => ce, X$: () => _e, ZE: () => rt, k1: () => yt }); class _ {
        } class j {
        } const ie = "*"; function _e(tt, he) { return { type: 7, name: tt, definitions: he, options: {} }; } function Ae(tt, he = null) { return { type: 4, styles: he, timings: tt }; } function Le(tt, he = null) { return { type: 2, steps: tt, options: he }; } function Ve(tt) { return { type: 6, styles: tt, offset: null }; } function Ee(tt, he, at) { return { type: 0, name: tt, styles: he, options: at }; } function de(tt) { return { type: 5, steps: tt }; } function ce(tt, he, at = null) { return { type: 1, expr: tt, animation: he, options: at }; } function ke(tt = null) { return { type: 9, options: tt }; } function qe(tt, he, at = null) { return { type: 11, selector: tt, animation: he, options: at }; } function Ke(tt) { Promise.resolve(null).then(tt); } class Ct {
            constructor(he = 0, at = 0) { this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this._position = 0, this.parentPlayer = null, this.totalTime = he + at; }
            _onFinish() { this._finished || (this._finished = !0, this._onDoneFns.forEach(he => he()), this._onDoneFns = []); }
            onStart(he) { this._onStartFns.push(he); }
            onDone(he) { this._onDoneFns.push(he); }
            onDestroy(he) { this._onDestroyFns.push(he); }
            hasStarted() { return this._started; }
            init() { }
            play() { this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0; }
            triggerMicrotask() { Ke(() => this._onFinish()); }
            _onStart() { this._onStartFns.forEach(he => he()), this._onStartFns = []; }
            pause() { }
            restart() { }
            finish() { this._onFinish(); }
            destroy() { this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(he => he()), this._onDestroyFns = []); }
            reset() { this._started = !1; }
            setPosition(he) { this._position = this.totalTime ? he * this.totalTime : 1; }
            getPosition() { return this.totalTime ? this._position / this.totalTime : 1; }
            triggerCallback(he) { const at = "start" == he ? this._onStartFns : this._onDoneFns; at.forEach(cn => cn()), at.length = 0; }
        } class rt {
            constructor(he) { this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = he; let at = 0, cn = 0, vt = 0; const ht = this.players.length; 0 == ht ? Ke(() => this._onFinish()) : this.players.forEach(pe => { pe.onDone(() => { ++at == ht && this._onFinish(); }), pe.onDestroy(() => { ++cn == ht && this._onDestroy(); }), pe.onStart(() => { ++vt == ht && this._onStart(); }); }), this.totalTime = this.players.reduce((pe, Se) => Math.max(pe, Se.totalTime), 0); }
            _onFinish() { this._finished || (this._finished = !0, this._onDoneFns.forEach(he => he()), this._onDoneFns = []); }
            init() { this.players.forEach(he => he.init()); }
            onStart(he) { this._onStartFns.push(he); }
            _onStart() { this.hasStarted() || (this._started = !0, this._onStartFns.forEach(he => he()), this._onStartFns = []); }
            onDone(he) { this._onDoneFns.push(he); }
            onDestroy(he) { this._onDestroyFns.push(he); }
            hasStarted() { return this._started; }
            play() { this.parentPlayer || this.init(), this._onStart(), this.players.forEach(he => he.play()); }
            pause() { this.players.forEach(he => he.pause()); }
            restart() { this.players.forEach(he => he.restart()); }
            finish() { this._onFinish(), this.players.forEach(he => he.finish()); }
            destroy() { this._onDestroy(); }
            _onDestroy() { this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(he => he.destroy()), this._onDestroyFns.forEach(he => he()), this._onDestroyFns = []); }
            reset() { this.players.forEach(he => he.reset()), this._destroyed = !1, this._finished = !1, this._started = !1; }
            setPosition(he) { const at = he * this.totalTime; this.players.forEach(cn => { const vt = cn.totalTime ? Math.min(1, at / cn.totalTime) : 1; cn.setPosition(vt); }); }
            getPosition() { const he = this.players.reduce((at, cn) => null === at || cn.totalTime > at.totalTime ? cn : at, null); return null != he ? he.getPosition() : 0; }
            beforeDestroy() { this.players.forEach(he => { he.beforeDestroy && he.beforeDestroy(); }); }
            triggerCallback(he) { const at = "start" == he ? this._onStartFns : this._onDoneFns; at.forEach(cn => cn()), at.length = 0; }
        } const yt = "!"; }, 226: (St, Pe, V) => { V.d(Pe, { vT: () => Ee, Is: () => Le }); var _ = V(5e3), j = V(9808); const ie = new _.OlP("cdk-dir-doc", { providedIn: "root", factory: function _e() { return (0, _.f3M)(j.K0); } }), Ae = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i; let Le = (() => { class de {
            constructor(fe) { if (this.value = "ltr", this.change = new _.vpe, fe) {
                const Ne = fe.documentElement ? fe.documentElement.dir : null;
                this.value = function Te(de) { const ce = (null == de ? void 0 : de.toLowerCase()) || ""; return "auto" === ce && "undefined" != typeof navigator && (null == navigator ? void 0 : navigator.language) ? Ae.test(navigator.language) ? "rtl" : "ltr" : "rtl" === ce ? "rtl" : "ltr"; }((fe.body ? fe.body.dir : null) || Ne || "ltr");
            } }
            ngOnDestroy() { this.change.complete(); }
        } return de.\u0275fac = function (fe) { return new (fe || de)(_.LFG(ie, 8)); }, de.\u0275prov = _.Yz7({ token: de, factory: de.\u0275fac, providedIn: "root" }), de; })(), Ee = (() => { class de {
        } return de.\u0275fac = function (fe) { return new (fe || de); }, de.\u0275mod = _.oAB({ type: de }), de.\u0275inj = _.cJS({}), de; })(); }, 3191: (St, Pe, V) => { V.d(Pe, { Ig: () => j, fI: () => Le, su: () => ie }); var _ = V(5e3); function j(Ee) { return null != Ee && "false" != `${Ee}`; } function ie(Ee, de = 0) { return function _e(Ee) { return !isNaN(parseFloat(Ee)) && !isNaN(Number(Ee)); }(Ee) ? Number(Ee) : de; } function Le(Ee) { return Ee instanceof _.SBq ? Ee.nativeElement : Ee; } }, 9808: (St, Pe, V) => { V.d(Pe, { mr: () => rt, ez: () => zi, H9: () => js, K0: () => Le, Do: () => tt, V_: () => de, Ye: () => he, S$: () => Ke, mk: () => ts, sg: () => hi, O5: () => An, PC: () => ss, RF: () => ni, n9: () => di, b0: () => yt, lw: () => Ve, rS: () => oi, gd: () => ii, EM: () => As, JF: () => Gn, NF: () => Bi, PM: () => Sr, w_: () => Te, bD: () => Ar, q: () => ie, Mx: () => ki, HT: () => Ae }); var _ = V(5e3); let j = null; function ie() { return j; } function Ae(M) { j || (j = M); } class Te {
        } const Le = new _.OlP("DocumentToken"); let Ve = (() => { class M {
            historyGo(S) { throw new Error("Not implemented"); }
        } return M.\u0275fac = function (S) { return new (S || M); }, M.\u0275prov = _.Yz7({ token: M, factory: function () { return function Ee() { return (0, _.LFG)(ce); }(); }, providedIn: "platform" }), M; })(); const de = new _.OlP("Location Initialized"); let ce = (() => { class M extends Ve {
            constructor(S) { super(), this._doc = S, this._init(); }
            _init() { this.location = window.location, this._history = window.history; }
            getBaseHrefFromDOM() { return ie().getBaseHref(this._doc); }
            onPopState(S) { const H = ie().getGlobalEventTarget(this._doc, "window"); return H.addEventListener("popstate", S, !1), () => H.removeEventListener("popstate", S); }
            onHashChange(S) { const H = ie().getGlobalEventTarget(this._doc, "window"); return H.addEventListener("hashchange", S, !1), () => H.removeEventListener("hashchange", S); }
            get href() { return this.location.href; }
            get protocol() { return this.location.protocol; }
            get hostname() { return this.location.hostname; }
            get port() { return this.location.port; }
            get pathname() { return this.location.pathname; }
            get search() { return this.location.search; }
            get hash() { return this.location.hash; }
            set pathname(S) { this.location.pathname = S; }
            pushState(S, H, oe) { fe() ? this._history.pushState(S, H, oe) : this.location.hash = oe; }
            replaceState(S, H, oe) { fe() ? this._history.replaceState(S, H, oe) : this.location.hash = oe; }
            forward() { this._history.forward(); }
            back() { this._history.back(); }
            historyGo(S = 0) { this._history.go(S); }
            getState() { return this._history.state; }
        } return M.\u0275fac = function (S) { return new (S || M)(_.LFG(Le)); }, M.\u0275prov = _.Yz7({ token: M, factory: function () { return function ke() { return new ce((0, _.LFG)(Le)); }(); }, providedIn: "platform" }), M; })(); function fe() { return !!window.history.pushState; } function Ne(M, N) { if (0 == M.length)
            return N; if (0 == N.length)
            return M; let S = 0; return M.endsWith("/") && S++, N.startsWith("/") && S++, 2 == S ? M + N.substring(1) : 1 == S ? M + N : M + "/" + N; } function qe(M) { const N = M.match(/#|\?|$/), S = N && N.index || M.length; return M.slice(0, S - ("/" === M[S - 1] ? 1 : 0)) + M.slice(S); } function Je(M) { return M && "?" !== M[0] ? "?" + M : M; } let Ke = (() => { class M {
            historyGo(S) { throw new Error("Not implemented"); }
        } return M.\u0275fac = function (S) { return new (S || M); }, M.\u0275prov = _.Yz7({ token: M, factory: function () { return function Ct(M) { const N = (0, _.LFG)(Le).location; return new yt((0, _.LFG)(Ve), N && N.origin || ""); }(); }, providedIn: "root" }), M; })(); const rt = new _.OlP("appBaseHref"); let yt = (() => { class M extends Ke {
            constructor(S, H) { if (super(), this._platformLocation = S, this._removeListenerFns = [], null == H && (H = this._platformLocation.getBaseHrefFromDOM()), null == H)
                throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."); this._baseHref = H; }
            ngOnDestroy() { for (; this._removeListenerFns.length;)
                this._removeListenerFns.pop()(); }
            onPopState(S) { this._removeListenerFns.push(this._platformLocation.onPopState(S), this._platformLocation.onHashChange(S)); }
            getBaseHref() { return this._baseHref; }
            prepareExternalUrl(S) { return Ne(this._baseHref, S); }
            path(S = !1) { const H = this._platformLocation.pathname + Je(this._platformLocation.search), oe = this._platformLocation.hash; return oe && S ? `${H}${oe}` : H; }
            pushState(S, H, oe, Be) { const it = this.prepareExternalUrl(oe + Je(Be)); this._platformLocation.pushState(S, H, it); }
            replaceState(S, H, oe, Be) { const it = this.prepareExternalUrl(oe + Je(Be)); this._platformLocation.replaceState(S, H, it); }
            forward() { this._platformLocation.forward(); }
            back() { this._platformLocation.back(); }
            historyGo(S = 0) { var H, oe; null === (oe = (H = this._platformLocation).historyGo) || void 0 === oe || oe.call(H, S); }
        } return M.\u0275fac = function (S) { return new (S || M)(_.LFG(Ve), _.LFG(rt, 8)); }, M.\u0275prov = _.Yz7({ token: M, factory: M.\u0275fac }), M; })(), tt = (() => { class M extends Ke {
            constructor(S, H) { super(), this._platformLocation = S, this._baseHref = "", this._removeListenerFns = [], null != H && (this._baseHref = H); }
            ngOnDestroy() { for (; this._removeListenerFns.length;)
                this._removeListenerFns.pop()(); }
            onPopState(S) { this._removeListenerFns.push(this._platformLocation.onPopState(S), this._platformLocation.onHashChange(S)); }
            getBaseHref() { return this._baseHref; }
            path(S = !1) { let H = this._platformLocation.hash; return null == H && (H = "#"), H.length > 0 ? H.substring(1) : H; }
            prepareExternalUrl(S) { const H = Ne(this._baseHref, S); return H.length > 0 ? "#" + H : H; }
            pushState(S, H, oe, Be) { let it = this.prepareExternalUrl(oe + Je(Be)); 0 == it.length && (it = this._platformLocation.pathname), this._platformLocation.pushState(S, H, it); }
            replaceState(S, H, oe, Be) { let it = this.prepareExternalUrl(oe + Je(Be)); 0 == it.length && (it = this._platformLocation.pathname), this._platformLocation.replaceState(S, H, it); }
            forward() { this._platformLocation.forward(); }
            back() { this._platformLocation.back(); }
            historyGo(S = 0) { var H, oe; null === (oe = (H = this._platformLocation).historyGo) || void 0 === oe || oe.call(H, S); }
        } return M.\u0275fac = function (S) { return new (S || M)(_.LFG(Ve), _.LFG(rt, 8)); }, M.\u0275prov = _.Yz7({ token: M, factory: M.\u0275fac }), M; })(), he = (() => { class M {
            constructor(S, H) { this._subject = new _.vpe, this._urlChangeListeners = [], this._platformStrategy = S; const oe = this._platformStrategy.getBaseHref(); this._platformLocation = H, this._baseHref = qe(vt(oe)), this._platformStrategy.onPopState(Be => { this._subject.emit({ url: this.path(!0), pop: !0, state: Be.state, type: Be.type }); }); }
            path(S = !1) { return this.normalize(this._platformStrategy.path(S)); }
            getState() { return this._platformLocation.getState(); }
            isCurrentPathEqualTo(S, H = "") { return this.path() == this.normalize(S + Je(H)); }
            normalize(S) { return M.stripTrailingSlash(function cn(M, N) { return M && N.startsWith(M) ? N.substring(M.length) : N; }(this._baseHref, vt(S))); }
            prepareExternalUrl(S) { return S && "/" !== S[0] && (S = "/" + S), this._platformStrategy.prepareExternalUrl(S); }
            go(S, H = "", oe = null) { this._platformStrategy.pushState(oe, "", S, H), this._notifyUrlChangeListeners(this.prepareExternalUrl(S + Je(H)), oe); }
            replaceState(S, H = "", oe = null) { this._platformStrategy.replaceState(oe, "", S, H), this._notifyUrlChangeListeners(this.prepareExternalUrl(S + Je(H)), oe); }
            forward() { this._platformStrategy.forward(); }
            back() { this._platformStrategy.back(); }
            historyGo(S = 0) { var H, oe; null === (oe = (H = this._platformStrategy).historyGo) || void 0 === oe || oe.call(H, S); }
            onUrlChange(S) { this._urlChangeListeners.push(S), this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(H => { this._notifyUrlChangeListeners(H.url, H.state); })); }
            _notifyUrlChangeListeners(S = "", H) { this._urlChangeListeners.forEach(oe => oe(S, H)); }
            subscribe(S, H, oe) { return this._subject.subscribe({ next: S, error: H, complete: oe }); }
        } return M.normalizeQueryParams = Je, M.joinWithSlash = Ne, M.stripTrailingSlash = qe, M.\u0275fac = function (S) { return new (S || M)(_.LFG(Ke), _.LFG(Ve)); }, M.\u0275prov = _.Yz7({ token: M, factory: function () { return function at() { return new he((0, _.LFG)(Ke), (0, _.LFG)(Ve)); }(); }, providedIn: "root" }), M; })(); function vt(M) { return M.replace(/\/index.html$/, ""); } const ht = { ADP: [void 0, void 0, 0], AFN: [void 0, "\u060b", 0], ALL: [void 0, void 0, 0], AMD: [void 0, "\u058f", 2], AOA: [void 0, "Kz"], ARS: [void 0, "$"], AUD: ["A$", "$"], AZN: [void 0, "\u20bc"], BAM: [void 0, "KM"], BBD: [void 0, "$"], BDT: [void 0, "\u09f3"], BHD: [void 0, void 0, 3], BIF: [void 0, void 0, 0], BMD: [void 0, "$"], BND: [void 0, "$"], BOB: [void 0, "Bs"], BRL: ["R$"], BSD: [void 0, "$"], BWP: [void 0, "P"], BYN: [void 0, "\u0440.", 2], BYR: [void 0, void 0, 0], BZD: [void 0, "$"], CAD: ["CA$", "$", 2], CHF: [void 0, void 0, 2], CLF: [void 0, void 0, 4], CLP: [void 0, "$", 0], CNY: ["CN\xa5", "\xa5"], COP: [void 0, "$", 2], CRC: [void 0, "\u20a1", 2], CUC: [void 0, "$"], CUP: [void 0, "$"], CZK: [void 0, "K\u010d", 2], DJF: [void 0, void 0, 0], DKK: [void 0, "kr", 2], DOP: [void 0, "$"], EGP: [void 0, "E\xa3"], ESP: [void 0, "\u20a7", 0], EUR: ["\u20ac"], FJD: [void 0, "$"], FKP: [void 0, "\xa3"], GBP: ["\xa3"], GEL: [void 0, "\u20be"], GHS: [void 0, "GH\u20b5"], GIP: [void 0, "\xa3"], GNF: [void 0, "FG", 0], GTQ: [void 0, "Q"], GYD: [void 0, "$", 2], HKD: ["HK$", "$"], HNL: [void 0, "L"], HRK: [void 0, "kn"], HUF: [void 0, "Ft", 2], IDR: [void 0, "Rp", 2], ILS: ["\u20aa"], INR: ["\u20b9"], IQD: [void 0, void 0, 0], IRR: [void 0, void 0, 0], ISK: [void 0, "kr", 0], ITL: [void 0, void 0, 0], JMD: [void 0, "$"], JOD: [void 0, void 0, 3], JPY: ["\xa5", void 0, 0], KHR: [void 0, "\u17db"], KMF: [void 0, "CF", 0], KPW: [void 0, "\u20a9", 0], KRW: ["\u20a9", void 0, 0], KWD: [void 0, void 0, 3], KYD: [void 0, "$"], KZT: [void 0, "\u20b8"], LAK: [void 0, "\u20ad", 0], LBP: [void 0, "L\xa3", 0], LKR: [void 0, "Rs"], LRD: [void 0, "$"], LTL: [void 0, "Lt"], LUF: [void 0, void 0, 0], LVL: [void 0, "Ls"], LYD: [void 0, void 0, 3], MGA: [void 0, "Ar", 0], MGF: [void 0, void 0, 0], MMK: [void 0, "K", 0], MNT: [void 0, "\u20ae", 2], MRO: [void 0, void 0, 0], MUR: [void 0, "Rs", 2], MXN: ["MX$", "$"], MYR: [void 0, "RM"], NAD: [void 0, "$"], NGN: [void 0, "\u20a6"], NIO: [void 0, "C$"], NOK: [void 0, "kr", 2], NPR: [void 0, "Rs"], NZD: ["NZ$", "$"], OMR: [void 0, void 0, 3], PHP: ["\u20b1"], PKR: [void 0, "Rs", 2], PLN: [void 0, "z\u0142"], PYG: [void 0, "\u20b2", 0], RON: [void 0, "lei"], RSD: [void 0, void 0, 0], RUB: [void 0, "\u20bd"], RUR: [void 0, "\u0440."], RWF: [void 0, "RF", 0], SBD: [void 0, "$"], SEK: [void 0, "kr", 2], SGD: [void 0, "$"], SHP: [void 0, "\xa3"], SLL: [void 0, void 0, 0], SOS: [void 0, void 0, 0], SRD: [void 0, "$"], SSP: [void 0, "\xa3"], STD: [void 0, void 0, 0], STN: [void 0, "Db"], SYP: [void 0, "\xa3", 0], THB: [void 0, "\u0e3f"], TMM: [void 0, void 0, 0], TND: [void 0, void 0, 3], TOP: [void 0, "T$"], TRL: [void 0, void 0, 0], TRY: [void 0, "\u20ba"], TTD: [void 0, "$"], TWD: ["NT$", "$", 2], TZS: [void 0, void 0, 2], UAH: [void 0, "\u20b4"], UGX: [void 0, void 0, 0], USD: ["$"], UYI: [void 0, void 0, 0], UYU: [void 0, "$"], UYW: [void 0, void 0, 4], UZS: [void 0, void 0, 2], VEF: [void 0, "Bs", 2], VND: ["\u20ab", void 0, 0], VUV: [void 0, void 0, 0], XAF: ["FCFA", void 0, 0], XCD: ["EC$", "$"], XOF: ["F\u202fCFA", void 0, 0], XPF: ["CFPF", void 0, 0], XXX: ["\xa4"], YER: [void 0, void 0, 0], ZAR: [void 0, "R"], ZMK: [void 0, void 0, 0], ZMW: [void 0, "ZK"], ZWD: [void 0, void 0, 0] }; var pe = (() => ((pe = pe || {})[pe.Decimal = 0] = "Decimal", pe[pe.Percent = 1] = "Percent", pe[pe.Currency = 2] = "Currency", pe[pe.Scientific = 3] = "Scientific", pe))(), Se = (() => ((Se = Se || {})[Se.Zero = 0] = "Zero", Se[Se.One = 1] = "One", Se[Se.Two = 2] = "Two", Se[Se.Few = 3] = "Few", Se[Se.Many = 4] = "Many", Se[Se.Other = 5] = "Other", Se))(), Me = (() => ((Me = Me || {})[Me.Decimal = 0] = "Decimal", Me[Me.Group = 1] = "Group", Me[Me.List = 2] = "List", Me[Me.PercentSign = 3] = "PercentSign", Me[Me.PlusSign = 4] = "PlusSign", Me[Me.MinusSign = 5] = "MinusSign", Me[Me.Exponential = 6] = "Exponential", Me[Me.SuperscriptingExponent = 7] = "SuperscriptingExponent", Me[Me.PerMille = 8] = "PerMille", Me[Me.Infinity = 9] = "Infinity", Me[Me.NaN = 10] = "NaN", Me[Me.TimeSeparator = 11] = "TimeSeparator", Me[Me.CurrencyDecimal = 12] = "CurrencyDecimal", Me[Me.CurrencyGroup = 13] = "CurrencyGroup", Me))(); function rn(M, N) { const S = (0, _.cg1)(M), H = S[_.wAp.NumberSymbols][N]; if (void 0 === H) {
            if (N === Me.CurrencyDecimal)
                return S[_.wAp.NumberSymbols][Me.Decimal];
            if (N === Me.CurrencyGroup)
                return S[_.wAp.NumberSymbols][Me.Group];
        } return H; } const Yn = _.kL8; const Qe = /^(\d+)?\.((\d+)(-(\d+))?)?$/; function ui(M, N, S, H, oe) { const it = function z(M, N = "-") { const S = { minInt: 1, minFrac: 0, maxFrac: 0, posPre: "", posSuf: "", negPre: "", negSuf: "", gSize: 0, lgSize: 0 }, H = M.split(";"), oe = H[0], Be = H[1], it = -1 !== oe.indexOf(".") ? oe.split(".") : [oe.substring(0, oe.lastIndexOf("0") + 1), oe.substring(oe.lastIndexOf("0") + 1)], Mt = it[0], jn = it[1] || ""; S.posPre = Mt.substr(0, Mt.indexOf("#")); for (let kn = 0; kn < jn.length; kn++) {
            const dn = jn.charAt(kn);
            "0" === dn ? S.minFrac = S.maxFrac = kn + 1 : "#" === dn ? S.maxFrac = kn + 1 : S.posSuf += dn;
        } const On = Mt.split(","); if (S.gSize = On[1] ? On[1].length : 0, S.lgSize = On[2] || On[1] ? (On[2] || On[1]).length : 0, Be) {
            const kn = oe.length - S.posPre.length - S.posSuf.length, dn = Be.indexOf("#");
            S.negPre = Be.substr(0, dn).replace(/'/g, ""), S.negSuf = Be.substr(dn + kn).replace(/'/g, "");
        }
        else
            S.negPre = N + S.posPre, S.negSuf = S.posSuf; return S; }(function Tn(M, N) { return (0, _.cg1)(M)[_.wAp.NumberFormats][N]; }(N, pe.Currency), rn(N, Me.MinusSign)); return it.minFrac = function re(M) { let N; const S = ht[M]; return S && (N = S[2]), "number" == typeof N ? N : 2; }(H), it.maxFrac = it.minFrac, function es(M, N, S, H, oe, Be, it = !1) { let Mt = "", jn = !1; if (isFinite(M)) {
            let On = function ye(M) { let H, oe, Be, it, Mt, N = Math.abs(M) + "", S = 0; for ((oe = N.indexOf(".")) > -1 && (N = N.replace(".", "")), (Be = N.search(/e/i)) > 0 ? (oe < 0 && (oe = Be), oe += +N.slice(Be + 1), N = N.substring(0, Be)) : oe < 0 && (oe = N.length), Be = 0; "0" === N.charAt(Be); Be++)
                ; if (Be === (Mt = N.length))
                H = [0], oe = 1;
            else {
                for (Mt--; "0" === N.charAt(Mt);)
                    Mt--;
                for (oe -= Be, H = [], it = 0; Be <= Mt; Be++, it++)
                    H[it] = Number(N.charAt(Be));
            } return oe > 22 && (H = H.splice(0, 21), S = oe - 1, oe = 1), { digits: H, exponent: S, integerLen: oe }; }(M);
            it && (On = function Re(M) { if (0 === M.digits[0])
                return M; const N = M.digits.length - M.integerLen; return M.exponent ? M.exponent += 2 : (0 === N ? M.digits.push(0, 0) : 1 === N && M.digits.push(0), M.integerLen += 2), M; }(On));
            let kn = N.minInt, dn = N.minFrac, fi = N.maxFrac;
            if (Be) {
                const Ss = Be.match(Qe);
                if (null === Ss)
                    throw new Error(`${Be} is not a valid digit info`);
                const Us = Ss[1], Mr = Ss[3], Tr = Ss[5];
                null != Us && (kn = Wt(Us)), null != Mr && (dn = Wt(Mr)), null != Tr ? fi = Wt(Tr) : null != Mr && dn > fi && (fi = dn);
            }
            !function nt(M, N, S) { if (N > S)
                throw new Error(`The minimum number of digits after fraction (${N}) is higher than the maximum (${S}).`); let H = M.digits, oe = H.length - M.integerLen; const Be = Math.min(Math.max(N, oe), S); let it = Be + M.integerLen, Mt = H[it]; if (it > 0) {
                H.splice(Math.max(M.integerLen, it));
                for (let dn = it; dn < H.length; dn++)
                    H[dn] = 0;
            }
            else {
                oe = Math.max(0, oe), M.integerLen = 1, H.length = Math.max(1, it = Be + 1), H[0] = 0;
                for (let dn = 1; dn < it; dn++)
                    H[dn] = 0;
            } if (Mt >= 5)
                if (it - 1 < 0) {
                    for (let dn = 0; dn > it; dn--)
                        H.unshift(0), M.integerLen++;
                    H.unshift(1), M.integerLen++;
                }
                else
                    H[it - 1]++; for (; oe < Math.max(0, Be); oe++)
                H.push(0); let jn = 0 !== Be; const On = N + M.integerLen, kn = H.reduceRight(function (dn, fi, Vn, Ot) { return Ot[Vn] = (fi += dn) < 10 ? fi : fi - 10, jn && (0 === Ot[Vn] && Vn >= On ? Ot.pop() : jn = !1), fi >= 10 ? 1 : 0; }, 0); kn && (H.unshift(kn), M.integerLen++); }(On, dn, fi);
            let Vn = On.digits, Ot = On.integerLen;
            const Ks = On.exponent;
            let Wi = [];
            for (jn = Vn.every(Ss => !Ss); Ot < kn; Ot++)
                Vn.unshift(0);
            for (; Ot < 0; Ot++)
                Vn.unshift(0);
            Ot > 0 ? Wi = Vn.splice(Ot, Vn.length) : (Wi = Vn, Vn = [0]);
            const vs = [];
            for (Vn.length >= N.lgSize && vs.unshift(Vn.splice(-N.lgSize, Vn.length).join("")); Vn.length > N.gSize;)
                vs.unshift(Vn.splice(-N.gSize, Vn.length).join(""));
            Vn.length && vs.unshift(Vn.join("")), Mt = vs.join(rn(S, H)), Wi.length && (Mt += rn(S, oe) + Wi.join("")), Ks && (Mt += rn(S, Me.Exponential) + "+" + Ks);
        }
        else
            Mt = rn(S, Me.Infinity); return Mt = M < 0 && !jn ? N.negPre + Mt + N.negSuf : N.posPre + Mt + N.posSuf, Mt; }(M, it, N, Me.CurrencyGroup, Me.CurrencyDecimal, oe).replace("\xa4", S).replace("\xa4", "").trim(); } function Wt(M) { const N = parseInt(M); if (isNaN(N))
            throw new Error("Invalid integer literal when parsing " + M); return N; } class Ht {
        } let gs = (() => { class M extends Ht {
            constructor(S) { super(), this.locale = S; }
            getPluralCategory(S, H) { switch (Yn(H || this.locale)(S)) {
                case Se.Zero: return "zero";
                case Se.One: return "one";
                case Se.Two: return "two";
                case Se.Few: return "few";
                case Se.Many: return "many";
                default: return "other";
            } }
        } return M.\u0275fac = function (S) { return new (S || M)(_.LFG(_.soG)); }, M.\u0275prov = _.Yz7({ token: M, factory: M.\u0275fac }), M; })(); function ki(M, N) { N = encodeURIComponent(N); for (const S of M.split(";")) {
            const H = S.indexOf("="), [oe, Be] = -1 == H ? [S, ""] : [S.slice(0, H), S.slice(H + 1)];
            if (oe.trim() === N)
                return decodeURIComponent(Be);
        } return null; } let ts = (() => { class M {
            constructor(S, H, oe, Be) { this._iterableDiffers = S, this._keyValueDiffers = H, this._ngEl = oe, this._renderer = Be, this._iterableDiffer = null, this._keyValueDiffer = null, this._initialClasses = [], this._rawClass = null; }
            set klass(S) { this._removeClasses(this._initialClasses), this._initialClasses = "string" == typeof S ? S.split(/\s+/) : [], this._applyClasses(this._initialClasses), this._applyClasses(this._rawClass); }
            set ngClass(S) { this._removeClasses(this._rawClass), this._applyClasses(this._initialClasses), this._iterableDiffer = null, this._keyValueDiffer = null, this._rawClass = "string" == typeof S ? S.split(/\s+/) : S, this._rawClass && ((0, _.sIi)(this._rawClass) ? this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create() : this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()); }
            ngDoCheck() { if (this._iterableDiffer) {
                const S = this._iterableDiffer.diff(this._rawClass);
                S && this._applyIterableChanges(S);
            }
            else if (this._keyValueDiffer) {
                const S = this._keyValueDiffer.diff(this._rawClass);
                S && this._applyKeyValueChanges(S);
            } }
            _applyKeyValueChanges(S) { S.forEachAddedItem(H => this._toggleClass(H.key, H.currentValue)), S.forEachChangedItem(H => this._toggleClass(H.key, H.currentValue)), S.forEachRemovedItem(H => { H.previousValue && this._toggleClass(H.key, !1); }); }
            _applyIterableChanges(S) { S.forEachAddedItem(H => { if ("string" != typeof H.item)
                throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${(0, _.AaK)(H.item)}`); this._toggleClass(H.item, !0); }), S.forEachRemovedItem(H => this._toggleClass(H.item, !1)); }
            _applyClasses(S) { S && (Array.isArray(S) || S instanceof Set ? S.forEach(H => this._toggleClass(H, !0)) : Object.keys(S).forEach(H => this._toggleClass(H, !!S[H]))); }
            _removeClasses(S) { S && (Array.isArray(S) || S instanceof Set ? S.forEach(H => this._toggleClass(H, !1)) : Object.keys(S).forEach(H => this._toggleClass(H, !1))); }
            _toggleClass(S, H) { (S = S.trim()) && S.split(/\s+/g).forEach(oe => { H ? this._renderer.addClass(this._ngEl.nativeElement, oe) : this._renderer.removeClass(this._ngEl.nativeElement, oe); }); }
        } return M.\u0275fac = function (S) { return new (S || M)(_.Y36(_.ZZ4), _.Y36(_.aQg), _.Y36(_.SBq), _.Y36(_.Qsj)); }, M.\u0275dir = _.lG2({ type: M, selectors: [["", "ngClass", ""]], inputs: { klass: ["class", "klass"], ngClass: "ngClass" } }), M; })(); class ns {
            constructor(N, S, H, oe) { this.$implicit = N, this.ngForOf = S, this.index = H, this.count = oe; }
            get first() { return 0 === this.index; }
            get last() { return this.index === this.count - 1; }
            get even() { return this.index % 2 == 0; }
            get odd() { return !this.even; }
        } let hi = (() => { class M {
            constructor(S, H, oe) { this._viewContainer = S, this._template = H, this._differs = oe, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null; }
            set ngForOf(S) { this._ngForOf = S, this._ngForOfDirty = !0; }
            set ngForTrackBy(S) { this._trackByFn = S; }
            get ngForTrackBy() { return this._trackByFn; }
            set ngForTemplate(S) { S && (this._template = S); }
            ngDoCheck() { if (this._ngForOfDirty) {
                this._ngForOfDirty = !1;
                const S = this._ngForOf;
                !this._differ && S && (this._differ = this._differs.find(S).create(this.ngForTrackBy));
            } if (this._differ) {
                const S = this._differ.diff(this._ngForOf);
                S && this._applyChanges(S);
            } }
            _applyChanges(S) { const H = this._viewContainer; S.forEachOperation((oe, Be, it) => { if (null == oe.previousIndex)
                H.createEmbeddedView(this._template, new ns(oe.item, this._ngForOf, -1, -1), null === it ? void 0 : it);
            else if (null == it)
                H.remove(null === Be ? void 0 : Be);
            else if (null !== Be) {
                const Mt = H.get(Be);
                H.move(Mt, it), fn(Mt, oe);
            } }); for (let oe = 0, Be = H.length; oe < Be; oe++) {
                const Mt = H.get(oe).context;
                Mt.index = oe, Mt.count = Be, Mt.ngForOf = this._ngForOf;
            } S.forEachIdentityChange(oe => { fn(H.get(oe.currentIndex), oe); }); }
            static ngTemplateContextGuard(S, H) { return !0; }
        } return M.\u0275fac = function (S) { return new (S || M)(_.Y36(_.s_b), _.Y36(_.Rgc), _.Y36(_.ZZ4)); }, M.\u0275dir = _.lG2({ type: M, selectors: [["", "ngFor", "", "ngForOf", ""]], inputs: { ngForOf: "ngForOf", ngForTrackBy: "ngForTrackBy", ngForTemplate: "ngForTemplate" } }), M; })(); function fn(M, N) { M.context.$implicit = N.item; } let An = (() => { class M {
            constructor(S, H) { this._viewContainer = S, this._context = new In, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = H; }
            set ngIf(S) { this._context.$implicit = this._context.ngIf = S, this._updateView(); }
            set ngIfThen(S) { Pi("ngIfThen", S), this._thenTemplateRef = S, this._thenViewRef = null, this._updateView(); }
            set ngIfElse(S) { Pi("ngIfElse", S), this._elseTemplateRef = S, this._elseViewRef = null, this._updateView(); }
            _updateView() { this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context))); }
            static ngTemplateContextGuard(S, H) { return !0; }
        } return M.\u0275fac = function (S) { return new (S || M)(_.Y36(_.s_b), _.Y36(_.Rgc)); }, M.\u0275dir = _.lG2({ type: M, selectors: [["", "ngIf", ""]], inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" } }), M; })(); class In {
            constructor() { this.$implicit = null, this.ngIf = null; }
        } function Pi(M, N) { if (N && !N.createEmbeddedView)
            throw new Error(`${M} must be a TemplateRef, but received '${(0, _.AaK)(N)}'.`); } class Ls {
            constructor(N, S) { this._viewContainerRef = N, this._templateRef = S, this._created = !1; }
            create() { this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef); }
            destroy() { this._created = !1, this._viewContainerRef.clear(); }
            enforceState(N) { N && !this._created ? this.create() : !N && this._created && this.destroy(); }
        } let ni = (() => { class M {
            constructor() { this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1; }
            set ngSwitch(S) { this._ngSwitch = S, 0 === this._caseCount && this._updateDefaultCases(!0); }
            _addCase() { return this._caseCount++; }
            _addDefault(S) { this._defaultViews || (this._defaultViews = []), this._defaultViews.push(S); }
            _matchCase(S) { const H = S == this._ngSwitch; return this._lastCasesMatched = this._lastCasesMatched || H, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), H; }
            _updateDefaultCases(S) { if (this._defaultViews && S !== this._defaultUsed) {
                this._defaultUsed = S;
                for (let H = 0; H < this._defaultViews.length; H++)
                    this._defaultViews[H].enforceState(S);
            } }
        } return M.\u0275fac = function (S) { return new (S || M); }, M.\u0275dir = _.lG2({ type: M, selectors: [["", "ngSwitch", ""]], inputs: { ngSwitch: "ngSwitch" } }), M; })(), di = (() => { class M {
            constructor(S, H, oe) { this.ngSwitch = oe, oe._addCase(), this._view = new Ls(S, H); }
            ngDoCheck() { this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase)); }
        } return M.\u0275fac = function (S) { return new (S || M)(_.Y36(_.s_b), _.Y36(_.Rgc), _.Y36(ni, 9)); }, M.\u0275dir = _.lG2({ type: M, selectors: [["", "ngSwitchCase", ""]], inputs: { ngSwitchCase: "ngSwitchCase" } }), M; })(), ss = (() => { class M {
            constructor(S, H, oe) { this._ngEl = S, this._differs = H, this._renderer = oe, this._ngStyle = null, this._differ = null; }
            set ngStyle(S) { this._ngStyle = S, !this._differ && S && (this._differ = this._differs.find(S).create()); }
            ngDoCheck() { if (this._differ) {
                const S = this._differ.diff(this._ngStyle);
                S && this._applyChanges(S);
            } }
            _setStyle(S, H) { const [oe, Be] = S.split("."); null != (H = null != H && Be ? `${H}${Be}` : H) ? this._renderer.setStyle(this._ngEl.nativeElement, oe, H) : this._renderer.removeStyle(this._ngEl.nativeElement, oe); }
            _applyChanges(S) { S.forEachRemovedItem(H => this._setStyle(H.key, null)), S.forEachAddedItem(H => this._setStyle(H.key, H.currentValue)), S.forEachChangedItem(H => this._setStyle(H.key, H.currentValue)); }
        } return M.\u0275fac = function (S) { return new (S || M)(_.Y36(_.SBq), _.Y36(_.aQg), _.Y36(_.Qsj)); }, M.\u0275dir = _.lG2({ type: M, selectors: [["", "ngStyle", ""]], inputs: { ngStyle: "ngStyle" } }), M; })(); function xi(M, N) { return new _.vHH(2100, ""); } const ms = /(?:[0-9A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDF70-\uDF81\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE70-\uDEBE\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])\S*/g; let oi = (() => { class M {
            transform(S) { if (null == S)
                return null; if ("string" != typeof S)
                throw xi(); return S.replace(ms, H => H[0].toUpperCase() + H.substr(1).toLowerCase()); }
        } return M.\u0275fac = function (S) { return new (S || M); }, M.\u0275pipe = _.Yjl({ name: "titlecase", type: M, pure: !0 }), M; })(), ii = (() => { class M {
            transform(S) { if (null == S)
                return null; if ("string" != typeof S)
                throw xi(); return S.toUpperCase(); }
        } return M.\u0275fac = function (S) { return new (S || M); }, M.\u0275pipe = _.Yjl({ name: "uppercase", type: M, pure: !0 }), M; })(), js = (() => { class M {
            constructor(S, H = "USD") { this._locale = S, this._defaultCurrencyCode = H; }
            transform(S, H = this._defaultCurrencyCode, oe = "symbol", Be, it) { if (!function Ni(M) { return !(null == M || "" === M || M != M); }(S))
                return null; it = it || this._locale, "boolean" == typeof oe && (oe = oe ? "symbol" : "code"); let Mt = H || this._defaultCurrencyCode; "code" !== oe && (Mt = "symbol" === oe || "symbol-narrow" === oe ? function zn(M, N, S = "en") { const H = function Hn(M) { return (0, _.cg1)(M)[_.wAp.Currencies]; }(S)[M] || ht[M] || [], oe = H[1]; return "narrow" === N && "string" == typeof oe ? oe : H[0] || M; }(Mt, "symbol" === oe ? "wide" : "narrow", it) : oe); try {
                return ui(function Vs(M) { if ("string" == typeof M && !isNaN(Number(M) - parseFloat(M)))
                    return Number(M); if ("number" != typeof M)
                    throw new Error(`${M} is not a number`); return M; }(S), it, Mt, H, Be);
            }
            catch (jn) {
                throw xi();
            } }
        } return M.\u0275fac = function (S) { return new (S || M)(_.Y36(_.soG, 16), _.Y36(_.EJc, 16)); }, M.\u0275pipe = _.Yjl({ name: "currency", type: M, pure: !0 }), M; })(); let zi = (() => { class M {
        } return M.\u0275fac = function (S) { return new (S || M); }, M.\u0275mod = _.oAB({ type: M }), M.\u0275inj = _.cJS({ providers: [{ provide: Ht, useClass: gs }] }), M; })(); const Ar = "browser"; function Bi(M) { return M === Ar; } function Sr(M) { return "server" === M; } let As = (() => { class M {
        } return M.\u0275prov = (0, _.Yz7)({ token: M, providedIn: "root", factory: () => new dr((0, _.LFG)(Le), window) }), M; })(); class dr {
            constructor(N, S) { this.document = N, this.window = S, this.offset = () => [0, 0]; }
            setOffset(N) { this.offset = Array.isArray(N) ? () => N : N; }
            getScrollPosition() { return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0]; }
            scrollToPosition(N) { this.supportsScrolling() && this.window.scrollTo(N[0], N[1]); }
            scrollToAnchor(N) { if (!this.supportsScrolling())
                return; const S = function fr(M, N) { const S = M.getElementById(N) || M.getElementsByName(N)[0]; if (S)
                return S; if ("function" == typeof M.createTreeWalker && M.body && (M.body.createShadowRoot || M.body.attachShadow)) {
                const H = M.createTreeWalker(M.body, NodeFilter.SHOW_ELEMENT);
                let oe = H.currentNode;
                for (; oe;) {
                    const Be = oe.shadowRoot;
                    if (Be) {
                        const it = Be.getElementById(N) || Be.querySelector(`[name="${N}"]`);
                        if (it)
                            return it;
                    }
                    oe = H.nextNode();
                }
            } return null; }(this.document, N); S && (this.scrollToElement(S), this.attemptFocus(S)); }
            setHistoryScrollRestoration(N) { if (this.supportScrollRestoration()) {
                const S = this.window.history;
                S && S.scrollRestoration && (S.scrollRestoration = N);
            } }
            scrollToElement(N) { const S = N.getBoundingClientRect(), H = S.left + this.window.pageXOffset, oe = S.top + this.window.pageYOffset, Be = this.offset(); this.window.scrollTo(H - Be[0], oe - Be[1]); }
            attemptFocus(N) { return N.focus(), this.document.activeElement === N; }
            supportScrollRestoration() { try {
                if (!this.supportsScrolling())
                    return !1;
                const N = Kn(this.window.history) || Kn(Object.getPrototypeOf(this.window.history));
                return !(!N || !N.writable && !N.set);
            }
            catch (N) {
                return !1;
            } }
            supportsScrolling() { try {
                return !!this.window && !!this.window.scrollTo && "pageXOffset" in this.window;
            }
            catch (N) {
                return !1;
            } }
        } function Kn(M) { return Object.getOwnPropertyDescriptor(M, "scrollRestoration"); } class Gn {
        } }, 520: (St, Pe, V) => { V.d(Pe, { eN: () => Me, JF: () => Un, PG: () => Ve }); var _ = V(9808), j = V(5e3), ie = V(9646), _e = V(8306), Ae = V(4351), Te = V(9300), Le = V(4004); class Ve {
        } class Ee {
        } class de {
            constructor(re) { this.normalizedNames = new Map, this.lazyUpdate = null, re ? this.lazyInit = "string" == typeof re ? () => { this.headers = new Map, re.split("\n").forEach(ne => { const ot = ne.indexOf(":"); if (ot > 0) {
                const ze = ne.slice(0, ot), xt = ze.toLowerCase(), Ge = ne.slice(ot + 1).trim();
                this.maybeSetNormalizedName(ze, xt), this.headers.has(xt) ? this.headers.get(xt).push(Ge) : this.headers.set(xt, [Ge]);
            } }); } : () => { this.headers = new Map, Object.keys(re).forEach(ne => { let ot = re[ne]; const ze = ne.toLowerCase(); "string" == typeof ot && (ot = [ot]), ot.length > 0 && (this.headers.set(ze, ot), this.maybeSetNormalizedName(ne, ze)); }); } : this.headers = new Map; }
            has(re) { return this.init(), this.headers.has(re.toLowerCase()); }
            get(re) { this.init(); const ne = this.headers.get(re.toLowerCase()); return ne && ne.length > 0 ? ne[0] : null; }
            keys() { return this.init(), Array.from(this.normalizedNames.values()); }
            getAll(re) { return this.init(), this.headers.get(re.toLowerCase()) || null; }
            append(re, ne) { return this.clone({ name: re, value: ne, op: "a" }); }
            set(re, ne) { return this.clone({ name: re, value: ne, op: "s" }); }
            delete(re, ne) { return this.clone({ name: re, value: ne, op: "d" }); }
            maybeSetNormalizedName(re, ne) { this.normalizedNames.has(ne) || this.normalizedNames.set(ne, re); }
            init() { this.lazyInit && (this.lazyInit instanceof de ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(re => this.applyUpdate(re)), this.lazyUpdate = null)); }
            copyFrom(re) { re.init(), Array.from(re.headers.keys()).forEach(ne => { this.headers.set(ne, re.headers.get(ne)), this.normalizedNames.set(ne, re.normalizedNames.get(ne)); }); }
            clone(re) { const ne = new de; return ne.lazyInit = this.lazyInit && this.lazyInit instanceof de ? this.lazyInit : this, ne.lazyUpdate = (this.lazyUpdate || []).concat([re]), ne; }
            applyUpdate(re) { const ne = re.name.toLowerCase(); switch (re.op) {
                case "a":
                case "s":
                    let ot = re.value;
                    if ("string" == typeof ot && (ot = [ot]), 0 === ot.length)
                        return;
                    this.maybeSetNormalizedName(re.name, ne);
                    const ze = ("a" === re.op ? this.headers.get(ne) : void 0) || [];
                    ze.push(...ot), this.headers.set(ne, ze);
                    break;
                case "d":
                    const xt = re.value;
                    if (xt) {
                        let Ge = this.headers.get(ne);
                        if (!Ge)
                            return;
                        Ge = Ge.filter(wt => -1 === xt.indexOf(wt)), 0 === Ge.length ? (this.headers.delete(ne), this.normalizedNames.delete(ne)) : this.headers.set(ne, Ge);
                    }
                    else
                        this.headers.delete(ne), this.normalizedNames.delete(ne);
            } }
            forEach(re) { this.init(), Array.from(this.normalizedNames.keys()).forEach(ne => re(this.normalizedNames.get(ne), this.headers.get(ne))); }
        } class ce {
            encodeKey(re) { return qe(re); }
            encodeValue(re) { return qe(re); }
            decodeKey(re) { return decodeURIComponent(re); }
            decodeValue(re) { return decodeURIComponent(re); }
        } const ke = /%(\d[a-f0-9])/gi, Ne = { 40: "@", "3A": ":", 24: "$", "2C": ",", "3B": ";", "2B": "+", "3D": "=", "3F": "?", "2F": "/" }; function qe(Xe) { return encodeURIComponent(Xe).replace(ke, (re, ne) => { var ot; return null !== (ot = Ne[ne]) && void 0 !== ot ? ot : re; }); } function Je(Xe) { return `${Xe}`; } class Ke {
            constructor(re = {}) { if (this.updates = null, this.cloneFrom = null, this.encoder = re.encoder || new ce, re.fromString) {
                if (re.fromObject)
                    throw new Error("Cannot specify both fromString and fromObject.");
                this.map = function fe(Xe, re) { const ne = new Map; return Xe.length > 0 && Xe.replace(/^\?/, "").split("&").forEach(ze => { const xt = ze.indexOf("="), [Ge, wt] = -1 == xt ? [re.decodeKey(ze), ""] : [re.decodeKey(ze.slice(0, xt)), re.decodeValue(ze.slice(xt + 1))], en = ne.get(Ge) || []; en.push(wt), ne.set(Ge, en); }), ne; }(re.fromString, this.encoder);
            }
            else
                re.fromObject ? (this.map = new Map, Object.keys(re.fromObject).forEach(ne => { const ot = re.fromObject[ne]; this.map.set(ne, Array.isArray(ot) ? ot : [ot]); })) : this.map = null; }
            has(re) { return this.init(), this.map.has(re); }
            get(re) { this.init(); const ne = this.map.get(re); return ne ? ne[0] : null; }
            getAll(re) { return this.init(), this.map.get(re) || null; }
            keys() { return this.init(), Array.from(this.map.keys()); }
            append(re, ne) { return this.clone({ param: re, value: ne, op: "a" }); }
            appendAll(re) { const ne = []; return Object.keys(re).forEach(ot => { const ze = re[ot]; Array.isArray(ze) ? ze.forEach(xt => { ne.push({ param: ot, value: xt, op: "a" }); }) : ne.push({ param: ot, value: ze, op: "a" }); }), this.clone(ne); }
            set(re, ne) { return this.clone({ param: re, value: ne, op: "s" }); }
            delete(re, ne) { return this.clone({ param: re, value: ne, op: "d" }); }
            toString() { return this.init(), this.keys().map(re => { const ne = this.encoder.encodeKey(re); return this.map.get(re).map(ot => ne + "=" + this.encoder.encodeValue(ot)).join("&"); }).filter(re => "" !== re).join("&"); }
            clone(re) { const ne = new Ke({ encoder: this.encoder }); return ne.cloneFrom = this.cloneFrom || this, ne.updates = (this.updates || []).concat(re), ne; }
            init() { null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(re => this.map.set(re, this.cloneFrom.map.get(re))), this.updates.forEach(re => { switch (re.op) {
                case "a":
                case "s":
                    const ne = ("a" === re.op ? this.map.get(re.param) : void 0) || [];
                    ne.push(Je(re.value)), this.map.set(re.param, ne);
                    break;
                case "d":
                    if (void 0 === re.value) {
                        this.map.delete(re.param);
                        break;
                    }
                    {
                        let ot = this.map.get(re.param) || [];
                        const ze = ot.indexOf(Je(re.value));
                        -1 !== ze && ot.splice(ze, 1), ot.length > 0 ? this.map.set(re.param, ot) : this.map.delete(re.param);
                    }
            } }), this.cloneFrom = this.updates = null); }
        } class rt {
            constructor() { this.map = new Map; }
            set(re, ne) { return this.map.set(re, ne), this; }
            get(re) { return this.map.has(re) || this.map.set(re, re.defaultValue()), this.map.get(re); }
            delete(re) { return this.map.delete(re), this; }
            has(re) { return this.map.has(re); }
            keys() { return this.map.keys(); }
        } function tt(Xe) { return "undefined" != typeof ArrayBuffer && Xe instanceof ArrayBuffer; } function he(Xe) { return "undefined" != typeof Blob && Xe instanceof Blob; } function at(Xe) { return "undefined" != typeof FormData && Xe instanceof FormData; } class vt {
            constructor(re, ne, ot, ze) { let xt; if (this.url = ne, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = re.toUpperCase(), function yt(Xe) { switch (Xe) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP": return !1;
                default: return !0;
            } }(this.method) || ze ? (this.body = void 0 !== ot ? ot : null, xt = ze) : xt = ot, xt && (this.reportProgress = !!xt.reportProgress, this.withCredentials = !!xt.withCredentials, xt.responseType && (this.responseType = xt.responseType), xt.headers && (this.headers = xt.headers), xt.context && (this.context = xt.context), xt.params && (this.params = xt.params)), this.headers || (this.headers = new de), this.context || (this.context = new rt), this.params) {
                const Ge = this.params.toString();
                if (0 === Ge.length)
                    this.urlWithParams = ne;
                else {
                    const wt = ne.indexOf("?");
                    this.urlWithParams = ne + (-1 === wt ? "?" : wt < ne.length - 1 ? "&" : "") + Ge;
                }
            }
            else
                this.params = new Ke, this.urlWithParams = ne; }
            serializeBody() { return null === this.body ? null : tt(this.body) || he(this.body) || at(this.body) || function cn(Xe) { return "undefined" != typeof URLSearchParams && Xe instanceof URLSearchParams; }(this.body) || "string" == typeof this.body ? this.body : this.body instanceof Ke ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString(); }
            detectContentTypeHeader() { return null === this.body || at(this.body) ? null : he(this.body) ? this.body.type || null : tt(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof Ke ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || "boolean" == typeof this.body ? "application/json" : null; }
            clone(re = {}) { var ne; const ot = re.method || this.method, ze = re.url || this.url, xt = re.responseType || this.responseType, Ge = void 0 !== re.body ? re.body : this.body, wt = void 0 !== re.withCredentials ? re.withCredentials : this.withCredentials, en = void 0 !== re.reportProgress ? re.reportProgress : this.reportProgress; let Sn = re.headers || this.headers, Jt = re.params || this.params; const me = null !== (ne = re.context) && void 0 !== ne ? ne : this.context; return void 0 !== re.setHeaders && (Sn = Object.keys(re.setHeaders).reduce((Fe, k) => Fe.set(k, re.setHeaders[k]), Sn)), re.setParams && (Jt = Object.keys(re.setParams).reduce((Fe, k) => Fe.set(k, re.setParams[k]), Jt)), new vt(ot, ze, Ge, { params: Jt, headers: Sn, context: me, reportProgress: en, responseType: xt, withCredentials: wt }); }
        } var ht = (() => ((ht = ht || {})[ht.Sent = 0] = "Sent", ht[ht.UploadProgress = 1] = "UploadProgress", ht[ht.ResponseHeader = 2] = "ResponseHeader", ht[ht.DownloadProgress = 3] = "DownloadProgress", ht[ht.Response = 4] = "Response", ht[ht.User = 5] = "User", ht))(); class pe {
            constructor(re, ne = 200, ot = "OK") { this.headers = re.headers || new de, this.status = void 0 !== re.status ? re.status : ne, this.statusText = re.statusText || ot, this.url = re.url || null, this.ok = this.status >= 200 && this.status < 300; }
        } class Se extends pe {
            constructor(re = {}) { super(re), this.type = ht.ResponseHeader; }
            clone(re = {}) { return new Se({ headers: re.headers || this.headers, status: void 0 !== re.status ? re.status : this.status, statusText: re.statusText || this.statusText, url: re.url || this.url || void 0 }); }
        } class Oe extends pe {
            constructor(re = {}) { super(re), this.type = ht.Response, this.body = void 0 !== re.body ? re.body : null; }
            clone(re = {}) { return new Oe({ body: void 0 !== re.body ? re.body : this.body, headers: re.headers || this.headers, status: void 0 !== re.status ? re.status : this.status, statusText: re.statusText || this.statusText, url: re.url || this.url || void 0 }); }
        } class We extends pe {
            constructor(re) { super(re, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${re.url || "(unknown url)"}` : `Http failure response for ${re.url || "(unknown url)"}: ${re.status} ${re.statusText}`, this.error = re.error || null; }
        } function ut(Xe, re) { return { body: re, headers: Xe.headers, context: Xe.context, observe: Xe.observe, params: Xe.params, reportProgress: Xe.reportProgress, responseType: Xe.responseType, withCredentials: Xe.withCredentials }; } let Me = (() => { class Xe {
            constructor(ne) { this.handler = ne; }
            request(ne, ot, ze = {}) { let xt; if (ne instanceof vt)
                xt = ne;
            else {
                let en, Sn;
                en = ze.headers instanceof de ? ze.headers : new de(ze.headers), ze.params && (Sn = ze.params instanceof Ke ? ze.params : new Ke({ fromObject: ze.params })), xt = new vt(ne, ot, void 0 !== ze.body ? ze.body : null, { headers: en, context: ze.context, params: Sn, reportProgress: ze.reportProgress, responseType: ze.responseType || "json", withCredentials: ze.withCredentials });
            } const Ge = (0, ie.of)(xt).pipe((0, Ae.b)(en => this.handler.handle(en))); if (ne instanceof vt || "events" === ze.observe)
                return Ge; const wt = Ge.pipe((0, Te.h)(en => en instanceof Oe)); switch (ze.observe || "body") {
                case "body": switch (xt.responseType) {
                    case "arraybuffer": return wt.pipe((0, Le.U)(en => { if (null !== en.body && !(en.body instanceof ArrayBuffer))
                        throw new Error("Response is not an ArrayBuffer."); return en.body; }));
                    case "blob": return wt.pipe((0, Le.U)(en => { if (null !== en.body && !(en.body instanceof Blob))
                        throw new Error("Response is not a Blob."); return en.body; }));
                    case "text": return wt.pipe((0, Le.U)(en => { if (null !== en.body && "string" != typeof en.body)
                        throw new Error("Response is not a string."); return en.body; }));
                    default: return wt.pipe((0, Le.U)(en => en.body));
                }
                case "response": return wt;
                default: throw new Error(`Unreachable: unhandled observe type ${ze.observe}}`);
            } }
            delete(ne, ot = {}) { return this.request("DELETE", ne, ot); }
            get(ne, ot = {}) { return this.request("GET", ne, ot); }
            head(ne, ot = {}) { return this.request("HEAD", ne, ot); }
            jsonp(ne, ot) { return this.request("JSONP", ne, { params: (new Ke).append(ot, "JSONP_CALLBACK"), observe: "body", responseType: "json" }); }
            options(ne, ot = {}) { return this.request("OPTIONS", ne, ot); }
            patch(ne, ot, ze = {}) { return this.request("PATCH", ne, ut(ze, ot)); }
            post(ne, ot, ze = {}) { return this.request("POST", ne, ut(ze, ot)); }
            put(ne, ot, ze = {}) { return this.request("PUT", ne, ut(ze, ot)); }
        } return Xe.\u0275fac = function (ne) { return new (ne || Xe)(j.LFG(Ve)); }, Xe.\u0275prov = j.Yz7({ token: Xe, factory: Xe.\u0275fac }), Xe; })(); class Xt {
            constructor(re, ne) { this.next = re, this.interceptor = ne; }
            handle(re) { return this.interceptor.intercept(re, this.next); }
        } const Zt = new j.OlP("HTTP_INTERCEPTORS"); let Cn = (() => { class Xe {
            intercept(ne, ot) { return ot.handle(ne); }
        } return Xe.\u0275fac = function (ne) { return new (ne || Xe); }, Xe.\u0275prov = j.Yz7({ token: Xe, factory: Xe.\u0275fac }), Xe; })(); const jt = /^\)\]\}',?\n/; let Tn = (() => { class Xe {
            constructor(ne) { this.xhrFactory = ne; }
            handle(ne) { if ("JSONP" === ne.method)
                throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed."); return new _e.y(ot => { const ze = this.xhrFactory.build(); if (ze.open(ne.method, ne.urlWithParams), ne.withCredentials && (ze.withCredentials = !0), ne.headers.forEach((k, G) => ze.setRequestHeader(k, G.join(","))), ne.headers.has("Accept") || ze.setRequestHeader("Accept", "application/json, text/plain, */*"), !ne.headers.has("Content-Type")) {
                const k = ne.detectContentTypeHeader();
                null !== k && ze.setRequestHeader("Content-Type", k);
            } if (ne.responseType) {
                const k = ne.responseType.toLowerCase();
                ze.responseType = "json" !== k ? k : "text";
            } const xt = ne.serializeBody(); let Ge = null; const wt = () => { if (null !== Ge)
                return Ge; const k = 1223 === ze.status ? 204 : ze.status, G = ze.statusText || "OK", le = new de(ze.getAllResponseHeaders()), ge = function rn(Xe) { return "responseURL" in Xe && Xe.responseURL ? Xe.responseURL : /^X-Request-URL:/m.test(Xe.getAllResponseHeaders()) ? Xe.getResponseHeader("X-Request-URL") : null; }(ze) || ne.url; return Ge = new Se({ headers: le, status: k, statusText: G, url: ge }), Ge; }, en = () => { let { headers: k, status: G, statusText: le, url: ge } = wt(), gt = null; 204 !== G && (gt = void 0 === ze.response ? ze.responseText : ze.response), 0 === G && (G = gt ? 200 : 0); let Vt = G >= 200 && G < 300; if ("json" === ne.responseType && "string" == typeof gt) {
                const X = gt;
                gt = gt.replace(jt, "");
                try {
                    gt = "" !== gt ? JSON.parse(gt) : null;
                }
                catch (et) {
                    gt = X, Vt && (Vt = !1, gt = { error: et, text: gt });
                }
            } Vt ? (ot.next(new Oe({ body: gt, headers: k, status: G, statusText: le, url: ge || void 0 })), ot.complete()) : ot.error(new We({ error: gt, headers: k, status: G, statusText: le, url: ge || void 0 })); }, Sn = k => { const { url: G } = wt(), le = new We({ error: k, status: ze.status || 0, statusText: ze.statusText || "Unknown Error", url: G || void 0 }); ot.error(le); }; let Jt = !1; const me = k => { Jt || (ot.next(wt()), Jt = !0); let G = { type: ht.DownloadProgress, loaded: k.loaded }; k.lengthComputable && (G.total = k.total), "text" === ne.responseType && !!ze.responseText && (G.partialText = ze.responseText), ot.next(G); }, Fe = k => { let G = { type: ht.UploadProgress, loaded: k.loaded }; k.lengthComputable && (G.total = k.total), ot.next(G); }; return ze.addEventListener("load", en), ze.addEventListener("error", Sn), ze.addEventListener("timeout", Sn), ze.addEventListener("abort", Sn), ne.reportProgress && (ze.addEventListener("progress", me), null !== xt && ze.upload && ze.upload.addEventListener("progress", Fe)), ze.send(xt), ot.next({ type: ht.Sent }), () => { ze.removeEventListener("error", Sn), ze.removeEventListener("abort", Sn), ze.removeEventListener("load", en), ze.removeEventListener("timeout", Sn), ne.reportProgress && (ze.removeEventListener("progress", me), null !== xt && ze.upload && ze.upload.removeEventListener("progress", Fe)), ze.readyState !== ze.DONE && ze.abort(); }; }); }
        } return Xe.\u0275fac = function (ne) { return new (ne || Xe)(j.LFG(_.JF)); }, Xe.\u0275prov = j.Yz7({ token: Xe, factory: Xe.\u0275fac }), Xe; })(); const Dn = new j.OlP("XSRF_COOKIE_NAME"), En = new j.OlP("XSRF_HEADER_NAME"); class Wn {
        } let Hn = (() => { class Xe {
            constructor(ne, ot, ze) { this.doc = ne, this.platform = ot, this.cookieName = ze, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0; }
            getToken() { if ("server" === this.platform)
                return null; const ne = this.doc.cookie || ""; return ne !== this.lastCookieString && (this.parseCount++, this.lastToken = (0, _.Mx)(ne, this.cookieName), this.lastCookieString = ne), this.lastToken; }
        } return Xe.\u0275fac = function (ne) { return new (ne || Xe)(j.LFG(_.K0), j.LFG(j.Lbi), j.LFG(Dn)); }, Xe.\u0275prov = j.Yz7({ token: Xe, factory: Xe.\u0275fac }), Xe; })(), Yn = (() => { class Xe {
            constructor(ne, ot) { this.tokenService = ne, this.headerName = ot; }
            intercept(ne, ot) { const ze = ne.url.toLowerCase(); if ("GET" === ne.method || "HEAD" === ne.method || ze.startsWith("http://") || ze.startsWith("https://"))
                return ot.handle(ne); const xt = this.tokenService.getToken(); return null !== xt && !ne.headers.has(this.headerName) && (ne = ne.clone({ headers: ne.headers.set(this.headerName, xt) })), ot.handle(ne); }
        } return Xe.\u0275fac = function (ne) { return new (ne || Xe)(j.LFG(Wn), j.LFG(En)); }, Xe.\u0275prov = j.Yz7({ token: Xe, factory: Xe.\u0275fac }), Xe; })(), si = (() => { class Xe {
            constructor(ne, ot) { this.backend = ne, this.injector = ot, this.chain = null; }
            handle(ne) { if (null === this.chain) {
                const ot = this.injector.get(Zt, []);
                this.chain = ot.reduceRight((ze, xt) => new Xt(ze, xt), this.backend);
            } return this.chain.handle(ne); }
        } return Xe.\u0275fac = function (ne) { return new (ne || Xe)(j.LFG(Ee), j.LFG(j.zs3)); }, Xe.\u0275prov = j.Yz7({ token: Xe, factory: Xe.\u0275fac }), Xe; })(), ei = (() => { class Xe {
            static disable() { return { ngModule: Xe, providers: [{ provide: Yn, useClass: Cn }] }; }
            static withOptions(ne = {}) { return { ngModule: Xe, providers: [ne.cookieName ? { provide: Dn, useValue: ne.cookieName } : [], ne.headerName ? { provide: En, useValue: ne.headerName } : []] }; }
        } return Xe.\u0275fac = function (ne) { return new (ne || Xe); }, Xe.\u0275mod = j.oAB({ type: Xe }), Xe.\u0275inj = j.cJS({ providers: [Yn, { provide: Zt, useExisting: Yn, multi: !0 }, { provide: Wn, useClass: Hn }, { provide: Dn, useValue: "XSRF-TOKEN" }, { provide: En, useValue: "X-XSRF-TOKEN" }] }), Xe; })(), Un = (() => { class Xe {
        } return Xe.\u0275fac = function (ne) { return new (ne || Xe); }, Xe.\u0275mod = j.oAB({ type: Xe }), Xe.\u0275inj = j.cJS({ providers: [Me, { provide: Ve, useClass: si }, Tn, { provide: Ee, useExisting: Tn }], imports: [[ei.withOptions({ cookieName: "XSRF-TOKEN", headerName: "X-XSRF-TOKEN" })]] }), Xe; })(); }, 5e3: (St, Pe, V) => { V.d(Pe, { deG: () => Lh, tb: () => W_, AFp: () => G_, ip1: () => Dm, CZH: () => Ql, hGG: () => iC, z2F: () => Gu, sBO: () => PD, Sil: () => wm, _Vd: () => ku, EJc: () => K_, SBq: () => Nu, qLn: () => Ua, vpe: () => ao, tBr: () => Rs, XFs: () => qt, OlP: () => gi, zs3: () => $s, ZZ4: () => Ph, aQg: () => Fh, soG: () => Oh, YKP: () => t_, h0i: () => Wl, PXZ: () => AD, R0b: () => ir, FiY: () => Do, Lbi: () => z_, g9A: () => $_, n_E: () => Eh, Qsj: () => c0, FYo: () => Xv, JOm: () => _r, q3G: () => wi, tp0: () => zo, Rgc: () => Hu, dDg: () => X_, GfV: () => Zv, s_b: () => Sh, ifc: () => xt, eFA: () => ex, G48: () => RD, Gpc: () => ce, f3M: () => bo, _c5: () => qD, VLi: () => CD, c2e: () => Y_, zSh: () => vu, wAp: () => gn, vHH: () => qe, EiD: () => Cc, mCW: () => Na, qzn: () => Qo, JVY: () => pc, pB0: () => ka, eBb: () => Zh, L6k: () => Xh, LAX: () => Jh, cg1: () => em, kL8: () => bv, yhl: () => wo, dqk: () => Jt, sIi: () => nl, CqO: () => tn, QGY: () => Ft, F4k: () => Qt, RDi: () => ko, AaK: () => Ve, z3N: () => Pr, qOj: () => Ll, TTD: () => Ni, _Bn: () => Kv, xp6: () => Xd, uIk: () => Bl, ekj: () => Qp, Suo: () => b_, Xpm: () => He, lG2: () => se, Yz7: () => Bt, cJS: () => jt, oAB: () => ri, Yjl: () => Y, Y36: () => D, _UZ: () => Ce, GkF: () => st, BQk: () => pt, ynx: () => At, qZA: () => ue, TgZ: () => ee, EpF: () => Rt, n5z: () => Kt, Ikx: () => Zp, LFG: () => Vi, $8M: () => Bn, $Z: () => T, NdJ: () => $n, CRH: () => D_, kcU: () => Xn, O4$: () => Ci, oxw: () => Zn, ALo: () => f_, lcZ: () => h_, Hsn: () => xa, F$t: () => io, Q6J: () => P, DdM: () => r_, VKq: () => o_, iGM: () => __, MAs: () => lh, CHM: () => g, LSH: () => Ec, Udp: () => Kp, WFA: () => Mn, d8E: () => Jp, YNc: () => Su, W1O: () => A_, _uU: () => iv, Oqu: () => Xp, hij: () => vh, Gf: () => x_ }); var _ = V(7579), j = V(727), ie = V(8306), _e = V(6451), Ae = V(3099); function Te(e) { for (let t in e)
            if (e[t] === Te)
                return t; throw Error("Could not find renamed property on target object."); } function Le(e, t) { for (const i in t)
            t.hasOwnProperty(i) && !e.hasOwnProperty(i) && (e[i] = t[i]); } function Ve(e) { if ("string" == typeof e)
            return e; if (Array.isArray(e))
            return "[" + e.map(Ve).join(", ") + "]"; if (null == e)
            return "" + e; if (e.overriddenName)
            return `${e.overriddenName}`; if (e.name)
            return `${e.name}`; const t = e.toString(); if (null == t)
            return "" + t; const i = t.indexOf("\n"); return -1 === i ? t : t.substring(0, i); } function Ee(e, t) { return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t; } const de = Te({ __forward_ref__: Te }); function ce(e) { return e.__forward_ref__ = ce, e.toString = function () { return Ve(this()); }, e; } function fe(e) { return ke(e) ? e() : e; } function ke(e) { return "function" == typeof e && e.hasOwnProperty(de) && e.__forward_ref__ === ce; } class qe extends Error {
            constructor(t, i) { super(function Je(e, t) { return `NG0${Math.abs(e)}${t ? ": " + t : ""}`; }(t, i)), this.code = t; }
        } function Ke(e) { return "string" == typeof e ? e : null == e ? "" : String(e); } function Ct(e) { return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : Ke(e); } function he(e, t) { const i = t ? ` in ${t}` : ""; throw new qe(-201, `No provider for ${Ct(e)} found${i}`); } function It(e, t) { null == e && function ve(e, t, i, a) { throw new Error(`ASSERTION ERROR: ${e}` + (null == a ? "" : ` [Expected=> ${i} ${a} ${t} <=Actual]`)); }(t, e, null, "!="); } function Bt(e) { return { token: e.token, providedIn: e.providedIn || null, factory: e.factory, value: void 0 }; } function jt(e) { return { providers: e.providers || [], imports: e.imports || [] }; } function rn(e) { return Tn(e, Hn) || Tn(e, si); } function Tn(e, t) { return e.hasOwnProperty(t) ? e[t] : null; } function Wn(e) { return e && (e.hasOwnProperty(Yn) || e.hasOwnProperty(Ji)) ? e[Yn] : null; } const Hn = Te({ \u0275prov: Te }), Yn = Te({ \u0275inj: Te }), si = Te({ ngInjectableDef: Te }), Ji = Te({ ngInjectorDef: Te }); var qt = (() => ((qt = qt || {})[qt.Default = 0] = "Default", qt[qt.Host = 1] = "Host", qt[qt.Self = 2] = "Self", qt[qt.SkipSelf = 4] = "SkipSelf", qt[qt.Optional = 8] = "Optional", qt))(); let ei; function ti(e) { const t = ei; return ei = e, t; } function zn(e, t, i) { const a = rn(e); return a && "root" == a.providedIn ? void 0 === a.value ? a.value = a.factory() : a.value : i & qt.Optional ? null : void 0 !== t ? t : void he(Ve(e), "Injector"); } function re(e) { return { toString: e }.toString(); } var ne = (() => ((ne = ne || {})[ne.OnPush = 0] = "OnPush", ne[ne.Default = 1] = "Default", ne))(), xt = (() => { return (e = xt || (xt = {}))[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", xt; var e; })(); const Ge = "undefined" != typeof globalThis && globalThis, wt = "undefined" != typeof window && window, en = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self, Jt = Ge || "undefined" != typeof global && global || wt || en, k = {}, G = [], le = Te({ \u0275cmp: Te }), ge = Te({ \u0275dir: Te }), gt = Te({ \u0275pipe: Te }), Vt = Te({ \u0275mod: Te }), X = Te({ \u0275fac: Te }), et = Te({ __NG_ELEMENT_ID__: Te }); let xe = 0; function He(e) { return re(() => { const i = {}, a = { type: e.type, providersResolver: null, decls: e.decls, vars: e.vars, factory: null, template: e.template || null, consts: e.consts || null, ngContentSelectors: e.ngContentSelectors, hostBindings: e.hostBindings || null, hostVars: e.hostVars || 0, hostAttrs: e.hostAttrs || null, contentQueries: e.contentQueries || null, declaredInputs: i, inputs: null, outputs: null, exportAs: e.exportAs || null, onPush: e.changeDetection === ne.OnPush, directiveDefs: null, pipeDefs: null, selectors: e.selectors || G, viewQuery: e.viewQuery || null, features: e.features || null, data: e.data || {}, encapsulation: e.encapsulation || xt.Emulated, id: "c", styles: e.styles || G, _: null, setInput: null, schemas: e.schemas || null, tView: null }, c = e.directives, f = e.features, m = e.pipes; return a.id += xe++, a.inputs = we(e.inputs, i), a.outputs = we(e.outputs), f && f.forEach(b => b(a)), a.directiveDefs = c ? () => ("function" == typeof c ? c() : c).map(Et) : null, a.pipeDefs = m ? () => ("function" == typeof m ? m() : m).map(un) : null, a; }); } function Et(e) { return J(e) || function Qe(e) { return e[ge] || null; }(e); } function un(e) { return function Nt(e) { return e[gt] || null; }(e); } const $t = {}; function ri(e) { return re(() => { const t = { type: e.type, bootstrap: e.bootstrap || G, declarations: e.declarations || G, imports: e.imports || G, exports: e.exports || G, transitiveCompileScopes: null, schemas: e.schemas || null, id: e.id || null }; return null != e.id && ($t[e.id] = e.type), t; }); } function we(e, t) { if (null == e)
            return k; const i = {}; for (const a in e)
            if (e.hasOwnProperty(a)) {
                let c = e[a], f = c;
                Array.isArray(c) && (f = c[1], c = c[0]), i[c] = a, t && (t[c] = f);
            } return i; } const se = He; function Y(e) { return { type: e.type, name: e.name, factory: null, pure: !1 !== e.pure, onDestroy: e.type.prototype.ngOnDestroy || null }; } function J(e) { return e[le] || null; } function Gt(e, t) { const i = e[Vt] || null; if (!i && !0 === t)
            throw new Error(`Type ${Ve(e)} does not have '\u0275mod' property.`); return i; } function ni(e) { return Array.isArray(e) && "object" == typeof e[1]; } function di(e) { return Array.isArray(e) && !0 === e[1]; } function ps(e) { return 0 != (8 & e.flags); } function is(e) { return 2 == (2 & e.flags); } function ks(e) { return 1 == (1 & e.flags); } function pi(e) { return null !== e.template; } function ss(e) { return 0 != (512 & e[2]); } function os(e, t) { return e.hasOwnProperty(X) ? e[X] : null; } class js {
            constructor(t, i, a) { this.previousValue = t, this.currentValue = i, this.firstChange = a; }
            isFirstChange() { return this.firstChange; }
        } function Ni() { return Vs; } function Vs(e) { return e.type.prototype.ngOnChanges && (e.setInput = Hs), cr; } function cr() { const e = Ar(this), t = null == e ? void 0 : e.current; if (t) {
            const i = e.previous;
            if (i === k)
                e.previous = t;
            else
                for (let a in t)
                    i[a] = t[a];
            e.current = null, this.ngOnChanges(t);
        } } function Hs(e, t, i, a) { const c = Ar(e) || function ws(e, t) { return e[zi] = t; }(e, { previous: k, current: null }), f = c.current || (c.current = {}), m = c.previous, b = this.declaredInputs[i], w = m[b]; f[b] = new js(w && w.currentValue, t, m === k), e[a] = t; } Ni.ngInherit = !0; const zi = "__ngSimpleChanges__"; function Ar(e) { return e[zi] || null; } const Sr = "http://www.w3.org/2000/svg"; let Es; function ko(e) { Es = e; } function Kn(e) { return !!e.listen; } const fr = { createRenderer: (e, t) => function As() { return void 0 !== Es ? Es : "undefined" != typeof document ? document : void 0; }() }; function Gn(e) { for (; Array.isArray(e);)
            e = e[0]; return e; } function S(e, t) { return Gn(t[e]); } function H(e, t) { return Gn(t[e.index]); } function Be(e, t) { return e.data[t]; } function it(e, t) { return e[t]; } function Mt(e, t) { const i = t[e]; return ni(i) ? i : i[0]; } function jn(e) { return 4 == (4 & e[2]); } function On(e) { return 128 == (128 & e[2]); } function dn(e, t) { return null == t ? null : e[t]; } function fi(e) { e[18] = 0; } function Vn(e, t) { e[5] += t; let i = e, a = e[3]; for (; null !== a && (1 === t && 1 === i[5] || -1 === t && 0 === i[5]);)
            a[5] += t, i = a, a = a[3]; } const Ot = { lFrame: Ts(null), bindingsEnabled: !0, isInCheckNoChangesMode: !1 }; function Us() { return Ot.bindingsEnabled; } function ft() { return Ot.lFrame.lView; } function R() { return Ot.lFrame.tView; } function g(e) { return Ot.lFrame.contextLView = e, e[8]; } function p() { let e = E(); for (; null !== e && 64 === e.type;)
            e = e.parent; return e; } function E() { return Ot.lFrame.currentTNode; } function $(e, t) { const i = Ot.lFrame; i.currentTNode = e, i.isParent = t; } function q() { return Ot.lFrame.isParent; } function Z() { Ot.lFrame.isParent = !1; } function _t() { return Ot.isInCheckNoChangesMode; } function Pt(e) { Ot.isInCheckNoChangesMode = e; } function zt() { const e = Ot.lFrame; let t = e.bindingRootIndex; return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t; } function nn() { return Ot.lFrame.bindingIndex++; } function Fi(e, t) { const i = Ot.lFrame; i.bindingIndex = i.bindingRootIndex = e, Ms(t); } function Ms(e) { Ot.lFrame.currentDirectiveIndex = e; } function Ui(e) { const t = Ot.lFrame.currentDirectiveIndex; return -1 === t ? null : e[t]; } function Si() { return Ot.lFrame.currentQueryIndex; } function as(e) { Ot.lFrame.currentQueryIndex = e; } function Di(e) { const t = e[1]; return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null; } function ls(e, t, i) { if (i & qt.SkipSelf) {
            let c = t, f = e;
            for (; !(c = c.parent, null !== c || i & qt.Host || (c = Di(f), null === c || (f = f[15], 10 & c.type)));)
                ;
            if (null === c)
                return !1;
            t = c, e = f;
        } const a = Ot.lFrame = Ir(); return a.currentTNode = t, a.lView = e, !0; } function hr(e) { const t = Ir(), i = e[1]; Ot.lFrame = t, t.currentTNode = i.firstChild, t.lView = e, t.tView = i, t.contextLView = e, t.bindingIndex = i.bindingStartIndex, t.inI18n = !1; } function Ir() { const e = Ot.lFrame, t = null === e ? null : e.child; return null === t ? Ts(e) : t; } function Ts(e) { const t = { currentTNode: null, isParent: !0, lView: null, tView: null, selectedIndex: -1, contextLView: null, elementDepthCount: 0, currentNamespace: null, currentDirectiveIndex: -1, bindingRootIndex: -1, bindingIndex: -1, currentQueryIndex: 0, parent: e, child: null, inI18n: !1 }; return null !== e && (e.child = t), t; } function Ur() { const e = Ot.lFrame; return Ot.lFrame = e.parent, e.currentTNode = null, e.lView = null, e; } const Gr = Ur; function Lt() { const e = Ur(); e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0; } function ln() { return Ot.lFrame.selectedIndex; } function Qn(e) { Ot.lFrame.selectedIndex = e; } function Rn() { const e = Ot.lFrame; return Be(e.tView, e.selectedIndex); } function Ci() { Ot.lFrame.currentNamespace = Sr; } function Xn() { !function fo() { Ot.lFrame.currentNamespace = null; }(); } function _s(e, t) { for (let i = t.directiveStart, a = t.directiveEnd; i < a; i++) {
            const f = e.data[i].type.prototype, { ngAfterContentInit: m, ngAfterContentChecked: b, ngAfterViewInit: w, ngAfterViewChecked: O, ngOnDestroy: L } = f;
            m && (e.contentHooks || (e.contentHooks = [])).push(-i, m), b && ((e.contentHooks || (e.contentHooks = [])).push(i, b), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(i, b)), w && (e.viewHooks || (e.viewHooks = [])).push(-i, w), O && ((e.viewHooks || (e.viewHooks = [])).push(i, O), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(i, O)), null != L && (e.destroyHooks || (e.destroyHooks = [])).push(i, L);
        } } function Yi(e, t, i) { Ca(e, t, 3, i); } function cs(e, t, i, a) { (3 & e[2]) === i && Ca(e, t, i, a); } function Qs(e, t) { let i = e[2]; (3 & i) === t && (i &= 2047, i += 1, e[2] = i); } function Ca(e, t, i, a) { const f = null != a ? a : -1, m = t.length - 1; let b = 0; for (let w = void 0 !== a ? 65535 & e[18] : 0; w < m; w++)
            if ("number" == typeof t[w + 1]) {
                if (b = t[w], null != a && b >= a)
                    break;
            }
            else
                t[w] < 0 && (e[18] += 65536), (b < f || -1 == f) && (ql(e, i, t, w), e[18] = (4294901760 & e[18]) + w + 2), w++; } function ql(e, t, i, a) { const c = i[a] < 0, f = i[a + 1], b = e[c ? -i[a] : i[a]]; if (c) {
            if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
                e[2] += 2048;
                try {
                    f.call(b);
                }
                finally { }
            }
        }
        else
            try {
                f.call(b);
            }
            finally { } } class yi {
            constructor(t, i, a) { this.factory = t, this.resolving = !1, this.canSeeViewProviders = i, this.injectImpl = a; }
        } function go(e, t, i) { const a = Kn(e); let c = 0; for (; c < i.length;) {
            const f = i[c];
            if ("number" == typeof f) {
                if (0 !== f)
                    break;
                c++;
                const m = i[c++], b = i[c++], w = i[c++];
                a ? e.setAttribute(t, b, w, m) : t.setAttributeNS(m, b, w);
            }
            else {
                const m = f, b = i[++c];
                Wr(m) ? a && e.setProperty(t, m, b) : a ? e.setAttribute(t, m, b) : t.setAttribute(m, b), c++;
            }
        } return c; } function Bo(e) { return 3 === e || 4 === e || 6 === e; } function Wr(e) { return 64 === e.charCodeAt(0); } function Yr(e, t) { if (null !== t && 0 !== t.length)
            if (null === e || 0 === e.length)
                e = t.slice();
            else {
                let i = -1;
                for (let a = 0; a < t.length; a++) {
                    const c = t[a];
                    "number" == typeof c ? i = c : 0 === i || Jl(e, i, c, null, -1 === i || 2 === i ? t[++a] : null);
                }
            } return e; } function Jl(e, t, i, a, c) { let f = 0, m = e.length; if (-1 === t)
            m = -1;
        else
            for (; f < e.length;) {
                const b = e[f++];
                if ("number" == typeof b) {
                    if (b === t) {
                        m = -1;
                        break;
                    }
                    if (b > t) {
                        m = f - 1;
                        break;
                    }
                }
            } for (; f < e.length;) {
            const b = e[f];
            if ("number" == typeof b)
                break;
            if (b === i) {
                if (null === a)
                    return void (null !== c && (e[f + 1] = c));
                if (a === e[f + 1])
                    return void (e[f + 2] = c);
            }
            f++, null !== a && f++, null !== c && f++;
        } -1 !== m && (e.splice(m, 0, t), f = m + 1), e.splice(f++, 0, i), null !== a && e.splice(f++, 0, a), null !== c && e.splice(f++, 0, c); } function gr(e) { return -1 !== e; } function pr(e) { return 32767 & e; } function Or(e, t) { let i = function ec(e) { return e >> 16; }(e), a = t; for (; i > 0;)
            a = a[15], i--; return a; } let wa = !0; function po(e) { const t = wa; return wa = e, t; } let Ea = 0; function yo(e, t) { const i = jo(e, t); if (-1 !== i)
            return i; const a = t[1]; a.firstCreatePass && (e.injectorIndex = t.length, Kr(a.data, e), Kr(t, null), Kr(a.blueprint, null)); const c = vo(e, t), f = e.injectorIndex; if (gr(c)) {
            const m = pr(c), b = Or(c, t), w = b[1].data;
            for (let O = 0; O < 8; O++)
                t[f + O] = b[m + O] | w[m + O];
        } return t[f + 8] = c, f; } function Kr(e, t) { e.push(0, 0, 0, 0, 0, 0, 0, 0, t); } function jo(e, t) { return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null === t[e.injectorIndex + 8] ? -1 : e.injectorIndex; } function vo(e, t) { if (e.parent && -1 !== e.parent.injectorIndex)
            return e.parent.injectorIndex; let i = 0, a = null, c = t; for (; null !== c;) {
            const f = c[1], m = f.type;
            if (a = 2 === m ? f.declTNode : 1 === m ? c[6] : null, null === a)
                return -1;
            if (i++, c = c[15], -1 !== a.injectorIndex)
                return a.injectorIndex | i << 16;
        } return -1; } function Qr(e, t, i) { !function nc(e, t, i) { let a; "string" == typeof i ? a = i.charCodeAt(0) || 0 : i.hasOwnProperty(et) && (a = i[et]), null == a && (a = i[et] = Ea++); const c = 255 & a; t.data[e + (c >> 5)] |= 1 << c; }(e, t, i); } function Rr(e, t, i) { if (i & qt.Optional)
            return e; he(t, "NodeInjector"); } function C(e, t, i, a) { if (i & qt.Optional && void 0 === a && (a = null), 0 == (i & (qt.Self | qt.Host))) {
            const c = e[9], f = ti(void 0);
            try {
                return c ? c.get(t, a, i & qt.Optional) : zn(t, a, i & qt.Optional);
            }
            finally {
                ti(f);
            }
        } return Rr(a, t, i); } function x(e, t, i, a = qt.Default, c) { if (null !== e) {
            const f = function te(e) { if ("string" == typeof e)
                return e.charCodeAt(0) || 0; const t = e.hasOwnProperty(et) ? e[et] : void 0; return "number" == typeof t ? t >= 0 ? 255 & t : A : t; }(i);
            if ("function" == typeof f) {
                if (!ls(t, e, a))
                    return a & qt.Host ? Rr(c, i, a) : C(t, i, a, c);
                try {
                    const m = f(a);
                    if (null != m || a & qt.Optional)
                        return m;
                    he(i);
                }
                finally {
                    Gr();
                }
            }
            else if ("number" == typeof f) {
                let m = null, b = jo(e, t), w = -1, O = a & qt.Host ? t[16][6] : null;
                for ((-1 === b || a & qt.SkipSelf) && (w = -1 === b ? vo(e, t) : t[b + 8], -1 !== w && kt(a, !1) ? (m = t[1], b = pr(w), t = Or(w, t)) : b = -1); -1 !== b;) {
                    const L = t[1];
                    if (Ue(f, b, L.data)) {
                        const W = I(b, t, i, m, a, O);
                        if (W !== v)
                            return W;
                    }
                    w = t[b + 8], -1 !== w && kt(a, t[1].data[b + 8] === O) && Ue(f, b, t) ? (m = L, b = pr(w), t = Or(w, t)) : b = -1;
                }
            }
        } return C(t, i, a, c); } const v = {}; function A() { return new mn(p(), ft()); } function I(e, t, i, a, c, f) { const m = t[1], b = m.data[e + 8], L = B(b, m, i, null == a ? is(b) && wa : a != m && 0 != (3 & b.type), c & qt.Host && f === b); return null !== L ? K(t, m, L, b) : v; } function B(e, t, i, a, c) { const f = e.providerIndexes, m = t.data, b = 1048575 & f, w = e.directiveStart, L = f >> 20, ae = c ? b + L : e.directiveEnd; for (let De = a ? b : b + L; De < ae; De++) {
            const Ze = m[De];
            if (De < w && i === Ze || De >= w && Ze.type === i)
                return De;
        } if (c) {
            const De = m[w];
            if (De && pi(De) && De.type === i)
                return w;
        } return null; } function K(e, t, i, a) { let c = e[i]; const f = t.data; if (function cl(e) { return e instanceof yi; }(c)) {
            const m = c;
            m.resolving && function rt(e, t) { const i = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : ""; throw new qe(-200, `Circular dependency in DI detected for ${e}${i}`); }(Ct(f[i]));
            const b = po(m.canSeeViewProviders);
            m.resolving = !0;
            const w = m.injectImpl ? ti(m.injectImpl) : null;
            ls(e, a, qt.Default);
            try {
                c = e[i] = m.factory(void 0, f, e, a), t.firstCreatePass && i >= a.directiveStart && function Mi(e, t, i) { const { ngOnChanges: a, ngOnInit: c, ngDoCheck: f } = t.type.prototype; if (a) {
                    const m = Vs(t);
                    (i.preOrderHooks || (i.preOrderHooks = [])).push(e, m), (i.preOrderCheckHooks || (i.preOrderCheckHooks = [])).push(e, m);
                } c && (i.preOrderHooks || (i.preOrderHooks = [])).push(0 - e, c), f && ((i.preOrderHooks || (i.preOrderHooks = [])).push(e, f), (i.preOrderCheckHooks || (i.preOrderCheckHooks = [])).push(e, f)); }(i, f[i], t);
            }
            finally {
                null !== w && ti(w), po(b), m.resolving = !1, Gr();
            }
        } return c; } function Ue(e, t, i) { return !!(i[t + (e >> 5)] & 1 << e); } function kt(e, t) { return !(e & qt.Self || e & qt.Host && t); } class mn {
            constructor(t, i) { this._tNode = t, this._lView = i; }
            get(t, i, a) { return x(this._tNode, this._lView, t, a, i); }
        } function Kt(e) { return re(() => { const t = e.prototype.constructor, i = t[X] || Nn(t), a = Object.prototype; let c = Object.getPrototypeOf(e.prototype).constructor; for (; c && c !== a;) {
            const f = c[X] || Nn(c);
            if (f && f !== i)
                return f;
            c = Object.getPrototypeOf(c);
        } return f => new f; }); } function Nn(e) { return ke(e) ? () => { const t = Nn(fe(e)); return t && t(); } : os(e); } function Bn(e) { return function ic(e, t) { if ("class" === t)
            return e.classes; if ("style" === t)
            return e.styles; const i = e.attrs; if (i) {
            const a = i.length;
            let c = 0;
            for (; c < a;) {
                const f = i[c];
                if (Bo(f))
                    break;
                if (0 === f)
                    c += 2;
                else if ("number" == typeof f)
                    for (c++; c < a && "string" == typeof i[c];)
                        c++;
                else {
                    if (f === t)
                        return i[c + 1];
                    c += 2;
                }
            }
        } return null; }(p(), e); } const Gi = "__parameters__"; function Qi(e, t, i) { return re(() => { const a = function qr(e) { return function (...i) { if (e) {
            const a = e(...i);
            for (const c in a)
                this[c] = a[c];
        } }; }(t); function c(...f) { if (this instanceof c)
            return a.apply(this, f), this; const m = new c(...f); return b.annotation = m, b; function b(w, O, L) { const W = w.hasOwnProperty(Gi) ? w[Gi] : Object.defineProperty(w, Gi, { value: [] })[Gi]; for (; W.length <= L;)
            W.push(null); return (W[L] = W[L] || []).push(m), w; } } return i && (c.prototype = Object.create(i.prototype)), c.prototype.ngMetadataName = e, c.annotationCls = c, c; }); } class gi {
            constructor(t, i) { this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof i ? this.__NG_ELEMENT_ID__ = i : void 0 !== i && (this.\u0275prov = Bt({ token: this, providedIn: i.providedIn || "root", factory: i.factory })); }
            toString() { return `InjectionToken ${this._desc}`; }
        } const Lh = new gi("AnalyzeForEntryComponents"); function Gs(e, t) { void 0 === t && (t = e); for (let i = 0; i < e.length; i++) {
            let a = e[i];
            Array.isArray(a) ? (t === e && (t = e.slice(0, i)), Gs(a, t)) : t !== e && t.push(a);
        } return t; } function mr(e, t) { e.forEach(i => Array.isArray(i) ? mr(i, t) : t(i)); } function Wu(e, t, i) { t >= e.length ? e.push(i) : e.splice(t, 0, i); } function xo(e, t) { return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]; } function Aa(e, t) { const i = []; for (let a = 0; a < e; a++)
            i.push(t); return i; } function Os(e, t, i) { let a = Uo(e, t); return a >= 0 ? e[1 | a] = i : (a = ~a, function Ku(e, t, i, a) { let c = e.length; if (c == t)
            e.push(i, a);
        else if (1 === c)
            e.push(a, e[0]), e[0] = i;
        else {
            for (c--, e.push(e[c - 1], e[c]); c > t;)
                e[c] = e[c - 2], c--;
            e[t] = i, e[t + 1] = a;
        } }(e, a, t, i)), a; } function Ma(e, t) { const i = Uo(e, t); if (i >= 0)
            return e[1 | i]; } function Uo(e, t) { return function qu(e, t, i) { let a = 0, c = e.length >> i; for (; c !== a;) {
            const f = a + (c - a >> 1), m = e[f << i];
            if (t === m)
                return f << i;
            m > t ? c = f : a = f + 1;
        } return ~(c << i); }(e, t, 1); } const Xr = {}, ac = "__NG_DI_FLAG__", pl = "ngTempTokenPath", ed = /\n/gm, td = "__source", Ta = Te({ provide: String, useValue: Te }); let Go; function nd(e) { const t = Go; return Go = e, t; } function Hh(e, t = qt.Default) { if (void 0 === Go)
            throw new qe(203, ""); return null === Go ? zn(e, void 0, t) : Go.get(e, t & qt.Optional ? null : void 0, t); } function Vi(e, t = qt.Default) { return (function Un() { return ei; }() || Hh)(fe(e), t); } const bo = Vi; function $o(e) { const t = []; for (let i = 0; i < e.length; i++) {
            const a = fe(e[i]);
            if (Array.isArray(a)) {
                if (0 === a.length)
                    throw new qe(900, "");
                let c, f = qt.Default;
                for (let m = 0; m < a.length; m++) {
                    const b = a[m], w = Uh(b);
                    "number" == typeof w ? -1 === w ? c = b.token : f |= w : c = b;
                }
                t.push(Vi(c, f));
            }
            else
                t.push(Vi(a));
        } return t; } function Ia(e, t) { return e[ac] = t, e.prototype[ac] = t, e; } function Uh(e) { return e[ac]; } const Rs = Ia(Qi("Inject", e => ({ token: e })), -1), Do = Ia(Qi("Optional"), 8), zo = Ia(Qi("SkipSelf"), 4); let yl; function Ko(e) { var t; return (null === (t = function dc() { if (void 0 === yl && (yl = null, Jt.trustedTypes))
            try {
                yl = Jt.trustedTypes.createPolicy("angular", { createHTML: e => e, createScript: e => e, createScriptURL: e => e });
            }
            catch (e) { } return yl; }()) || void 0 === t ? void 0 : t.createHTML(e)) || e; } class Co {
            constructor(t) { this.changingThisBreaksApplicationSecurity = t; }
            toString() { return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`; }
        } class qh extends Co {
            getTypeName() { return "HTML"; }
        } class La extends Co {
            getTypeName() { return "Style"; }
        } class dd extends Co {
            getTypeName() { return "Script"; }
        } class Zr extends Co {
            getTypeName() { return "URL"; }
        } class fd extends Co {
            getTypeName() { return "ResourceURL"; }
        } function Pr(e) { return e instanceof Co ? e.changingThisBreaksApplicationSecurity : e; } function Qo(e, t) { const i = wo(e); if (null != i && i !== t) {
            if ("ResourceURL" === i && "URL" === t)
                return !0;
            throw new Error(`Required a safe ${t}, got a ${i} (see https://g.co/ng/security#xss)`);
        } return i === t; } function wo(e) { return e instanceof Co && e.getTypeName() || null; } function pc(e) { return new qh(e); } function Xh(e) { return new La(e); } function Zh(e) { return new dd(e); } function Jh(e) { return new Zr(e); } function ka(e) { return new fd(e); } class eg {
            constructor(t) { this.inertDocumentHelper = t; }
            getInertBodyElement(t) { t = "<body><remove></remove>" + t; try {
                const i = (new window.DOMParser).parseFromString(Ko(t), "text/html").body;
                return null === i ? this.inertDocumentHelper.getInertBodyElement(t) : (i.removeChild(i.firstChild), i);
            }
            catch (i) {
                return null;
            } }
        } class tg {
            constructor(t) { if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), null == this.inertDocument.body) {
                const i = this.inertDocument.createElement("html");
                this.inertDocument.appendChild(i);
                const a = this.inertDocument.createElement("body");
                i.appendChild(a);
            } }
            getInertBodyElement(t) { const i = this.inertDocument.createElement("template"); if ("content" in i)
                return i.innerHTML = Ko(t), i; const a = this.inertDocument.createElement("body"); return a.innerHTML = Ko(t), this.defaultDoc.documentMode && this.stripCustomNsAttrs(a), a; }
            stripCustomNsAttrs(t) { const i = t.attributes; for (let c = i.length - 1; 0 < c; c--) {
                const m = i.item(c).name;
                ("xmlns:ns1" === m || 0 === m.indexOf("ns1:")) && t.removeAttribute(m);
            } let a = t.firstChild; for (; a;)
                a.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(a), a = a.nextSibling; }
        } const ng = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi, yc = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i; function Na(e) { return (e = String(e)).match(ng) || e.match(yc) ? e : "unsafe:" + e; } function yr(e) { const t = {}; for (const i of e.split(","))
            t[i] = !0; return t; } function Ba(...e) { const t = {}; for (const i of e)
            for (const a in i)
                i.hasOwnProperty(a) && (t[a] = !0); return t; } const pd = yr("area,br,col,hr,img,wbr"), qo = yr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"), vc = yr("rp,rt"), _c = Ba(pd, Ba(qo, yr("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Ba(vc, yr("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), Ba(vc, qo)), xc = yr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"), bc = yr("srcset"), yd = Ba(xc, bc, yr("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), yr("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")), Dc = yr("script,style,template"); class ja {
            constructor() { this.sanitizedSomething = !1, this.buf = []; }
            sanitizeChildren(t) { let i = t.firstChild, a = !0; for (; i;)
                if (i.nodeType === Node.ELEMENT_NODE ? a = this.startElement(i) : i.nodeType === Node.TEXT_NODE ? this.chars(i.nodeValue) : this.sanitizedSomething = !0, a && i.firstChild)
                    i = i.firstChild;
                else
                    for (; i;) {
                        i.nodeType === Node.ELEMENT_NODE && this.endElement(i);
                        let c = this.checkClobberedElement(i, i.nextSibling);
                        if (c) {
                            i = c;
                            break;
                        }
                        i = this.checkClobberedElement(i, i.parentNode);
                    } return this.buf.join(""); }
            startElement(t) { const i = t.nodeName.toLowerCase(); if (!_c.hasOwnProperty(i))
                return this.sanitizedSomething = !0, !Dc.hasOwnProperty(i); this.buf.push("<"), this.buf.push(i); const a = t.attributes; for (let c = 0; c < a.length; c++) {
                const f = a.item(c), m = f.name, b = m.toLowerCase();
                if (!yd.hasOwnProperty(b)) {
                    this.sanitizedSomething = !0;
                    continue;
                }
                let w = f.value;
                xc[b] && (w = Na(w)), bc[b] && (e = w, w = (e = String(e)).split(",").map(t => Na(t.trim())).join(", ")), this.buf.push(" ", m, '="', vd(w), '"');
            } var e; return this.buf.push(">"), !0; }
            endElement(t) { const i = t.nodeName.toLowerCase(); _c.hasOwnProperty(i) && !pd.hasOwnProperty(i) && (this.buf.push("</"), this.buf.push(i), this.buf.push(">")); }
            chars(t) { this.buf.push(vd(t)); }
            checkClobberedElement(t, i) { if (i && (t.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY)
                throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`); return i; }
        } const rg = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, og = /([^\#-~ |!])/g; function vd(e) { return e.replace(/&/g, "&amp;").replace(rg, function (t) { return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"; }).replace(og, function (t) { return "&#" + t.charCodeAt(0) + ";"; }).replace(/</g, "&lt;").replace(/>/g, "&gt;"); } let Va; function Cc(e, t) { let i = null; try {
            Va = Va || function mc(e) { const t = new tg(e); return function hd() { try {
                return !!(new window.DOMParser).parseFromString(Ko(""), "text/html");
            }
            catch (e) {
                return !1;
            } }() ? new eg(t) : t; }(e);
            let a = t ? String(t) : "";
            i = Va.getInertBodyElement(a);
            let c = 5, f = a;
            do {
                if (0 === c)
                    throw new Error("Failed to sanitize html because the input is unstable");
                c--, a = f, f = i.innerHTML, i = Va.getInertBodyElement(a);
            } while (a !== f);
            return Ko((new ja).sanitizeChildren(wc(i) || i));
        }
        finally {
            if (i) {
                const a = wc(i) || i;
                for (; a.firstChild;)
                    a.removeChild(a.firstChild);
            }
        } } function wc(e) { return "content" in e && function ag(e) { return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName; }(e) ? e.content : null; } var wi = (() => ((wi = wi || {})[wi.NONE = 0] = "NONE", wi[wi.HTML = 1] = "HTML", wi[wi.STYLE = 2] = "STYLE", wi[wi.SCRIPT = 3] = "SCRIPT", wi[wi.URL = 4] = "URL", wi[wi.RESOURCE_URL = 5] = "RESOURCE_URL", wi))(); function Ec(e) { const t = function Ha() { const e = ft(); return e && e[12]; }(); return t ? t.sanitize(wi.URL, e) || "" : Qo(e, "URL") ? Pr(e) : Na(Ke(e)); } const Mc = "__ngContext__"; function Hi(e, t) { e[Mc] = t; } function Tc(e) { const t = function Xo(e) { return e[Mc] || null; }(e); return t ? Array.isArray(t) ? t : t.lView : null; } function Fc(e) { return e.ngOriginalError; } function xl(e, ...t) { e.error(...t); } class Ua {
            constructor() { this._console = console; }
            handleError(t) { const i = this._findOriginalError(t), a = function wd(e) { return e && e.ngErrorLogger || xl; }(t); a(this._console, "ERROR", t), i && a(this._console, "ORIGINAL ERROR", i); }
            _findOriginalError(t) { let i = t && Fc(t); for (; i && Fc(i);)
                i = Fc(i); return i || null; }
        } const Md = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Jt))(); function Zs(e) { return e instanceof Function ? e() : e; } var _r = (() => ((_r = _r || {})[_r.Important = 1] = "Important", _r[_r.DashCase = 2] = "DashCase", _r))(); function Ao(e, t) { return undefined(e, t); } function Jr(e) { const t = e[3]; return di(t) ? t[3] : t; } function Bc(e) { return Dl(e[13]); } function za(e) { return Dl(e[4]); } function Dl(e) { for (; null !== e && !di(e);)
            e = e[4]; return e; } function So(e, t, i, a, c) { if (null != a) {
            let f, m = !1;
            di(a) ? f = a : ni(a) && (m = !0, a = a[0]);
            const b = Gn(a);
            0 === e && null !== i ? null == c ? Bd(t, i, b) : eo(t, i, b, c || null, !0) : 1 === e && null !== i ? eo(t, i, b, c || null, !0) : 2 === e ? function Gd(e, t, i) { const a = To(e, t); a && function Gc(e, t, i, a) { Kn(e) ? e.removeChild(t, i, a) : t.removeChild(i); }(e, a, t, i); }(t, b, m) : 3 === e && t.destroyNode(b), null != f && function Rg(e, t, i, a, c) { const f = i[7]; f !== Gn(i) && So(t, e, a, f, c); for (let b = 10; b < i.length; b++) {
                const w = i[b];
                Wa(w[1], w, e, t, a, f);
            } }(t, e, f, i, c);
        } } function Vc(e, t, i) { return Kn(e) ? e.createElement(t, i) : null === i ? e.createElement(t) : e.createElementNS(i, t); } function Mo(e, t) { const i = e[9], a = i.indexOf(t), c = t[3]; 1024 & t[2] && (t[2] &= -1025, Vn(c, -1)), i.splice(a, 1); } function Jo(e, t) { if (e.length <= 10)
            return; const i = 10 + t, a = e[i]; if (a) {
            const c = a[17];
            null !== c && c !== e && Mo(c, a), t > 0 && (e[i - 1][4] = a[4]);
            const f = xo(e, 10 + t);
            !function Eg(e, t) { Wa(e, t, t[11], 2, null, null), t[0] = null, t[6] = null; }(a[1], a);
            const m = f[19];
            null !== m && m.detachView(f[1]), a[3] = null, a[4] = null, a[2] &= -129;
        } return a; } function fs(e, t) { if (!(256 & t[2])) {
            const i = t[11];
            Kn(i) && i.destroyNode && Wa(e, t, i, 3, null, null), function Pd(e) { let t = e[13]; if (!t)
                return Hc(e[1], e); for (; t;) {
                let i = null;
                if (ni(t))
                    i = t[13];
                else {
                    const a = t[10];
                    a && (i = a);
                }
                if (!i) {
                    for (; t && !t[4] && t !== e;)
                        ni(t) && Hc(t[1], t), t = t[3];
                    null === t && (t = e), ni(t) && Hc(t[1], t), i = t && t[4];
                }
                t = i;
            } }(t);
        } } function Hc(e, t) { if (!(256 & t[2])) {
            t[2] &= -129, t[2] |= 256, function Ld(e, t) { let i; if (null != e && null != (i = e.destroyHooks))
                for (let a = 0; a < i.length; a += 2) {
                    const c = t[i[a]];
                    if (!(c instanceof yi)) {
                        const f = i[a + 1];
                        if (Array.isArray(f))
                            for (let m = 0; m < f.length; m += 2) {
                                const b = c[f[m]], w = f[m + 1];
                                try {
                                    w.call(b);
                                }
                                finally { }
                            }
                        else
                            try {
                                f.call(c);
                            }
                            finally { }
                    }
                } }(e, t), function Fd(e, t) { const i = e.cleanup, a = t[7]; let c = -1; if (null !== i)
                for (let f = 0; f < i.length - 1; f += 2)
                    if ("string" == typeof i[f]) {
                        const m = i[f + 1], b = "function" == typeof m ? m(t) : Gn(t[m]), w = a[c = i[f + 2]], O = i[f + 3];
                        "boolean" == typeof O ? b.removeEventListener(i[f], w, O) : O >= 0 ? a[c = O]() : a[c = -O].unsubscribe(), f += 2;
                    }
                    else {
                        const m = a[c = i[f + 1]];
                        i[f].call(m);
                    } if (null !== a) {
                for (let f = c + 1; f < a.length; f++)
                    a[f]();
                t[7] = null;
            } }(e, t), 1 === t[1].type && Kn(t[11]) && t[11].destroy();
            const i = t[17];
            if (null !== i && di(t[3])) {
                i !== t[3] && Mo(i, t);
                const a = t[19];
                null !== a && a.detachView(e);
            }
        } } function kd(e, t, i) { return function Nd(e, t, i) { let a = t; for (; null !== a && 40 & a.type;)
            a = (t = a).parent; if (null === a)
            return i[0]; if (2 & a.flags) {
            const c = e.data[a.directiveStart].encapsulation;
            if (c === xt.None || c === xt.Emulated)
                return null;
        } return H(a, i); }(e, t.parent, i); } function eo(e, t, i, a, c) { Kn(e) ? e.insertBefore(t, i, a, c) : t.insertBefore(i, a, c); } function Bd(e, t, i) { Kn(e) ? e.appendChild(t, i) : t.appendChild(i); } function Uc(e, t, i, a, c) { null !== a ? eo(e, t, i, a, c) : Bd(e, t, i); } function To(e, t) { return Kn(e) ? e.parentNode(t) : t.parentNode; } function jd(e, t, i) { return Vd(e, t, i); } let Vd = function Ig(e, t, i) { return 40 & e.type ? H(e, i) : null; }; function wl(e, t, i, a) { const c = kd(e, a, t), f = t[11], b = jd(a.parent || t[6], a, t); if (null != c)
            if (Array.isArray(i))
                for (let w = 0; w < i.length; w++)
                    Uc(f, c, i[w], b, !1);
            else
                Uc(f, c, i, b, !1); } function Io(e, t) { if (null !== t) {
            const i = t.type;
            if (3 & i)
                return H(t, e);
            if (4 & i)
                return ea(-1, e[t.index]);
            if (8 & i) {
                const a = t.child;
                if (null !== a)
                    return Io(e, a);
                {
                    const c = e[t.index];
                    return di(c) ? ea(-1, c) : Gn(c);
                }
            }
            if (32 & i)
                return Ao(t, e)() || Gn(e[t.index]);
            {
                const a = Ud(e, t);
                return null !== a ? Array.isArray(a) ? a[0] : Io(Jr(e[16]), a) : Io(e, t.next);
            }
        } return null; } function Ud(e, t) { return null !== t ? e[16][6].projection[t.projection] : null; } function ea(e, t) { const i = 10 + e + 1; if (i < t.length) {
            const a = t[i], c = a[1].firstChild;
            if (null !== c)
                return Io(a, c);
        } return t[7]; } function zc(e, t, i, a, c, f, m) { for (; null != i;) {
            const b = a[i.index], w = i.type;
            if (m && 0 === t && (b && Hi(Gn(b), a), i.flags |= 4), 64 != (64 & i.flags))
                if (8 & w)
                    zc(e, t, i.child, a, c, f, !1), So(t, e, c, b, f);
                else if (32 & w) {
                    const O = Ao(i, a);
                    let L;
                    for (; L = O();)
                        So(t, e, c, L, f);
                    So(t, e, c, b, f);
                }
                else
                    16 & w ? $d(e, t, a, i, c, f) : So(t, e, c, b, f);
            i = m ? i.projectionNext : i.next;
        } } function Wa(e, t, i, a, c, f) { zc(i, a, e.firstChild, t, c, f, !1); } function $d(e, t, i, a, c, f) { const m = i[16], w = m[6].projection[a.projection]; if (Array.isArray(w))
            for (let O = 0; O < w.length; O++)
                So(t, e, c, w[O], f);
        else
            zc(e, t, w, m[3], c, f, !0); } function zd(e, t, i) { Kn(e) ? e.setAttribute(t, "style", i) : t.style.cssText = i; } function Wc(e, t, i) { Kn(e) ? "" === i ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", i) : t.className = i; } function Wd(e, t, i) { let a = e.length; for (;;) {
            const c = e.indexOf(t, i);
            if (-1 === c)
                return c;
            if (0 === c || e.charCodeAt(c - 1) <= 32) {
                const f = t.length;
                if (c + f === a || e.charCodeAt(c + f) <= 32)
                    return c;
            }
            i = c + 1;
        } } const Ka = "ng-template"; function Fg(e, t, i) { let a = 0; for (; a < e.length;) {
            let c = e[a++];
            if (i && "class" === c) {
                if (c = e[a], -1 !== Wd(c.toLowerCase(), t, 0))
                    return !0;
            }
            else if (1 === c) {
                for (; a < e.length && "string" == typeof (c = e[a++]);)
                    if (c.toLowerCase() === t)
                        return !0;
                return !1;
            }
        } return !1; } function Yd(e) { return 4 === e.type && e.value !== Ka; } function Lg(e, t, i) { return t === (4 !== e.type || i ? e.value : Ka); } function kg(e, t, i) { let a = 4; const c = e.attrs || [], f = function jg(e) { for (let t = 0; t < e.length; t++)
            if (Bo(e[t]))
                return t; return e.length; }(c); let m = !1; for (let b = 0; b < t.length; b++) {
            const w = t[b];
            if ("number" != typeof w) {
                if (!m)
                    if (4 & a) {
                        if (a = 2 | 1 & a, "" !== w && !Lg(e, w, i) || "" === w && 1 === t.length) {
                            if (Js(a))
                                return !1;
                            m = !0;
                        }
                    }
                    else {
                        const O = 8 & a ? w : t[++b];
                        if (8 & a && null !== e.attrs) {
                            if (!Fg(e.attrs, O, i)) {
                                if (Js(a))
                                    return !1;
                                m = !0;
                            }
                            continue;
                        }
                        const W = Ng(8 & a ? "class" : w, c, Yd(e), i);
                        if (-1 === W) {
                            if (Js(a))
                                return !1;
                            m = !0;
                            continue;
                        }
                        if ("" !== O) {
                            let ae;
                            ae = W > f ? "" : c[W + 1].toLowerCase();
                            const De = 8 & a ? ae : null;
                            if (De && -1 !== Wd(De, O, 0) || 2 & a && O !== ae) {
                                if (Js(a))
                                    return !1;
                                m = !0;
                            }
                        }
                    }
            }
            else {
                if (!m && !Js(a) && !Js(w))
                    return !1;
                if (m && Js(w))
                    continue;
                m = !1, a = w | 1 & a;
            }
        } return Js(a) || m; } function Js(e) { return 0 == (1 & e); } function Ng(e, t, i, a) { if (null === t)
            return -1; let c = 0; if (a || !i) {
            let f = !1;
            for (; c < t.length;) {
                const m = t[c];
                if (m === e)
                    return c;
                if (3 === m || 6 === m)
                    f = !0;
                else {
                    if (1 === m || 2 === m) {
                        let b = t[++c];
                        for (; "string" == typeof b;)
                            b = t[++c];
                        continue;
                    }
                    if (4 === m)
                        break;
                    if (0 === m) {
                        c += 4;
                        continue;
                    }
                }
                c += f ? 1 : 2;
            }
            return -1;
        } return function Qd(e, t) { let i = e.indexOf(4); if (i > -1)
            for (i++; i < e.length;) {
                const a = e[i];
                if ("number" == typeof a)
                    return -1;
                if (a === t)
                    return i;
                i++;
            } return -1; }(t, e); } function Kd(e, t, i = !1) { for (let a = 0; a < t.length; a++)
            if (kg(e, t[a], i))
                return !0; return !1; } function Vg(e, t) { e: for (let i = 0; i < t.length; i++) {
            const a = t[i];
            if (e.length === a.length) {
                for (let c = 0; c < e.length; c++)
                    if (e[c] !== a[c])
                        continue e;
                return !0;
            }
        } return !1; } function qd(e, t) { return e ? ":not(" + t.trim() + ")" : t; } function ta(e) { let t = e[0], i = 1, a = 2, c = "", f = !1; for (; i < e.length;) {
            let m = e[i];
            if ("string" == typeof m)
                if (2 & a) {
                    const b = e[++i];
                    c += "[" + m + (b.length > 0 ? '="' + b + '"' : "") + "]";
                }
                else
                    8 & a ? c += "." + m : 4 & a && (c += " " + m);
            else
                "" !== c && !Js(m) && (t += qd(f, c), c = ""), a = m, f = f || !Js(a);
            i++;
        } return "" !== c && (t += qd(f, c)), t; } const bn = {}; function Xd(e) { Zd(R(), ft(), ln() + e, _t()); } function Zd(e, t, i, a) { if (!a)
            if (3 == (3 & t[2])) {
                const f = e.preOrderCheckHooks;
                null !== f && Yi(t, f, i);
            }
            else {
                const f = e.preOrderHooks;
                null !== f && cs(t, f, 0, i);
            } Qn(i); } function Al(e, t) { return e << 17 | t << 2; } function er(e) { return e >> 17 & 32767; } function Yc(e) { return 2 | e; } function Lr(e) { return (131068 & e) >> 2; } function Kc(e, t) { return -131069 & e | t << 2; } function Sl(e) { return 1 | e; } function df(e, t) { const i = e.contentQueries; if (null !== i)
            for (let a = 0; a < i.length; a += 2) {
                const c = i[a], f = i[a + 1];
                if (-1 !== f) {
                    const m = e.data[f];
                    as(c), m.contentQueries(2, t[f], f);
                }
            } } function qa(e, t, i, a, c, f, m, b, w, O) { const L = t.blueprint.slice(); return L[0] = c, L[2] = 140 | a, fi(L), L[3] = L[15] = e, L[8] = i, L[10] = m || e && e[10], L[11] = b || e && e[11], L[12] = w || e && e[12] || null, L[9] = O || e && e[9] || null, L[6] = f, L[16] = 2 == t.type ? e[16] : L, L; } function ia(e, t, i, a, c) { let f = e.data[t]; if (null === f)
            f = function su(e, t, i, a, c) { const f = E(), m = q(), w = e.data[t] = function Zg(e, t, i, a, c, f) { return { type: i, index: a, insertBeforeIndex: null, injectorIndex: t ? t.injectorIndex : -1, directiveStart: -1, directiveEnd: -1, directiveStylingLast: -1, propertyBindings: null, flags: 0, providerIndexes: 0, value: c, attrs: f, mergedAttrs: null, localNames: null, initialInputs: void 0, inputs: null, outputs: null, tViews: null, next: null, projectionNext: null, child: null, parent: t, projection: null, styles: null, stylesWithoutHost: null, residualStyles: void 0, classes: null, classesWithoutHost: null, residualClasses: void 0, classBindings: 0, styleBindings: 0 }; }(0, m ? f : f && f.parent, i, t, a, c); return null === e.firstChild && (e.firstChild = w), null !== f && (m ? null == f.child && null !== w.parent && (f.child = w) : null === f.next && (f.next = w)), w; }(e, t, i, a, c), function ai() { return Ot.lFrame.inI18n; }() && (f.flags |= 64);
        else if (64 & f.type) {
            f.type = i, f.value = a, f.attrs = c;
            const m = function F() { const e = Ot.lFrame, t = e.currentTNode; return e.isParent ? t : t.parent; }();
            f.injectorIndex = null === m ? -1 : m.injectorIndex;
        } return $(f, !0), f; } function sa(e, t, i, a) { if (0 === i)
            return -1; const c = t.length; for (let f = 0; f < i; f++)
            t.push(a), e.blueprint.push(a), e.data.push(null); return c; } function Xa(e, t, i) { hr(t); try {
            const a = e.viewQuery;
            null !== a && gu(1, a, i);
            const c = e.template;
            null !== c && hf(e, t, c, 1, i), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && df(e, t), e.staticViewQueries && gu(2, e.viewQuery, i);
            const f = e.components;
            null !== f && function qg(e, t) { for (let i = 0; i < t.length; i++)
                Mf(e, t[i]); }(t, f);
        }
        catch (a) {
            throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), a;
        }
        finally {
            t[2] &= -5, Lt();
        } } function tr(e, t, i, a) { const c = t[2]; if (256 == (256 & c))
            return; hr(t); const f = _t(); try {
            fi(t), function Yt(e) { return Ot.lFrame.bindingIndex = e; }(e.bindingStartIndex), null !== i && hf(e, t, i, 2, a);
            const m = 3 == (3 & c);
            if (!f)
                if (m) {
                    const O = e.preOrderCheckHooks;
                    null !== O && Yi(t, O, null);
                }
                else {
                    const O = e.preOrderHooks;
                    null !== O && cs(t, O, 0, null), Qs(t, 0);
                }
            if (function lp(e) { for (let t = Bc(e); null !== t; t = za(t)) {
                if (!t[2])
                    continue;
                const i = t[9];
                for (let a = 0; a < i.length; a++) {
                    const c = i[a], f = c[3];
                    0 == (1024 & c[2]) && Vn(f, 1), c[2] |= 1024;
                }
            } }(t), function ap(e) { for (let t = Bc(e); null !== t; t = za(t))
                for (let i = 10; i < t.length; i++) {
                    const a = t[i], c = a[1];
                    On(a) && tr(c, a, c.template, a[8]);
                } }(t), null !== e.contentQueries && df(e, t), !f)
                if (m) {
                    const O = e.contentCheckHooks;
                    null !== O && Yi(t, O);
                }
                else {
                    const O = e.contentHooks;
                    null !== O && cs(t, O, 1), Qs(t, 1);
                }
            !function Kg(e, t) { const i = e.hostBindingOpCodes; if (null !== i)
                try {
                    for (let a = 0; a < i.length; a++) {
                        const c = i[a];
                        if (c < 0)
                            Qn(~c);
                        else {
                            const f = c, m = i[++a], b = i[++a];
                            Fi(m, f), b(2, t[f]);
                        }
                    }
                }
                finally {
                    Qn(-1);
                } }(e, t);
            const b = e.components;
            null !== b && function Qg(e, t) { for (let i = 0; i < t.length; i++)
                cp(e, t[i]); }(t, b);
            const w = e.viewQuery;
            if (null !== w && gu(2, w, a), !f)
                if (m) {
                    const O = e.viewCheckHooks;
                    null !== O && Yi(t, O);
                }
                else {
                    const O = e.viewHooks;
                    null !== O && cs(t, O, 2), Qs(t, 2);
                }
            !0 === e.firstUpdatePass && (e.firstUpdatePass = !1), f || (t[2] &= -73), 1024 & t[2] && (t[2] &= -1025, Vn(t[3], -1));
        }
        finally {
            Lt();
        } } function ff(e, t, i, a) { const c = t[10], f = !_t(), m = jn(t); try {
            f && !m && c.begin && c.begin(), m && Xa(e, t, a), tr(e, t, i, a);
        }
        finally {
            f && !m && c.end && c.end();
        } } function hf(e, t, i, a, c) { const f = ln(), m = 2 & a; try {
            Qn(-1), m && t.length > 20 && Zd(e, t, 20, _t()), i(a, c);
        }
        finally {
            Qn(f);
        } } function gf(e, t, i) { if (ps(t)) {
            const c = t.directiveEnd;
            for (let f = t.directiveStart; f < c; f++) {
                const m = e.data[f];
                m.contentQueries && m.contentQueries(1, i[f], f);
            }
        } } function ru(e, t, i) { !Us() || (function lu(e, t, i, a) { const c = i.directiveStart, f = i.directiveEnd; e.firstCreatePass || yo(i, t), Hi(a, t); const m = i.initialInputs; for (let b = c; b < f; b++) {
            const w = e.data[b], O = pi(w);
            O && Ef(t, i, w);
            const L = K(t, e, b, i);
            Hi(L, t), null !== m && op(0, b - c, L, w, 0, m), O && (Mt(i.index, t)[8] = L);
        } }(e, t, i, H(i, t)), 128 == (128 & i.flags) && function ip(e, t, i) { const a = i.directiveStart, c = i.directiveEnd, m = i.index, b = function mi() { return Ot.lFrame.currentDirectiveIndex; }(); try {
            Qn(m);
            for (let w = a; w < c; w++) {
                const O = e.data[w], L = t[w];
                Ms(w), (null !== O.hostBindings || 0 !== O.hostVars || null !== O.hostAttrs) && sp(O, L);
            }
        }
        finally {
            Qn(-1), Ms(b);
        } }(e, t, i)); } function ou(e, t, i = H) { const a = t.localNames; if (null !== a) {
            let c = t.index + 1;
            for (let f = 0; f < a.length; f += 2) {
                const m = a[f + 1], b = -1 === m ? i(t, e) : e[m];
                e[c++] = b;
            }
        } } function pf(e) { const t = e.tView; return null === t || t.incompleteFirstPass ? e.tView = Ro(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts) : t; } function Ro(e, t, i, a, c, f, m, b, w, O) { const L = 20 + a, W = L + c, ae = function Xg(e, t) { const i = []; for (let a = 0; a < t; a++)
            i.push(a < e ? null : bn); return i; }(L, W), De = "function" == typeof O ? O() : O; return ae[1] = { type: e, blueprint: ae, template: i, queries: null, viewQuery: b, declTNode: t, data: ae.slice().fill(null, L), bindingStartIndex: L, expandoStartIndex: W, hostBindingOpCodes: null, firstCreatePass: !0, firstUpdatePass: !0, staticViewQueries: !1, staticContentQueries: !1, preOrderHooks: null, preOrderCheckHooks: null, contentHooks: null, contentCheckHooks: null, viewHooks: null, viewCheckHooks: null, destroyHooks: null, cleanup: null, contentQueries: null, components: null, directiveRegistry: "function" == typeof f ? f() : f, pipeRegistry: "function" == typeof m ? m() : m, firstChild: null, schemas: w, consts: De, incompleteFirstPass: !1 }; } function vf(e, t, i, a) { const c = oa(t); null === i ? c.push(a) : (c.push(i), e.firstCreatePass && Of(e).push(a, c.length - 1)); } function _f(e, t, i) { for (let a in e)
            if (e.hasOwnProperty(a)) {
                const c = e[a];
                (i = null === i ? {} : i).hasOwnProperty(a) ? i[a].push(t, c) : i[a] = [t, c];
            } return i; } function Ps(e, t, i, a, c, f, m, b) { const w = H(t, i); let L, O = t.inputs; !b && null != O && (L = O[a]) ? (mu(e, i, L, a, c), is(t) && function ep(e, t) { const i = Mt(t, e); 16 & i[2] || (i[2] |= 64); }(i, t.index)) : 3 & t.type && (a = function ra(e) { return "class" === e ? "className" : "for" === e ? "htmlFor" : "formaction" === e ? "formAction" : "innerHtml" === e ? "innerHTML" : "readonly" === e ? "readOnly" : "tabindex" === e ? "tabIndex" : e; }(a), c = null != m ? m(c, t.value || "", a) : c, Kn(f) ? f.setProperty(w, a, c) : Wr(a) || (w.setProperty ? w.setProperty(a, c) : w[a] = c)); } function au(e, t, i, a) { let c = !1; if (Us()) {
            const f = function rp(e, t, i) { const a = e.directiveRegistry; let c = null; if (a)
                for (let f = 0; f < a.length; f++) {
                    const m = a[f];
                    Kd(i, m.selectors, !1) && (c || (c = []), Qr(yo(i, t), e, m.type), pi(m) ? (bf(e, i), c.unshift(m)) : c.push(m));
                } return c; }(e, t, i), m = null === a ? null : { "": -1 };
            if (null !== f) {
                c = !0, wf(i, e.data.length, f.length);
                for (let L = 0; L < f.length; L++) {
                    const W = f[L];
                    W.providersResolver && W.providersResolver(W);
                }
                let b = !1, w = !1, O = sa(e, t, f.length, null);
                for (let L = 0; L < f.length; L++) {
                    const W = f[L];
                    i.mergedAttrs = Yr(i.mergedAttrs, W.hostAttrs), cu(e, i, t, O, W), Cf(O, W, m), null !== W.contentQueries && (i.flags |= 8), (null !== W.hostBindings || null !== W.hostAttrs || 0 !== W.hostVars) && (i.flags |= 128);
                    const ae = W.type.prototype;
                    !b && (ae.ngOnChanges || ae.ngOnInit || ae.ngDoCheck) && ((e.preOrderHooks || (e.preOrderHooks = [])).push(i.index), b = !0), !w && (ae.ngOnChanges || ae.ngDoCheck) && ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(i.index), w = !0), O++;
                }
                !function Jg(e, t) { const a = t.directiveEnd, c = e.data, f = t.attrs, m = []; let b = null, w = null; for (let O = t.directiveStart; O < a; O++) {
                    const L = c[O], W = L.inputs, ae = null === f || Yd(t) ? null : Af(W, f);
                    m.push(ae), b = _f(W, O, b), w = _f(L.outputs, O, w);
                } null !== b && (b.hasOwnProperty("class") && (t.flags |= 16), b.hasOwnProperty("style") && (t.flags |= 32)), t.initialInputs = m, t.inputs = b, t.outputs = w; }(e, i);
            }
            m && function Df(e, t, i) { if (t) {
                const a = e.localNames = [];
                for (let c = 0; c < t.length; c += 2) {
                    const f = i[t[c + 1]];
                    if (null == f)
                        throw new qe(-301, `Export of name '${t[c + 1]}' not found!`);
                    a.push(t[c], f);
                }
            } }(i, a, m);
        } return i.mergedAttrs = Yr(i.mergedAttrs, i.attrs), c; } function Il(e, t, i, a, c, f) { const m = f.hostBindings; if (m) {
            let b = e.hostBindingOpCodes;
            null === b && (b = e.hostBindingOpCodes = []);
            const w = ~t.index;
            (function np(e) { let t = e.length; for (; t > 0;) {
                const i = e[--t];
                if ("number" == typeof i && i < 0)
                    return i;
            } return 0; })(b) != w && b.push(w), b.push(a, c, m);
        } } function sp(e, t) { null !== e.hostBindings && e.hostBindings(1, t); } function bf(e, t) { t.flags |= 2, (e.components || (e.components = [])).push(t.index); } function Cf(e, t, i) { if (i) {
            if (t.exportAs)
                for (let a = 0; a < t.exportAs.length; a++)
                    i[t.exportAs[a]] = e;
            pi(t) && (i[""] = e);
        } } function wf(e, t, i) { e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + i, e.providerIndexes = t; } function cu(e, t, i, a, c) { e.data[a] = c; const f = c.factory || (c.factory = os(c.type)), m = new yi(f, pi(c), null); e.blueprint[a] = m, i[a] = m, Il(e, t, 0, a, sa(e, i, c.hostVars, bn), c); } function Ef(e, t, i) { const a = H(t, e), c = pf(i), f = e[10], m = Ol(e, qa(e, c, null, i.onPush ? 64 : 16, a, t, f, f.createRenderer(a, i), null, null)); e[t.index] = m; } function Dr(e, t, i, a, c, f) { const m = H(e, t); !function uu(e, t, i, a, c, f, m) { if (null == f)
            Kn(e) ? e.removeAttribute(t, c, i) : t.removeAttribute(c);
        else {
            const b = null == m ? Ke(f) : m(f, a || "", c);
            Kn(e) ? e.setAttribute(t, c, b, i) : i ? t.setAttributeNS(i, c, b) : t.setAttribute(c, b);
        } }(t[11], m, f, e.value, i, a, c); } function op(e, t, i, a, c, f) { const m = f[t]; if (null !== m) {
            const b = a.setInput;
            for (let w = 0; w < m.length;) {
                const O = m[w++], L = m[w++], W = m[w++];
                null !== b ? a.setInput(i, W, O, L) : i[L] = W;
            }
        } } function Af(e, t) { let i = null, a = 0; for (; a < t.length;) {
            const c = t[a];
            if (0 !== c)
                if (5 !== c) {
                    if ("number" == typeof c)
                        break;
                    e.hasOwnProperty(c) && (null === i && (i = []), i.push(c, e[c], t[a + 1])), a += 2;
                }
                else
                    a += 2;
            else
                a += 4;
        } return i; } function Sf(e, t, i, a) { return new Array(e, !0, !1, t, null, 0, a, i, null, null); } function cp(e, t) { const i = Mt(t, e); if (On(i)) {
            const a = i[1];
            80 & i[2] ? tr(a, i, a.template, i[8]) : i[5] > 0 && du(i);
        } } function du(e) { for (let a = Bc(e); null !== a; a = za(a))
            for (let c = 10; c < a.length; c++) {
                const f = a[c];
                if (1024 & f[2]) {
                    const m = f[1];
                    tr(m, f, m.template, f[8]);
                }
                else
                    f[5] > 0 && du(f);
            } const i = e[1].components; if (null !== i)
            for (let a = 0; a < i.length; a++) {
                const c = Mt(i[a], e);
                On(c) && c[5] > 0 && du(c);
            } } function Mf(e, t) { const i = Mt(t, e), a = i[1]; (function up(e, t) { for (let i = t.length; i < e.blueprint.length; i++)
            t.push(e.blueprint[i]); })(a, i), Xa(a, i, i[8]); } function Ol(e, t) { return e[13] ? e[14][4] = t : e[13] = t, e[14] = t, t; } function fu(e) { for (; e;) {
            e[2] |= 64;
            const t = Jr(e);
            if (ss(e) && !t)
                return e;
            e = t;
        } return null; } function Rl(e, t, i) { const a = t[10]; a.begin && a.begin(); try {
            tr(e, t, e.template, i);
        }
        catch (c) {
            throw pu(t, c), c;
        }
        finally {
            a.end && a.end();
        } } function Tf(e) { !function hu(e) { for (let t = 0; t < e.components.length; t++) {
            const i = e.components[t], a = Tc(i), c = a[1];
            ff(c, a, c.template, i);
        } }(e[8]); } function gu(e, t, i) { as(0), t(e, i); } const fp = (() => Promise.resolve(null))(); function oa(e) { return e[7] || (e[7] = []); } function Of(e) { return e.cleanup || (e.cleanup = []); } function Rf(e, t, i) { return (null === e || pi(e)) && (i = function M(e) { for (; Array.isArray(e);) {
            if ("object" == typeof e[1])
                return e;
            e = e[0];
        } return null; }(i[t.index])), i[11]; } function pu(e, t) { const i = e[9], a = i ? i.get(Ua, null) : null; a && a.handleError(t); } function mu(e, t, i, a, c) { for (let f = 0; f < i.length;) {
            const m = i[f++], b = i[f++], w = t[m], O = e.data[m];
            null !== O.setInput ? O.setInput(w, c, a, b) : w[b] = c;
        } } function kr(e, t, i) { const a = S(t, e); !function Rd(e, t, i) { Kn(e) ? e.setValue(t, i) : t.textContent = i; }(e[11], a, i); } function Pl(e, t, i) { let a = i ? e.styles : null, c = i ? e.classes : null, f = 0; if (null !== t)
            for (let m = 0; m < t.length; m++) {
                const b = t[m];
                "number" == typeof b ? f = b : 1 == f ? c = Ee(c, b) : 2 == f && (a = Ee(a, b + ": " + t[++m] + ";"));
            } i ? e.styles = a : e.stylesWithoutHost = a, i ? e.classes = c : e.classesWithoutHost = c; } const Ja = new gi("INJECTOR", -1); class Pf {
            get(t, i = Xr) { if (i === Xr) {
                const a = new Error(`NullInjectorError: No provider for ${Ve(t)}!`);
                throw a.name = "NullInjectorError", a;
            } return i; }
        } const vu = new gi("Set Injector scope."), aa = {}, gp = {}; let el; function Ff() { return void 0 === el && (el = new Pf), el; } function Lf(e, t = null, i = null, a) { const c = kf(e, t, i, a); return c._resolveInjectorDefTypes(), c; } function kf(e, t = null, i = null, a) { return new pp(e, i, t || Ff(), a); } class pp {
            constructor(t, i, a, c = null) { this.parent = a, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1; const f = []; i && mr(i, b => this.processProvider(b, t, i)), mr([t], b => this.processInjectorType(b, [], f)), this.records.set(Ja, la(void 0, this)); const m = this.records.get(vu); this.scope = null != m ? m.value : null, this.source = c || ("object" == typeof t ? null : Ve(t)); }
            get destroyed() { return this._destroyed; }
            destroy() { this.assertNotDestroyed(), this._destroyed = !0; try {
                this.onDestroy.forEach(t => t.ngOnDestroy());
            }
            finally {
                this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear();
            } }
            get(t, i = Xr, a = qt.Default) { this.assertNotDestroyed(); const c = nd(this), f = ti(void 0); try {
                if (!(a & qt.SkipSelf)) {
                    let b = this.records.get(t);
                    if (void 0 === b) {
                        const w = function xp(e) { return "function" == typeof e || "object" == typeof e && e instanceof gi; }(t) && rn(t);
                        b = w && this.injectableDefInScope(w) ? la(Fl(t), aa) : null, this.records.set(t, b);
                    }
                    if (null != b)
                        return this.hydrate(t, b);
                }
                return (a & qt.Self ? Ff() : this.parent).get(t, i = a & qt.Optional && i === Xr ? null : i);
            }
            catch (m) {
                if ("NullInjectorError" === m.name) {
                    if ((m[pl] = m[pl] || []).unshift(Ve(t)), c)
                        throw m;
                    return function Gh(e, t, i, a) { const c = e[pl]; throw t[td] && c.unshift(t[td]), e.message = function $h(e, t, i, a = null) { e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.substr(2) : e; let c = Ve(t); if (Array.isArray(t))
                        c = t.map(Ve).join(" -> ");
                    else if ("object" == typeof t) {
                        let f = [];
                        for (let m in t)
                            if (t.hasOwnProperty(m)) {
                                let b = t[m];
                                f.push(m + ":" + ("string" == typeof b ? JSON.stringify(b) : Ve(b)));
                            }
                        c = `{${f.join(", ")}}`;
                    } return `${i}${a ? "(" + a + ")" : ""}[${c}]: ${e.replace(ed, "\n  ")}`; }("\n" + e.message, c, i, a), e.ngTokenPath = c, e[pl] = null, e; }(m, t, "R3InjectorError", this.source);
                }
                throw m;
            }
            finally {
                ti(f), nd(c);
            } }
            _resolveInjectorDefTypes() { this.injectorDefTypes.forEach(t => this.get(t)); }
            toString() { const t = []; return this.records.forEach((a, c) => t.push(Ve(c))), `R3Injector[${t.join(", ")}]`; }
            assertNotDestroyed() { if (this._destroyed)
                throw new qe(205, ""); }
            processInjectorType(t, i, a) { if (!(t = fe(t)))
                return !1; let c = Wn(t); const f = null == c && t.ngModule || void 0, m = void 0 === f ? t : f, b = -1 !== a.indexOf(m); if (void 0 !== f && (c = Wn(f)), null == c)
                return !1; if (null != c.imports && !b) {
                let L;
                a.push(m);
                try {
                    mr(c.imports, W => { this.processInjectorType(W, i, a) && (void 0 === L && (L = []), L.push(W)); });
                }
                finally { }
                if (void 0 !== L)
                    for (let W = 0; W < L.length; W++) {
                        const { ngModule: ae, providers: De } = L[W];
                        mr(De, Ze => this.processProvider(Ze, ae, De || G));
                    }
            } this.injectorDefTypes.add(m); const w = os(m) || (() => new m); this.records.set(m, la(w, aa)); const O = c.providers; if (null != O && !b) {
                const L = t;
                mr(O, W => this.processProvider(W, L, O));
            } return void 0 !== f && void 0 !== t.providers; }
            processProvider(t, i, a) { let c = ca(t = fe(t)) ? t : fe(t && t.provide); const f = function mp(e, t, i) { return Bf(e) ? la(void 0, e.useValue) : la(_u(e), aa); }(t); if (ca(t) || !0 !== t.multi)
                this.records.get(c);
            else {
                let m = this.records.get(c);
                m || (m = la(void 0, aa, !0), m.factory = () => $o(m.multi), this.records.set(c, m)), c = t, m.multi.push(t);
            } this.records.set(c, f); }
            hydrate(t, i) { return i.value === aa && (i.value = gp, i.value = i.factory()), "object" == typeof i.value && i.value && function _p(e) { return null !== e && "object" == typeof e && "function" == typeof e.ngOnDestroy; }(i.value) && this.onDestroy.add(i.value), i.value; }
            injectableDefInScope(t) { if (!t.providedIn)
                return !1; const i = fe(t.providedIn); return "string" == typeof i ? "any" === i || i === this.scope : this.injectorDefTypes.has(i); }
        } function Fl(e) { const t = rn(e), i = null !== t ? t.factory : os(e); if (null !== i)
            return i; if (e instanceof gi)
            throw new qe(204, ""); if (e instanceof Function)
            return function Nf(e) { const t = e.length; if (t > 0)
                throw Aa(t, "?"), new qe(204, ""); const i = function Dn(e) { const t = e && (e[Hn] || e[si]); if (t) {
                const i = function En(e) { if (e.hasOwnProperty("name"))
                    return e.name; const t = ("" + e).match(/^function\s*([^\s(]+)/); return null === t ? "" : t[1]; }(e);
                return console.warn(`DEPRECATED: DI is instantiating a token "${i}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${i}" class.`), t;
            } return null; }(e); return null !== i ? () => i.factory(e) : () => new e; }(e); throw new qe(204, ""); } function _u(e, t, i) { let a; if (ca(e)) {
            const c = fe(e);
            return os(c) || Fl(c);
        } if (Bf(e))
            a = () => fe(e.useValue);
        else if (function yp(e) { return !(!e || !e.useFactory); }(e))
            a = () => e.useFactory(...$o(e.deps || []));
        else if (function jf(e) { return !(!e || !e.useExisting); }(e))
            a = () => Vi(fe(e.useExisting));
        else {
            const c = fe(e && (e.useClass || e.provide));
            if (!function Vf(e) { return !!e.deps; }(e))
                return os(c) || Fl(c);
            a = () => new c(...$o(e.deps));
        } return a; } function la(e, t, i = !1) { return { factory: e, value: t, multi: i ? [] : void 0 }; } function Bf(e) { return null !== e && "object" == typeof e && Ta in e; } function ca(e) { return "function" == typeof e; } let $s = (() => { class e {
            static create(i, a) { var c; if (Array.isArray(i))
                return Lf({ name: "" }, a, i, ""); {
                const f = null !== (c = i.name) && void 0 !== c ? c : "";
                return Lf({ name: f }, i.parent, i.providers, f);
            } }
        } return e.THROW_IF_NOT_FOUND = Xr, e.NULL = new Pf, e.\u0275prov = Bt({ token: e, providedIn: "any", factory: () => Vi(Ja) }), e.__NG_ELEMENT_ID__ = -1, e; })(); function Mp(e, t) { _s(Tc(e)[1], p()); } function Ll(e) { let t = function Xf(e) { return Object.getPrototypeOf(e.prototype).constructor; }(e.type), i = !0; const a = [e]; for (; t;) {
            let c;
            if (pi(e))
                c = t.\u0275cmp || t.\u0275dir;
            else {
                if (t.\u0275cmp)
                    throw new qe(903, "");
                c = t.\u0275dir;
            }
            if (c) {
                if (i) {
                    a.push(c);
                    const m = e;
                    m.inputs = Du(e.inputs), m.declaredInputs = Du(e.declaredInputs), m.outputs = Du(e.outputs);
                    const b = c.hostBindings;
                    b && Zf(e, b);
                    const w = c.viewQuery, O = c.contentQueries;
                    if (w && Cu(e, w), O && Tp(e, O), Le(e.inputs, c.inputs), Le(e.declaredInputs, c.declaredInputs), Le(e.outputs, c.outputs), pi(c) && c.data.animation) {
                        const L = e.data;
                        L.animation = (L.animation || []).concat(c.data.animation);
                    }
                }
                const f = c.features;
                if (f)
                    for (let m = 0; m < f.length; m++) {
                        const b = f[m];
                        b && b.ngInherit && b(e), b === Ll && (i = !1);
                    }
            }
            t = Object.getPrototypeOf(t);
        } !function tl(e) { let t = 0, i = null; for (let a = e.length - 1; a >= 0; a--) {
            const c = e[a];
            c.hostVars = t += c.hostVars, c.hostAttrs = Yr(c.hostAttrs, i = Yr(i, c.hostAttrs));
        } }(a); } function Du(e) { return e === k ? {} : e === G ? [] : e; } function Cu(e, t) { const i = e.viewQuery; e.viewQuery = i ? (a, c) => { t(a, c), i(a, c); } : t; } function Tp(e, t) { const i = e.contentQueries; e.contentQueries = i ? (a, c, f) => { t(a, c, f), i(a, c, f); } : t; } function Zf(e, t) { const i = e.hostBindings; e.hostBindings = i ? (a, c) => { t(a, c), i(a, c); } : t; } let kl = null; function no() { if (!kl) {
            const e = Jt.Symbol;
            if (e && e.iterator)
                kl = e.iterator;
            else {
                const t = Object.getOwnPropertyNames(Map.prototype);
                for (let i = 0; i < t.length; ++i) {
                    const a = t[i];
                    "entries" !== a && "size" !== a && Map.prototype[a] === Map.prototype.entries && (kl = a);
                }
            }
        } return kl; } function nl(e) { return !!wu(e) && (Array.isArray(e) || !(e instanceof Map) && no() in e); } function wu(e) { return null !== e && ("function" == typeof e || "object" == typeof e); } function Cr(e, t, i) { return e[t] = i; } function qi(e, t, i) { return !Object.is(e[t], i) && (e[t] = i, !0); } function Bl(e, t, i, a) { const c = ft(); return qi(c, nn(), t) && (R(), Dr(Rn(), c, e, t, i, a)), Bl; } function Su(e, t, i, a, c, f, m, b) { const w = ft(), O = R(), L = e + 20, W = O.firstCreatePass ? function Fp(e, t, i, a, c, f, m, b, w) { const O = t.consts, L = ia(t, e, 4, m || null, dn(O, b)); au(t, i, L, dn(O, w)), _s(t, L); const W = L.tViews = Ro(2, L, a, c, f, t.directiveRegistry, t.pipeRegistry, null, t.schemas, O); return null !== t.queries && (t.queries.template(t, L), W.queries = t.queries.embeddedTView(L)), L; }(L, O, w, t, i, a, c, f, m) : O.data[L]; $(W, !1); const ae = w[11].createComment(""); wl(O, w, ae, W), Hi(ae, w), Ol(w, w[L] = Sf(ae, w, ae, W)), ks(W) && ru(O, w, W), null != m && ou(w, W, b); } function lh(e) { return it(function $e() { return Ot.lFrame.contextLView; }(), 20 + e); } function D(e, t = qt.Default) { const i = ft(); return null === i ? Vi(e, t) : x(p(), i, fe(e), t); } function T() { throw new Error("invalid"); } function P(e, t, i) { const a = ft(); return qi(a, nn(), t) && Ps(R(), Rn(), a, e, t, a[11], i, !1), P; } function U(e, t, i, a, c) { const m = c ? "class" : "style"; mu(e, i, t.inputs[m], m, a); } function ee(e, t, i, a) { const c = ft(), f = R(), m = 20 + e, b = c[11], w = c[m] = Vc(b, t, function ho() { return Ot.lFrame.currentNamespace; }()), O = f.firstCreatePass ? function Q(e, t, i, a, c, f, m) { const b = t.consts, O = ia(t, e, 2, c, dn(b, f)); return au(t, i, O, dn(b, m)), null !== O.attrs && Pl(O, O.attrs, !1), null !== O.mergedAttrs && Pl(O, O.mergedAttrs, !0), null !== t.queries && t.queries.elementStart(t, O), O; }(m, f, c, 0, t, i, a) : f.data[m]; $(O, !0); const L = O.mergedAttrs; null !== L && go(b, w, L); const W = O.classes; null !== W && Wc(b, w, W); const ae = O.styles; null !== ae && zd(b, w, ae), 64 != (64 & O.flags) && wl(f, c, w, O), 0 === function Wi() { return Ot.lFrame.elementDepthCount; }() && Hi(w, c), function vs() { Ot.lFrame.elementDepthCount++; }(), ks(O) && (ru(f, c, O), gf(f, O, c)), null !== a && ou(c, O); } function ue() { let e = p(); q() ? Z() : (e = e.parent, $(e, !1)); const t = e; !function Ss() { Ot.lFrame.elementDepthCount--; }(); const i = R(); i.firstCreatePass && (_s(i, e), ps(e) && i.queries.elementEnd(e)), null != t.classesWithoutHost && function zr(e) { return 0 != (16 & e.flags); }(t) && U(i, t, ft(), t.classesWithoutHost, !0), null != t.stylesWithoutHost && function Xl(e) { return 0 != (32 & e.flags); }(t) && U(i, t, ft(), t.stylesWithoutHost, !1); } function Ce(e, t, i, a) { ee(e, t, i, a), ue(); } function At(e, t, i) { const a = ft(), c = R(), f = e + 20, m = c.firstCreatePass ? function dt(e, t, i, a, c) { const f = t.consts, m = dn(f, a), b = ia(t, e, 8, "ng-container", m); return null !== m && Pl(b, m, !0), au(t, i, b, dn(f, c)), null !== t.queries && t.queries.elementStart(t, b), b; }(f, c, a, t, i) : c.data[f]; $(m, !0); const b = a[f] = a[11].createComment(""); wl(c, a, b, m), Hi(b, a), ks(m) && (ru(c, a, m), gf(c, m, a)), null != i && ou(a, m); } function pt() { let e = p(); const t = R(); q() ? Z() : (e = e.parent, $(e, !1)), t.firstCreatePass && (_s(t, e), ps(e) && t.queries.elementEnd(e)); } function st(e, t, i) { At(e, t, i), pt(); } function Rt() { return ft(); } function Ft(e) { return !!e && "function" == typeof e.then; } function Qt(e) { return !!e && "function" == typeof e.subscribe; } const tn = Qt; function $n(e, t, i, a) { const c = ft(), f = R(), m = p(); return Ei(f, c, c[11], m, e, t, !!i, a), $n; } function Mn(e, t) { const i = p(), a = ft(), c = R(); return Ei(c, a, Rf(Ui(c.data), i, a), i, e, t, !1), Mn; } function Ei(e, t, i, a, c, f, m, b) { const w = ks(a), L = e.firstCreatePass && Of(e), W = t[8], ae = oa(t); let De = !0; if (3 & a.type || b) {
            const Tt = H(a, t), Ut = b ? b(Tt) : Tt, ct = ae.length, an = b ? Pn => b(Gn(Pn[a.index])) : a.index;
            if (Kn(i)) {
                let Pn = null;
                if (!b && w && (Pn = function Ln(e, t, i, a) { const c = e.cleanup; if (null != c)
                    for (let f = 0; f < c.length - 1; f += 2) {
                        const m = c[f];
                        if (m === i && c[f + 1] === a) {
                            const b = t[7], w = c[f + 2];
                            return b.length > w ? b[w] : null;
                        }
                        "string" == typeof m && (f += 2);
                    } return null; }(e, t, c, a.index)), null !== Pn)
                    (Pn.__ngLastListenerFn__ || Pn).__ngNextListenerFn__ = f, Pn.__ngLastListenerFn__ = f, De = !1;
                else {
                    f = wn(a, t, W, f, !1);
                    const Jn = i.listen(Ut, c, f);
                    ae.push(f, Jn), L && L.push(c, an, ct, ct + 1);
                }
            }
            else
                f = wn(a, t, W, f, !0), Ut.addEventListener(c, f, m), ae.push(f), L && L.push(c, an, ct, m);
        }
        else
            f = wn(a, t, W, f, !1); const Ze = a.outputs; let bt; if (De && null !== Ze && (bt = Ze[c])) {
            const Tt = bt.length;
            if (Tt)
                for (let Ut = 0; Ut < Tt; Ut += 2) {
                    const sr = t[bt[Ut]][bt[Ut + 1]].subscribe(f), ll = ae.length;
                    ae.push(f, sr), L && L.push(c, a.index, ll, -(ll + 1));
                }
        } } function Zi(e, t, i, a) { try {
            return !1 !== i(a);
        }
        catch (c) {
            return pu(e, c), !1;
        } } function wn(e, t, i, a, c) { return function f(m) { if (m === Function)
            return a; const b = 2 & e.flags ? Mt(e.index, t) : t; 0 == (32 & t[2]) && fu(b); let w = Zi(t, 0, a, m), O = f.__ngNextListenerFn__; for (; O;)
            w = Zi(t, 0, O, m) && w, O = O.__ngNextListenerFn__; return c && !1 === w && (m.preventDefault(), m.returnValue = !1), w; }; } function Zn(e = 1) { return function sn(e) { return (Ot.lFrame.contextLView = function on(e, t) { for (; e > 0;)
            t = t[15], e--; return t; }(e, Ot.lFrame.contextLView))[8]; }(e); } function sl(e, t) { let i = null; const a = function Bg(e) { const t = e.attrs; if (null != t) {
            const i = t.indexOf(5);
            if (0 == (1 & i))
                return t[i + 1];
        } return null; }(e); for (let c = 0; c < t.length; c++) {
            const f = t[c];
            if ("*" !== f) {
                if (null === a ? Kd(e, f, !0) : Vg(a, f))
                    return c;
            }
            else
                i = c;
        } return i; } function io(e) { const t = ft()[16][6]; if (!t.projection) {
            const a = t.projection = Aa(e ? e.length : 1, null), c = a.slice();
            let f = t.child;
            for (; null !== f;) {
                const m = e ? sl(f, e) : 0;
                null !== m && (c[m] ? c[m].projectionNext = f : a[m] = f, c[m] = f), f = f.next;
            }
        } } function xa(e, t = 0, i) { const a = ft(), c = R(), f = ia(c, 20 + e, 16, null, i || null); null === f.projection && (f.projection = t), Z(), 64 != (64 & f.flags) && function Og(e, t, i) { $d(t[11], 0, t, i, kd(e, i, t), jd(i.parent || t[6], i, t)); }(c, a, f); } function $y(e, t, i, a, c) { const f = e[i + 1], m = null === t; let b = a ? er(f) : Lr(f), w = !1; for (; 0 !== b && (!1 === w || m);) {
            const L = e[b + 1];
            Dx(e[b], t) && (w = !0, e[b + 1] = a ? Sl(L) : Yc(L)), b = a ? er(L) : Lr(L);
        } w && (e[i + 1] = a ? Yc(f) : Sl(f)); } function Dx(e, t) { return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && Uo(e, t) >= 0; } function Kp(e, t, i) { return Nr(e, t, i, !1), Kp; } function Qp(e, t) { return Nr(e, t, null, !0), Qp; } function Nr(e, t, i, a) { const c = ft(), f = R(), m = function xn(e) { const t = Ot.lFrame, i = t.bindingIndex; return t.bindingIndex = t.bindingIndex + e, i; }(2); f.firstUpdatePass && function Zy(e, t, i, a) { const c = e.data; if (null === c[i + 1]) {
            const f = c[ln()], m = function Xy(e, t) { return t >= e.expandoStartIndex; }(e, i);
            (function nv(e, t) { return 0 != (e.flags & (t ? 16 : 32)); })(f, a) && null === t && !m && (t = !1), t = function Ox(e, t, i, a) { const c = Ui(e); let f = a ? t.residualClasses : t.residualStyles; if (null === c)
                0 === (a ? t.classBindings : t.styleBindings) && (i = Ou(i = qp(null, e, t, i, a), t.attrs, a), f = null);
            else {
                const m = t.directiveStylingLast;
                if (-1 === m || e[m] !== c)
                    if (i = qp(c, e, t, i, a), null === f) {
                        let w = function Rx(e, t, i) { const a = i ? t.classBindings : t.styleBindings; if (0 !== Lr(a))
                            return e[er(a)]; }(e, t, a);
                        void 0 !== w && Array.isArray(w) && (w = qp(null, e, t, w[1], a), w = Ou(w, t.attrs, a), function Px(e, t, i, a) { e[er(i ? t.classBindings : t.styleBindings)] = a; }(e, t, a, w));
                    }
                    else
                        f = function Fx(e, t, i) { let a; const c = t.directiveEnd; for (let f = 1 + t.directiveStylingLast; f < c; f++)
                            a = Ou(a, e[f].hostAttrs, i); return Ou(a, t.attrs, i); }(e, t, a);
            } return void 0 !== f && (a ? t.residualClasses = f : t.residualStyles = f), i; }(c, f, t, a), function xx(e, t, i, a, c, f) { let m = f ? t.classBindings : t.styleBindings, b = er(m), w = Lr(m); e[a] = i; let L, O = !1; if (Array.isArray(i)) {
                const W = i;
                L = W[1], (null === L || Uo(W, L) > 0) && (O = !0);
            }
            else
                L = i; if (c)
                if (0 !== w) {
                    const ae = er(e[b + 1]);
                    e[a + 1] = Al(ae, b), 0 !== ae && (e[ae + 1] = Kc(e[ae + 1], a)), e[b + 1] = function Ug(e, t) { return 131071 & e | t << 17; }(e[b + 1], a);
                }
                else
                    e[a + 1] = Al(b, 0), 0 !== b && (e[b + 1] = Kc(e[b + 1], a)), b = a;
            else
                e[a + 1] = Al(w, 0), 0 === b ? b = a : e[w + 1] = Kc(e[w + 1], a), w = a; O && (e[a + 1] = Yc(e[a + 1])), $y(e, L, a, !0), $y(e, L, a, !1), function bx(e, t, i, a, c) { const f = c ? e.residualClasses : e.residualStyles; null != f && "string" == typeof t && Uo(f, t) >= 0 && (i[a + 1] = Sl(i[a + 1])); }(t, L, e, a, f), m = Al(b, w), f ? t.classBindings = m : t.styleBindings = m; }(c, f, t, i, m, a);
        } }(f, e, m, a), t !== bn && qi(c, m, t) && function ev(e, t, i, a, c, f, m, b) { if (!(3 & t.type))
            return; const w = e.data, O = w[b + 1]; yh(function ef(e) { return 1 == (1 & e); }(O) ? tv(w, t, i, c, Lr(O), m) : void 0) || (yh(f) || function Jd(e) { return 2 == (2 & e); }(O) && (f = tv(w, null, i, c, b, m)), function Pg(e, t, i, a, c) { const f = Kn(e); if (t)
            c ? f ? e.addClass(i, a) : i.classList.add(a) : f ? e.removeClass(i, a) : i.classList.remove(a);
        else {
            let m = -1 === a.indexOf("-") ? void 0 : _r.DashCase;
            if (null == c)
                f ? e.removeStyle(i, a, m) : i.style.removeProperty(a);
            else {
                const b = "string" == typeof c && c.endsWith("!important");
                b && (c = c.slice(0, -10), m |= _r.Important), f ? e.setStyle(i, a, c, m) : i.style.setProperty(a, c, b ? "important" : "");
            }
        } }(a, m, S(ln(), i), c, f)); }(f, f.data[ln()], c, c[11], e, c[m + 1] = function Nx(e, t) { return null == e || ("string" == typeof t ? e += t : "object" == typeof e && (e = Ve(Pr(e)))), e; }(t, i), a, m); } function qp(e, t, i, a, c) { let f = null; const m = i.directiveEnd; let b = i.directiveStylingLast; for (-1 === b ? b = i.directiveStart : b++; b < m && (f = t[b], a = Ou(a, f.hostAttrs, c), f !== e);)
            b++; return null !== e && (i.directiveStylingLast = b), a; } function Ou(e, t, i) { const a = i ? 1 : 2; let c = -1; if (null !== t)
            for (let f = 0; f < t.length; f++) {
                const m = t[f];
                "number" == typeof m ? c = m : c === a && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]), Os(e, m, !!i || t[++f]));
            } return void 0 === e ? null : e; } function tv(e, t, i, a, c, f) { const m = null === t; let b; for (; c > 0;) {
            const w = e[c], O = Array.isArray(w), L = O ? w[1] : w, W = null === L;
            let ae = i[c + 1];
            ae === bn && (ae = W ? G : void 0);
            let De = W ? Ma(ae, a) : L === a ? ae : void 0;
            if (O && !yh(De) && (De = Ma(w, a)), yh(De) && (b = De, m))
                return b;
            const Ze = e[c + 1];
            c = m ? er(Ze) : Lr(Ze);
        } if (null !== t) {
            let w = f ? t.residualClasses : t.residualStyles;
            null != w && (b = Ma(w, a));
        } return b; } function yh(e) { return void 0 !== e; } function iv(e, t = "") { const i = ft(), a = R(), c = e + 20, f = a.firstCreatePass ? ia(a, c, 1, t, null) : a.data[c], m = i[c] = function jc(e, t) { return Kn(e) ? e.createText(t) : e.createTextNode(t); }(i[11], t); wl(a, i, m, f), $(f, !1); } function Xp(e) { return vh("", e, ""), Xp; } function vh(e, t, i) { const a = ft(), c = function da(e, t, i, a) { return qi(e, nn(), i) ? t + Ke(i) + a : bn; }(a, e, t, i); return c !== bn && kr(a, ln(), c), vh; } function Zp(e, t, i) { const a = ft(); return qi(a, nn(), t) && Ps(R(), Rn(), a, e, t, a[11], i, !0), Zp; } function Jp(e, t, i) { const a = ft(); if (qi(a, nn(), t)) {
            const f = R(), m = Rn();
            Ps(f, m, a, e, t, Rf(Ui(f.data), m, a), i, !0);
        } return Jp; } const ol = void 0; var ib = ["en", [["a", "p"], ["AM", "PM"], ol], [["AM", "PM"], ol, ol], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], ol, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], ol, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", ol, "{1} 'at' {0}", ol], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function nb(e) { const i = Math.floor(Math.abs(e)), a = e.toString().replace(/^[^.]*\.?/, "").length; return 1 === i && 0 === a ? 1 : 5; }]; let Gl = {}; function em(e) { const t = function sb(e) { return e.toLowerCase().replace(/_/g, "-"); }(e); let i = Dv(t); if (i)
            return i; const a = t.split("-")[0]; if (i = Dv(a), i)
            return i; if ("en" === a)
            return ib; throw new Error(`Missing locale data for the locale "${e}".`); } function bv(e) { return em(e)[gn.PluralCase]; } function Dv(e) { return e in Gl || (Gl[e] = Jt.ng && Jt.ng.common && Jt.ng.common.locales && Jt.ng.common.locales[e]), Gl[e]; } var gn = (() => ((gn = gn || {})[gn.LocaleId = 0] = "LocaleId", gn[gn.DayPeriodsFormat = 1] = "DayPeriodsFormat", gn[gn.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", gn[gn.DaysFormat = 3] = "DaysFormat", gn[gn.DaysStandalone = 4] = "DaysStandalone", gn[gn.MonthsFormat = 5] = "MonthsFormat", gn[gn.MonthsStandalone = 6] = "MonthsStandalone", gn[gn.Eras = 7] = "Eras", gn[gn.FirstDayOfWeek = 8] = "FirstDayOfWeek", gn[gn.WeekendRange = 9] = "WeekendRange", gn[gn.DateFormat = 10] = "DateFormat", gn[gn.TimeFormat = 11] = "TimeFormat", gn[gn.DateTimeFormat = 12] = "DateTimeFormat", gn[gn.NumberSymbols = 13] = "NumberSymbols", gn[gn.NumberFormats = 14] = "NumberFormats", gn[gn.CurrencyCode = 15] = "CurrencyCode", gn[gn.CurrencySymbol = 16] = "CurrencySymbol", gn[gn.CurrencyName = 17] = "CurrencyName", gn[gn.Currencies = 18] = "Currencies", gn[gn.Directionality = 19] = "Directionality", gn[gn.PluralCase = 20] = "PluralCase", gn[gn.ExtraData = 21] = "ExtraData", gn))(); const _h = "en-US"; let Cv = _h; function im(e, t, i, a, c) { if (e = fe(e), Array.isArray(e))
            for (let f = 0; f < e.length; f++)
                im(e[f], t, i, a, c);
        else {
            const f = R(), m = ft();
            let b = ca(e) ? e : fe(e.provide), w = _u(e);
            const O = p(), L = 1048575 & O.providerIndexes, W = O.directiveStart, ae = O.providerIndexes >> 20;
            if (ca(e) || !e.multi) {
                const De = new yi(w, c, D), Ze = rm(b, t, c ? L : L + ae, W);
                -1 === Ze ? (Qr(yo(O, m), f, b), sm(f, e, t.length), t.push(b), O.directiveStart++, O.directiveEnd++, c && (O.providerIndexes += 1048576), i.push(De), m.push(De)) : (i[Ze] = De, m[Ze] = De);
            }
            else {
                const De = rm(b, t, L + ae, W), Ze = rm(b, t, L, L + ae), bt = De >= 0 && i[De], Tt = Ze >= 0 && i[Ze];
                if (c && !Tt || !c && !bt) {
                    Qr(yo(O, m), f, b);
                    const Ut = function n0(e, t, i, a, c) { const f = new yi(e, i, D); return f.multi = [], f.index = t, f.componentProviders = 0, Yv(f, c, a && !i), f; }(c ? t0 : e0, i.length, c, a, w);
                    !c && Tt && (i[Ze].providerFactory = Ut), sm(f, e, t.length, 0), t.push(b), O.directiveStart++, O.directiveEnd++, c && (O.providerIndexes += 1048576), i.push(Ut), m.push(Ut);
                }
                else
                    sm(f, e, De > -1 ? De : Ze, Yv(i[c ? Ze : De], w, !c && a));
                !c && a && Tt && i[Ze].componentProviders++;
            }
        } } function sm(e, t, i, a) { const c = ca(t), f = function vp(e) { return !!e.useClass; }(t); if (c || f) {
            const w = (f ? fe(t.useClass) : t).prototype.ngOnDestroy;
            if (w) {
                const O = e.destroyHooks || (e.destroyHooks = []);
                if (!c && t.multi) {
                    const L = O.indexOf(i);
                    -1 === L ? O.push(i, [a, w]) : O[L + 1].push(a, w);
                }
                else
                    O.push(i, w);
            }
        } } function Yv(e, t, i) { return i && e.componentProviders++, e.multi.push(t) - 1; } function rm(e, t, i, a) { for (let c = i; c < a; c++)
            if (t[c] === e)
                return c; return -1; } function e0(e, t, i, a) { return om(this.multi, []); } function t0(e, t, i, a) { const c = this.multi; let f; if (this.providerFactory) {
            const m = this.providerFactory.componentProviders, b = K(i, i[1], this.providerFactory.index, a);
            f = b.slice(0, m), om(c, f);
            for (let w = m; w < b.length; w++)
                f.push(b[w]);
        }
        else
            f = [], om(c, f); return f; } function om(e, t) { for (let i = 0; i < e.length; i++)
            t.push((0, e[i])()); return t; } function Kv(e, t = []) { return i => { i.providersResolver = (a, c) => function Jb(e, t, i) { const a = R(); if (a.firstCreatePass) {
            const c = pi(e);
            im(i, a.data, a.blueprint, c, !0), im(t, a.data, a.blueprint, c, !1);
        } }(a, c ? c(e) : e, t); }; } class Qv {
        } class o0 {
            resolveComponentFactory(t) { throw function r0(e) { const t = Error(`No component factory found for ${Ve(e)}. Did you add it to @NgModule.entryComponents?`); return t.ngComponent = e, t; }(t); }
        } let ku = (() => { class e {
        } return e.NULL = new o0, e; })(); function a0() { return zl(p(), ft()); } function zl(e, t) { return new Nu(H(e, t)); } let Nu = (() => { class e {
            constructor(i) { this.nativeElement = i; }
        } return e.__NG_ELEMENT_ID__ = a0, e; })(); function l0(e) { return e instanceof Nu ? e.nativeElement : e; } class Xv {
        } let c0 = (() => { class e {
        } return e.__NG_ELEMENT_ID__ = () => function d0() { const e = ft(), i = Mt(p().index, e); return function u0(e) { return e[11]; }(ni(i) ? i : e); }(), e; })(), f0 = (() => { class e {
        } return e.\u0275prov = Bt({ token: e, providedIn: "root", factory: () => null }), e; })(); class Zv {
            constructor(t) { this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join("."); }
        } const h0 = new Zv("13.1.3"), am = {}; function wh(e, t, i, a, c = !1) { for (; null !== i;) {
            const f = t[i.index];
            if (null !== f && a.push(Gn(f)), di(f))
                for (let b = 10; b < f.length; b++) {
                    const w = f[b], O = w[1].firstChild;
                    null !== O && wh(w[1], w, O, a);
                }
            const m = i.type;
            if (8 & m)
                wh(e, t, i.child, a);
            else if (32 & m) {
                const b = Ao(i, t);
                let w;
                for (; w = b();)
                    a.push(w);
            }
            else if (16 & m) {
                const b = Ud(t, i);
                if (Array.isArray(b))
                    a.push(...b);
                else {
                    const w = Jr(t[16]);
                    wh(w[1], w, b, a, !0);
                }
            }
            i = c ? i.projectionNext : i.next;
        } return a; } class Bu {
            constructor(t, i) { this._lView = t, this._cdRefInjectingView = i, this._appRef = null, this._attachedToViewContainer = !1; }
            get rootNodes() { const t = this._lView, i = t[1]; return wh(i, t, i.firstChild, []); }
            get context() { return this._lView[8]; }
            set context(t) { this._lView[8] = t; }
            get destroyed() { return 256 == (256 & this._lView[2]); }
            destroy() { if (this._appRef)
                this._appRef.detachView(this);
            else if (this._attachedToViewContainer) {
                const t = this._lView[3];
                if (di(t)) {
                    const i = t[8], a = i ? i.indexOf(this) : -1;
                    a > -1 && (Jo(t, a), xo(i, a));
                }
                this._attachedToViewContainer = !1;
            } fs(this._lView[1], this._lView); }
            onDestroy(t) { vf(this._lView[1], this._lView, null, t); }
            markForCheck() { fu(this._cdRefInjectingView || this._lView); }
            detach() { this._lView[2] &= -129; }
            reattach() { this._lView[2] |= 128; }
            detectChanges() { Rl(this._lView[1], this._lView, this.context); }
            checkNoChanges() { !function dp(e, t, i) { Pt(!0); try {
                Rl(e, t, i);
            }
            finally {
                Pt(!1);
            } }(this._lView[1], this._lView, this.context); }
            attachToViewContainerRef() { if (this._appRef)
                throw new qe(902, ""); this._attachedToViewContainer = !0; }
            detachFromAppRef() { this._appRef = null, function Sg(e, t) { Wa(e, t, t[11], 2, null, null); }(this._lView[1], this._lView); }
            attachToAppRef(t) { if (this._attachedToViewContainer)
                throw new qe(902, ""); this._appRef = t; }
        } class g0 extends Bu {
            constructor(t) { super(t), this._view = t; }
            detectChanges() { Tf(this._view); }
            checkNoChanges() { !function If(e) { Pt(!0); try {
                Tf(e);
            }
            finally {
                Pt(!1);
            } }(this._view); }
            get context() { return null; }
        } class Jv extends ku {
            constructor(t) { super(), this.ngModule = t; }
            resolveComponentFactory(t) { const i = J(t); return new lm(i, this.ngModule); }
        } function e_(e) { const t = []; for (let i in e)
            e.hasOwnProperty(i) && t.push({ propName: e[i], templateName: i }); return t; } const m0 = new gi("SCHEDULER_TOKEN", { providedIn: "root", factory: () => Md }); class lm extends Qv {
            constructor(t, i) { super(), this.componentDef = t, this.ngModule = i, this.componentType = t.type, this.selector = function Hg(e) { return e.map(ta).join(","); }(t.selectors), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!i; }
            get inputs() { return e_(this.componentDef.inputs); }
            get outputs() { return e_(this.componentDef.outputs); }
            create(t, i, a, c) { const f = (c = c || this.ngModule) ? function y0(e, t) { return { get: (i, a, c) => { const f = e.get(i, am, c); return f !== am || a === am ? f : t.get(i, a, c); } }; }(t, c.injector) : t, m = f.get(Xv, fr), b = f.get(f0, null), w = m.createRenderer(null, this.componentDef), O = this.componentDef.selectors[0][0] || "div", L = a ? function yf(e, t, i) { if (Kn(e))
                return e.selectRootElement(t, i === xt.ShadowDom); let a = "string" == typeof t ? e.querySelector(t) : t; return a.textContent = "", a; }(w, a, this.componentDef.encapsulation) : Vc(m.createRenderer(null, this.componentDef), O, function p0(e) { const t = e.toLowerCase(); return "svg" === t ? Sr : "math" === t ? "http://www.w3.org/1998/MathML/" : null; }(O)), W = this.componentDef.onPush ? 576 : 528, ae = function qf(e, t) { return { components: [], scheduler: e || Md, clean: fp, playerHandler: t || null, flags: 0 }; }(), De = Ro(0, null, null, 1, 0, null, null, null, null, null), Ze = qa(null, De, ae, W, null, null, m, w, b, f); let bt, Tt; hr(Ze); try {
                const Ut = function Qf(e, t, i, a, c, f) { const m = i[1]; i[20] = e; const w = ia(m, 20, 2, "#host", null), O = w.mergedAttrs = t.hostAttrs; null !== O && (Pl(w, O, !0), null !== e && (go(c, e, O), null !== w.classes && Wc(c, e, w.classes), null !== w.styles && zd(c, e, w.styles))); const L = a.createRenderer(e, t), W = qa(i, pf(t), null, t.onPush ? 64 : 16, i[20], w, a, L, f || null, null); return m.firstCreatePass && (Qr(yo(w, i), m, t.type), bf(m, w), wf(w, i.length, 1)), Ol(i, W), i[20] = W; }(L, this.componentDef, Ze, m, w);
                if (L)
                    if (a)
                        go(w, L, ["ng-version", h0.full]);
                    else {
                        const { attrs: ct, classes: an } = function El(e) { const t = [], i = []; let a = 1, c = 2; for (; a < e.length;) {
                            let f = e[a];
                            if ("string" == typeof f)
                                2 === c ? "" !== f && t.push(f, e[++a]) : 8 === c && i.push(f);
                            else {
                                if (!Js(c))
                                    break;
                                c = f;
                            }
                            a++;
                        } return { attrs: t, classes: i }; }(this.componentDef.selectors[0]);
                        ct && go(w, L, ct), an && an.length > 0 && Wc(w, L, an.join(" "));
                    }
                if (Tt = Be(De, 20), void 0 !== i) {
                    const ct = Tt.projection = [];
                    for (let an = 0; an < this.ngContentSelectors.length; an++) {
                        const Pn = i[an];
                        ct.push(null != Pn ? Array.from(Pn) : null);
                    }
                }
                bt = function ci(e, t, i, a, c) { const f = i[1], m = function Tl(e, t, i) { const a = p(); e.firstCreatePass && (i.providersResolver && i.providersResolver(i), cu(e, a, t, sa(e, t, 1, null), i)); const c = K(t, e, a.directiveStart, a); Hi(c, t); const f = H(a, t); return f && Hi(f, t), c; }(f, i, t); if (a.components.push(m), e[8] = m, c && c.forEach(w => w(m, t)), t.contentQueries) {
                    const w = p();
                    t.contentQueries(1, m, w.directiveStart);
                } const b = p(); return !f.firstCreatePass || null === t.hostBindings && null === t.hostAttrs || (Qn(b.index), Il(i[1], b, 0, b.directiveStart, b.directiveEnd, t), sp(t, m)), m; }(Ut, this.componentDef, Ze, ae, [Mp]), Xa(De, Ze, null);
            }
            finally {
                Lt();
            } return new _0(this.componentType, bt, zl(Tt, Ze), Ze, Tt); }
        } class _0 extends class s0 {
        } {
            constructor(t, i, a, c, f) { super(), this.location = a, this._rootLView = c, this._tNode = f, this.instance = i, this.hostView = this.changeDetectorRef = new g0(c), this.componentType = t; }
            get injector() { return new mn(this._tNode, this._rootLView); }
            destroy() { this.hostView.destroy(); }
            onDestroy(t) { this.hostView.onDestroy(t); }
        } class Wl {
        } class t_ {
        } const Yl = new Map; class s_ extends Wl {
            constructor(t, i) { super(), this._parent = i, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new Jv(this); const a = Gt(t); this._bootstrapComponents = Zs(a.bootstrap), this._r3Injector = kf(t, i, [{ provide: Wl, useValue: this }, { provide: ku, useValue: this.componentFactoryResolver }], Ve(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t); }
            get(t, i = $s.THROW_IF_NOT_FOUND, a = qt.Default) { return t === $s || t === Wl || t === Ja ? this : this._r3Injector.get(t, i, a); }
            destroy() { const t = this._r3Injector; !t.destroyed && t.destroy(), this.destroyCbs.forEach(i => i()), this.destroyCbs = null; }
            onDestroy(t) { this.destroyCbs.push(t); }
        } class cm extends t_ {
            constructor(t) { super(), this.moduleType = t, null !== Gt(t) && function b0(e) { const t = new Set; !function i(a) { const c = Gt(a, !0), f = c.id; null !== f && (function n_(e, t, i) { if (t && t !== i)
                throw new Error(`Duplicate module registered for ${e} - ${Ve(t)} vs ${Ve(t.name)}`); }(f, Yl.get(f), a), Yl.set(f, a)); const m = Zs(c.imports); for (const b of m)
                t.has(b) || (t.add(b), i(b)); }(e); }(t); }
            create(t) { return new s_(this.moduleType, t); }
        } function r_(e, t, i) { const a = zt() + e, c = ft(); return c[a] === bn ? Cr(c, a, i ? t.call(i) : t()) : function il(e, t) { return e[t]; }(c, a); } function o_(e, t, i, a) { return a_(ft(), zt(), e, t, i, a); } function a_(e, t, i, a, c, f) { const m = t + i; return qi(e, m, c) ? Cr(e, m + 1, f ? a.call(f, c) : a(c)) : function ju(e, t) { const i = e[t]; return i === bn ? void 0 : i; }(e, m + 1); } function f_(e, t) { const i = R(); let a; const c = e + 20; i.firstCreatePass ? (a = function I0(e, t) { if (t)
            for (let i = t.length - 1; i >= 0; i--) {
                const a = t[i];
                if (e === a.name)
                    return a;
            } }(t, i.pipeRegistry), i.data[c] = a, a.onDestroy && (i.destroyHooks || (i.destroyHooks = [])).push(c, a.onDestroy)) : a = i.data[c]; const f = a.factory || (a.factory = os(a.type)), m = ti(D); try {
            const b = po(!1), w = f();
            return po(b), function Lp(e, t, i, a) { i >= e.data.length && (e.data[i] = null, e.blueprint[i] = null), t[i] = a; }(i, ft(), c, w), w;
        }
        finally {
            ti(m);
        } } function h_(e, t, i) { const a = e + 20, c = ft(), f = it(c, a); return function Vu(e, t) { return e[1].data[t].pure; }(c, a) ? a_(c, zt(), t, f.transform, i, f) : f.transform(i); } function um(e) { return t => { setTimeout(e, void 0, t); }; } const ao = class L0 extends _.x {
            constructor(t = !1) { super(), this.__isAsync = t; }
            emit(t) { super.next(t); }
            subscribe(t, i, a) { var c, f, m; let b = t, w = i || (() => null), O = a; if (t && "object" == typeof t) {
                const W = t;
                b = null === (c = W.next) || void 0 === c ? void 0 : c.bind(W), w = null === (f = W.error) || void 0 === f ? void 0 : f.bind(W), O = null === (m = W.complete) || void 0 === m ? void 0 : m.bind(W);
            } this.__isAsync && (w = um(w), b && (b = um(b)), O && (O = um(O))); const L = super.subscribe({ next: b, error: w, complete: O }); return t instanceof j.w0 && t.add(L), L; }
        }; function k0() { return this._results[no()](); } class Eh {
            constructor(t = !1) { this._emitDistinctChangesOnly = t, this.dirty = !0, this._results = [], this._changesDetected = !1, this._changes = null, this.length = 0, this.first = void 0, this.last = void 0; const i = no(), a = Eh.prototype; a[i] || (a[i] = k0); }
            get changes() { return this._changes || (this._changes = new ao); }
            get(t) { return this._results[t]; }
            map(t) { return this._results.map(t); }
            filter(t) { return this._results.filter(t); }
            find(t) { return this._results.find(t); }
            reduce(t, i) { return this._results.reduce(t, i); }
            forEach(t) { this._results.forEach(t); }
            some(t) { return this._results.some(t); }
            toArray() { return this._results.slice(); }
            toString() { return this._results.toString(); }
            reset(t, i) { const a = this; a.dirty = !1; const c = Gs(t); (this._changesDetected = !function zu(e, t, i) { if (e.length !== t.length)
                return !1; for (let a = 0; a < e.length; a++) {
                let c = e[a], f = t[a];
                if (i && (c = i(c), f = i(f)), f !== c)
                    return !1;
            } return !0; }(a._results, c, i)) && (a._results = c, a.length = c.length, a.last = c[this.length - 1], a.first = c[0]); }
            notifyOnChanges() { this._changes && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this); }
            setDirty() { this.dirty = !0; }
            destroy() { this.changes.complete(), this.changes.unsubscribe(); }
        } Symbol; let Hu = (() => { class e {
        } return e.__NG_ELEMENT_ID__ = j0, e; })(); const N0 = Hu, B0 = class extends N0 {
            constructor(t, i, a) { super(), this._declarationLView = t, this._declarationTContainer = i, this.elementRef = a; }
            createEmbeddedView(t) { const i = this._declarationTContainer.tViews, a = qa(this._declarationLView, i, t, 16, null, i.declTNode, null, null, null, null); a[17] = this._declarationLView[this._declarationTContainer.index]; const f = this._declarationLView[19]; return null !== f && (a[19] = f.createEmbeddedView(i)), Xa(i, a, t), new Bu(a); }
        }; function j0() { return Ah(p(), ft()); } function Ah(e, t) { return 4 & e.type ? new B0(t, e, zl(e, t)) : null; } let Sh = (() => { class e {
        } return e.__NG_ELEMENT_ID__ = V0, e; })(); function V0() { return m_(p(), ft()); } const H0 = Sh, g_ = class extends H0 {
            constructor(t, i, a) { super(), this._lContainer = t, this._hostTNode = i, this._hostLView = a; }
            get element() { return zl(this._hostTNode, this._hostLView); }
            get injector() { return new mn(this._hostTNode, this._hostLView); }
            get parentInjector() { const t = vo(this._hostTNode, this._hostLView); if (gr(t)) {
                const i = Or(t, this._hostLView), a = pr(t);
                return new mn(i[1].data[a + 8], i);
            } return new mn(null, this._hostLView); }
            clear() { for (; this.length > 0;)
                this.remove(this.length - 1); }
            get(t) { const i = p_(this._lContainer); return null !== i && i[t] || null; }
            get length() { return this._lContainer.length - 10; }
            createEmbeddedView(t, i, a) { const c = t.createEmbeddedView(i || {}); return this.insert(c, a), c; }
            createComponent(t, i, a, c, f) { const m = t && !function Ho(e) { return "function" == typeof e; }(t); let b; if (m)
                b = i;
            else {
                const W = i || {};
                b = W.index, a = W.injector, c = W.projectableNodes, f = W.ngModuleRef;
            } const w = m ? t : new lm(J(t)), O = a || this.parentInjector; if (!f && null == w.ngModule && O) {
                const W = O.get(Wl, null);
                W && (f = W);
            } const L = w.create(O, c, void 0, f); return this.insert(L.hostView, b), L; }
            insert(t, i) { const a = t._lView, c = a[1]; if (function kn(e) { return di(e[3]); }(a)) {
                const L = this.indexOf(t);
                if (-1 !== L)
                    this.detach(L);
                else {
                    const W = a[3], ae = new g_(W, W[6], W[3]);
                    ae.detach(ae.indexOf(t));
                }
            } const f = this._adjustIndex(i), m = this._lContainer; !function Mg(e, t, i, a) { const c = 10 + a, f = i.length; a > 0 && (i[c - 1][4] = t), a < f - 10 ? (t[4] = i[c], Wu(i, 10 + a, t)) : (i.push(t), t[4] = null), t[3] = i; const m = t[17]; null !== m && i !== m && function Tg(e, t) { const i = e[9]; t[16] !== t[3][3][16] && (e[2] = !0), null === i ? e[9] = [t] : i.push(t); }(m, t); const b = t[19]; null !== b && b.insertView(e), t[2] |= 128; }(c, a, m, f); const b = ea(f, m), w = a[11], O = To(w, m[7]); return null !== O && function Ag(e, t, i, a, c, f) { a[0] = c, a[6] = t, Wa(e, a, i, 1, c, f); }(c, m[6], w, a, O, b), t.attachToViewContainerRef(), Wu(dm(m), f, t), t; }
            move(t, i) { return this.insert(t, i); }
            indexOf(t) { const i = p_(this._lContainer); return null !== i ? i.indexOf(t) : -1; }
            remove(t) { const i = this._adjustIndex(t, -1), a = Jo(this._lContainer, i); a && (xo(dm(this._lContainer), i), fs(a[1], a)); }
            detach(t) { const i = this._adjustIndex(t, -1), a = Jo(this._lContainer, i); return a && null != xo(dm(this._lContainer), i) ? new Bu(a) : null; }
            _adjustIndex(t, i = 0) { return null == t ? this.length + i : t; }
        }; function p_(e) { return e[8]; } function dm(e) { return e[8] || (e[8] = []); } function m_(e, t) { let i; const a = t[e.index]; if (di(a))
            i = a;
        else {
            let c;
            if (8 & e.type)
                c = Gn(a);
            else {
                const f = t[11];
                c = f.createComment("");
                const m = H(e, t);
                eo(f, To(f, m), c, function Cl(e, t) { return Kn(e) ? e.nextSibling(t) : t.nextSibling; }(f, m), !1);
            }
            t[e.index] = i = Sf(a, t, c, e), Ol(t, i);
        } return new g_(i, e, t); } class fm {
            constructor(t) { this.queryList = t, this.matches = null; }
            clone() { return new fm(this.queryList); }
            setDirty() { this.queryList.setDirty(); }
        } class hm {
            constructor(t = []) { this.queries = t; }
            createEmbeddedView(t) { const i = t.queries; if (null !== i) {
                const a = null !== t.contentQueries ? t.contentQueries[0] : i.length, c = [];
                for (let f = 0; f < a; f++) {
                    const m = i.getByIndex(f);
                    c.push(this.queries[m.indexInDeclarationView].clone());
                }
                return new hm(c);
            } return null; }
            insertView(t) { this.dirtyQueriesWithMatches(t); }
            detachView(t) { this.dirtyQueriesWithMatches(t); }
            dirtyQueriesWithMatches(t) { for (let i = 0; i < this.queries.length; i++)
                null !== E_(t, i).matches && this.queries[i].setDirty(); }
        } class y_ {
            constructor(t, i, a = null) { this.predicate = t, this.flags = i, this.read = a; }
        } class gm {
            constructor(t = []) { this.queries = t; }
            elementStart(t, i) { for (let a = 0; a < this.queries.length; a++)
                this.queries[a].elementStart(t, i); }
            elementEnd(t) { for (let i = 0; i < this.queries.length; i++)
                this.queries[i].elementEnd(t); }
            embeddedTView(t) { let i = null; for (let a = 0; a < this.length; a++) {
                const c = null !== i ? i.length : 0, f = this.getByIndex(a).embeddedTView(t, c);
                f && (f.indexInDeclarationView = a, null !== i ? i.push(f) : i = [f]);
            } return null !== i ? new gm(i) : null; }
            template(t, i) { for (let a = 0; a < this.queries.length; a++)
                this.queries[a].template(t, i); }
            getByIndex(t) { return this.queries[t]; }
            get length() { return this.queries.length; }
            track(t) { this.queries.push(t); }
        } class pm {
            constructor(t, i = -1) { this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = i; }
            elementStart(t, i) { this.isApplyingToNode(i) && this.matchTNode(t, i); }
            elementEnd(t) { this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1); }
            template(t, i) { this.elementStart(t, i); }
            embeddedTView(t, i) { return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, i), new pm(this.metadata)) : null; }
            isApplyingToNode(t) { if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
                const i = this._declarationNodeIndex;
                let a = t.parent;
                for (; null !== a && 8 & a.type && a.index !== i;)
                    a = a.parent;
                return i === (null !== a ? a.index : -1);
            } return this._appliesToNextNode; }
            matchTNode(t, i) { const a = this.metadata.predicate; if (Array.isArray(a))
                for (let c = 0; c < a.length; c++) {
                    const f = a[c];
                    this.matchTNodeWithReadOption(t, i, $0(i, f)), this.matchTNodeWithReadOption(t, i, B(i, t, f, !1, !1));
                }
            else
                a === Hu ? 4 & i.type && this.matchTNodeWithReadOption(t, i, -1) : this.matchTNodeWithReadOption(t, i, B(i, t, a, !1, !1)); }
            matchTNodeWithReadOption(t, i, a) { if (null !== a) {
                const c = this.metadata.read;
                if (null !== c)
                    if (c === Nu || c === Sh || c === Hu && 4 & i.type)
                        this.addMatch(i.index, -2);
                    else {
                        const f = B(i, t, c, !1, !1);
                        null !== f && this.addMatch(i.index, f);
                    }
                else
                    this.addMatch(i.index, a);
            } }
            addMatch(t, i) { null === this.matches ? this.matches = [t, i] : this.matches.push(t, i); }
        } function $0(e, t) { const i = e.localNames; if (null !== i)
            for (let a = 0; a < i.length; a += 2)
                if (i[a] === t)
                    return i[a + 1]; return null; } function W0(e, t, i, a) { return -1 === i ? function z0(e, t) { return 11 & e.type ? zl(e, t) : 4 & e.type ? Ah(e, t) : null; }(t, e) : -2 === i ? function Y0(e, t, i) { return i === Nu ? zl(t, e) : i === Hu ? Ah(t, e) : i === Sh ? m_(t, e) : void 0; }(e, t, a) : K(e, e[1], i, t); } function v_(e, t, i, a) { const c = t[19].queries[a]; if (null === c.matches) {
            const f = e.data, m = i.matches, b = [];
            for (let w = 0; w < m.length; w += 2) {
                const O = m[w];
                b.push(O < 0 ? null : W0(t, f[O], m[w + 1], i.metadata.read));
            }
            c.matches = b;
        } return c.matches; } function mm(e, t, i, a) { const c = e.queries.getByIndex(i), f = c.matches; if (null !== f) {
            const m = v_(e, t, c, i);
            for (let b = 0; b < f.length; b += 2) {
                const w = f[b];
                if (w > 0)
                    a.push(m[b / 2]);
                else {
                    const O = f[b + 1], L = t[-w];
                    for (let W = 10; W < L.length; W++) {
                        const ae = L[W];
                        ae[17] === ae[3] && mm(ae[1], ae, O, a);
                    }
                    if (null !== L[9]) {
                        const W = L[9];
                        for (let ae = 0; ae < W.length; ae++) {
                            const De = W[ae];
                            mm(De[1], De, O, a);
                        }
                    }
                }
            }
        } return a; } function __(e) { const t = ft(), i = R(), a = Si(); as(a + 1); const c = E_(i, a); if (e.dirty && jn(t) === (2 == (2 & c.metadata.flags))) {
            if (null === c.matches)
                e.reset([]);
            else {
                const f = c.crossesNgTemplate ? mm(i, t, a, []) : v_(i, t, c, a);
                e.reset(f, l0), e.notifyOnChanges();
            }
            return !0;
        } return !1; } function x_(e, t, i) { const a = R(); a.firstCreatePass && (w_(a, new y_(e, t, i), -1), 2 == (2 & t) && (a.staticViewQueries = !0)), C_(a, ft(), t); } function b_(e, t, i, a) { const c = R(); if (c.firstCreatePass) {
            const f = p();
            w_(c, new y_(t, i, a), f.index), function Q0(e, t) { const i = e.contentQueries || (e.contentQueries = []); t !== (i.length ? i[i.length - 1] : -1) && i.push(e.queries.length - 1, t); }(c, e), 2 == (2 & i) && (c.staticContentQueries = !0);
        } C_(c, ft(), i); } function D_() { return function K0(e, t) { return e[19].queries[t].queryList; }(ft(), Si()); } function C_(e, t, i) { const a = new Eh(4 == (4 & i)); vf(e, t, a, a.destroy), null === t[19] && (t[19] = new hm), t[19].queries.push(new fm(a)); } function w_(e, t, i) { null === e.queries && (e.queries = new gm), e.queries.track(new pm(t, i)); } function E_(e, t) { return e.queries.getByIndex(t); } function A_(e, t) { return Ah(e, t); } function Ih(...e) { } const Dm = new gi("Application Initializer"); let Ql = (() => { class e {
            constructor(i) { this.appInits = i, this.resolve = Ih, this.reject = Ih, this.initialized = !1, this.done = !1, this.donePromise = new Promise((a, c) => { this.resolve = a, this.reject = c; }); }
            runInitializers() { if (this.initialized)
                return; const i = [], a = () => { this.done = !0, this.resolve(); }; if (this.appInits)
                for (let c = 0; c < this.appInits.length; c++) {
                    const f = this.appInits[c]();
                    if (Ft(f))
                        i.push(f);
                    else if (tn(f)) {
                        const m = new Promise((b, w) => { f.subscribe({ complete: b, error: w }); });
                        i.push(m);
                    }
                } Promise.all(i).then(() => { a(); }).catch(c => { this.reject(c); }), 0 === i.length && a(), this.initialized = !0; }
        } return e.\u0275fac = function (i) { return new (i || e)(Vi(Dm, 8)); }, e.\u0275prov = Bt({ token: e, factory: e.\u0275fac }), e; })(); const G_ = new gi("AppId"), hD = { provide: G_, useFactory: function fD() { return `${Cm()}${Cm()}${Cm()}`; }, deps: [] }; function Cm() { return String.fromCharCode(97 + Math.floor(25 * Math.random())); } const $_ = new gi("Platform Initializer"), z_ = new gi("Platform ID"), W_ = new gi("appBootstrapListener"); let Y_ = (() => { class e {
            log(i) { console.log(i); }
            warn(i) { console.warn(i); }
        } return e.\u0275fac = function (i) { return new (i || e); }, e.\u0275prov = Bt({ token: e, factory: e.\u0275fac }), e; })(); const Oh = new gi("LocaleId"), K_ = new gi("DefaultCurrencyCode"); class gD {
            constructor(t, i) { this.ngModuleFactory = t, this.componentFactories = i; }
        } let wm = (() => { class e {
            compileModuleSync(i) { return new cm(i); }
            compileModuleAsync(i) { return Promise.resolve(this.compileModuleSync(i)); }
            compileModuleAndAllComponentsSync(i) { const a = this.compileModuleSync(i), f = Zs(Gt(i).declarations).reduce((m, b) => { const w = J(b); return w && m.push(new lm(w)), m; }, []); return new gD(a, f); }
            compileModuleAndAllComponentsAsync(i) { return Promise.resolve(this.compileModuleAndAllComponentsSync(i)); }
            clearCache() { }
            clearCacheFor(i) { }
            getModuleId(i) { }
        } return e.\u0275fac = function (i) { return new (i || e); }, e.\u0275prov = Bt({ token: e, factory: e.\u0275fac }), e; })(); const mD = (() => Promise.resolve(0))(); function Em(e) { "undefined" == typeof Zone ? mD.then(() => { e && e.apply(null, null); }) : Zone.current.scheduleMicroTask("scheduleMicrotask", e); } class ir {
            constructor({ enableLongStackTrace: t = !1, shouldCoalesceEventChangeDetection: i = !1, shouldCoalesceRunChangeDetection: a = !1 }) { if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new ao(!1), this.onMicrotaskEmpty = new ao(!1), this.onStable = new ao(!1), this.onError = new ao(!1), "undefined" == typeof Zone)
                throw new Error("In this configuration Angular requires Zone.js"); Zone.assertZonePatched(); const c = this; c._nesting = 0, c._outer = c._inner = Zone.current, Zone.TaskTrackingZoneSpec && (c._inner = c._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (c._inner = c._inner.fork(Zone.longStackTraceZoneSpec)), c.shouldCoalesceEventChangeDetection = !a && i, c.shouldCoalesceRunChangeDetection = a, c.lastRequestAnimationFrameId = -1, c.nativeRequestAnimationFrame = function yD() { let e = Jt.requestAnimationFrame, t = Jt.cancelAnimationFrame; if ("undefined" != typeof Zone && e && t) {
                const i = e[Zone.__symbol__("OriginalDelegate")];
                i && (e = i);
                const a = t[Zone.__symbol__("OriginalDelegate")];
                a && (t = a);
            } return { nativeRequestAnimationFrame: e, nativeCancelAnimationFrame: t }; }().nativeRequestAnimationFrame, function xD(e) { const t = () => { !function _D(e) { e.isCheckStableRunning || -1 !== e.lastRequestAnimationFrameId || (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(Jt, () => { e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => { e.lastRequestAnimationFrameId = -1, Sm(e), e.isCheckStableRunning = !0, Am(e), e.isCheckStableRunning = !1; }, void 0, () => { }, () => { })), e.fakeTopEventTask.invoke(); }), Sm(e)); }(e); }; e._inner = e._inner.fork({ name: "angular", properties: { isAngularZone: !0 }, onInvokeTask: (i, a, c, f, m, b) => { try {
                    return Q_(e), i.invokeTask(c, f, m, b);
                }
                finally {
                    (e.shouldCoalesceEventChangeDetection && "eventTask" === f.type || e.shouldCoalesceRunChangeDetection) && t(), q_(e);
                } }, onInvoke: (i, a, c, f, m, b, w) => { try {
                    return Q_(e), i.invoke(c, f, m, b, w);
                }
                finally {
                    e.shouldCoalesceRunChangeDetection && t(), q_(e);
                } }, onHasTask: (i, a, c, f) => { i.hasTask(c, f), a === c && ("microTask" == f.change ? (e._hasPendingMicrotasks = f.microTask, Sm(e), Am(e)) : "macroTask" == f.change && (e.hasPendingMacrotasks = f.macroTask)); }, onHandleError: (i, a, c, f) => (i.handleError(c, f), e.runOutsideAngular(() => e.onError.emit(f)), !1) }); }(c); }
            static isInAngularZone() { return !0 === Zone.current.get("isAngularZone"); }
            static assertInAngularZone() { if (!ir.isInAngularZone())
                throw new Error("Expected to be in Angular Zone, but it is not!"); }
            static assertNotInAngularZone() { if (ir.isInAngularZone())
                throw new Error("Expected to not be in Angular Zone, but it is!"); }
            run(t, i, a) { return this._inner.run(t, i, a); }
            runTask(t, i, a, c) { const f = this._inner, m = f.scheduleEventTask("NgZoneEvent: " + c, t, vD, Ih, Ih); try {
                return f.runTask(m, i, a);
            }
            finally {
                f.cancelTask(m);
            } }
            runGuarded(t, i, a) { return this._inner.runGuarded(t, i, a); }
            runOutsideAngular(t) { return this._outer.run(t); }
        } const vD = {}; function Am(e) { if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
            try {
                e._nesting++, e.onMicrotaskEmpty.emit(null);
            }
            finally {
                if (e._nesting--, !e.hasPendingMicrotasks)
                    try {
                        e.runOutsideAngular(() => e.onStable.emit(null));
                    }
                    finally {
                        e.isStable = !0;
                    }
            } } function Sm(e) { e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && -1 !== e.lastRequestAnimationFrameId); } function Q_(e) { e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null)); } function q_(e) { e._nesting--, Am(e); } class bD {
            constructor() { this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new ao, this.onMicrotaskEmpty = new ao, this.onStable = new ao, this.onError = new ao; }
            run(t, i, a) { return t.apply(i, a); }
            runGuarded(t, i, a) { return t.apply(i, a); }
            runOutsideAngular(t) { return t(); }
            runTask(t, i, a, c) { return t.apply(i, a); }
        } let X_ = (() => { class e {
            constructor(i) { this._ngZone = i, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), i.run(() => { this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone"); }); }
            _watchAngularEvents() { this._ngZone.onUnstable.subscribe({ next: () => { this._didWork = !0, this._isZoneStable = !1; } }), this._ngZone.runOutsideAngular(() => { this._ngZone.onStable.subscribe({ next: () => { ir.assertNotInAngularZone(), Em(() => { this._isZoneStable = !0, this._runCallbacksIfReady(); }); } }); }); }
            increasePendingRequestCount() { return this._pendingCount += 1, this._didWork = !0, this._pendingCount; }
            decreasePendingRequestCount() { if (this._pendingCount -= 1, this._pendingCount < 0)
                throw new Error("pending async requests below zero"); return this._runCallbacksIfReady(), this._pendingCount; }
            isStable() { return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks; }
            _runCallbacksIfReady() { if (this.isStable())
                Em(() => { for (; 0 !== this._callbacks.length;) {
                    let i = this._callbacks.pop();
                    clearTimeout(i.timeoutId), i.doneCb(this._didWork);
                } this._didWork = !1; });
            else {
                let i = this.getPendingTasks();
                this._callbacks = this._callbacks.filter(a => !a.updateCb || !a.updateCb(i) || (clearTimeout(a.timeoutId), !1)), this._didWork = !0;
            } }
            getPendingTasks() { return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(i => ({ source: i.source, creationLocation: i.creationLocation, data: i.data })) : []; }
            addCallback(i, a, c) { let f = -1; a && a > 0 && (f = setTimeout(() => { this._callbacks = this._callbacks.filter(m => m.timeoutId !== f), i(this._didWork, this.getPendingTasks()); }, a)), this._callbacks.push({ doneCb: i, timeoutId: f, updateCb: c }); }
            whenStable(i, a, c) { if (c && !this.taskTrackingZone)
                throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'); this.addCallback(i, a, c), this._runCallbacksIfReady(); }
            getPendingRequestCount() { return this._pendingCount; }
            findProviders(i, a, c) { return []; }
        } return e.\u0275fac = function (i) { return new (i || e)(Vi(ir)); }, e.\u0275prov = Bt({ token: e, factory: e.\u0275fac }), e; })(), Z_ = (() => { class e {
            constructor() { this._applications = new Map, Mm.addToWindow(this); }
            registerApplication(i, a) { this._applications.set(i, a); }
            unregisterApplication(i) { this._applications.delete(i); }
            unregisterAllApplications() { this._applications.clear(); }
            getTestability(i) { return this._applications.get(i) || null; }
            getAllTestabilities() { return Array.from(this._applications.values()); }
            getAllRootElements() { return Array.from(this._applications.keys()); }
            findTestabilityInTree(i, a = !0) { return Mm.findTestabilityInTree(this, i, a); }
        } return e.\u0275fac = function (i) { return new (i || e); }, e.\u0275prov = Bt({ token: e, factory: e.\u0275fac }), e; })(); class DD {
            addToWindow(t) { }
            findTestabilityInTree(t, i, a) { return null; }
        } function CD(e) { Mm = e; } let jr, Mm = new DD; const J_ = new gi("AllowMultipleToken"); class AD {
            constructor(t, i) { this.name = t, this.token = i; }
        } function ex(e, t, i = []) { const a = `Platform: ${t}`, c = new gi(a); return (f = []) => { let m = tx(); if (!m || m.injector.get(J_, !1))
            if (e)
                e(i.concat(f).concat({ provide: c, useValue: !0 }));
            else {
                const b = i.concat(f).concat({ provide: c, useValue: !0 }, { provide: vu, useValue: "platform" });
                !function SD(e) { if (jr && !jr.destroyed && !jr.injector.get(J_, !1))
                    throw new qe(400, ""); jr = e.get(nx); const t = e.get($_, null); t && t.forEach(i => i()); }($s.create({ providers: b, name: a }));
            } return function MD(e) { const t = tx(); if (!t)
            throw new qe(401, ""); return t; }(); }; } function tx() { return jr && !jr.destroyed ? jr : null; } let nx = (() => { class e {
            constructor(i) { this._injector = i, this._modules = [], this._destroyListeners = [], this._destroyed = !1; }
            bootstrapModuleFactory(i, a) { const b = function TD(e, t) { let i; return i = "noop" === e ? new bD : ("zone.js" === e ? void 0 : e) || new ir({ enableLongStackTrace: !1, shouldCoalesceEventChangeDetection: !!(null == t ? void 0 : t.ngZoneEventCoalescing), shouldCoalesceRunChangeDetection: !!(null == t ? void 0 : t.ngZoneRunCoalescing) }), i; }(a ? a.ngZone : void 0, { ngZoneEventCoalescing: a && a.ngZoneEventCoalescing || !1, ngZoneRunCoalescing: a && a.ngZoneRunCoalescing || !1 }), w = [{ provide: ir, useValue: b }]; return b.run(() => { const O = $s.create({ providers: w, parent: this.injector, name: i.moduleType.name }), L = i.create(O), W = L.injector.get(Ua, null); if (!W)
                throw new qe(402, ""); return b.runOutsideAngular(() => { const ae = b.onError.subscribe({ next: De => { W.handleError(De); } }); L.onDestroy(() => { Tm(this._modules, L), ae.unsubscribe(); }); }), function ID(e, t, i) { try {
                const a = i();
                return Ft(a) ? a.catch(c => { throw t.runOutsideAngular(() => e.handleError(c)), c; }) : a;
            }
            catch (a) {
                throw t.runOutsideAngular(() => e.handleError(a)), a;
            } }(W, b, () => { const ae = L.injector.get(Ql); return ae.runInitializers(), ae.donePromise.then(() => (function lb(e) { It(e, "Expected localeId to be defined"), "string" == typeof e && (Cv = e.toLowerCase().replace(/_/g, "-")); }(L.injector.get(Oh, _h) || _h), this._moduleDoBootstrap(L), L)); }); }); }
            bootstrapModule(i, a = []) { const c = ix({}, a); return function wD(e, t, i) { const a = new cm(i); return Promise.resolve(a); }(0, 0, i).then(f => this.bootstrapModuleFactory(f, c)); }
            _moduleDoBootstrap(i) { const a = i.injector.get(Gu); if (i._bootstrapComponents.length > 0)
                i._bootstrapComponents.forEach(c => a.bootstrap(c));
            else {
                if (!i.instance.ngDoBootstrap)
                    throw new qe(403, "");
                i.instance.ngDoBootstrap(a);
            } this._modules.push(i); }
            onDestroy(i) { this._destroyListeners.push(i); }
            get injector() { return this._injector; }
            destroy() { if (this._destroyed)
                throw new qe(404, ""); this._modules.slice().forEach(i => i.destroy()), this._destroyListeners.forEach(i => i()), this._destroyed = !0; }
            get destroyed() { return this._destroyed; }
        } return e.\u0275fac = function (i) { return new (i || e)(Vi($s)); }, e.\u0275prov = Bt({ token: e, factory: e.\u0275fac }), e; })(); function ix(e, t) { return Array.isArray(t) ? t.reduce(ix, e) : Object.assign(Object.assign({}, e), t); } let Gu = (() => { class e {
            constructor(i, a, c, f, m) { this._zone = i, this._injector = a, this._exceptionHandler = c, this._componentFactoryResolver = f, this._initStatus = m, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._onMicrotaskEmptySubscription = this._zone.onMicrotaskEmpty.subscribe({ next: () => { this._zone.run(() => { this.tick(); }); } }); const b = new ie.y(O => { this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => { O.next(this._stable), O.complete(); }); }), w = new ie.y(O => { let L; this._zone.runOutsideAngular(() => { L = this._zone.onStable.subscribe(() => { ir.assertNotInAngularZone(), Em(() => { !this._stable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks && (this._stable = !0, O.next(!0)); }); }); }); const W = this._zone.onUnstable.subscribe(() => { ir.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => { O.next(!1); })); }); return () => { L.unsubscribe(), W.unsubscribe(); }; }); this.isStable = (0, _e.T)(b, w.pipe((0, Ae.B)())); }
            bootstrap(i, a) { if (!this._initStatus.done)
                throw new qe(405, ""); let c; c = i instanceof Qv ? i : this._componentFactoryResolver.resolveComponentFactory(i), this.componentTypes.push(c.componentType); const f = function ED(e) { return e.isBoundToModule; }(c) ? void 0 : this._injector.get(Wl), b = c.create($s.NULL, [], a || c.selector, f), w = b.location.nativeElement, O = b.injector.get(X_, null), L = O && b.injector.get(Z_); return O && L && L.registerApplication(w, O), b.onDestroy(() => { this.detachView(b.hostView), Tm(this.components, b), L && L.unregisterApplication(w); }), this._loadComponent(b), b; }
            tick() { if (this._runningTick)
                throw new qe(101, ""); try {
                this._runningTick = !0;
                for (let i of this._views)
                    i.detectChanges();
            }
            catch (i) {
                this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(i));
            }
            finally {
                this._runningTick = !1;
            } }
            attachView(i) { const a = i; this._views.push(a), a.attachToAppRef(this); }
            detachView(i) { const a = i; Tm(this._views, a), a.detachFromAppRef(); }
            _loadComponent(i) { this.attachView(i.hostView), this.tick(), this.components.push(i), this._injector.get(W_, []).concat(this._bootstrapListeners).forEach(c => c(i)); }
            ngOnDestroy() { this._views.slice().forEach(i => i.destroy()), this._onMicrotaskEmptySubscription.unsubscribe(); }
            get viewCount() { return this._views.length; }
        } return e.\u0275fac = function (i) { return new (i || e)(Vi(ir), Vi($s), Vi(Ua), Vi(ku), Vi(Ql)); }, e.\u0275prov = Bt({ token: e, factory: e.\u0275fac }), e; })(); function Tm(e, t) { const i = e.indexOf(t); i > -1 && e.splice(i, 1); } let rx = !0; function RD() { rx = !1; } let PD = (() => { class e {
        } return e.__NG_ELEMENT_ID__ = FD, e; })(); function FD(e) { return function LD(e, t, i) { if (is(e) && !i) {
            const a = Mt(e.index, t);
            return new Bu(a, a);
        } return 47 & e.type ? new Bu(t[16], t) : null; }(p(), ft(), 16 == (16 & e)); } class fx {
            constructor() { }
            supports(t) { return nl(t); }
            create(t) { return new HD(t); }
        } const VD = (e, t) => t; class HD {
            constructor(t) { this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || VD; }
            forEachItem(t) { let i; for (i = this._itHead; null !== i; i = i._next)
                t(i); }
            forEachOperation(t) { let i = this._itHead, a = this._removalsHead, c = 0, f = null; for (; i || a;) {
                const m = !a || i && i.currentIndex < gx(a, c, f) ? i : a, b = gx(m, c, f), w = m.currentIndex;
                if (m === a)
                    c--, a = a._nextRemoved;
                else if (i = i._next, null == m.previousIndex)
                    c++;
                else {
                    f || (f = []);
                    const O = b - c, L = w - c;
                    if (O != L) {
                        for (let ae = 0; ae < O; ae++) {
                            const De = ae < f.length ? f[ae] : f[ae] = 0, Ze = De + ae;
                            L <= Ze && Ze < O && (f[ae] = De + 1);
                        }
                        f[m.previousIndex] = L - O;
                    }
                }
                b !== w && t(m, b, w);
            } }
            forEachPreviousItem(t) { let i; for (i = this._previousItHead; null !== i; i = i._nextPrevious)
                t(i); }
            forEachAddedItem(t) { let i; for (i = this._additionsHead; null !== i; i = i._nextAdded)
                t(i); }
            forEachMovedItem(t) { let i; for (i = this._movesHead; null !== i; i = i._nextMoved)
                t(i); }
            forEachRemovedItem(t) { let i; for (i = this._removalsHead; null !== i; i = i._nextRemoved)
                t(i); }
            forEachIdentityChange(t) { let i; for (i = this._identityChangesHead; null !== i; i = i._nextIdentityChange)
                t(i); }
            diff(t) { if (null == t && (t = []), !nl(t))
                throw new qe(900, ""); return this.check(t) ? this : null; }
            onDestroy() { }
            check(t) { this._reset(); let c, f, m, i = this._itHead, a = !1; if (Array.isArray(t)) {
                this.length = t.length;
                for (let b = 0; b < this.length; b++)
                    f = t[b], m = this._trackByFn(b, f), null !== i && Object.is(i.trackById, m) ? (a && (i = this._verifyReinsertion(i, f, m, b)), Object.is(i.item, f) || this._addIdentityChange(i, f)) : (i = this._mismatch(i, f, m, b), a = !0), i = i._next;
            }
            else
                c = 0, function Pp(e, t) { if (Array.isArray(e))
                    for (let i = 0; i < e.length; i++)
                        t(e[i]);
                else {
                    const i = e[no()]();
                    let a;
                    for (; !(a = i.next()).done;)
                        t(a.value);
                } }(t, b => { m = this._trackByFn(c, b), null !== i && Object.is(i.trackById, m) ? (a && (i = this._verifyReinsertion(i, b, m, c)), Object.is(i.item, b) || this._addIdentityChange(i, b)) : (i = this._mismatch(i, b, m, c), a = !0), i = i._next, c++; }), this.length = c; return this._truncate(i), this.collection = t, this.isDirty; }
            get isDirty() { return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead; }
            _reset() { if (this.isDirty) {
                let t;
                for (t = this._previousItHead = this._itHead; null !== t; t = t._next)
                    t._nextPrevious = t._next;
                for (t = this._additionsHead; null !== t; t = t._nextAdded)
                    t.previousIndex = t.currentIndex;
                for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = t._nextMoved)
                    t.previousIndex = t.currentIndex;
                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null;
            } }
            _mismatch(t, i, a, c) { let f; return null === t ? f = this._itTail : (f = t._prev, this._remove(t)), null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(a, null)) ? (Object.is(t.item, i) || this._addIdentityChange(t, i), this._reinsertAfter(t, f, c)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(a, c)) ? (Object.is(t.item, i) || this._addIdentityChange(t, i), this._moveAfter(t, f, c)) : t = this._addAfter(new UD(i, a), f, c), t; }
            _verifyReinsertion(t, i, a, c) { let f = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(a, null); return null !== f ? t = this._reinsertAfter(f, t._prev, c) : t.currentIndex != c && (t.currentIndex = c, this._addToMoves(t, c)), t; }
            _truncate(t) { for (; null !== t;) {
                const i = t._next;
                this._addToRemovals(this._unlink(t)), t = i;
            } null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null); }
            _reinsertAfter(t, i, a) { null !== this._unlinkedRecords && this._unlinkedRecords.remove(t); const c = t._prevRemoved, f = t._nextRemoved; return null === c ? this._removalsHead = f : c._nextRemoved = f, null === f ? this._removalsTail = c : f._prevRemoved = c, this._insertAfter(t, i, a), this._addToMoves(t, a), t; }
            _moveAfter(t, i, a) { return this._unlink(t), this._insertAfter(t, i, a), this._addToMoves(t, a), t; }
            _addAfter(t, i, a) { return this._insertAfter(t, i, a), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t; }
            _insertAfter(t, i, a) { const c = null === i ? this._itHead : i._next; return t._next = c, t._prev = i, null === c ? this._itTail = t : c._prev = t, null === i ? this._itHead = t : i._next = t, null === this._linkedRecords && (this._linkedRecords = new hx), this._linkedRecords.put(t), t.currentIndex = a, t; }
            _remove(t) { return this._addToRemovals(this._unlink(t)); }
            _unlink(t) { null !== this._linkedRecords && this._linkedRecords.remove(t); const i = t._prev, a = t._next; return null === i ? this._itHead = a : i._next = a, null === a ? this._itTail = i : a._prev = i, t; }
            _addToMoves(t, i) { return t.previousIndex === i || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t; }
            _addToRemovals(t) { return null === this._unlinkedRecords && (this._unlinkedRecords = new hx), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t; }
            _addIdentityChange(t, i) { return t.item = i, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t; }
        } class UD {
            constructor(t, i) { this.item = t, this.trackById = i, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null; }
        } class GD {
            constructor() { this._head = null, this._tail = null; }
            add(t) { null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t); }
            get(t, i) { let a; for (a = this._head; null !== a; a = a._nextDup)
                if ((null === i || i <= a.currentIndex) && Object.is(a.trackById, t))
                    return a; return null; }
            remove(t) { const i = t._prevDup, a = t._nextDup; return null === i ? this._head = a : i._nextDup = a, null === a ? this._tail = i : a._prevDup = i, null === this._head; }
        } class hx {
            constructor() { this.map = new Map; }
            put(t) { const i = t.trackById; let a = this.map.get(i); a || (a = new GD, this.map.set(i, a)), a.add(t); }
            get(t, i) { const c = this.map.get(t); return c ? c.get(t, i) : null; }
            remove(t) { const i = t.trackById; return this.map.get(i).remove(t) && this.map.delete(i), t; }
            get isEmpty() { return 0 === this.map.size; }
            clear() { this.map.clear(); }
        } function gx(e, t, i) { const a = e.previousIndex; if (null === a)
            return a; let c = 0; return i && a < i.length && (c = i[a]), a + t + c; } class px {
            constructor() { }
            supports(t) { return t instanceof Map || wu(t); }
            create() { return new $D; }
        } class $D {
            constructor() { this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null; }
            get isDirty() { return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead; }
            forEachItem(t) { let i; for (i = this._mapHead; null !== i; i = i._next)
                t(i); }
            forEachPreviousItem(t) { let i; for (i = this._previousMapHead; null !== i; i = i._nextPrevious)
                t(i); }
            forEachChangedItem(t) { let i; for (i = this._changesHead; null !== i; i = i._nextChanged)
                t(i); }
            forEachAddedItem(t) { let i; for (i = this._additionsHead; null !== i; i = i._nextAdded)
                t(i); }
            forEachRemovedItem(t) { let i; for (i = this._removalsHead; null !== i; i = i._nextRemoved)
                t(i); }
            diff(t) { if (t) {
                if (!(t instanceof Map || wu(t)))
                    throw new qe(900, "");
            }
            else
                t = new Map; return this.check(t) ? this : null; }
            onDestroy() { }
            check(t) { this._reset(); let i = this._mapHead; if (this._appendAfter = null, this._forEach(t, (a, c) => { if (i && i.key === c)
                this._maybeAddToChanges(i, a), this._appendAfter = i, i = i._next;
            else {
                const f = this._getOrCreateRecordForKey(c, a);
                i = this._insertBeforeOrAppend(i, f);
            } }), i) {
                i._prev && (i._prev._next = null), this._removalsHead = i;
                for (let a = i; null !== a; a = a._nextRemoved)
                    a === this._mapHead && (this._mapHead = null), this._records.delete(a.key), a._nextRemoved = a._next, a.previousValue = a.currentValue, a.currentValue = null, a._prev = null, a._next = null;
            } return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty; }
            _insertBeforeOrAppend(t, i) { if (t) {
                const a = t._prev;
                return i._next = t, i._prev = a, t._prev = i, a && (a._next = i), t === this._mapHead && (this._mapHead = i), this._appendAfter = t, t;
            } return this._appendAfter ? (this._appendAfter._next = i, i._prev = this._appendAfter) : this._mapHead = i, this._appendAfter = i, null; }
            _getOrCreateRecordForKey(t, i) { if (this._records.has(t)) {
                const c = this._records.get(t);
                this._maybeAddToChanges(c, i);
                const f = c._prev, m = c._next;
                return f && (f._next = m), m && (m._prev = f), c._next = null, c._prev = null, c;
            } const a = new zD(t); return this._records.set(t, a), a.currentValue = i, this._addToAdditions(a), a; }
            _reset() { if (this.isDirty) {
                let t;
                for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next)
                    t._nextPrevious = t._next;
                for (t = this._changesHead; null !== t; t = t._nextChanged)
                    t.previousValue = t.currentValue;
                for (t = this._additionsHead; null != t; t = t._nextAdded)
                    t.previousValue = t.currentValue;
                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null;
            } }
            _maybeAddToChanges(t, i) { Object.is(i, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = i, this._addToChanges(t)); }
            _addToAdditions(t) { null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t); }
            _addToChanges(t) { null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t); }
            _forEach(t, i) { t instanceof Map ? t.forEach(i) : Object.keys(t).forEach(a => i(t[a], a)); }
        } class zD {
            constructor(t) { this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null; }
        } function mx() { return new Ph([new fx]); } let Ph = (() => { class e {
            constructor(i) { this.factories = i; }
            static create(i, a) { if (null != a) {
                const c = a.factories.slice();
                i = i.concat(c);
            } return new e(i); }
            static extend(i) { return { provide: e, useFactory: a => e.create(i, a || mx()), deps: [[e, new zo, new Do]] }; }
            find(i) { const a = this.factories.find(c => c.supports(i)); if (null != a)
                return a; throw new qe(901, ""); }
        } return e.\u0275prov = Bt({ token: e, providedIn: "root", factory: mx }), e; })(); function yx() { return new Fh([new px]); } let Fh = (() => { class e {
            constructor(i) { this.factories = i; }
            static create(i, a) { if (a) {
                const c = a.factories.slice();
                i = i.concat(c);
            } return new e(i); }
            static extend(i) { return { provide: e, useFactory: a => e.create(i, a || yx()), deps: [[e, new zo, new Do]] }; }
            find(i) { const a = this.factories.find(f => f.supports(i)); if (a)
                return a; throw new qe(901, ""); }
        } return e.\u0275prov = Bt({ token: e, providedIn: "root", factory: yx }), e; })(); const WD = [new px], KD = new Ph([new fx]), QD = new Fh(WD), qD = ex(null, "core", [{ provide: z_, useValue: "unknown" }, { provide: nx, deps: [$s] }, { provide: Z_, deps: [] }, { provide: Y_, deps: [] }]), tC = [{ provide: Gu, useClass: Gu, deps: [ir, $s, Ua, ku, Ql] }, { provide: m0, deps: [ir], useFactory: function nC(e) { let t = []; return e.onStable.subscribe(() => { for (; t.length;)
                    t.pop()(); }), function (i) { t.push(i); }; } }, { provide: Ql, useClass: Ql, deps: [[new Do, Dm]] }, { provide: wm, useClass: wm, deps: [] }, hD, { provide: Ph, useFactory: function XD() { return KD; }, deps: [] }, { provide: Fh, useFactory: function ZD() { return QD; }, deps: [] }, { provide: Oh, useFactory: function JD(e) { return e || function eC() { return "undefined" != typeof $localize && $localize.locale || _h; }(); }, deps: [[new Rs(Oh), new Do, new zo]] }, { provide: K_, useValue: "USD" }]; let iC = (() => { class e {
            constructor(i) { }
        } return e.\u0275fac = function (i) { return new (i || e)(Vi(Gu)); }, e.\u0275mod = ri({ type: e }), e.\u0275inj = jt({ providers: tC }), e; })(); }, 9042: (St, Pe, V) => { function _(de) { for (let ce in de) {
            let fe = de[ce] || "";
            switch (ce) {
                case "display":
                    de.display = "flex" === fe ? ["-webkit-flex", "flex"] : "inline-flex" === fe ? ["-webkit-inline-flex", "inline-flex"] : fe;
                    break;
                case "align-items":
                case "align-self":
                case "align-content":
                case "flex":
                case "flex-basis":
                case "flex-flow":
                case "flex-grow":
                case "flex-shrink":
                case "flex-wrap":
                case "justify-content":
                    de["-webkit-" + ce] = fe;
                    break;
                case "flex-direction":
                    fe = fe || "row", de["-webkit-flex-direction"] = fe, de["flex-direction"] = fe;
                    break;
                case "order": de.order = de["-webkit-" + ce] = isNaN(+fe) ? "0" : fe;
            }
        } return de; } V.d(Pe, { iQ: () => ie, GK: () => _, Ar: () => _e, kt: () => Ee, tj: () => Te }); const j = "inline", ie = ["row", "column", "row-reverse", "column-reverse"]; function _e(de) { let [ce, fe, ke] = Ae(de); return function Ve(de, ce = null, fe = !1) { return { display: fe ? "inline-flex" : "flex", "box-sizing": "border-box", "flex-direction": de, "flex-wrap": ce || null }; }(ce, fe, ke); } function Ae(de) { var ce; de = null !== (ce = null == de ? void 0 : de.toLowerCase()) && void 0 !== ce ? ce : ""; let [fe, ke, Ne] = de.split(" "); return ie.find(qe => qe === fe) || (fe = ie[0]), ke === j && (ke = Ne !== j ? Ne : "", Ne = j), [fe, Le(ke), !!Ne]; } function Te(de) { let [ce] = Ae(de); return ce.indexOf("row") > -1; } function Le(de) { if (de)
            switch (de.toLowerCase()) {
                case "reverse":
                case "wrap-reverse":
                case "reverse-wrap":
                    de = "wrap-reverse";
                    break;
                case "no":
                case "none":
                case "nowrap":
                    de = "nowrap";
                    break;
                default: de = "wrap";
            } return de; } function Ee(de, ...ce) { if (null == de)
            throw TypeError("Cannot convert undefined or null to object"); for (let fe of ce)
            if (null != fe)
                for (let ke in fe)
                    fe.hasOwnProperty(ke) && (de[ke] = fe[ke]); return de; } }, 3270: (St, Pe, V) => { V.d(Pe, { Bs: () => rt, iR: () => ti, IR: () => ke, g5: () => Je, WU: () => Ke, yB: () => ei, wY: () => Ct, QI: () => tt, RK: () => he, Ot: () => wt, FL: () => Jt }); var _ = V(5e3), j = V(9808), ie = V(1135), _e = V(8306), Ae = V(6451), Te = V(7579), Le = V(9042), Ve = V(9300), Ee = V(8505); const ce = { provide: _.tb, useFactory: function de(me, Fe) { return () => { if ((0, j.NF)(Fe)) {
                const k = Array.from(me.querySelectorAll(`[class*=${fe}]`)), G = /\bflex-layout-.+?\b/g;
                k.forEach(le => { le.classList.contains(`${fe}ssr`) && le.parentNode ? le.parentNode.removeChild(le) : le.className.replace(G, ""); });
            } }; }, deps: [j.K0, _.Lbi], multi: !0 }, fe = "flex-layout-"; let ke = (() => { class me {
        } return me.\u0275fac = function (k) { return new (k || me); }, me.\u0275mod = _.oAB({ type: me }), me.\u0275inj = _.cJS({ providers: [ce] }), me; })(); class Ne {
            constructor(Fe = !1, k = "all", G = "", le = "", ge = 0) { this.matches = Fe, this.mediaQuery = k, this.mqAlias = G, this.suffix = le, this.priority = ge, this.property = ""; }
            clone() { return new Ne(this.matches, this.mediaQuery, this.mqAlias, this.suffix); }
        } let qe = (() => { class me {
            constructor() { this.stylesheet = new Map; }
            addStyleToElement(k, G, le) { const ge = this.stylesheet.get(k); ge ? ge.set(G, le) : this.stylesheet.set(k, new Map([[G, le]])); }
            clearStyles() { this.stylesheet.clear(); }
            getStyleForElement(k, G) { const le = this.stylesheet.get(k); let ge = ""; if (le) {
                const gt = le.get(G);
                ("number" == typeof gt || "string" == typeof gt) && (ge = gt + "");
            } return ge; }
        } return me.\u0275fac = function (k) { return new (k || me); }, me.\u0275prov = _.Yz7({ token: me, factory: me.\u0275fac, providedIn: "root" }), me; })(); const Je = { addFlexToParent: !0, addOrientationBps: !1, disableDefaultBps: !1, disableVendorPrefixes: !1, serverLoaded: !1, useColumnBasisZero: !0, printWithBreakpoints: [], mediaTriggerAutoRestore: !0, ssrObserveBreakpoints: [], multiplier: void 0, defaultUnit: "px", detectLayoutDisplay: !1 }, Ke = new _.OlP("Flex Layout token, config options for the library", { providedIn: "root", factory: () => Je }), Ct = new _.OlP("FlexLayoutServerLoaded", { providedIn: "root", factory: () => !1 }), rt = new _.OlP("Flex Layout token, collect all breakpoints into one provider", { providedIn: "root", factory: () => null }); function yt(me, Fe) { return me = me ? me.clone() : new Ne, Fe && (me.mqAlias = Fe.alias, me.mediaQuery = Fe.mediaQuery, me.suffix = Fe.suffix, me.priority = Fe.priority), me; } class tt {
            constructor() { this.shouldCache = !0; }
            sideEffect(Fe, k, G) { }
        } let he = (() => { class me {
            constructor(k, G, le, ge) { this._serverStylesheet = k, this._serverModuleLoaded = G, this._platformId = le, this.layoutConfig = ge; }
            applyStyleToElement(k, G, le = null) { let ge = {}; "string" == typeof G && (ge[G] = le, G = ge), ge = this.layoutConfig.disableVendorPrefixes ? G : (0, Le.GK)(G), this._applyMultiValueStyleToElement(ge, k); }
            applyStyleToElements(k, G = []) { const le = this.layoutConfig.disableVendorPrefixes ? k : (0, Le.GK)(k); G.forEach(ge => { this._applyMultiValueStyleToElement(le, ge); }); }
            getFlowDirection(k) { const G = "flex-direction"; let le = this.lookupStyle(k, G); return [le || "row", this.lookupInlineStyle(k, G) || (0, j.PM)(this._platformId) && this._serverModuleLoaded ? le : ""]; }
            hasWrap(k) { return "wrap" === this.lookupStyle(k, "flex-wrap"); }
            lookupAttributeValue(k, G) { var le; return null !== (le = k.getAttribute(G)) && void 0 !== le ? le : ""; }
            lookupInlineStyle(k, G) { return (0, j.NF)(this._platformId) ? k.style.getPropertyValue(G) : function at(me, Fe) { var k; return null !== (k = ht(me)[Fe]) && void 0 !== k ? k : ""; }(k, G); }
            lookupStyle(k, G, le = !1) { let ge = ""; return k && ((ge = this.lookupInlineStyle(k, G)) || ((0, j.NF)(this._platformId) ? le || (ge = getComputedStyle(k).getPropertyValue(G)) : this._serverModuleLoaded && (ge = this._serverStylesheet.getStyleForElement(k, G)))), ge ? ge.trim() : ""; }
            _applyMultiValueStyleToElement(k, G) { Object.keys(k).sort().forEach(le => { const ge = k[le], gt = Array.isArray(ge) ? ge : [ge]; gt.sort(); for (let Vt of gt)
                Vt = Vt ? Vt + "" : "", (0, j.NF)(this._platformId) || !this._serverModuleLoaded ? (0, j.NF)(this._platformId) ? G.style.setProperty(le, Vt) : cn(G, le, Vt) : this._serverStylesheet.addStyleToElement(G, le, Vt); }); }
        } return me.\u0275fac = function (k) { return new (k || me)(_.LFG(qe), _.LFG(Ct), _.LFG(_.Lbi), _.LFG(Ke)); }, me.\u0275prov = _.Yz7({ token: me, factory: me.\u0275fac, providedIn: "root" }), me; })(); function cn(me, Fe, k) { Fe = Fe.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(); const G = ht(me); G[Fe] = null != k ? k : "", function vt(me, Fe) { let k = ""; for (const G in Fe)
            Fe[G] && (k += `${G}:${Fe[G]};`); me.setAttribute("style", k); }(me, G); } function ht(me) { const Fe = {}, k = me.getAttribute("style"); if (k) {
            const G = k.split(/;+/g);
            for (let le = 0; le < G.length; le++) {
                const ge = G[le].trim();
                if (ge.length > 0) {
                    const gt = ge.indexOf(":");
                    if (-1 === gt)
                        throw new Error(`Invalid CSS style: ${ge}`);
                    Fe[ge.substr(0, gt).trim()] = ge.substr(gt + 1).trim();
                }
            }
        } return Fe; } function pe(me, Fe) { return (Fe && Fe.priority || 0) - (me && me.priority || 0); } function Se(me, Fe) { return (me.priority || 0) - (Fe.priority || 0); } let Oe = (() => { class me {
            constructor(k, G, le) { this._zone = k, this._platformId = G, this._document = le, this.source = new ie.X(new Ne(!0)), this.registry = new Map, this.pendingRemoveListenerFns = [], this._observable$ = this.source.asObservable(); }
            get activations() { const k = []; return this.registry.forEach((G, le) => { G.matches && k.push(le); }), k; }
            isActive(k) { var G; const le = this.registry.get(k); return null !== (G = null == le ? void 0 : le.matches) && void 0 !== G ? G : this.registerQuery(k).some(ge => ge.matches); }
            observe(k, G = !1) { if (k && k.length) {
                const le = this._observable$.pipe((0, Ve.h)(gt => !G || k.indexOf(gt.mediaQuery) > -1)), ge = new _e.y(gt => { const Vt = this.registerQuery(k); if (Vt.length) {
                    const X = Vt.pop();
                    Vt.forEach(et => { gt.next(et); }), this.source.next(X);
                } gt.complete(); });
                return (0, Ae.T)(ge, le);
            } return this._observable$; }
            registerQuery(k) { const G = Array.isArray(k) ? k : [k], le = []; return function ut(me, Fe) { const k = me.filter(G => !We[G]); if (k.length > 0) {
                const G = k.join(", ");
                try {
                    const le = Fe.createElement("style");
                    le.setAttribute("type", "text/css"), le.styleSheet || le.appendChild(Fe.createTextNode(`\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media ${G} {.fx-query-test{ }}\n`)), Fe.head.appendChild(le), k.forEach(ge => We[ge] = le);
                }
                catch (le) {
                    console.error(le);
                }
            } }(G, this._document), G.forEach(ge => { const gt = X => { this._zone.run(() => this.source.next(new Ne(X.matches, ge))); }; let Vt = this.registry.get(ge); Vt || (Vt = this.buildMQL(ge), Vt.addListener(gt), this.pendingRemoveListenerFns.push(() => Vt.removeListener(gt)), this.registry.set(ge, Vt)), Vt.matches && le.push(new Ne(!0, ge)); }), le; }
            ngOnDestroy() { let k; for (; k = this.pendingRemoveListenerFns.pop();)
                k(); }
            buildMQL(k) { return function Me(me, Fe) { return Fe && window.matchMedia("all").addListener ? window.matchMedia(me) : { matches: "all" === me || "" === me, media: me, addListener: () => { }, removeListener: () => { }, onchange: null, addEventListener() { }, removeEventListener() { }, dispatchEvent: () => !1 }; }(k, (0, j.NF)(this._platformId)); }
        } return me.\u0275fac = function (k) { return new (k || me)(_.LFG(_.R0b), _.LFG(_.Lbi), _.LFG(j.K0)); }, me.\u0275prov = _.Yz7({ token: me, factory: me.\u0275fac, providedIn: "root" }), me; })(); const We = {}, Xt = [{ alias: "xs", mediaQuery: "screen and (min-width: 0px) and (max-width: 599.98px)", priority: 1e3 }, { alias: "sm", mediaQuery: "screen and (min-width: 600px) and (max-width: 959.98px)", priority: 900 }, { alias: "md", mediaQuery: "screen and (min-width: 960px) and (max-width: 1279.98px)", priority: 800 }, { alias: "lg", mediaQuery: "screen and (min-width: 1280px) and (max-width: 1919.98px)", priority: 700 }, { alias: "xl", mediaQuery: "screen and (min-width: 1920px) and (max-width: 4999.98px)", priority: 600 }, { alias: "lt-sm", overlapping: !0, mediaQuery: "screen and (max-width: 599.98px)", priority: 950 }, { alias: "lt-md", overlapping: !0, mediaQuery: "screen and (max-width: 959.98px)", priority: 850 }, { alias: "lt-lg", overlapping: !0, mediaQuery: "screen and (max-width: 1279.98px)", priority: 750 }, { alias: "lt-xl", overlapping: !0, priority: 650, mediaQuery: "screen and (max-width: 1919.98px)" }, { alias: "gt-xs", overlapping: !0, mediaQuery: "screen and (min-width: 600px)", priority: -950 }, { alias: "gt-sm", overlapping: !0, mediaQuery: "screen and (min-width: 960px)", priority: -850 }, { alias: "gt-md", overlapping: !0, mediaQuery: "screen and (min-width: 1280px)", priority: -750 }, { alias: "gt-lg", overlapping: !0, mediaQuery: "screen and (min-width: 1920px)", priority: -650 }], Zt = "(orientation: portrait) and (max-width: 599.98px)", Cn = "(orientation: landscape) and (max-width: 959.98px)", It = "(orientation: portrait) and (min-width: 600px) and (max-width: 839.98px)", ve = "(orientation: landscape) and (min-width: 960px) and (max-width: 1279.98px)", lt = "(orientation: portrait) and (min-width: 840px)", je = "(orientation: landscape) and (min-width: 1280px)", mt = { HANDSET: `${Zt}, ${Cn}`, TABLET: `${It} , ${ve}`, WEB: `${lt}, ${je} `, HANDSET_PORTRAIT: `${Zt}`, TABLET_PORTRAIT: `${It} `, WEB_PORTRAIT: `${lt}`, HANDSET_LANDSCAPE: `${Cn}`, TABLET_LANDSCAPE: `${ve}`, WEB_LANDSCAPE: `${je}` }, Bt = [{ alias: "handset", priority: 2e3, mediaQuery: mt.HANDSET }, { alias: "handset.landscape", priority: 2e3, mediaQuery: mt.HANDSET_LANDSCAPE }, { alias: "handset.portrait", priority: 2e3, mediaQuery: mt.HANDSET_PORTRAIT }, { alias: "tablet", priority: 2100, mediaQuery: mt.TABLET }, { alias: "tablet.landscape", priority: 2100, mediaQuery: mt.TABLET_LANDSCAPE }, { alias: "tablet.portrait", priority: 2100, mediaQuery: mt.TABLET_PORTRAIT }, { alias: "web", priority: 2200, mediaQuery: mt.WEB, overlapping: !0 }, { alias: "web.landscape", priority: 2200, mediaQuery: mt.WEB_LANDSCAPE, overlapping: !0 }, { alias: "web.portrait", priority: 2200, mediaQuery: mt.WEB_PORTRAIT, overlapping: !0 }], yn = /(\.|-|_)/g; function jt(me) { let Fe = me.length > 0 ? me.charAt(0) : "", k = me.length > 1 ? me.slice(1) : ""; return Fe.toUpperCase() + k; } const En = new _.OlP("Token (@angular/flex-layout) Breakpoints", { providedIn: "root", factory: () => { const me = (0, _.f3M)(rt), Fe = (0, _.f3M)(Ke), k = [].concat.apply([], (me || []).map(le => Array.isArray(le) ? le : [le])); return function Dn(me, Fe = []) { const k = {}; return me.forEach(G => { k[G.alias] = G; }), Fe.forEach(G => { k[G.alias] ? (0, Le.kt)(k[G.alias], G) : k[G.alias] = G; }), function Tn(me) { return me.forEach(Fe => { Fe.suffix || (Fe.suffix = function rn(me) { return me.replace(yn, "|").split("|").map(jt).join(""); }(Fe.alias), Fe.overlapping = !!Fe.overlapping); }), me; }(Object.keys(k).map(G => k[G])); }((Fe.disableDefaultBps ? [] : Xt).concat(Fe.addOrientationBps ? Bt : []), k); } }); let Wn = (() => { class me {
            constructor(k) { this.findByMap = new Map, this.items = [...k].sort(Se); }
            findByAlias(k) { return k ? this.findWithPredicate(k, G => G.alias === k) : null; }
            findByQuery(k) { return this.findWithPredicate(k, G => G.mediaQuery === k); }
            get overlappings() { return this.items.filter(k => k.overlapping); }
            get aliases() { return this.items.map(k => k.alias); }
            get suffixes() { return this.items.map(k => { var G; return null !== (G = null == k ? void 0 : k.suffix) && void 0 !== G ? G : ""; }); }
            findWithPredicate(k, G) { var le; let ge = this.findByMap.get(k); return ge || (ge = null !== (le = this.items.find(G)) && void 0 !== le ? le : null, this.findByMap.set(k, ge)), null != ge ? ge : null; }
        } return me.\u0275fac = function (k) { return new (k || me)(_.LFG(En)); }, me.\u0275prov = _.Yz7({ token: me, factory: me.\u0275fac, providedIn: "root" }), me; })(); const Hn = "print", Yn = { alias: Hn, mediaQuery: Hn, priority: 1e3 }; let si = (() => { class me {
            constructor(k, G, le) { this.breakpoints = k, this.layoutConfig = G, this._document = le, this.registeredBeforeAfterPrintHooks = !1, this.isPrintingBeforeAfterEvent = !1, this.beforePrintEventListeners = [], this.afterPrintEventListeners = [], this.formerActivations = null, this.isPrinting = !1, this.queue = new Ji, this.deactivations = []; }
            withPrintQuery(k) { return [...k, Hn]; }
            isPrintEvent(k) { return k.mediaQuery.startsWith(Hn); }
            get printAlias() { var k; return [...null !== (k = this.layoutConfig.printWithBreakpoints) && void 0 !== k ? k : []]; }
            get printBreakPoints() { return this.printAlias.map(k => this.breakpoints.findByAlias(k)).filter(k => null !== k); }
            getEventBreakpoints({ mediaQuery: k }) { const G = this.breakpoints.findByQuery(k); return (G ? [...this.printBreakPoints, G] : this.printBreakPoints).sort(pe); }
            updateEvent(k) { var G; let le = this.breakpoints.findByQuery(k.mediaQuery); return this.isPrintEvent(k) && (le = this.getEventBreakpoints(k)[0], k.mediaQuery = null !== (G = null == le ? void 0 : le.mediaQuery) && void 0 !== G ? G : ""), yt(k, le); }
            registerBeforeAfterPrintHooks(k) { if (!this._document.defaultView || this.registeredBeforeAfterPrintHooks)
                return; this.registeredBeforeAfterPrintHooks = !0; const G = () => { this.isPrinting || (this.isPrintingBeforeAfterEvent = !0, this.startPrinting(k, this.getEventBreakpoints(new Ne(!0, Hn))), k.updateStyles()); }, le = () => { this.isPrintingBeforeAfterEvent = !1, this.isPrinting && (this.stopPrinting(k), k.updateStyles()); }; this._document.defaultView.addEventListener("beforeprint", G), this._document.defaultView.addEventListener("afterprint", le), this.beforePrintEventListeners.push(G), this.afterPrintEventListeners.push(le); }
            interceptEvents(k) { return G => { this.isPrintEvent(G) ? G.matches && !this.isPrinting ? (this.startPrinting(k, this.getEventBreakpoints(G)), k.updateStyles()) : !G.matches && this.isPrinting && !this.isPrintingBeforeAfterEvent && (this.stopPrinting(k), k.updateStyles()) : this.collectActivations(k, G); }; }
            blockPropagation() { return k => !(this.isPrinting || this.isPrintEvent(k)); }
            startPrinting(k, G) { this.isPrinting = !0, this.formerActivations = k.activatedBreakpoints, k.activatedBreakpoints = this.queue.addPrintBreakpoints(G); }
            stopPrinting(k) { k.activatedBreakpoints = this.deactivations, this.deactivations = [], this.formerActivations = null, this.queue.clear(), this.isPrinting = !1; }
            collectActivations(k, G) { if (!this.isPrinting || this.isPrintingBeforeAfterEvent) {
                if (!this.isPrintingBeforeAfterEvent)
                    return void (this.deactivations = []);
                if (!G.matches) {
                    const le = this.breakpoints.findByQuery(G.mediaQuery);
                    if (le) {
                        const ge = this.formerActivations && this.formerActivations.includes(le), gt = !this.formerActivations && k.activatedBreakpoints.includes(le);
                        (ge || gt) && (this.deactivations.push(le), this.deactivations.sort(pe));
                    }
                }
            } }
            ngOnDestroy() { this._document.defaultView && (this.beforePrintEventListeners.forEach(k => this._document.defaultView.removeEventListener("beforeprint", k)), this.afterPrintEventListeners.forEach(k => this._document.defaultView.removeEventListener("afterprint", k))); }
        } return me.\u0275fac = function (k) { return new (k || me)(_.LFG(Wn), _.LFG(Ke), _.LFG(j.K0)); }, me.\u0275prov = _.Yz7({ token: me, factory: me.\u0275fac, providedIn: "root" }), me; })(); class Ji {
            constructor() { this.printBreakpoints = []; }
            addPrintBreakpoints(Fe) { return Fe.push(Yn), Fe.sort(pe), Fe.forEach(k => this.addBreakpoint(k)), this.printBreakpoints; }
            addBreakpoint(Fe) { Fe && void 0 === this.printBreakpoints.find(G => G.mediaQuery === Fe.mediaQuery) && (this.printBreakpoints = function qt(me) { var Fe; return null !== (Fe = null == me ? void 0 : me.mediaQuery.startsWith(Hn)) && void 0 !== Fe && Fe; }(Fe) ? [Fe, ...this.printBreakpoints] : [...this.printBreakpoints, Fe]); }
            clear() { this.printBreakpoints = []; }
        } let ei = (() => { class me {
            constructor(k, G, le) { this.matchMedia = k, this.breakpoints = G, this.hook = le, this._useFallbacks = !0, this._activatedBreakpoints = [], this.elementMap = new Map, this.elementKeyMap = new WeakMap, this.watcherMap = new WeakMap, this.updateMap = new WeakMap, this.clearMap = new WeakMap, this.subject = new Te.x, this.observeActivations(); }
            get activatedAlias() { var k, G; return null !== (G = null === (k = this.activatedBreakpoints[0]) || void 0 === k ? void 0 : k.alias) && void 0 !== G ? G : ""; }
            set activatedBreakpoints(k) { this._activatedBreakpoints = [...k]; }
            get activatedBreakpoints() { return [...this._activatedBreakpoints]; }
            set useFallbacks(k) { this._useFallbacks = k; }
            onMediaChange(k) { const G = this.findByQuery(k.mediaQuery); if (G) {
                k = yt(k, G);
                const le = this.activatedBreakpoints.indexOf(G);
                k.matches && -1 === le ? (this._activatedBreakpoints.push(G), this._activatedBreakpoints.sort(pe), this.updateStyles()) : !k.matches && -1 !== le && (this._activatedBreakpoints.splice(le, 1), this._activatedBreakpoints.sort(pe), this.updateStyles());
            } }
            init(k, G, le, ge, gt = []) { Un(this.updateMap, k, G, le), Un(this.clearMap, k, G, ge), this.buildElementKeyMap(k, G), this.watchExtraTriggers(k, G, gt); }
            getValue(k, G, le) { const ge = this.elementMap.get(k); if (ge) {
                const gt = void 0 !== le ? ge.get(le) : this.getActivatedValues(ge, G);
                if (gt)
                    return gt.get(G);
            } }
            hasValue(k, G) { const le = this.elementMap.get(k); if (le) {
                const ge = this.getActivatedValues(le, G);
                if (ge)
                    return void 0 !== ge.get(G) || !1;
            } return !1; }
            setValue(k, G, le, ge) { var gt; let Vt = this.elementMap.get(k); if (Vt) {
                const et = (null !== (gt = Vt.get(ge)) && void 0 !== gt ? gt : new Map).set(G, le);
                Vt.set(ge, et), this.elementMap.set(k, Vt);
            }
            else
                Vt = (new Map).set(ge, (new Map).set(G, le)), this.elementMap.set(k, Vt); const X = this.getValue(k, G); void 0 !== X && this.updateElement(k, G, X); }
            trackValue(k, G) { return this.subject.asObservable().pipe((0, Ve.h)(le => le.element === k && le.key === G)); }
            updateStyles() { this.elementMap.forEach((k, G) => { const le = new Set(this.elementKeyMap.get(G)); let ge = this.getActivatedValues(k); ge && ge.forEach((gt, Vt) => { this.updateElement(G, Vt, gt), le.delete(Vt); }), le.forEach(gt => { if (ge = this.getActivatedValues(k, gt), ge) {
                const Vt = ge.get(gt);
                this.updateElement(G, gt, Vt);
            }
            else
                this.clearElement(G, gt); }); }); }
            clearElement(k, G) { const le = this.clearMap.get(k); if (le) {
                const ge = le.get(G);
                ge && (ge(), this.subject.next({ element: k, key: G, value: "" }));
            } }
            updateElement(k, G, le) { const ge = this.updateMap.get(k); if (ge) {
                const gt = ge.get(G);
                gt && (gt(le), this.subject.next({ element: k, key: G, value: le }));
            } }
            releaseElement(k) { const G = this.watcherMap.get(k); G && (G.forEach(ge => ge.unsubscribe()), this.watcherMap.delete(k)); const le = this.elementMap.get(k); le && (le.forEach((ge, gt) => le.delete(gt)), this.elementMap.delete(k)); }
            triggerUpdate(k, G) { const le = this.elementMap.get(k); if (le) {
                const ge = this.getActivatedValues(le, G);
                ge && (G ? this.updateElement(k, G, ge.get(G)) : ge.forEach((gt, Vt) => this.updateElement(k, Vt, gt)));
            } }
            buildElementKeyMap(k, G) { let le = this.elementKeyMap.get(k); le || (le = new Set, this.elementKeyMap.set(k, le)), le.add(G); }
            watchExtraTriggers(k, G, le) { if (le && le.length) {
                let ge = this.watcherMap.get(k);
                if (ge || (ge = new Map, this.watcherMap.set(k, ge)), !ge.get(G)) {
                    const Vt = (0, Ae.T)(...le).subscribe(() => { const X = this.getValue(k, G); this.updateElement(k, G, X); });
                    ge.set(G, Vt);
                }
            } }
            findByQuery(k) { return this.breakpoints.findByQuery(k); }
            getActivatedValues(k, G) { for (let ge = 0; ge < this.activatedBreakpoints.length; ge++) {
                const Vt = k.get(this.activatedBreakpoints[ge].alias);
                if (Vt && (void 0 === G || Vt.has(G) && null != Vt.get(G)))
                    return Vt;
            } if (!this._useFallbacks)
                return; const le = k.get(""); return void 0 === G || le && le.has(G) ? le : void 0; }
            observeActivations() { const k = this.breakpoints.items.map(G => G.mediaQuery); this.hook.registerBeforeAfterPrintHooks(this), this.matchMedia.observe(this.hook.withPrintQuery(k)).pipe((0, Ee.b)(this.hook.interceptEvents(this)), (0, Ve.h)(this.hook.blockPropagation())).subscribe(this.onMediaChange.bind(this)); }
        } return me.\u0275fac = function (k) { return new (k || me)(_.LFG(Oe), _.LFG(Wn), _.LFG(si)); }, me.\u0275prov = _.Yz7({ token: me, factory: me.\u0275fac, providedIn: "root" }), me; })(); function Un(me, Fe, k, G) { var le; if (void 0 !== G) {
            const ge = null !== (le = me.get(Fe)) && void 0 !== le ? le : new Map;
            ge.set(k, G), me.set(Fe, ge);
        } } let ti = (() => { class me {
            constructor(k, G, le, ge) { this.elementRef = k, this.styleBuilder = G, this.styler = le, this.marshal = ge, this.DIRECTIVE_KEY = "", this.inputs = [], this.mru = {}, this.destroySubject = new Te.x, this.styleCache = new Map; }
            get parentElement() { return this.elementRef.nativeElement.parentElement; }
            get nativeElement() { return this.elementRef.nativeElement; }
            get activatedValue() { return this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY); }
            set activatedValue(k) { this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, k, this.marshal.activatedAlias); }
            ngOnChanges(k) { Object.keys(k).forEach(G => { if (-1 !== this.inputs.indexOf(G)) {
                const le = G.split(".").slice(1).join(".");
                this.setValue(k[G].currentValue, le);
            } }); }
            ngOnDestroy() { this.destroySubject.next(), this.destroySubject.complete(), this.marshal.releaseElement(this.nativeElement); }
            init(k = []) { this.marshal.init(this.elementRef.nativeElement, this.DIRECTIVE_KEY, this.updateWithValue.bind(this), this.clearStyles.bind(this), k); }
            addStyles(k, G) { const le = this.styleBuilder, ge = le.shouldCache; let gt = this.styleCache.get(k); (!gt || !ge) && (gt = le.buildStyles(k, G), ge && this.styleCache.set(k, gt)), this.mru = Object.assign({}, gt), this.applyStyleToElement(gt), le.sideEffect(k, gt, G); }
            clearStyles() { Object.keys(this.mru).forEach(k => { this.mru[k] = ""; }), this.applyStyleToElement(this.mru), this.mru = {}, this.currentValue = void 0; }
            triggerUpdate() { this.marshal.triggerUpdate(this.nativeElement, this.DIRECTIVE_KEY); }
            getFlexFlowDirection(k, G = !1) { if (k) {
                const [le, ge] = this.styler.getFlowDirection(k);
                if (!ge && G) {
                    const gt = (0, Le.Ar)(le);
                    this.styler.applyStyleToElements(gt, [k]);
                }
                return le.trim();
            } return "row"; }
            hasWrap(k) { return this.styler.hasWrap(k); }
            applyStyleToElement(k, G, le = this.nativeElement) { this.styler.applyStyleToElement(le, k, G); }
            setValue(k, G) { this.marshal.setValue(this.nativeElement, this.DIRECTIVE_KEY, k, G); }
            updateWithValue(k) { this.currentValue !== k && (this.addStyles(k), this.currentValue = k); }
        } return me.\u0275fac = function (k) { return new (k || me)(_.Y36(_.SBq), _.Y36(tt), _.Y36(he), _.Y36(ei)); }, me.\u0275dir = _.lG2({ type: me, features: [_.TTD] }), me; })(); function wt(me, Fe = "1", k = "1") { let G = [Fe, k, me], le = me.indexOf("calc"); if (le > 0) {
            G[2] = en(me.substring(le).trim());
            let ge = me.substr(0, le).trim().split(" ");
            2 == ge.length && (G[0] = ge[0], G[1] = ge[1]);
        }
        else if (0 == le)
            G[2] = en(me.trim());
        else {
            let ge = me.split(" ");
            G = 3 === ge.length ? ge : [Fe, k, me];
        } return G; } function en(me) { return me.replace(/[\s]/g, "").replace(/[\/\*\+\-]/g, " $& "); } function Jt(me, Fe) { if (void 0 === Fe)
            return me; const k = G => { const le = +G.slice(0, -"x".length); return me.endsWith("x") && !isNaN(le) ? `${le * Fe.value}${Fe.unit}` : me; }; return me.includes(" ") ? me.split(" ").map(k).join(" ") : k(me); } }, 3322: (St, Pe, V) => { V.d(Pe, { b8: () => he, aT: () => It }); var _ = V(5e3), j = V(3270), ie = V(9808), _e = V(3191), Ae = V(2722); V(2313); let Ke = (() => { class ve extends j.QI {
            buildStyles(je, mt) { return { display: "true" === je ? mt.display || (mt.isServer ? "initial" : "") : "none" }; }
        } return ve.\u0275fac = function () { let lt; return function (mt) { return (lt || (lt = _.n5z(ve)))(mt || ve); }; }(), ve.\u0275prov = _.Yz7({ token: ve, factory: ve.\u0275fac, providedIn: "root" }), ve; })(), Ct = (() => { class ve extends j.iR {
            constructor(je, mt, Bt, yn, jt, rn, Tn) { super(je, mt, Bt, yn), this.layoutConfig = jt, this.platformId = rn, this.serverModuleLoaded = Tn, this.DIRECTIVE_KEY = "show-hide", this.display = "", this.hasLayout = !1, this.hasFlexChild = !1; }
            ngAfterViewInit() { this.trackExtraTriggers(); const je = Array.from(this.nativeElement.children); for (let Bt = 0; Bt < je.length; Bt++)
                if (this.marshal.hasValue(je[Bt], "flex")) {
                    this.hasFlexChild = !0;
                    break;
                } rt.has(this.nativeElement) ? this.display = rt.get(this.nativeElement) : (this.display = this.getDisplayStyle(), rt.set(this.nativeElement, this.display)), this.init(); const mt = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, ""); void 0 === mt || "" === mt ? this.setValue(!0, "") : this.triggerUpdate(); }
            ngOnChanges(je) { Object.keys(je).forEach(mt => { if (-1 !== this.inputs.indexOf(mt)) {
                const Bt = mt.split("."), yn = Bt.slice(1).join("."), jt = je[mt].currentValue;
                let rn = "" === jt || 0 !== jt && (0, _e.Ig)(jt);
                "fxHide" === Bt[0] && (rn = !rn), this.setValue(rn, yn);
            } }); }
            trackExtraTriggers() { this.hasLayout = this.marshal.hasValue(this.nativeElement, "layout"), ["layout", "layout-align"].forEach(je => { this.marshal.trackValue(this.nativeElement, je).pipe((0, Ae.R)(this.destroySubject)).subscribe(this.triggerUpdate.bind(this)); }); }
            getDisplayStyle() { return this.hasLayout || this.hasFlexChild && this.layoutConfig.addFlexToParent ? "flex" : this.styler.lookupStyle(this.nativeElement, "display", !0); }
            updateWithValue(je = !0) { if ("" === je)
                return; const mt = (0, ie.PM)(this.platformId); this.addStyles(je ? "true" : "false", { display: this.display, isServer: mt }), mt && this.serverModuleLoaded && this.nativeElement.style.setProperty("display", ""), this.marshal.triggerUpdate(this.parentElement, "layout-gap"); }
        } return ve.\u0275fac = function (je) { return new (je || ve)(_.Y36(_.SBq), _.Y36(Ke), _.Y36(j.RK), _.Y36(j.yB), _.Y36(j.WU), _.Y36(_.Lbi), _.Y36(j.wY)); }, ve.\u0275dir = _.lG2({ type: ve, features: [_.qOj, _.TTD] }), ve; })(); const rt = new WeakMap, yt = ["fxShow", "fxShow.print", "fxShow.xs", "fxShow.sm", "fxShow.md", "fxShow.lg", "fxShow.xl", "fxShow.lt-sm", "fxShow.lt-md", "fxShow.lt-lg", "fxShow.lt-xl", "fxShow.gt-xs", "fxShow.gt-sm", "fxShow.gt-md", "fxShow.gt-lg", "fxHide", "fxHide.print", "fxHide.xs", "fxHide.sm", "fxHide.md", "fxHide.lg", "fxHide.xl", "fxHide.lt-sm", "fxHide.lt-md", "fxHide.lt-lg", "fxHide.lt-xl", "fxHide.gt-xs", "fxHide.gt-sm", "fxHide.gt-md", "fxHide.gt-lg"]; let he = (() => { class ve extends Ct {
            constructor() { super(...arguments), this.inputs = yt; }
        } return ve.\u0275fac = function () { let lt; return function (mt) { return (lt || (lt = _.n5z(ve)))(mt || ve); }; }(), ve.\u0275dir = _.lG2({ type: ve, selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]], inputs: { fxShow: "fxShow", "fxShow.print": "fxShow.print", "fxShow.xs": "fxShow.xs", "fxShow.sm": "fxShow.sm", "fxShow.md": "fxShow.md", "fxShow.lg": "fxShow.lg", "fxShow.xl": "fxShow.xl", "fxShow.lt-sm": "fxShow.lt-sm", "fxShow.lt-md": "fxShow.lt-md", "fxShow.lt-lg": "fxShow.lt-lg", "fxShow.lt-xl": "fxShow.lt-xl", "fxShow.gt-xs": "fxShow.gt-xs", "fxShow.gt-sm": "fxShow.gt-sm", "fxShow.gt-md": "fxShow.gt-md", "fxShow.gt-lg": "fxShow.gt-lg", fxHide: "fxHide", "fxHide.print": "fxHide.print", "fxHide.xs": "fxHide.xs", "fxHide.sm": "fxHide.sm", "fxHide.md": "fxHide.md", "fxHide.lg": "fxHide.lg", "fxHide.xl": "fxHide.xl", "fxHide.lt-sm": "fxHide.lt-sm", "fxHide.lt-md": "fxHide.lt-md", "fxHide.lt-lg": "fxHide.lt-lg", "fxHide.lt-xl": "fxHide.lt-xl", "fxHide.gt-xs": "fxHide.gt-xs", "fxHide.gt-sm": "fxHide.gt-sm", "fxHide.gt-md": "fxHide.gt-md", "fxHide.gt-lg": "fxHide.gt-lg" }, features: [_.qOj] }), ve; })(), It = (() => { class ve {
        } return ve.\u0275fac = function (je) { return new (je || ve); }, ve.\u0275mod = _.oAB({ type: ve }), ve.\u0275inj = _.cJS({ imports: [[j.IR]] }), ve; })(); }, 7093: (St, Pe, V) => { V.d(Pe, { yH: () => Me, Wh: () => en, xw: () => ce, SQ: () => Ct, ae: () => Vt }); var _ = V(5e3), j = V(226), ie = V(3270), _e = V(9042), Ae = V(7579), Te = V(2722); let Le = (() => { class X extends ie.QI {
            buildStyles(xe, { display: He }) { const Ye = (0, _e.Ar)(xe); return Object.assign(Object.assign({}, Ye), { display: "none" === He ? He : Ye.display }); }
        } return X.\u0275fac = function () { let et; return function (He) { return (et || (et = _.n5z(X)))(He || X); }; }(), X.\u0275prov = _.Yz7({ token: X, factory: X.\u0275fac, providedIn: "root" }), X; })(); const Ve = ["fxLayout", "fxLayout.xs", "fxLayout.sm", "fxLayout.md", "fxLayout.lg", "fxLayout.xl", "fxLayout.lt-sm", "fxLayout.lt-md", "fxLayout.lt-lg", "fxLayout.lt-xl", "fxLayout.gt-xs", "fxLayout.gt-sm", "fxLayout.gt-md", "fxLayout.gt-lg"]; let de = (() => { class X extends ie.iR {
            constructor(xe, He, Ye, Et, un) { super(xe, Ye, He, Et), this._config = un, this.DIRECTIVE_KEY = "layout", this.init(); }
            updateWithValue(xe) { var He; const Et = this._config.detectLayoutDisplay ? this.styler.lookupStyle(this.nativeElement, "display") : ""; this.styleCache = null !== (He = fe.get(Et)) && void 0 !== He ? He : new Map, fe.set(Et, this.styleCache), this.currentValue !== xe && (this.addStyles(xe, { display: Et }), this.currentValue = xe); }
        } return X.\u0275fac = function (xe) { return new (xe || X)(_.Y36(_.SBq), _.Y36(ie.RK), _.Y36(Le), _.Y36(ie.yB), _.Y36(ie.WU)); }, X.\u0275dir = _.lG2({ type: X, features: [_.qOj] }), X; })(), ce = (() => { class X extends de {
            constructor() { super(...arguments), this.inputs = Ve; }
        } return X.\u0275fac = function () { let et; return function (He) { return (et || (et = _.n5z(X)))(He || X); }; }(), X.\u0275dir = _.lG2({ type: X, selectors: [["", "fxLayout", ""], ["", "fxLayout.xs", ""], ["", "fxLayout.sm", ""], ["", "fxLayout.md", ""], ["", "fxLayout.lg", ""], ["", "fxLayout.xl", ""], ["", "fxLayout.lt-sm", ""], ["", "fxLayout.lt-md", ""], ["", "fxLayout.lt-lg", ""], ["", "fxLayout.lt-xl", ""], ["", "fxLayout.gt-xs", ""], ["", "fxLayout.gt-sm", ""], ["", "fxLayout.gt-md", ""], ["", "fxLayout.gt-lg", ""]], inputs: { fxLayout: "fxLayout", "fxLayout.xs": "fxLayout.xs", "fxLayout.sm": "fxLayout.sm", "fxLayout.md": "fxLayout.md", "fxLayout.lg": "fxLayout.lg", "fxLayout.xl": "fxLayout.xl", "fxLayout.lt-sm": "fxLayout.lt-sm", "fxLayout.lt-md": "fxLayout.lt-md", "fxLayout.lt-lg": "fxLayout.lt-lg", "fxLayout.lt-xl": "fxLayout.lt-xl", "fxLayout.gt-xs": "fxLayout.gt-xs", "fxLayout.gt-sm": "fxLayout.gt-sm", "fxLayout.gt-md": "fxLayout.gt-md", "fxLayout.gt-lg": "fxLayout.gt-lg" }, features: [_.qOj] }), X; })(); const fe = new Map, ke = { "margin-left": null, "margin-right": null, "margin-top": null, "margin-bottom": null }; let Ne = (() => { class X extends ie.QI {
            constructor(xe, He) { super(), this._styler = xe, this._config = He; }
            buildStyles(xe, He) { return xe.endsWith(at) ? (xe = xe.slice(0, xe.indexOf(at)), function vt(X, et) { const [xe, He] = X.split(" "), Et = _i => `-${_i}`; let un = "0px", $t = Et(null != He ? He : xe), ri = "0px"; return "rtl" === et ? ri = Et(xe) : un = Et(xe), { margin: `0px ${un} ${$t} ${ri}` }; }(xe = (0, ie.FL)(xe, this._config.multiplier), He.directionality)) : {}; }
            sideEffect(xe, He, Ye) { const Et = Ye.items; if (xe.endsWith(at)) {
                xe = xe.slice(0, xe.indexOf(at));
                const un = function cn(X, et) { const [xe, He] = X.split(" "); let Et = "0px", $t = "0px"; return "rtl" === et ? $t = xe : Et = xe, { padding: `0px ${Et} ${null != He ? He : xe} ${$t}` }; }(xe = (0, ie.FL)(xe, this._config.multiplier), Ye.directionality);
                this._styler.applyStyleToElements(un, Ye.items);
            }
            else {
                xe = (0, ie.FL)(xe, this._config.multiplier), xe = this.addFallbackUnit(xe);
                const un = Et.pop(), $t = function pe(X, et) { const xe = ht(et.directionality, et.layout), He = Object.assign({}, ke); return He[xe] = X, He; }(xe, Ye);
                this._styler.applyStyleToElements($t, Et), this._styler.applyStyleToElements(ke, [un]);
            } }
            addFallbackUnit(xe) { return isNaN(+xe) ? xe : `${xe}${this._config.defaultUnit}`; }
        } return X.\u0275fac = function (xe) { return new (xe || X)(_.LFG(ie.RK), _.LFG(ie.WU)); }, X.\u0275prov = _.Yz7({ token: X, factory: X.\u0275fac, providedIn: "root" }), X; })(); const qe = ["fxLayoutGap", "fxLayoutGap.xs", "fxLayoutGap.sm", "fxLayoutGap.md", "fxLayoutGap.lg", "fxLayoutGap.xl", "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg"]; let Ke = (() => { class X extends ie.iR {
            constructor(xe, He, Ye, Et, un, $t) { super(xe, un, Et, $t), this.zone = He, this.directionality = Ye, this.styleUtils = Et, this.layout = "row", this.DIRECTIVE_KEY = "layout-gap", this.observerSubject = new Ae.x; const ri = [this.directionality.change, this.observerSubject.asObservable()]; this.init(ri), this.marshal.trackValue(this.nativeElement, "layout").pipe((0, Te.R)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this)); }
            get childrenNodes() { const xe = this.nativeElement.children, He = []; for (let Ye = xe.length; Ye--;)
                He[Ye] = xe[Ye]; return He; }
            ngAfterContentInit() { this.buildChildObservable(), this.triggerUpdate(); }
            ngOnDestroy() { super.ngOnDestroy(), this.observer && this.observer.disconnect(); }
            onLayoutChange(xe) { const Ye = xe.value.split(" "); this.layout = Ye[0], _e.iQ.find(Et => Et === this.layout) || (this.layout = "row"), this.triggerUpdate(); }
            updateWithValue(xe) { const He = this.childrenNodes.filter(Ye => 1 === Ye.nodeType && this.willDisplay(Ye)).sort((Ye, Et) => { const un = +this.styler.lookupStyle(Ye, "order"), $t = +this.styler.lookupStyle(Et, "order"); return isNaN(un) || isNaN($t) || un === $t ? 0 : un > $t ? 1 : -1; }); if (He.length > 0) {
                const Ye = this.directionality.value, Et = this.layout;
                "row" === Et && "rtl" === Ye ? this.styleCache = rt : "row" === Et && "rtl" !== Ye ? this.styleCache = tt : "column" === Et && "rtl" === Ye ? this.styleCache = yt : "column" === Et && "rtl" !== Ye && (this.styleCache = he), this.addStyles(xe, { directionality: Ye, items: He, layout: Et });
            } }
            clearStyles() { const xe = Object.keys(this.mru).length > 0, He = xe ? "padding" : ht(this.directionality.value, this.layout); xe && super.clearStyles(), this.styleUtils.applyStyleToElements({ [He]: "" }, this.childrenNodes); }
            willDisplay(xe) { const He = this.marshal.getValue(xe, "show-hide"); return !0 === He || void 0 === He && "none" !== this.styleUtils.lookupStyle(xe, "display"); }
            buildChildObservable() { this.zone.runOutsideAngular(() => { "undefined" != typeof MutationObserver && (this.observer = new MutationObserver(xe => { xe.some(Ye => Ye.addedNodes && Ye.addedNodes.length > 0 || Ye.removedNodes && Ye.removedNodes.length > 0) && this.observerSubject.next(); }), this.observer.observe(this.nativeElement, { childList: !0 })); }); }
        } return X.\u0275fac = function (xe) { return new (xe || X)(_.Y36(_.SBq), _.Y36(_.R0b), _.Y36(j.Is), _.Y36(ie.RK), _.Y36(Ne), _.Y36(ie.yB)); }, X.\u0275dir = _.lG2({ type: X, features: [_.qOj] }), X; })(), Ct = (() => { class X extends Ke {
            constructor() { super(...arguments), this.inputs = qe; }
        } return X.\u0275fac = function () { let et; return function (He) { return (et || (et = _.n5z(X)))(He || X); }; }(), X.\u0275dir = _.lG2({ type: X, selectors: [["", "fxLayoutGap", ""], ["", "fxLayoutGap.xs", ""], ["", "fxLayoutGap.sm", ""], ["", "fxLayoutGap.md", ""], ["", "fxLayoutGap.lg", ""], ["", "fxLayoutGap.xl", ""], ["", "fxLayoutGap.lt-sm", ""], ["", "fxLayoutGap.lt-md", ""], ["", "fxLayoutGap.lt-lg", ""], ["", "fxLayoutGap.lt-xl", ""], ["", "fxLayoutGap.gt-xs", ""], ["", "fxLayoutGap.gt-sm", ""], ["", "fxLayoutGap.gt-md", ""], ["", "fxLayoutGap.gt-lg", ""]], inputs: { fxLayoutGap: "fxLayoutGap", "fxLayoutGap.xs": "fxLayoutGap.xs", "fxLayoutGap.sm": "fxLayoutGap.sm", "fxLayoutGap.md": "fxLayoutGap.md", "fxLayoutGap.lg": "fxLayoutGap.lg", "fxLayoutGap.xl": "fxLayoutGap.xl", "fxLayoutGap.lt-sm": "fxLayoutGap.lt-sm", "fxLayoutGap.lt-md": "fxLayoutGap.lt-md", "fxLayoutGap.lt-lg": "fxLayoutGap.lt-lg", "fxLayoutGap.lt-xl": "fxLayoutGap.lt-xl", "fxLayoutGap.gt-xs": "fxLayoutGap.gt-xs", "fxLayoutGap.gt-sm": "fxLayoutGap.gt-sm", "fxLayoutGap.gt-md": "fxLayoutGap.gt-md", "fxLayoutGap.gt-lg": "fxLayoutGap.gt-lg" }, features: [_.qOj] }), X; })(); const rt = new Map, yt = new Map, tt = new Map, he = new Map, at = " grid"; function ht(X, et) { switch (et) {
            case "column": return "margin-bottom";
            case "column-reverse": return "margin-top";
            case "row":
            default: return "rtl" === X ? "margin-left" : "margin-right";
            case "row-reverse": return "rtl" === X ? "margin-right" : "margin-left";
        } } let Se = (() => { class X extends ie.QI {
            constructor(xe) { super(), this.layoutConfig = xe; }
            buildStyles(xe, He) { let [Ye, Et, ...un] = xe.split(" "), $t = un.join(" "); const ri = He.direction.indexOf("column") > -1 ? "column" : "row", _i = (0, _e.tj)(ri) ? "max-width" : "max-height", we = (0, _e.tj)(ri) ? "min-width" : "min-height", se = String($t).indexOf("calc") > -1, Y = se || "auto" === $t, J = String($t).indexOf("%") > -1 && !se, Qe = String($t).indexOf("px") > -1 || String($t).indexOf("rem") > -1 || String($t).indexOf("em") > -1 || String($t).indexOf("vw") > -1 || String($t).indexOf("vh") > -1; let Nt = se || Qe; Ye = "0" == Ye ? 0 : Ye, Et = "0" == Et ? 0 : Et; const Gt = !Ye && !Et; let pn = {}; const Fn = { "max-width": null, "max-height": null, "min-width": null, "min-height": null }; switch ($t || "") {
                case "":
                    const Li = !1 !== this.layoutConfig.useColumnBasisZero;
                    $t = "row" === ri ? "0%" : Li ? "0.000000001px" : "auto";
                    break;
                case "initial":
                case "nogrow":
                    Ye = 0, $t = "auto";
                    break;
                case "grow":
                    $t = "100%";
                    break;
                case "noshrink":
                    Et = 0, $t = "auto";
                    break;
                case "auto": break;
                case "none":
                    Ye = 0, Et = 0, $t = "auto";
                    break;
                default: !Nt && !J && !isNaN($t) && ($t += "%"), "0%" === $t && (Nt = !0), "0px" === $t && ($t = "0%"), pn = (0, _e.kt)(Fn, se ? { "flex-grow": Ye, "flex-shrink": Et, "flex-basis": Nt ? $t : "100%" } : { flex: `${Ye} ${Et} ${Nt ? $t : "100%"}` });
            } return pn.flex || pn["flex-grow"] || (pn = (0, _e.kt)(Fn, se ? { "flex-grow": Ye, "flex-shrink": Et, "flex-basis": $t } : { flex: `${Ye} ${Et} ${$t}` })), "0%" !== $t && "0px" !== $t && "0.000000001px" !== $t && "auto" !== $t && (pn[we] = Gt || Nt && Ye ? $t : null, pn[_i] = Gt || !Y && Et ? $t : null), pn[we] || pn[_i] ? He.hasWrap && (pn[se ? "flex-basis" : "flex"] = pn[_i] ? se ? pn[_i] : `${Ye} ${Et} ${pn[_i]}` : se ? pn[we] : `${Ye} ${Et} ${pn[we]}`) : pn = (0, _e.kt)(Fn, se ? { "flex-grow": Ye, "flex-shrink": Et, "flex-basis": $t } : { flex: `${Ye} ${Et} ${$t}` }), (0, _e.kt)(pn, { "box-sizing": "border-box" }); }
        } return X.\u0275fac = function (xe) { return new (xe || X)(_.LFG(ie.WU)); }, X.\u0275prov = _.Yz7({ token: X, factory: X.\u0275fac, providedIn: "root" }), X; })(); const Oe = ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"]; let ut = (() => { class X extends ie.iR {
            constructor(xe, He, Ye, Et, un) { super(xe, Et, He, un), this.layoutConfig = Ye, this.marshal = un, this.DIRECTIVE_KEY = "flex", this.direction = void 0, this.wrap = void 0, this.flexGrow = "1", this.flexShrink = "1", this.init(); }
            get shrink() { return this.flexShrink; }
            set shrink(xe) { this.flexShrink = xe || "1", this.triggerReflow(); }
            get grow() { return this.flexGrow; }
            set grow(xe) { this.flexGrow = xe || "1", this.triggerReflow(); }
            ngOnInit() { this.parentElement && (this.marshal.trackValue(this.parentElement, "layout").pipe((0, Te.R)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this)), this.marshal.trackValue(this.nativeElement, "layout-align").pipe((0, Te.R)(this.destroySubject)).subscribe(this.triggerReflow.bind(this))); }
            onLayoutChange(xe) { const Ye = xe.value.split(" "); this.direction = Ye[0], this.wrap = void 0 !== Ye[1] && "wrap" === Ye[1], this.triggerUpdate(); }
            updateWithValue(xe) { void 0 === this.direction && (this.direction = this.getFlexFlowDirection(this.parentElement, !1 !== this.layoutConfig.addFlexToParent)), void 0 === this.wrap && (this.wrap = this.hasWrap(this.parentElement)); const Ye = this.direction, Et = Ye.startsWith("row"), un = this.wrap; Et && un ? this.styleCache = Cn : Et && !un ? this.styleCache = Xt : !Et && un ? this.styleCache = It : !Et && !un && (this.styleCache = Zt); const $t = String(xe).replace(";", ""), ri = (0, ie.Ot)($t, this.flexGrow, this.flexShrink); this.addStyles(ri.join(" "), { direction: Ye, hasWrap: un }); }
            triggerReflow() { const xe = this.activatedValue; if (void 0 !== xe) {
                const He = (0, ie.Ot)(xe + "", this.flexGrow, this.flexShrink);
                this.marshal.updateElement(this.nativeElement, this.DIRECTIVE_KEY, He.join(" "));
            } }
        } return X.\u0275fac = function (xe) { return new (xe || X)(_.Y36(_.SBq), _.Y36(ie.RK), _.Y36(ie.WU), _.Y36(Se), _.Y36(ie.yB)); }, X.\u0275dir = _.lG2({ type: X, inputs: { shrink: ["fxShrink", "shrink"], grow: ["fxGrow", "grow"] }, features: [_.qOj] }), X; })(), Me = (() => { class X extends ut {
            constructor() { super(...arguments), this.inputs = Oe; }
        } return X.\u0275fac = function () { let et; return function (He) { return (et || (et = _.n5z(X)))(He || X); }; }(), X.\u0275dir = _.lG2({ type: X, selectors: [["", "fxFlex", ""], ["", "fxFlex.xs", ""], ["", "fxFlex.sm", ""], ["", "fxFlex.md", ""], ["", "fxFlex.lg", ""], ["", "fxFlex.xl", ""], ["", "fxFlex.lt-sm", ""], ["", "fxFlex.lt-md", ""], ["", "fxFlex.lt-lg", ""], ["", "fxFlex.lt-xl", ""], ["", "fxFlex.gt-xs", ""], ["", "fxFlex.gt-sm", ""], ["", "fxFlex.gt-md", ""], ["", "fxFlex.gt-lg", ""]], inputs: { fxFlex: "fxFlex", "fxFlex.xs": "fxFlex.xs", "fxFlex.sm": "fxFlex.sm", "fxFlex.md": "fxFlex.md", "fxFlex.lg": "fxFlex.lg", "fxFlex.xl": "fxFlex.xl", "fxFlex.lt-sm": "fxFlex.lt-sm", "fxFlex.lt-md": "fxFlex.lt-md", "fxFlex.lt-lg": "fxFlex.lt-lg", "fxFlex.lt-xl": "fxFlex.lt-xl", "fxFlex.gt-xs": "fxFlex.gt-xs", "fxFlex.gt-sm": "fxFlex.gt-sm", "fxFlex.gt-md": "fxFlex.gt-md", "fxFlex.gt-lg": "fxFlex.gt-lg" }, features: [_.qOj] }), X; })(); const Xt = new Map, Zt = new Map, Cn = new Map, It = new Map; let ze = (() => { class X extends ie.QI {
            buildStyles(xe, He) { const Ye = {}, [Et, un] = xe.split(" "); switch (Et) {
                case "center":
                    Ye["justify-content"] = "center";
                    break;
                case "space-around":
                    Ye["justify-content"] = "space-around";
                    break;
                case "space-between":
                    Ye["justify-content"] = "space-between";
                    break;
                case "space-evenly":
                    Ye["justify-content"] = "space-evenly";
                    break;
                case "end":
                case "flex-end":
                    Ye["justify-content"] = "flex-end";
                    break;
                default: Ye["justify-content"] = "flex-start";
            } switch (un) {
                case "start":
                case "flex-start":
                    Ye["align-items"] = Ye["align-content"] = "flex-start";
                    break;
                case "center":
                    Ye["align-items"] = Ye["align-content"] = "center";
                    break;
                case "end":
                case "flex-end":
                    Ye["align-items"] = Ye["align-content"] = "flex-end";
                    break;
                case "space-between":
                    Ye["align-content"] = "space-between", Ye["align-items"] = "stretch";
                    break;
                case "space-around":
                    Ye["align-content"] = "space-around", Ye["align-items"] = "stretch";
                    break;
                case "baseline":
                    Ye["align-content"] = "stretch", Ye["align-items"] = "baseline";
                    break;
                default: Ye["align-items"] = Ye["align-content"] = "stretch";
            } return (0, _e.kt)(Ye, { display: He.inline ? "inline-flex" : "flex", "flex-direction": He.layout, "box-sizing": "border-box", "max-width": "stretch" === un ? (0, _e.tj)(He.layout) ? null : "100%" : null, "max-height": "stretch" === un && (0, _e.tj)(He.layout) ? "100%" : null }); }
        } return X.\u0275fac = function () { let et; return function (He) { return (et || (et = _.n5z(X)))(He || X); }; }(), X.\u0275prov = _.Yz7({ token: X, factory: X.\u0275fac, providedIn: "root" }), X; })(); const xt = ["fxLayoutAlign", "fxLayoutAlign.xs", "fxLayoutAlign.sm", "fxLayoutAlign.md", "fxLayoutAlign.lg", "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg"]; let wt = (() => { class X extends ie.iR {
            constructor(xe, He, Ye, Et) { super(xe, Ye, He, Et), this.DIRECTIVE_KEY = "layout-align", this.layout = "row", this.inline = !1, this.init(), this.marshal.trackValue(this.nativeElement, "layout").pipe((0, Te.R)(this.destroySubject)).subscribe(this.onLayoutChange.bind(this)); }
            updateWithValue(xe) { const He = this.layout || "row", Ye = this.inline; "row" === He && Ye ? this.styleCache = k : "row" !== He || Ye ? "row-reverse" === He && Ye ? this.styleCache = le : "row-reverse" !== He || Ye ? "column" === He && Ye ? this.styleCache = G : "column" !== He || Ye ? "column-reverse" === He && Ye ? this.styleCache = ge : "column-reverse" === He && !Ye && (this.styleCache = Fe) : this.styleCache = Jt : this.styleCache = me : this.styleCache = Sn, this.addStyles(xe, { layout: He, inline: Ye }); }
            onLayoutChange(xe) { const He = xe.value.split(" "); this.layout = He[0], this.inline = xe.value.includes("inline"), _e.iQ.find(Ye => Ye === this.layout) || (this.layout = "row"), this.triggerUpdate(); }
        } return X.\u0275fac = function (xe) { return new (xe || X)(_.Y36(_.SBq), _.Y36(ie.RK), _.Y36(ze), _.Y36(ie.yB)); }, X.\u0275dir = _.lG2({ type: X, features: [_.qOj] }), X; })(), en = (() => { class X extends wt {
            constructor() { super(...arguments), this.inputs = xt; }
        } return X.\u0275fac = function () { let et; return function (He) { return (et || (et = _.n5z(X)))(He || X); }; }(), X.\u0275dir = _.lG2({ type: X, selectors: [["", "fxLayoutAlign", ""], ["", "fxLayoutAlign.xs", ""], ["", "fxLayoutAlign.sm", ""], ["", "fxLayoutAlign.md", ""], ["", "fxLayoutAlign.lg", ""], ["", "fxLayoutAlign.xl", ""], ["", "fxLayoutAlign.lt-sm", ""], ["", "fxLayoutAlign.lt-md", ""], ["", "fxLayoutAlign.lt-lg", ""], ["", "fxLayoutAlign.lt-xl", ""], ["", "fxLayoutAlign.gt-xs", ""], ["", "fxLayoutAlign.gt-sm", ""], ["", "fxLayoutAlign.gt-md", ""], ["", "fxLayoutAlign.gt-lg", ""]], inputs: { fxLayoutAlign: "fxLayoutAlign", "fxLayoutAlign.xs": "fxLayoutAlign.xs", "fxLayoutAlign.sm": "fxLayoutAlign.sm", "fxLayoutAlign.md": "fxLayoutAlign.md", "fxLayoutAlign.lg": "fxLayoutAlign.lg", "fxLayoutAlign.xl": "fxLayoutAlign.xl", "fxLayoutAlign.lt-sm": "fxLayoutAlign.lt-sm", "fxLayoutAlign.lt-md": "fxLayoutAlign.lt-md", "fxLayoutAlign.lt-lg": "fxLayoutAlign.lt-lg", "fxLayoutAlign.lt-xl": "fxLayoutAlign.lt-xl", "fxLayoutAlign.gt-xs": "fxLayoutAlign.gt-xs", "fxLayoutAlign.gt-sm": "fxLayoutAlign.gt-sm", "fxLayoutAlign.gt-md": "fxLayoutAlign.gt-md", "fxLayoutAlign.gt-lg": "fxLayoutAlign.gt-lg" }, features: [_.qOj] }), X; })(); const Sn = new Map, Jt = new Map, me = new Map, Fe = new Map, k = new Map, G = new Map, le = new Map, ge = new Map; let Vt = (() => { class X {
        } return X.\u0275fac = function (xe) { return new (xe || X); }, X.\u0275mod = _.oAB({ type: X }), X.\u0275inj = _.cJS({ imports: [[ie.IR, j.vT]] }), X; })(); }, 2155: (St, Pe, V) => { V.d(Pe, { o9: () => vn }); var _ = V(5e3), j = V(3270), ie = V(3322), _e = V(7093); V(3191); let es = (() => { class z {
        } return z.\u0275fac = function (ye) { return new (ye || z); }, z.\u0275mod = _.oAB({ type: z }), z.\u0275inj = _.cJS({ imports: [[j.IR]] }), z; })(); var ui = V(9808); let vn = (() => { class z {
            constructor(ye, nt) { (0, ui.PM)(nt) && !ye && console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule"); }
            static withConfig(ye, nt = []) { return { ngModule: z, providers: ye.serverLoaded ? [{ provide: j.WU, useValue: Object.assign(Object.assign({}, j.g5), ye) }, { provide: j.Bs, useValue: nt, multi: !0 }, { provide: j.wY, useValue: !0 }] : [{ provide: j.WU, useValue: Object.assign(Object.assign({}, j.g5), ye) }, { provide: j.Bs, useValue: nt, multi: !0 }] }; }
        } return z.\u0275fac = function (ye) { return new (ye || z)(_.LFG(j.wY), _.LFG(_.Lbi)); }, z.\u0275mod = _.oAB({ type: z }), z.\u0275inj = _.cJS({ imports: [[_e.ae, ie.aT, es], _e.ae, ie.aT, es] }), z; })(); }, 6360: (St, Pe, V) => { V.d(Pe, { Qb: () => vs, PW: () => Tr }); var _ = V(5e3), j = V(2313), ie = V(1777); function _e() { return "undefined" != typeof window && void 0 !== window.document; } function Ae() { return "undefined" != typeof process && "[object process]" === {}.toString.call(process); } function Te(R) { switch (R.length) {
            case 0: return new ie.ZN;
            case 1: return R[0];
            default: return new ie.ZE(R);
        } } function Le(R, g, p, E, F = {}, $ = {}) { const q = [], Z = []; let be = -1, $e = null; if (E.forEach(_t => { const Pt = _t.offset, zt = Pt == be, hn = zt && $e || {}; Object.keys(_t).forEach(Yt => { let nn = Yt, xn = _t[Yt]; if ("offset" !== Yt)
            switch (nn = g.normalizePropertyName(nn, q), xn) {
                case ie.k1:
                    xn = F[Yt];
                    break;
                case ie.l3:
                    xn = $[Yt];
                    break;
                default: xn = g.normalizeStyleValue(Yt, nn, xn, q);
            } hn[nn] = xn; }), zt || Z.push(hn), $e = hn, be = Pt; }), q.length) {
            const _t = "\n - ";
            throw new Error(`Unable to animate due to the following errors:${_t}${q.join(_t)}`);
        } return Z; } function Ve(R, g, p, E) { switch (g) {
            case "start":
                R.onStart(() => E(p && Ee(p, "start", R)));
                break;
            case "done":
                R.onDone(() => E(p && Ee(p, "done", R)));
                break;
            case "destroy": R.onDestroy(() => E(p && Ee(p, "destroy", R)));
        } } function Ee(R, g, p) { const E = p.totalTime, $ = de(R.element, R.triggerName, R.fromState, R.toState, g || R.phaseName, null == E ? R.totalTime : E, !!p.disabled), q = R._data; return null != q && ($._data = q), $; } function de(R, g, p, E, F = "", $ = 0, q) { return { element: R, triggerName: g, fromState: p, toState: E, phaseName: F, totalTime: $, disabled: !!q }; } function ce(R, g, p) { let E; return R instanceof Map ? (E = R.get(g), E || R.set(g, E = p)) : (E = R[g], E || (E = R[g] = p)), E; } function fe(R) { const g = R.indexOf(":"); return [R.substring(1, g), R.substr(g + 1)]; } let ke = (R, g) => !1, Ne = (R, g, p) => []; (Ae() || "undefined" != typeof Element) && (ke = _e() ? (R, g) => { for (; g && g !== document.documentElement;) {
            if (g === R)
                return !0;
            g = g.parentNode || g.host;
        } return !1; } : (R, g) => R.contains(g), Ne = (R, g, p) => { if (p)
            return Array.from(R.querySelectorAll(g)); const E = R.querySelector(g); return E ? [E] : []; }); let Ke = null, Ct = !1; function rt(R) { Ke || (Ke = function yt() { return "undefined" != typeof document ? document.body : null; }() || {}, Ct = !!Ke.style && "WebkitAppearance" in Ke.style); let g = !0; return Ke.style && !function Je(R) { return "ebkit" == R.substring(1, 6); }(R) && (g = R in Ke.style, !g && Ct && (g = "Webkit" + R.charAt(0).toUpperCase() + R.substr(1) in Ke.style)), g; } const tt = ke, he = Ne; function at(R) { const g = {}; return Object.keys(R).forEach(p => { const E = p.replace(/([a-z])([A-Z])/g, "$1-$2"); g[E] = R[p]; }), g; } let cn = (() => { class R {
            validateStyleProperty(p) { return rt(p); }
            matchesElement(p, E) { return !1; }
            containsElement(p, E) { return tt(p, E); }
            query(p, E, F) { return he(p, E, F); }
            computeStyle(p, E, F) { return F || ""; }
            animate(p, E, F, $, q, Z = [], be) { return new ie.ZN(F, $); }
        } return R.\u0275fac = function (p) { return new (p || R); }, R.\u0275prov = _.Yz7({ token: R, factory: R.\u0275fac }), R; })(), vt = (() => { class R {
        } return R.NOOP = new cn, R; })(); const Oe = "ng-enter", We = "ng-leave", ut = "ng-trigger", Me = ".ng-trigger", Xt = "ng-animating", Zt = ".ng-animating"; function Cn(R) { if ("number" == typeof R)
            return R; const g = R.match(/^(-?[\.\d]+)(m?s)/); return !g || g.length < 2 ? 0 : It(parseFloat(g[1]), g[2]); } function It(R, g) { return "s" === g ? 1e3 * R : R; } function ve(R, g, p) { return R.hasOwnProperty("duration") ? R : function lt(R, g, p) { let F, $ = 0, q = ""; if ("string" == typeof R) {
            const Z = R.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
            if (null === Z)
                return g.push(`The provided timing value "${R}" is invalid.`), { duration: 0, delay: 0, easing: "" };
            F = It(parseFloat(Z[1]), Z[2]);
            const be = Z[3];
            null != be && ($ = It(parseFloat(be), Z[4]));
            const $e = Z[5];
            $e && (q = $e);
        }
        else
            F = R; if (!p) {
            let Z = !1, be = g.length;
            F < 0 && (g.push("Duration values below 0 are not allowed for this animation step."), Z = !0), $ < 0 && (g.push("Delay values below 0 are not allowed for this animation step."), Z = !0), Z && g.splice(be, 0, `The provided timing value "${R}" is invalid.`);
        } return { duration: F, delay: $, easing: q }; }(R, g, p); } function je(R, g = {}) { return Object.keys(R).forEach(p => { g[p] = R[p]; }), g; } function Bt(R, g, p = {}) { if (g)
            for (let E in R)
                p[E] = R[E];
        else
            je(R, p); return p; } function yn(R, g, p) { return p ? g + ":" + p + ";" : ""; } function jt(R) { let g = ""; for (let p = 0; p < R.style.length; p++) {
            const E = R.style.item(p);
            g += yn(0, E, R.style.getPropertyValue(E));
        } for (const p in R.style)
            R.style.hasOwnProperty(p) && !p.startsWith("_") && (g += yn(0, ei(p), R.style[p])); R.setAttribute("style", g); } function rn(R, g, p) { R.style && (Object.keys(g).forEach(E => { const F = qt(E); p && !p.hasOwnProperty(E) && (p[E] = R.style[F]), R.style[F] = g[E]; }), Ae() && jt(R)); } function Tn(R, g) { R.style && (Object.keys(g).forEach(p => { const E = qt(p); R.style[E] = ""; }), Ae() && jt(R)); } function Dn(R) { return Array.isArray(R) ? 1 == R.length ? R[0] : (0, ie.vP)(R) : R; } const Wn = new RegExp("{{\\s*(.+?)\\s*}}", "g"); function Hn(R) { let g = []; if ("string" == typeof R) {
            let p;
            for (; p = Wn.exec(R);)
                g.push(p[1]);
            Wn.lastIndex = 0;
        } return g; } function Yn(R, g, p) { const E = R.toString(), F = E.replace(Wn, ($, q) => { let Z = g[q]; return g.hasOwnProperty(q) || (p.push(`Please provide a value for the animation param ${q}`), Z = ""), Z.toString(); }); return F == E ? R : F; } function si(R) { const g = []; let p = R.next(); for (; !p.done;)
            g.push(p.value), p = R.next(); return g; } const Ji = /-+([a-z0-9])/g; function qt(R) { return R.replace(Ji, (...g) => g[1].toUpperCase()); } function ei(R) { return R.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(); } function Un(R, g) { return 0 === R || 0 === g; } function ti(R, g, p) { const E = Object.keys(p); if (E.length && g.length) {
            let $ = g[0], q = [];
            if (E.forEach(Z => { $.hasOwnProperty(Z) || q.push(Z), $[Z] = p[Z]; }), q.length)
                for (var F = 1; F < g.length; F++) {
                    let Z = g[F];
                    q.forEach(function (be) { Z[be] = Xe(R, be); });
                }
        } return g; } function zn(R, g, p) { switch (g.type) {
            case 7: return R.visitTrigger(g, p);
            case 0: return R.visitState(g, p);
            case 1: return R.visitTransition(g, p);
            case 2: return R.visitSequence(g, p);
            case 3: return R.visitGroup(g, p);
            case 4: return R.visitAnimate(g, p);
            case 5: return R.visitKeyframes(g, p);
            case 6: return R.visitStyle(g, p);
            case 8: return R.visitReference(g, p);
            case 9: return R.visitAnimateChild(g, p);
            case 10: return R.visitAnimateRef(g, p);
            case 11: return R.visitQuery(g, p);
            case 12: return R.visitStagger(g, p);
            default: throw new Error(`Unable to resolve animation metadata node #${g.type}`);
        } } function Xe(R, g) { return window.getComputedStyle(R)[g]; } function ne(R, g) { const p = []; return "string" == typeof R ? R.split(/\s*,\s*/).forEach(E => function ot(R, g, p) { if (":" == R[0]) {
            const be = function ze(R, g) { switch (R) {
                case ":enter": return "void => *";
                case ":leave": return "* => void";
                case ":increment": return (p, E) => parseFloat(E) > parseFloat(p);
                case ":decrement": return (p, E) => parseFloat(E) < parseFloat(p);
                default: return g.push(`The transition alias value "${R}" is not supported`), "* => *";
            } }(R, p);
            if ("function" == typeof be)
                return void g.push(be);
            R = be;
        } const E = R.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/); if (null == E || E.length < 4)
            return p.push(`The provided transition expression "${R}" is not supported`), g; const F = E[1], $ = E[2], q = E[3]; g.push(wt(F, q)); "<" == $[0] && !("*" == F && "*" == q) && g.push(wt(q, F)); }(E, p, g)) : p.push(R), p; } const xt = new Set(["true", "1"]), Ge = new Set(["false", "0"]); function wt(R, g) { const p = xt.has(R) || Ge.has(R), E = xt.has(g) || Ge.has(g); return (F, $) => { let q = "*" == R || R == F, Z = "*" == g || g == $; return !q && p && "boolean" == typeof F && (q = F ? xt.has(R) : Ge.has(R)), !Z && E && "boolean" == typeof $ && (Z = $ ? xt.has(g) : Ge.has(g)), q && Z; }; } const Sn = new RegExp("s*:selfs*,?", "g"); function Jt(R, g, p) { return new Fe(R).build(g, p); } class Fe {
            constructor(g) { this._driver = g; }
            build(g, p) { const E = new le(p); return this._resetContextStyleTimingState(E), zn(this, Dn(g), E); }
            _resetContextStyleTimingState(g) { g.currentQuerySelector = "", g.collectedStyles = {}, g.collectedStyles[""] = {}, g.currentTime = 0; }
            visitTrigger(g, p) { let E = p.queryCount = 0, F = p.depCount = 0; const $ = [], q = []; return "@" == g.name.charAt(0) && p.errors.push("animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"), g.definitions.forEach(Z => { if (this._resetContextStyleTimingState(p), 0 == Z.type) {
                const be = Z, $e = be.name;
                $e.toString().split(/\s*,\s*/).forEach(_t => { be.name = _t, $.push(this.visitState(be, p)); }), be.name = $e;
            }
            else if (1 == Z.type) {
                const be = this.visitTransition(Z, p);
                E += be.queryCount, F += be.depCount, q.push(be);
            }
            else
                p.errors.push("only state() and transition() definitions can sit inside of a trigger()"); }), { type: 7, name: g.name, states: $, transitions: q, queryCount: E, depCount: F, options: null }; }
            visitState(g, p) { const E = this.visitStyle(g.styles, p), F = g.options && g.options.params || null; if (E.containsDynamicStyles) {
                const $ = new Set, q = F || {};
                if (E.styles.forEach(Z => { if (gt(Z)) {
                    const be = Z;
                    Object.keys(be).forEach($e => { Hn(be[$e]).forEach(_t => { q.hasOwnProperty(_t) || $.add(_t); }); });
                } }), $.size) {
                    const Z = si($.values());
                    p.errors.push(`state("${g.name}", ...) must define default values for all the following style substitutions: ${Z.join(", ")}`);
                }
            } return { type: 0, name: g.name, style: E, options: F ? { params: F } : null }; }
            visitTransition(g, p) { p.queryCount = 0, p.depCount = 0; const E = zn(this, Dn(g.animation), p); return { type: 1, matchers: ne(g.expr, p.errors), animation: E, queryCount: p.queryCount, depCount: p.depCount, options: X(g.options) }; }
            visitSequence(g, p) { return { type: 2, steps: g.steps.map(E => zn(this, E, p)), options: X(g.options) }; }
            visitGroup(g, p) { const E = p.currentTime; let F = 0; const $ = g.steps.map(q => { p.currentTime = E; const Z = zn(this, q, p); return F = Math.max(F, p.currentTime), Z; }); return p.currentTime = F, { type: 3, steps: $, options: X(g.options) }; }
            visitAnimate(g, p) { const E = function Vt(R, g) { let p = null; if (R.hasOwnProperty("duration"))
                p = R;
            else if ("number" == typeof R)
                return et(ve(R, g).duration, 0, ""); const E = R; if (E.split(/\s+/).some($ => "{" == $.charAt(0) && "{" == $.charAt(1))) {
                const $ = et(0, 0, "");
                return $.dynamic = !0, $.strValue = E, $;
            } return p = p || ve(E, g), et(p.duration, p.delay, p.easing); }(g.timings, p.errors); p.currentAnimateTimings = E; let F, $ = g.styles ? g.styles : (0, ie.oB)({}); if (5 == $.type)
                F = this.visitKeyframes($, p);
            else {
                let q = g.styles, Z = !1;
                if (!q) {
                    Z = !0;
                    const $e = {};
                    E.easing && ($e.easing = E.easing), q = (0, ie.oB)($e);
                }
                p.currentTime += E.duration + E.delay;
                const be = this.visitStyle(q, p);
                be.isEmptyStep = Z, F = be;
            } return p.currentAnimateTimings = null, { type: 4, timings: E, style: F, options: null }; }
            visitStyle(g, p) { const E = this._makeStyleAst(g, p); return this._validateStyleAst(E, p), E; }
            _makeStyleAst(g, p) { const E = []; Array.isArray(g.styles) ? g.styles.forEach(q => { "string" == typeof q ? q == ie.l3 ? E.push(q) : p.errors.push(`The provided style string value ${q} is not allowed.`) : E.push(q); }) : E.push(g.styles); let F = !1, $ = null; return E.forEach(q => { if (gt(q)) {
                const Z = q, be = Z.easing;
                if (be && ($ = be, delete Z.easing), !F)
                    for (let $e in Z)
                        if (Z[$e].toString().indexOf("{{") >= 0) {
                            F = !0;
                            break;
                        }
            } }), { type: 6, styles: E, easing: $, offset: g.offset, containsDynamicStyles: F, options: null }; }
            _validateStyleAst(g, p) { const E = p.currentAnimateTimings; let F = p.currentTime, $ = p.currentTime; E && $ > 0 && ($ -= E.duration + E.delay), g.styles.forEach(q => { "string" != typeof q && Object.keys(q).forEach(Z => { if (!this._driver.validateStyleProperty(Z))
                return void p.errors.push(`The provided animation property "${Z}" is not a supported CSS property for animations`); const be = p.collectedStyles[p.currentQuerySelector], $e = be[Z]; let _t = !0; $e && ($ != F && $ >= $e.startTime && F <= $e.endTime && (p.errors.push(`The CSS property "${Z}" that exists between the times of "${$e.startTime}ms" and "${$e.endTime}ms" is also being animated in a parallel animation between the times of "${$}ms" and "${F}ms"`), _t = !1), $ = $e.startTime), _t && (be[Z] = { startTime: $, endTime: F }), p.options && function En(R, g, p) { const E = g.params || {}, F = Hn(R); F.length && F.forEach($ => { E.hasOwnProperty($) || p.push(`Unable to resolve the local animation param ${$} in the given list of values`); }); }(q[Z], p.options, p.errors); }); }); }
            visitKeyframes(g, p) { const E = { type: 5, styles: [], options: null }; if (!p.currentAnimateTimings)
                return p.errors.push("keyframes() must be placed inside of a call to animate()"), E; let $ = 0; const q = []; let Z = !1, be = !1, $e = 0; const _t = g.steps.map(ai => { const li = this._makeStyleAst(ai, p); let Fi = null != li.offset ? li.offset : function ge(R) { if ("string" == typeof R)
                return null; let g = null; if (Array.isArray(R))
                R.forEach(p => { if (gt(p) && p.hasOwnProperty("offset")) {
                    const E = p;
                    g = parseFloat(E.offset), delete E.offset;
                } });
            else if (gt(R) && R.hasOwnProperty("offset")) {
                const p = R;
                g = parseFloat(p.offset), delete p.offset;
            } return g; }(li.styles), mi = 0; return null != Fi && ($++, mi = li.offset = Fi), be = be || mi < 0 || mi > 1, Z = Z || mi < $e, $e = mi, q.push(mi), li; }); be && p.errors.push("Please ensure that all keyframe offsets are between 0 and 1"), Z && p.errors.push("Please ensure that all keyframe offsets are in order"); const Pt = g.steps.length; let zt = 0; $ > 0 && $ < Pt ? p.errors.push("Not all style() steps within the declared keyframes() contain offsets") : 0 == $ && (zt = 1 / (Pt - 1)); const hn = Pt - 1, Yt = p.currentTime, nn = p.currentAnimateTimings, xn = nn.duration; return _t.forEach((ai, li) => { const Fi = zt > 0 ? li == hn ? 1 : zt * li : q[li], mi = Fi * xn; p.currentTime = Yt + nn.delay + mi, nn.duration = mi, this._validateStyleAst(ai, p), ai.offset = Fi, E.styles.push(ai); }), E; }
            visitReference(g, p) { return { type: 8, animation: zn(this, Dn(g.animation), p), options: X(g.options) }; }
            visitAnimateChild(g, p) { return p.depCount++, { type: 9, options: X(g.options) }; }
            visitAnimateRef(g, p) { return { type: 10, animation: this.visitReference(g.animation, p), options: X(g.options) }; }
            visitQuery(g, p) { const E = p.currentQuerySelector, F = g.options || {}; p.queryCount++, p.currentQuery = g; const [$, q] = function k(R) { const g = !!R.split(/\s*,\s*/).find(p => ":self" == p); return g && (R = R.replace(Sn, "")), R = R.replace(/@\*/g, Me).replace(/@\w+/g, p => Me + "-" + p.substr(1)).replace(/:animating/g, Zt), [R, g]; }(g.selector); p.currentQuerySelector = E.length ? E + " " + $ : $, ce(p.collectedStyles, p.currentQuerySelector, {}); const Z = zn(this, Dn(g.animation), p); return p.currentQuery = null, p.currentQuerySelector = E, { type: 11, selector: $, limit: F.limit || 0, optional: !!F.optional, includeSelf: q, animation: Z, originalSelector: g.selector, options: X(g.options) }; }
            visitStagger(g, p) { p.currentQuery || p.errors.push("stagger() can only be used inside of query()"); const E = "full" === g.timings ? { duration: 0, delay: 0, easing: "full" } : ve(g.timings, p.errors, !0); return { type: 12, animation: zn(this, Dn(g.animation), p), timings: E, options: null }; }
        } class le {
            constructor(g) { this.errors = g, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = {}, this.options = null; }
        } function gt(R) { return !Array.isArray(R) && "object" == typeof R; } function X(R) { return R ? (R = je(R)).params && (R.params = function G(R) { return R ? je(R) : null; }(R.params)) : R = {}, R; } function et(R, g, p) { return { duration: R, delay: g, easing: p }; } function xe(R, g, p, E, F, $, q = null, Z = !1) { return { type: 1, element: R, keyframes: g, preStyleProps: p, postStyleProps: E, duration: F, delay: $, totalTime: F + $, easing: q, subTimeline: Z }; } class He {
            constructor() { this._map = new Map; }
            get(g) { return this._map.get(g) || []; }
            append(g, p) { let E = this._map.get(g); E || this._map.set(g, E = []), E.push(...p); }
            has(g) { return this._map.has(g); }
            clear() { this._map.clear(); }
        } const un = new RegExp(":enter", "g"), ri = new RegExp(":leave", "g"); function _i(R, g, p, E, F, $ = {}, q = {}, Z, be, $e = []) { return (new we).buildKeyframes(R, g, p, E, F, $, q, Z, be, $e); } class we {
            buildKeyframes(g, p, E, F, $, q, Z, be, $e, _t = []) { $e = $e || new He; const Pt = new Y(g, p, $e, F, $, _t, []); Pt.options = be, Pt.currentTimeline.setStyles([q], null, Pt.errors, be), zn(this, E, Pt); const zt = Pt.timelines.filter(hn => hn.containsAnimation()); if (Object.keys(Z).length) {
                let hn;
                for (let Yt = zt.length - 1; Yt >= 0; Yt--) {
                    const nn = zt[Yt];
                    if (nn.element === p) {
                        hn = nn;
                        break;
                    }
                }
                hn && !hn.allowOnlyTimelineStyles() && hn.setStyles([Z], null, Pt.errors, be);
            } return zt.length ? zt.map(hn => hn.buildKeyframes()) : [xe(p, [], [], [], 0, 0, "", !1)]; }
            visitTrigger(g, p) { }
            visitState(g, p) { }
            visitTransition(g, p) { }
            visitAnimateChild(g, p) { const E = p.subInstructions.get(p.element); if (E) {
                const F = p.createSubContext(g.options), $ = p.currentTimeline.currentTime, q = this._visitSubInstructions(E, F, F.options);
                $ != q && p.transformIntoNewTimeline(q);
            } p.previousNode = g; }
            visitAnimateRef(g, p) { const E = p.createSubContext(g.options); E.transformIntoNewTimeline(), this.visitReference(g.animation, E), p.transformIntoNewTimeline(E.currentTimeline.currentTime), p.previousNode = g; }
            _visitSubInstructions(g, p, E) { let $ = p.currentTimeline.currentTime; const q = null != E.duration ? Cn(E.duration) : null, Z = null != E.delay ? Cn(E.delay) : null; return 0 !== q && g.forEach(be => { const $e = p.appendInstructionToTimeline(be, q, Z); $ = Math.max($, $e.duration + $e.delay); }), $; }
            visitReference(g, p) { p.updateOptions(g.options, !0), zn(this, g.animation, p), p.previousNode = g; }
            visitSequence(g, p) { const E = p.subContextCount; let F = p; const $ = g.options; if ($ && ($.params || $.delay) && (F = p.createSubContext($), F.transformIntoNewTimeline(), null != $.delay)) {
                6 == F.previousNode.type && (F.currentTimeline.snapshotCurrentStyles(), F.previousNode = se);
                const q = Cn($.delay);
                F.delayNextStep(q);
            } g.steps.length && (g.steps.forEach(q => zn(this, q, F)), F.currentTimeline.applyStylesToKeyframe(), F.subContextCount > E && F.transformIntoNewTimeline()), p.previousNode = g; }
            visitGroup(g, p) { const E = []; let F = p.currentTimeline.currentTime; const $ = g.options && g.options.delay ? Cn(g.options.delay) : 0; g.steps.forEach(q => { const Z = p.createSubContext(g.options); $ && Z.delayNextStep($), zn(this, q, Z), F = Math.max(F, Z.currentTimeline.currentTime), E.push(Z.currentTimeline); }), E.forEach(q => p.currentTimeline.mergeTimelineCollectedStyles(q)), p.transformIntoNewTimeline(F), p.previousNode = g; }
            _visitTiming(g, p) { if (g.dynamic) {
                const E = g.strValue;
                return ve(p.params ? Yn(E, p.params, p.errors) : E, p.errors);
            } return { duration: g.duration, delay: g.delay, easing: g.easing }; }
            visitAnimate(g, p) { const E = p.currentAnimateTimings = this._visitTiming(g.timings, p), F = p.currentTimeline; E.delay && (p.incrementTime(E.delay), F.snapshotCurrentStyles()); const $ = g.style; 5 == $.type ? this.visitKeyframes($, p) : (p.incrementTime(E.duration), this.visitStyle($, p), F.applyStylesToKeyframe()), p.currentAnimateTimings = null, p.previousNode = g; }
            visitStyle(g, p) { const E = p.currentTimeline, F = p.currentAnimateTimings; !F && E.getCurrentStyleProperties().length && E.forwardFrame(); const $ = F && F.easing || g.easing; g.isEmptyStep ? E.applyEmptyStep($) : E.setStyles(g.styles, $, p.errors, p.options), p.previousNode = g; }
            visitKeyframes(g, p) { const E = p.currentAnimateTimings, F = p.currentTimeline.duration, $ = E.duration, Z = p.createSubContext().currentTimeline; Z.easing = E.easing, g.styles.forEach(be => { Z.forwardTime((be.offset || 0) * $), Z.setStyles(be.styles, be.easing, p.errors, p.options), Z.applyStylesToKeyframe(); }), p.currentTimeline.mergeTimelineCollectedStyles(Z), p.transformIntoNewTimeline(F + $), p.previousNode = g; }
            visitQuery(g, p) { const E = p.currentTimeline.currentTime, F = g.options || {}, $ = F.delay ? Cn(F.delay) : 0; $ && (6 === p.previousNode.type || 0 == E && p.currentTimeline.getCurrentStyleProperties().length) && (p.currentTimeline.snapshotCurrentStyles(), p.previousNode = se); let q = E; const Z = p.invokeQuery(g.selector, g.originalSelector, g.limit, g.includeSelf, !!F.optional, p.errors); p.currentQueryTotal = Z.length; let be = null; Z.forEach(($e, _t) => { p.currentQueryIndex = _t; const Pt = p.createSubContext(g.options, $e); $ && Pt.delayNextStep($), $e === p.element && (be = Pt.currentTimeline), zn(this, g.animation, Pt), Pt.currentTimeline.applyStylesToKeyframe(), q = Math.max(q, Pt.currentTimeline.currentTime); }), p.currentQueryIndex = 0, p.currentQueryTotal = 0, p.transformIntoNewTimeline(q), be && (p.currentTimeline.mergeTimelineCollectedStyles(be), p.currentTimeline.snapshotCurrentStyles()), p.previousNode = g; }
            visitStagger(g, p) { const E = p.parentContext, F = p.currentTimeline, $ = g.timings, q = Math.abs($.duration), Z = q * (p.currentQueryTotal - 1); let be = q * p.currentQueryIndex; switch ($.duration < 0 ? "reverse" : $.easing) {
                case "reverse":
                    be = Z - be;
                    break;
                case "full": be = E.currentStaggerTime;
            } const _t = p.currentTimeline; be && _t.delayNextStep(be); const Pt = _t.currentTime; zn(this, g.animation, p), p.previousNode = g, E.currentStaggerTime = F.currentTime - Pt + (F.startTime - E.currentTimeline.startTime); }
        } const se = {}; class Y {
            constructor(g, p, E, F, $, q, Z, be) { this._driver = g, this.element = p, this.subInstructions = E, this._enterClassName = F, this._leaveClassName = $, this.errors = q, this.timelines = Z, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = se, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = be || new J(this._driver, p, 0), Z.push(this.currentTimeline); }
            get params() { return this.options.params; }
            updateOptions(g, p) { if (!g)
                return; const E = g; let F = this.options; null != E.duration && (F.duration = Cn(E.duration)), null != E.delay && (F.delay = Cn(E.delay)); const $ = E.params; if ($) {
                let q = F.params;
                q || (q = this.options.params = {}), Object.keys($).forEach(Z => { (!p || !q.hasOwnProperty(Z)) && (q[Z] = Yn($[Z], q, this.errors)); });
            } }
            _copyOptions() { const g = {}; if (this.options) {
                const p = this.options.params;
                if (p) {
                    const E = g.params = {};
                    Object.keys(p).forEach(F => { E[F] = p[F]; });
                }
            } return g; }
            createSubContext(g = null, p, E) { const F = p || this.element, $ = new Y(this._driver, F, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(F, E || 0)); return $.previousNode = this.previousNode, $.currentAnimateTimings = this.currentAnimateTimings, $.options = this._copyOptions(), $.updateOptions(g), $.currentQueryIndex = this.currentQueryIndex, $.currentQueryTotal = this.currentQueryTotal, $.parentContext = this, this.subContextCount++, $; }
            transformIntoNewTimeline(g) { return this.previousNode = se, this.currentTimeline = this.currentTimeline.fork(this.element, g), this.timelines.push(this.currentTimeline), this.currentTimeline; }
            appendInstructionToTimeline(g, p, E) { const F = { duration: null != p ? p : g.duration, delay: this.currentTimeline.currentTime + (null != E ? E : 0) + g.delay, easing: "" }, $ = new Qe(this._driver, g.element, g.keyframes, g.preStyleProps, g.postStyleProps, F, g.stretchStartingKeyframe); return this.timelines.push($), F; }
            incrementTime(g) { this.currentTimeline.forwardTime(this.currentTimeline.duration + g); }
            delayNextStep(g) { g > 0 && this.currentTimeline.delayNextStep(g); }
            invokeQuery(g, p, E, F, $, q) { let Z = []; if (F && Z.push(this.element), g.length > 0) {
                g = (g = g.replace(un, "." + this._enterClassName)).replace(ri, "." + this._leaveClassName);
                let $e = this._driver.query(this.element, g, 1 != E);
                0 !== E && ($e = E < 0 ? $e.slice($e.length + E, $e.length) : $e.slice(0, E)), Z.push(...$e);
            } return !$ && 0 == Z.length && q.push(`\`query("${p}")\` returned zero elements. (Use \`query("${p}", { optional: true })\` if you wish to allow this.)`), Z; }
        } class J {
            constructor(g, p, E, F) { this._driver = g, this.element = p, this.startTime = E, this._elementTimelineStylesLookup = F, this.duration = 0, this._previousKeyframe = {}, this._currentKeyframe = {}, this._keyframes = new Map, this._styleSummary = {}, this._pendingStyles = {}, this._backFill = {}, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._localTimelineStyles = Object.create(this._backFill, {}), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(p), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(p, this._localTimelineStyles)), this._loadKeyframe(); }
            containsAnimation() { switch (this._keyframes.size) {
                case 0: return !1;
                case 1: return this.getCurrentStyleProperties().length > 0;
                default: return !0;
            } }
            getCurrentStyleProperties() { return Object.keys(this._currentKeyframe); }
            get currentTime() { return this.startTime + this.duration; }
            delayNextStep(g) { const p = 1 == this._keyframes.size && Object.keys(this._pendingStyles).length; this.duration || p ? (this.forwardTime(this.currentTime + g), p && this.snapshotCurrentStyles()) : this.startTime += g; }
            fork(g, p) { return this.applyStylesToKeyframe(), new J(this._driver, g, p || this.currentTime, this._elementTimelineStylesLookup); }
            _loadKeyframe() { this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = Object.create(this._backFill, {}), this._keyframes.set(this.duration, this._currentKeyframe)); }
            forwardFrame() { this.duration += 1, this._loadKeyframe(); }
            forwardTime(g) { this.applyStylesToKeyframe(), this.duration = g, this._loadKeyframe(); }
            _updateStyle(g, p) { this._localTimelineStyles[g] = p, this._globalTimelineStyles[g] = p, this._styleSummary[g] = { time: this.currentTime, value: p }; }
            allowOnlyTimelineStyles() { return this._currentEmptyStepKeyframe !== this._currentKeyframe; }
            applyEmptyStep(g) { g && (this._previousKeyframe.easing = g), Object.keys(this._globalTimelineStyles).forEach(p => { this._backFill[p] = this._globalTimelineStyles[p] || ie.l3, this._currentKeyframe[p] = ie.l3; }), this._currentEmptyStepKeyframe = this._currentKeyframe; }
            setStyles(g, p, E, F) { p && (this._previousKeyframe.easing = p); const $ = F && F.params || {}, q = function Gt(R, g) { const p = {}; let E; return R.forEach(F => { "*" === F ? (E = E || Object.keys(g), E.forEach($ => { p[$] = ie.l3; })) : Bt(F, !1, p); }), p; }(g, this._globalTimelineStyles); Object.keys(q).forEach(Z => { const be = Yn(q[Z], $, E); this._pendingStyles[Z] = be, this._localTimelineStyles.hasOwnProperty(Z) || (this._backFill[Z] = this._globalTimelineStyles.hasOwnProperty(Z) ? this._globalTimelineStyles[Z] : ie.l3), this._updateStyle(Z, be); }); }
            applyStylesToKeyframe() { const g = this._pendingStyles, p = Object.keys(g); 0 != p.length && (this._pendingStyles = {}, p.forEach(E => { this._currentKeyframe[E] = g[E]; }), Object.keys(this._localTimelineStyles).forEach(E => { this._currentKeyframe.hasOwnProperty(E) || (this._currentKeyframe[E] = this._localTimelineStyles[E]); })); }
            snapshotCurrentStyles() { Object.keys(this._localTimelineStyles).forEach(g => { const p = this._localTimelineStyles[g]; this._pendingStyles[g] = p, this._updateStyle(g, p); }); }
            getFinalKeyframe() { return this._keyframes.get(this.duration); }
            get properties() { const g = []; for (let p in this._currentKeyframe)
                g.push(p); return g; }
            mergeTimelineCollectedStyles(g) { Object.keys(g._styleSummary).forEach(p => { const E = this._styleSummary[p], F = g._styleSummary[p]; (!E || F.time > E.time) && this._updateStyle(p, F.value); }); }
            buildKeyframes() { this.applyStylesToKeyframe(); const g = new Set, p = new Set, E = 1 === this._keyframes.size && 0 === this.duration; let F = []; this._keyframes.forEach((Z, be) => { const $e = Bt(Z, !0); Object.keys($e).forEach(_t => { const Pt = $e[_t]; Pt == ie.k1 ? g.add(_t) : Pt == ie.l3 && p.add(_t); }), E || ($e.offset = be / this.duration), F.push($e); }); const $ = g.size ? si(g.values()) : [], q = p.size ? si(p.values()) : []; if (E) {
                const Z = F[0], be = je(Z);
                Z.offset = 0, be.offset = 1, F = [Z, be];
            } return xe(this.element, F, $, q, this.duration, this.startTime, this.easing, !1); }
        } class Qe extends J {
            constructor(g, p, E, F, $, q, Z = !1) { super(g, p, q.delay), this.keyframes = E, this.preStyleProps = F, this.postStyleProps = $, this._stretchStartingKeyframe = Z, this.timings = { duration: q.duration, delay: q.delay, easing: q.easing }; }
            containsAnimation() { return this.keyframes.length > 1; }
            buildKeyframes() { let g = this.keyframes, { delay: p, duration: E, easing: F } = this.timings; if (this._stretchStartingKeyframe && p) {
                const $ = [], q = E + p, Z = p / q, be = Bt(g[0], !1);
                be.offset = 0, $.push(be);
                const $e = Bt(g[0], !1);
                $e.offset = Nt(Z), $.push($e);
                const _t = g.length - 1;
                for (let Pt = 1; Pt <= _t; Pt++) {
                    let zt = Bt(g[Pt], !1);
                    zt.offset = Nt((p + zt.offset * E) / q), $.push(zt);
                }
                E = q, p = 0, F = "", g = $;
            } return xe(this.element, g, this.preStyleProps, this.postStyleProps, E, p, F, !0); }
        } function Nt(R, g = 3) { const p = Math.pow(10, g - 1); return Math.round(R * p) / p; } class Fn {
        } class bs extends Fn {
            normalizePropertyName(g, p) { return qt(g); }
            normalizeStyleValue(g, p, E, F) { let $ = ""; const q = E.toString().trim(); if (Oi[p] && 0 !== E && "0" !== E)
                if ("number" == typeof E)
                    $ = "px";
                else {
                    const Z = E.match(/^[+-]?[\d\.]+([a-z]*)$/);
                    Z && 0 == Z[1].length && F.push(`Please provide a CSS unit value for ${g}:${E}`);
                } return q + $; }
        } const Oi = (() => function qn(R) { const g = {}; return R.forEach(p => g[p] = !0), g; }("width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(",")))(); function es(R, g, p, E, F, $, q, Z, be, $e, _t, Pt, zt) { return { type: 0, element: R, triggerName: g, isRemovalTransition: F, fromState: p, fromStyles: $, toState: E, toStyles: q, timelines: Z, queriedElements: be, preStyleProps: $e, postStyleProps: _t, totalTime: Pt, errors: zt }; } const ui = {}; class Dt {
            constructor(g, p, E) { this._triggerName = g, this.ast = p, this._stateStyles = E; }
            match(g, p, E, F) { return function vn(R, g, p, E, F) { return R.some($ => $(g, p, E, F)); }(this.ast.matchers, g, p, E, F); }
            buildStyles(g, p, E) { const F = this._stateStyles["*"], $ = this._stateStyles[g], q = F ? F.buildStyles(p, E) : {}; return $ ? $.buildStyles(p, E) : q; }
            build(g, p, E, F, $, q, Z, be, $e, _t) { const Pt = [], zt = this.ast.options && this.ast.options.params || ui, Yt = this.buildStyles(E, Z && Z.params || ui, Pt), nn = be && be.params || ui, xn = this.buildStyles(F, nn, Pt), ai = new Set, li = new Map, Fi = new Map, mi = "void" === F, Ms = { params: Object.assign(Object.assign({}, zt), nn) }, Ui = _t ? [] : _i(g, p, this.ast.animation, $, q, Yt, xn, Ms, $e, Pt); let Si = 0; if (Ui.forEach(Di => { Si = Math.max(Di.duration + Di.delay, Si); }), Pt.length)
                return es(p, this._triggerName, E, F, mi, Yt, xn, [], [], li, Fi, Si, Pt); Ui.forEach(Di => { const ls = Di.element, hr = ce(li, ls, {}); Di.preStyleProps.forEach(Ts => hr[Ts] = !0); const Ir = ce(Fi, ls, {}); Di.postStyleProps.forEach(Ts => Ir[Ts] = !0), ls !== p && ai.add(ls); }); const as = si(ai.values()); return es(p, this._triggerName, E, F, mi, Yt, xn, Ui, as, li, Fi, Si); }
        } class z {
            constructor(g, p, E) { this.styles = g, this.defaultParams = p, this.normalizer = E; }
            buildStyles(g, p) { const E = {}, F = je(this.defaultParams); return Object.keys(g).forEach($ => { const q = g[$]; null != q && (F[$] = q); }), this.styles.styles.forEach($ => { if ("string" != typeof $) {
                const q = $;
                Object.keys(q).forEach(Z => { let be = q[Z]; be.length > 1 && (be = Yn(be, F, p)); const $e = this.normalizer.normalizePropertyName(Z, p); be = this.normalizer.normalizeStyleValue(Z, $e, be, p), E[$e] = be; });
            } }), E; }
        } class ye {
            constructor(g, p, E) { this.name = g, this.ast = p, this._normalizer = E, this.transitionFactories = [], this.states = {}, p.states.forEach(F => { this.states[F.name] = new z(F.style, F.options && F.options.params || {}, E); }), Wt(this.states, "true", "1"), Wt(this.states, "false", "0"), p.transitions.forEach(F => { this.transitionFactories.push(new Dt(g, F, this.states)); }), this.fallbackTransition = function nt(R, g, p) { return new Dt(R, { type: 1, animation: { type: 2, steps: [], options: null }, matchers: [(q, Z) => !0], options: null, queryCount: 0, depCount: 0 }, g); }(g, this.states); }
            get containsQueries() { return this.ast.queryCount > 0; }
            matchTransition(g, p, E, F) { return this.transitionFactories.find(q => q.match(g, p, E, F)) || null; }
            matchStyles(g, p, E) { return this.fallbackTransition.buildStyles(g, p, E); }
        } function Wt(R, g, p) { R.hasOwnProperty(g) ? R.hasOwnProperty(p) || (R[p] = R[g]) : R.hasOwnProperty(p) && (R[g] = R[p]); } const Ht = new He; class Ai {
            constructor(g, p, E) { this.bodyNode = g, this._driver = p, this._normalizer = E, this._animations = {}, this._playersById = {}, this.players = []; }
            register(g, p) { const E = [], F = Jt(this._driver, p, E); if (E.length)
                throw new Error(`Unable to build the animation due to the following errors: ${E.join("\n")}`); this._animations[g] = F; }
            _buildPlayer(g, p, E) { const F = g.element, $ = Le(0, this._normalizer, 0, g.keyframes, p, E); return this._driver.animate(F, $, g.duration, g.delay, g.easing, [], !0); }
            create(g, p, E = {}) { const F = [], $ = this._animations[g]; let q; const Z = new Map; if ($ ? (q = _i(this._driver, p, $, Oe, We, {}, {}, E, Ht, F), q.forEach(_t => { const Pt = ce(Z, _t.element, {}); _t.postStyleProps.forEach(zt => Pt[zt] = null); })) : (F.push("The requested animation doesn't exist or has already been destroyed"), q = []), F.length)
                throw new Error(`Unable to create the animation due to the following errors: ${F.join("\n")}`); Z.forEach((_t, Pt) => { Object.keys(_t).forEach(zt => { _t[zt] = this._driver.computeStyle(Pt, zt, ie.l3); }); }); const $e = Te(q.map(_t => { const Pt = Z.get(_t.element); return this._buildPlayer(_t, {}, Pt); })); return this._playersById[g] = $e, $e.onDestroy(() => this.destroy(g)), this.players.push($e), $e; }
            destroy(g) { const p = this._getPlayer(g); p.destroy(), delete this._playersById[g]; const E = this.players.indexOf(p); E >= 0 && this.players.splice(E, 1); }
            _getPlayer(g) { const p = this._playersById[g]; if (!p)
                throw new Error(`Unable to find the timeline player referenced by ${g}`); return p; }
            listen(g, p, E, F) { const $ = de(p, "", "", ""); return Ve(this._getPlayer(g), E, $, F), () => { }; }
            command(g, p, E, F) { if ("register" == E)
                return void this.register(g, F[0]); if ("create" == E)
                return void this.create(g, p, F[0] || {}); const $ = this._getPlayer(g); switch (E) {
                case "play":
                    $.play();
                    break;
                case "pause":
                    $.pause();
                    break;
                case "reset":
                    $.reset();
                    break;
                case "restart":
                    $.restart();
                    break;
                case "finish":
                    $.finish();
                    break;
                case "init":
                    $.init();
                    break;
                case "setPosition":
                    $.setPosition(parseFloat(F[0]));
                    break;
                case "destroy": this.destroy(g);
            } }
        } const gs = "ng-animate-queued", ki = "ng-animate-disabled", hi = [], fn = { namespaceId: "", setForRemoval: !1, setForMove: !1, hasAnimation: !1, removedBeforeQueried: !1 }, Ri = { namespaceId: "", setForMove: !1, setForRemoval: !1, hasAnimation: !1, removedBeforeQueried: !0 }, An = "__ng_removed"; class In {
            constructor(g, p = "") { this.namespaceId = p; const E = g && g.hasOwnProperty("value"); if (this.value = function ks(R) { return null != R ? R : null; }(E ? g.value : g), E) {
                const $ = je(g);
                delete $.value, this.options = $;
            }
            else
                this.options = {}; this.options.params || (this.options.params = {}); }
            get params() { return this.options.params; }
            absorbOptions(g) { const p = g.params; if (p) {
                const E = this.options.params;
                Object.keys(p).forEach(F => { null == E[F] && (E[F] = p[F]); });
            } }
        } const Pi = "void", Ls = new In(Pi); class ni {
            constructor(g, p, E) { this.id = g, this.hostElement = p, this._engine = E, this.players = [], this._triggers = {}, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + g, bi(p, this._hostClassName); }
            listen(g, p, E, F) { if (!this._triggers.hasOwnProperty(p))
                throw new Error(`Unable to listen on the animation trigger event "${E}" because the animation trigger "${p}" doesn't exist!`); if (null == E || 0 == E.length)
                throw new Error(`Unable to listen on the animation trigger "${p}" because the provided event is undefined!`); if (!function ss(R) { return "start" == R || "done" == R; }(E))
                throw new Error(`The provided animation trigger event "${E}" for the animation trigger "${p}" is not supported!`); const $ = ce(this._elementListeners, g, []), q = { name: p, phase: E, callback: F }; $.push(q); const Z = ce(this._engine.statesByElement, g, {}); return Z.hasOwnProperty(p) || (bi(g, ut), bi(g, ut + "-" + p), Z[p] = Ls), () => { this._engine.afterFlush(() => { const be = $.indexOf(q); be >= 0 && $.splice(be, 1), this._triggers[p] || delete Z[p]; }); }; }
            register(g, p) { return !this._triggers[g] && (this._triggers[g] = p, !0); }
            _getTrigger(g) { const p = this._triggers[g]; if (!p)
                throw new Error(`The provided animation trigger "${g}" has not been registered!`); return p; }
            trigger(g, p, E, F = !0) { const $ = this._getTrigger(p), q = new ps(this.id, p, g); let Z = this._engine.statesByElement.get(g); Z || (bi(g, ut), bi(g, ut + "-" + p), this._engine.statesByElement.set(g, Z = {})); let be = Z[p]; const $e = new In(E, this.id); if (!(E && E.hasOwnProperty("value")) && be && $e.absorbOptions(be.options), Z[p] = $e, be || (be = Ls), $e.value !== Pi && be.value === $e.value) {
                if (!function Ys(R, g) { const p = Object.keys(R), E = Object.keys(g); if (p.length != E.length)
                    return !1; for (let F = 0; F < p.length; F++) {
                    const $ = p[F];
                    if (!g.hasOwnProperty($) || R[$] !== g[$])
                        return !1;
                } return !0; }(be.params, $e.params)) {
                    const nn = [], xn = $.matchStyles(be.value, be.params, nn), ai = $.matchStyles($e.value, $e.params, nn);
                    nn.length ? this._engine.reportError(nn) : this._engine.afterFlush(() => { Tn(g, xn), rn(g, ai); });
                }
                return;
            } const zt = ce(this._engine.playersByElement, g, []); zt.forEach(nn => { nn.namespaceId == this.id && nn.triggerName == p && nn.queued && nn.destroy(); }); let hn = $.matchTransition(be.value, $e.value, g, $e.params), Yt = !1; if (!hn) {
                if (!F)
                    return;
                hn = $.fallbackTransition, Yt = !0;
            } return this._engine.totalQueuedPlayers++, this._queue.push({ element: g, triggerName: p, transition: hn, fromState: be, toState: $e, player: q, isFallbackTransition: Yt }), Yt || (bi(g, gs), q.onStart(() => { Ws(g, gs); })), q.onDone(() => { let nn = this.players.indexOf(q); nn >= 0 && this.players.splice(nn, 1); const xn = this._engine.playersByElement.get(g); if (xn) {
                let ai = xn.indexOf(q);
                ai >= 0 && xn.splice(ai, 1);
            } }), this.players.push(q), zt.push(q), q; }
            deregister(g) { delete this._triggers[g], this._engine.statesByElement.forEach((p, E) => { delete p[g]; }), this._elementListeners.forEach((p, E) => { this._elementListeners.set(E, p.filter(F => F.name != g)); }); }
            clearElementCache(g) { this._engine.statesByElement.delete(g), this._elementListeners.delete(g); const p = this._engine.playersByElement.get(g); p && (p.forEach(E => E.destroy()), this._engine.playersByElement.delete(g)); }
            _signalRemovalForInnerTriggers(g, p) { const E = this._engine.driver.query(g, Me, !0); E.forEach(F => { if (F[An])
                return; const $ = this._engine.fetchNamespacesByElement(F); $.size ? $.forEach(q => q.triggerLeaveAnimation(F, p, !1, !0)) : this.clearElementCache(F); }), this._engine.afterFlushAnimationsDone(() => E.forEach(F => this.clearElementCache(F))); }
            triggerLeaveAnimation(g, p, E, F) { const $ = this._engine.statesByElement.get(g), q = new Map; if ($) {
                const Z = [];
                if (Object.keys($).forEach(be => { if (q.set(be, $[be].value), this._triggers[be]) {
                    const $e = this.trigger(g, be, Pi, F);
                    $e && Z.push($e);
                } }), Z.length)
                    return this._engine.markElementAsRemoved(this.id, g, !0, p, q), E && Te(Z).onDone(() => this._engine.processLeaveNode(g)), !0;
            } return !1; }
            prepareLeaveAnimationListeners(g) { const p = this._elementListeners.get(g), E = this._engine.statesByElement.get(g); if (p && E) {
                const F = new Set;
                p.forEach($ => { const q = $.name; if (F.has(q))
                    return; F.add(q); const be = this._triggers[q].fallbackTransition, $e = E[q] || Ls, _t = new In(Pi), Pt = new ps(this.id, q, g); this._engine.totalQueuedPlayers++, this._queue.push({ element: g, triggerName: q, transition: be, fromState: $e, toState: _t, player: Pt, isFallbackTransition: !0 }); });
            } }
            removeNode(g, p) { const E = this._engine; if (g.childElementCount && this._signalRemovalForInnerTriggers(g, p), this.triggerLeaveAnimation(g, p, !0))
                return; let F = !1; if (E.totalAnimations) {
                const $ = E.players.length ? E.playersByQueriedElement.get(g) : [];
                if ($ && $.length)
                    F = !0;
                else {
                    let q = g;
                    for (; q = q.parentNode;)
                        if (E.statesByElement.get(q)) {
                            F = !0;
                            break;
                        }
                }
            } if (this.prepareLeaveAnimationListeners(g), F)
                E.markElementAsRemoved(this.id, g, !1, p);
            else {
                const $ = g[An];
                (!$ || $ === fn) && (E.afterFlush(() => this.clearElementCache(g)), E.destroyInnerAnimations(g), E._onRemovalComplete(g, p));
            } }
            insertNode(g, p) { bi(g, this._hostClassName); }
            drainQueuedTransitions(g) { const p = []; return this._queue.forEach(E => { const F = E.player; if (F.destroyed)
                return; const $ = E.element, q = this._elementListeners.get($); q && q.forEach(Z => { if (Z.name == E.triggerName) {
                const be = de($, E.triggerName, E.fromState.value, E.toState.value);
                be._data = g, Ve(E.player, Z.phase, be, Z.callback);
            } }), F.markedForDestroy ? this._engine.afterFlush(() => { F.destroy(); }) : p.push(E); }), this._queue = [], p.sort((E, F) => { const $ = E.transition.ast.depCount, q = F.transition.ast.depCount; return 0 == $ || 0 == q ? $ - q : this._engine.driver.containsElement(E.element, F.element) ? 1 : -1; }); }
            destroy(g) { this.players.forEach(p => p.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, g); }
            elementContainsData(g) { let p = !1; return this._elementListeners.has(g) && (p = !0), p = !!this._queue.find(E => E.element === g) || p, p; }
        } class di {
            constructor(g, p, E) { this.bodyNode = g, this.driver = p, this._normalizer = E, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = (F, $) => { }; }
            _onRemovalComplete(g, p) { this.onRemovalComplete(g, p); }
            get queuedPlayers() { const g = []; return this._namespaceList.forEach(p => { p.players.forEach(E => { E.queued && g.push(E); }); }), g; }
            createNamespace(g, p) { const E = new ni(g, p, this); return this.bodyNode && this.driver.containsElement(this.bodyNode, p) ? this._balanceNamespaceList(E, p) : (this.newHostElements.set(p, E), this.collectEnterElement(p)), this._namespaceLookup[g] = E; }
            _balanceNamespaceList(g, p) { const E = this._namespaceList.length - 1; if (E >= 0) {
                let F = !1;
                for (let $ = E; $ >= 0; $--)
                    if (this.driver.containsElement(this._namespaceList[$].hostElement, p)) {
                        this._namespaceList.splice($ + 1, 0, g), F = !0;
                        break;
                    }
                F || this._namespaceList.splice(0, 0, g);
            }
            else
                this._namespaceList.push(g); return this.namespacesByHostElement.set(p, g), g; }
            register(g, p) { let E = this._namespaceLookup[g]; return E || (E = this.createNamespace(g, p)), E; }
            registerTrigger(g, p, E) { let F = this._namespaceLookup[g]; F && F.register(p, E) && this.totalAnimations++; }
            destroy(g, p) { if (!g)
                return; const E = this._fetchNamespace(g); this.afterFlush(() => { this.namespacesByHostElement.delete(E.hostElement), delete this._namespaceLookup[g]; const F = this._namespaceList.indexOf(E); F >= 0 && this._namespaceList.splice(F, 1); }), this.afterFlushAnimationsDone(() => E.destroy(p)); }
            _fetchNamespace(g) { return this._namespaceLookup[g]; }
            fetchNamespacesByElement(g) { const p = new Set, E = this.statesByElement.get(g); if (E) {
                const F = Object.keys(E);
                for (let $ = 0; $ < F.length; $++) {
                    const q = E[F[$]].namespaceId;
                    if (q) {
                        const Z = this._fetchNamespace(q);
                        Z && p.add(Z);
                    }
                }
            } return p; }
            trigger(g, p, E, F) { if (pi(p)) {
                const $ = this._fetchNamespace(g);
                if ($)
                    return $.trigger(p, E, F), !0;
            } return !1; }
            insertNode(g, p, E, F) { if (!pi(p))
                return; const $ = p[An]; if ($ && $.setForRemoval) {
                $.setForRemoval = !1, $.setForMove = !0;
                const q = this.collectedLeaveElements.indexOf(p);
                q >= 0 && this.collectedLeaveElements.splice(q, 1);
            } if (g) {
                const q = this._fetchNamespace(g);
                q && q.insertNode(p, E);
            } F && this.collectEnterElement(p); }
            collectEnterElement(g) { this.collectedEnterElements.push(g); }
            markElementAsDisabled(g, p) { p ? this.disabledNodes.has(g) || (this.disabledNodes.add(g), bi(g, ki)) : this.disabledNodes.has(g) && (this.disabledNodes.delete(g), Ws(g, ki)); }
            removeNode(g, p, E, F) { if (pi(p)) {
                const $ = g ? this._fetchNamespace(g) : null;
                if ($ ? $.removeNode(p, F) : this.markElementAsRemoved(g, p, !1, F), E) {
                    const q = this.namespacesByHostElement.get(p);
                    q && q.id !== g && q.removeNode(p, F);
                }
            }
            else
                this._onRemovalComplete(p, F); }
            markElementAsRemoved(g, p, E, F, $) { this.collectedLeaveElements.push(p), p[An] = { namespaceId: g, setForRemoval: F, hasAnimation: E, removedBeforeQueried: !1, previousTriggersValues: $ }; }
            listen(g, p, E, F, $) { return pi(p) ? this._fetchNamespace(g).listen(p, E, F, $) : () => { }; }
            _buildInstruction(g, p, E, F, $) { return g.transition.build(this.driver, g.element, g.fromState.value, g.toState.value, E, F, g.fromState.options, g.toState.options, p, $); }
            destroyInnerAnimations(g) { let p = this.driver.query(g, Me, !0); p.forEach(E => this.destroyActiveAnimationsForElement(E)), 0 != this.playersByQueriedElement.size && (p = this.driver.query(g, Zt, !0), p.forEach(E => this.finishActiveQueriedAnimationOnElement(E))); }
            destroyActiveAnimationsForElement(g) { const p = this.playersByElement.get(g); p && p.forEach(E => { E.queued ? E.markedForDestroy = !0 : E.destroy(); }); }
            finishActiveQueriedAnimationOnElement(g) { const p = this.playersByQueriedElement.get(g); p && p.forEach(E => E.finish()); }
            whenRenderingDone() { return new Promise(g => { if (this.players.length)
                return Te(this.players).onDone(() => g()); g(); }); }
            processLeaveNode(g) { var p; const E = g[An]; if (E && E.setForRemoval) {
                if (g[An] = fn, E.namespaceId) {
                    this.destroyInnerAnimations(g);
                    const F = this._fetchNamespace(E.namespaceId);
                    F && F.clearElementCache(g);
                }
                this._onRemovalComplete(g, E.setForRemoval);
            } (null === (p = g.classList) || void 0 === p ? void 0 : p.contains(ki)) && this.markElementAsDisabled(g, !1), this.driver.query(g, ".ng-animate-disabled", !0).forEach(F => { this.markElementAsDisabled(F, !1); }); }
            flush(g = -1) { let p = []; if (this.newHostElements.size && (this.newHostElements.forEach((E, F) => this._balanceNamespaceList(E, F)), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
                for (let E = 0; E < this.collectedEnterElements.length; E++)
                    bi(this.collectedEnterElements[E], "ng-star-inserted"); if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
                const E = [];
                try {
                    p = this._flushAnimations(E, g);
                }
                finally {
                    for (let F = 0; F < E.length; F++)
                        E[F]();
                }
            }
            else
                for (let E = 0; E < this.collectedLeaveElements.length; E++)
                    this.processLeaveNode(this.collectedLeaveElements[E]); if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(E => E()), this._flushFns = [], this._whenQuietFns.length) {
                const E = this._whenQuietFns;
                this._whenQuietFns = [], p.length ? Te(p).onDone(() => { E.forEach(F => F()); }) : E.forEach(F => F());
            } }
            reportError(g) { throw new Error(`Unable to process animations due to the following failed trigger transitions\n ${g.join("\n")}`); }
            _flushAnimations(g, p) { const E = new He, F = [], $ = new Map, q = [], Z = new Map, be = new Map, $e = new Map, _t = new Set; this.disabledNodes.forEach(Lt => { _t.add(Lt); const sn = this.driver.query(Lt, ".ng-animate-queued", !0); for (let on = 0; on < sn.length; on++)
                _t.add(sn[on]); }); const Pt = this.bodyNode, zt = Array.from(this.statesByElement.keys()), hn = xi(zt, this.collectedEnterElements), Yt = new Map; let nn = 0; hn.forEach((Lt, sn) => { const on = Oe + nn++; Yt.set(sn, on), Lt.forEach(ln => bi(ln, on)); }); const xn = [], ai = new Set, li = new Set; for (let Lt = 0; Lt < this.collectedLeaveElements.length; Lt++) {
                const sn = this.collectedLeaveElements[Lt], on = sn[An];
                on && on.setForRemoval && (xn.push(sn), ai.add(sn), on.hasAnimation ? this.driver.query(sn, ".ng-star-inserted", !0).forEach(ln => ai.add(ln)) : li.add(sn));
            } const Fi = new Map, mi = xi(zt, Array.from(ai)); mi.forEach((Lt, sn) => { const on = We + nn++; Fi.set(sn, on), Lt.forEach(ln => bi(ln, on)); }), g.push(() => { hn.forEach((Lt, sn) => { const on = Yt.get(sn); Lt.forEach(ln => Ws(ln, on)); }), mi.forEach((Lt, sn) => { const on = Fi.get(sn); Lt.forEach(ln => Ws(ln, on)); }), xn.forEach(Lt => { this.processLeaveNode(Lt); }); }); const Ms = [], Ui = []; for (let Lt = this._namespaceList.length - 1; Lt >= 0; Lt--)
                this._namespaceList[Lt].drainQueuedTransitions(p).forEach(on => { const ln = on.player, Qn = on.element; if (Ms.push(ln), this.collectedEnterElements.length) {
                    const Mi = Qn[An];
                    if (Mi && Mi.setForMove) {
                        if (Mi.previousTriggersValues && Mi.previousTriggersValues.has(on.triggerName)) {
                            const _s = Mi.previousTriggersValues.get(on.triggerName), Yi = this.statesByElement.get(on.element);
                            Yi && Yi[on.triggerName] && (Yi[on.triggerName].value = _s);
                        }
                        return void ln.destroy();
                    }
                } const Rn = !Pt || !this.driver.containsElement(Pt, Qn), Ci = Fi.get(Qn), Is = Yt.get(Qn), Xn = this._buildInstruction(on, E, Is, Ci, Rn); if (Xn.errors && Xn.errors.length)
                    return void Ui.push(Xn); if (Rn)
                    return ln.onStart(() => Tn(Qn, Xn.fromStyles)), ln.onDestroy(() => rn(Qn, Xn.toStyles)), void F.push(ln); if (on.isFallbackTransition)
                    return ln.onStart(() => Tn(Qn, Xn.fromStyles)), ln.onDestroy(() => rn(Qn, Xn.toStyles)), void F.push(ln); const fo = []; Xn.timelines.forEach(Mi => { Mi.stretchStartingKeyframe = !0, this.disabledNodes.has(Mi.element) || fo.push(Mi); }), Xn.timelines = fo, E.append(Qn, Xn.timelines), q.push({ instruction: Xn, player: ln, element: Qn }), Xn.queriedElements.forEach(Mi => ce(Z, Mi, []).push(ln)), Xn.preStyleProps.forEach((Mi, _s) => { const Yi = Object.keys(Mi); if (Yi.length) {
                    let cs = be.get(_s);
                    cs || be.set(_s, cs = new Set), Yi.forEach(Qs => cs.add(Qs));
                } }), Xn.postStyleProps.forEach((Mi, _s) => { const Yi = Object.keys(Mi); let cs = $e.get(_s); cs || $e.set(_s, cs = new Set), Yi.forEach(Qs => cs.add(Qs)); }); }); if (Ui.length) {
                const Lt = [];
                Ui.forEach(sn => { Lt.push(`@${sn.triggerName} has failed due to:\n`), sn.errors.forEach(on => Lt.push(`- ${on}\n`)); }), Ms.forEach(sn => sn.destroy()), this.reportError(Lt);
            } const Si = new Map, as = new Map; q.forEach(Lt => { const sn = Lt.element; E.has(sn) && (as.set(sn, sn), this._beforeAnimationBuild(Lt.player.namespaceId, Lt.instruction, Si)); }), F.forEach(Lt => { const sn = Lt.element; this._getPreviousPlayers(sn, !1, Lt.namespaceId, Lt.triggerName, null).forEach(ln => { ce(Si, sn, []).push(ln), ln.destroy(); }); }); const Di = xn.filter(Lt => ms(Lt, be, $e)), ls = new Map; Er(ls, this.driver, li, $e, ie.l3).forEach(Lt => { ms(Lt, be, $e) && Di.push(Lt); }); const Ir = new Map; hn.forEach((Lt, sn) => { Er(Ir, this.driver, new Set(Lt), be, ie.k1); }), Di.forEach(Lt => { const sn = ls.get(Lt), on = Ir.get(Lt); ls.set(Lt, Object.assign(Object.assign({}, sn), on)); }); const Ts = [], Ur = [], Gr = {}; q.forEach(Lt => { const { element: sn, player: on, instruction: ln } = Lt; if (E.has(sn)) {
                if (_t.has(sn))
                    return on.onDestroy(() => rn(sn, ln.toStyles)), on.disabled = !0, on.overrideTotalTime(ln.totalTime), void F.push(on);
                let Qn = Gr;
                if (as.size > 1) {
                    let Ci = sn;
                    const Is = [];
                    for (; Ci = Ci.parentNode;) {
                        const Xn = as.get(Ci);
                        if (Xn) {
                            Qn = Xn;
                            break;
                        }
                        Is.push(Ci);
                    }
                    Is.forEach(Xn => as.set(Xn, Qn));
                }
                const Rn = this._buildAnimation(on.namespaceId, ln, Si, $, Ir, ls);
                if (on.setRealPlayer(Rn), Qn === Gr)
                    Ts.push(on);
                else {
                    const Ci = this.playersByElement.get(Qn);
                    Ci && Ci.length && (on.parentPlayer = Te(Ci)), F.push(on);
                }
            }
            else
                Tn(sn, ln.fromStyles), on.onDestroy(() => rn(sn, ln.toStyles)), Ur.push(on), _t.has(sn) && F.push(on); }), Ur.forEach(Lt => { const sn = $.get(Lt.element); if (sn && sn.length) {
                const on = Te(sn);
                Lt.setRealPlayer(on);
            } }), F.forEach(Lt => { Lt.parentPlayer ? Lt.syncPlayerEvents(Lt.parentPlayer) : Lt.destroy(); }); for (let Lt = 0; Lt < xn.length; Lt++) {
                const sn = xn[Lt], on = sn[An];
                if (Ws(sn, We), on && on.hasAnimation)
                    continue;
                let ln = [];
                if (Z.size) {
                    let Rn = Z.get(sn);
                    Rn && Rn.length && ln.push(...Rn);
                    let Ci = this.driver.query(sn, Zt, !0);
                    for (let Is = 0; Is < Ci.length; Is++) {
                        let Xn = Z.get(Ci[Is]);
                        Xn && Xn.length && ln.push(...Xn);
                    }
                }
                const Qn = ln.filter(Rn => !Rn.destroyed);
                Qn.length ? Fo(this, sn, Qn) : this.processLeaveNode(sn);
            } return xn.length = 0, Ts.forEach(Lt => { this.players.push(Lt), Lt.onDone(() => { Lt.destroy(); const sn = this.players.indexOf(Lt); this.players.splice(sn, 1); }), Lt.play(); }), Ts; }
            elementContainsData(g, p) { let E = !1; const F = p[An]; return F && F.setForRemoval && (E = !0), this.playersByElement.has(p) && (E = !0), this.playersByQueriedElement.has(p) && (E = !0), this.statesByElement.has(p) && (E = !0), this._fetchNamespace(g).elementContainsData(p) || E; }
            afterFlush(g) { this._flushFns.push(g); }
            afterFlushAnimationsDone(g) { this._whenQuietFns.push(g); }
            _getPreviousPlayers(g, p, E, F, $) { let q = []; if (p) {
                const Z = this.playersByQueriedElement.get(g);
                Z && (q = Z);
            }
            else {
                const Z = this.playersByElement.get(g);
                if (Z) {
                    const be = !$ || $ == Pi;
                    Z.forEach($e => { $e.queued || !be && $e.triggerName != F || q.push($e); });
                }
            } return (E || F) && (q = q.filter(Z => !(E && E != Z.namespaceId || F && F != Z.triggerName))), q; }
            _beforeAnimationBuild(g, p, E) { const $ = p.element, q = p.isRemovalTransition ? void 0 : g, Z = p.isRemovalTransition ? void 0 : p.triggerName; for (const be of p.timelines) {
                const $e = be.element, _t = $e !== $, Pt = ce(E, $e, []);
                this._getPreviousPlayers($e, _t, q, Z, p.toState).forEach(hn => { const Yt = hn.getRealPlayer(); Yt.beforeDestroy && Yt.beforeDestroy(), hn.destroy(), Pt.push(hn); });
            } Tn($, p.fromStyles); }
            _buildAnimation(g, p, E, F, $, q) { const Z = p.triggerName, be = p.element, $e = [], _t = new Set, Pt = new Set, zt = p.timelines.map(Yt => { const nn = Yt.element; _t.add(nn); const xn = nn[An]; if (xn && xn.removedBeforeQueried)
                return new ie.ZN(Yt.duration, Yt.delay); const ai = nn !== be, li = function Lo(R) { const g = []; return Ns(R, g), g; }((E.get(nn) || hi).map(Si => Si.getRealPlayer())).filter(Si => !!Si.element && Si.element === nn), Fi = $.get(nn), mi = q.get(nn), Ms = Le(0, this._normalizer, 0, Yt.keyframes, Fi, mi), Ui = this._buildPlayer(Yt, Ms, li); if (Yt.subTimeline && F && Pt.add(nn), ai) {
                const Si = new ps(g, Z, nn);
                Si.setRealPlayer(Ui), $e.push(Si);
            } return Ui; }); $e.forEach(Yt => { ce(this.playersByQueriedElement, Yt.element, []).push(Yt), Yt.onDone(() => function is(R, g, p) { let E; if (R instanceof Map) {
                if (E = R.get(g), E) {
                    if (E.length) {
                        const F = E.indexOf(p);
                        E.splice(F, 1);
                    }
                    0 == E.length && R.delete(g);
                }
            }
            else if (E = R[g], E) {
                if (E.length) {
                    const F = E.indexOf(p);
                    E.splice(F, 1);
                }
                0 == E.length && delete R[g];
            } return E; }(this.playersByQueriedElement, Yt.element, Yt)); }), _t.forEach(Yt => bi(Yt, Xt)); const hn = Te(zt); return hn.onDestroy(() => { _t.forEach(Yt => Ws(Yt, Xt)), rn(be, p.toStyles); }), Pt.forEach(Yt => { ce(F, Yt, []).push(hn); }), hn; }
            _buildPlayer(g, p, E) { return p.length > 0 ? this.driver.animate(g.element, p, g.duration, g.delay, g.easing, E) : new ie.ZN(g.duration, g.delay); }
        } class ps {
            constructor(g, p, E) { this.namespaceId = g, this.triggerName = p, this.element = E, this._player = new ie.ZN, this._containsRealPlayer = !1, this._queuedCallbacks = {}, this.destroyed = !1, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0; }
            setRealPlayer(g) { this._containsRealPlayer || (this._player = g, Object.keys(this._queuedCallbacks).forEach(p => { this._queuedCallbacks[p].forEach(E => Ve(g, p, void 0, E)); }), this._queuedCallbacks = {}, this._containsRealPlayer = !0, this.overrideTotalTime(g.totalTime), this.queued = !1); }
            getRealPlayer() { return this._player; }
            overrideTotalTime(g) { this.totalTime = g; }
            syncPlayerEvents(g) { const p = this._player; p.triggerCallback && g.onStart(() => p.triggerCallback("start")), g.onDone(() => this.finish()), g.onDestroy(() => this.destroy()); }
            _queueEvent(g, p) { ce(this._queuedCallbacks, g, []).push(p); }
            onDone(g) { this.queued && this._queueEvent("done", g), this._player.onDone(g); }
            onStart(g) { this.queued && this._queueEvent("start", g), this._player.onStart(g); }
            onDestroy(g) { this.queued && this._queueEvent("destroy", g), this._player.onDestroy(g); }
            init() { this._player.init(); }
            hasStarted() { return !this.queued && this._player.hasStarted(); }
            play() { !this.queued && this._player.play(); }
            pause() { !this.queued && this._player.pause(); }
            restart() { !this.queued && this._player.restart(); }
            finish() { this._player.finish(); }
            destroy() { this.destroyed = !0, this._player.destroy(); }
            reset() { !this.queued && this._player.reset(); }
            setPosition(g) { this.queued || this._player.setPosition(g); }
            getPosition() { return this.queued ? 0 : this._player.getPosition(); }
            triggerCallback(g) { const p = this._player; p.triggerCallback && p.triggerCallback(g); }
        } function pi(R) { return R && 1 === R.nodeType; } function wr(R, g) { const p = R.style.display; return R.style.display = null != g ? g : "none", p; } function Er(R, g, p, E, F) { const $ = []; p.forEach(be => $.push(wr(be))); const q = []; E.forEach((be, $e) => { const _t = {}; be.forEach(Pt => { const zt = _t[Pt] = g.computeStyle($e, Pt, F); (!zt || 0 == zt.length) && ($e[An] = Ri, q.push($e)); }), R.set($e, _t); }); let Z = 0; return p.forEach(be => wr(be, $[Z++])), q; } function xi(R, g) { const p = new Map; if (R.forEach(Z => p.set(Z, [])), 0 == g.length)
            return p; const F = new Set(g), $ = new Map; function q(Z) { if (!Z)
            return 1; let be = $.get(Z); if (be)
            return be; const $e = Z.parentNode; return be = p.has($e) ? $e : F.has($e) ? 1 : q($e), $.set(Z, be), be; } return g.forEach(Z => { const be = q(Z); 1 !== be && p.get(be).push(Z); }), p; } function bi(R, g) { var p; null === (p = R.classList) || void 0 === p || p.add(g); } function Ws(R, g) { var p; null === (p = R.classList) || void 0 === p || p.remove(g); } function Fo(R, g, p) { Te(p).onDone(() => R.processLeaveNode(g)); } function Ns(R, g) { for (let p = 0; p < R.length; p++) {
            const E = R[p];
            E instanceof ie.ZE ? Ns(E.players, g) : g.push(E);
        } } function ms(R, g, p) { const E = p.get(R); if (!E)
            return !1; let F = g.get(R); return F ? E.forEach($ => F.add($)) : g.set(R, E), p.delete(R), !0; } class oi {
            constructor(g, p, E) { this.bodyNode = g, this._driver = p, this._normalizer = E, this._triggerCache = {}, this.onRemovalComplete = (F, $) => { }, this._transitionEngine = new di(g, p, E), this._timelineEngine = new Ai(g, p, E), this._transitionEngine.onRemovalComplete = (F, $) => this.onRemovalComplete(F, $); }
            registerTrigger(g, p, E, F, $) { const q = g + "-" + F; let Z = this._triggerCache[q]; if (!Z) {
                const be = [], $e = Jt(this._driver, $, be);
                if (be.length)
                    throw new Error(`The animation trigger "${F}" has failed to build due to the following errors:\n - ${be.join("\n - ")}`);
                Z = function Re(R, g, p) { return new ye(R, g, p); }(F, $e, this._normalizer), this._triggerCache[q] = Z;
            } this._transitionEngine.registerTrigger(p, F, Z); }
            register(g, p) { this._transitionEngine.register(g, p); }
            destroy(g, p) { this._transitionEngine.destroy(g, p); }
            onInsert(g, p, E, F) { this._transitionEngine.insertNode(g, p, E, F); }
            onRemove(g, p, E, F) { this._transitionEngine.removeNode(g, p, F || !1, E); }
            disableAnimations(g, p) { this._transitionEngine.markElementAsDisabled(g, p); }
            process(g, p, E, F) { if ("@" == E.charAt(0)) {
                const [$, q] = fe(E);
                this._timelineEngine.command($, p, q, F);
            }
            else
                this._transitionEngine.trigger(g, p, E, F); }
            listen(g, p, E, F, $) { if ("@" == E.charAt(0)) {
                const [q, Z] = fe(E);
                return this._timelineEngine.listen(q, p, Z, $);
            } return this._transitionEngine.listen(g, p, E, F, $); }
            flush(g = -1) { this._transitionEngine.flush(g); }
            get players() { return this._transitionEngine.players.concat(this._timelineEngine.players); }
            whenRenderingDone() { return this._transitionEngine.whenRenderingDone(); }
        } function ii(R, g) { let p = null, E = null; return Array.isArray(g) && g.length ? (p = or(g[0]), g.length > 1 && (E = or(g[g.length - 1]))) : g && (p = or(g)), p || E ? new rr(R, p, E) : null; } let rr = (() => { class R {
            constructor(p, E, F) { this._element = p, this._startStyles = E, this._endStyles = F, this._state = 0; let $ = R.initialStylesByElement.get(p); $ || R.initialStylesByElement.set(p, $ = {}), this._initialStyles = $; }
            start() { this._state < 1 && (this._startStyles && rn(this._element, this._startStyles, this._initialStyles), this._state = 1); }
            finish() { this.start(), this._state < 2 && (rn(this._element, this._initialStyles), this._endStyles && (rn(this._element, this._endStyles), this._endStyles = null), this._state = 1); }
            destroy() { this.finish(), this._state < 3 && (R.initialStylesByElement.delete(this._element), this._startStyles && (Tn(this._element, this._startStyles), this._endStyles = null), this._endStyles && (Tn(this._element, this._endStyles), this._endStyles = null), rn(this._element, this._initialStyles), this._state = 3); }
        } return R.initialStylesByElement = new WeakMap, R; })(); function or(R) { let g = null; const p = Object.keys(R); for (let E = 0; E < p.length; E++) {
            const F = p[E];
            Cs(F) && (g = g || {}, g[F] = R[F]);
        } return g; } function Cs(R) { return "display" === R || "position" === R; } const rs = "animation", ar = "animationend"; class lo {
            constructor(g, p, E, F, $, q, Z) { this._element = g, this._name = p, this._duration = E, this._delay = F, this._easing = $, this._fillMode = q, this._onDoneFn = Z, this._finished = !1, this._destroyed = !1, this._startTime = 0, this._position = 0, this._eventFn = be => this._handleCallback(be); }
            apply() { (function co(R, g) { const p = Hs(R, "").trim(); let E = 0; p.length && (E = function zi(R, g) { let p = 0; for (let E = 0; E < R.length; E++)
                R.charAt(E) === g && p++; return p; }(p, ",") + 1, g = `${p}, ${g}`), cr(R, "", g); })(this._element, `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`), Vs(this._element, this._eventFn, !1), this._startTime = Date.now(); }
            pause() { lr(this._element, this._name, "paused"); }
            resume() { lr(this._element, this._name, "running"); }
            setPosition(g) { const p = js(this._element, this._name); this._position = g * this._duration, cr(this._element, "Delay", `-${this._position}ms`, p); }
            getPosition() { return this._position; }
            _handleCallback(g) { const p = g._ngTestManualTimestamp || Date.now(), E = 1e3 * parseFloat(g.elapsedTime.toFixed(3)); g.animationName == this._name && Math.max(p - this._startTime, 0) >= this._delay && E >= this._duration && this.finish(); }
            finish() { this._finished || (this._finished = !0, this._onDoneFn(), Vs(this._element, this._eventFn, !0)); }
            destroy() { this._destroyed || (this._destroyed = !0, this.finish(), function os(R, g) { const E = Hs(R, "").split(","), F = Ni(E, g); F >= 0 && (E.splice(F, 1), cr(R, "", E.join(","))); }(this._element, this._name)); }
        } function lr(R, g, p) { cr(R, "PlayState", p, js(R, g)); } function js(R, g) { const p = Hs(R, ""); return p.indexOf(",") > 0 ? Ni(p.split(","), g) : Ni([p], g); } function Ni(R, g) { for (let p = 0; p < R.length; p++)
            if (R[p].indexOf(g) >= 0)
                return p; return -1; } function Vs(R, g, p) { p ? R.removeEventListener(ar, g) : R.addEventListener(ar, g); } function cr(R, g, p, E) { const F = rs + g; if (null != E) {
            const $ = R.style[F];
            if ($.length) {
                const q = $.split(",");
                q[E] = p, p = q.join(",");
            }
        } R.style[F] = p; } function Hs(R, g) { return R.style[rs + g] || ""; } class ur {
            constructor(g, p, E, F, $, q, Z, be) { this.element = g, this.keyframes = p, this.animationName = E, this._duration = F, this._delay = $, this._finalStyles = Z, this._specialStyles = be, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this.currentSnapshot = {}, this._state = 0, this.easing = q || "linear", this.totalTime = F + $, this._buildStyler(); }
            onStart(g) { this._onStartFns.push(g); }
            onDone(g) { this._onDoneFns.push(g); }
            onDestroy(g) { this._onDestroyFns.push(g); }
            destroy() { this.init(), !(this._state >= 4) && (this._state = 4, this._styler.destroy(), this._flushStartFns(), this._flushDoneFns(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(g => g()), this._onDestroyFns = []); }
            _flushDoneFns() { this._onDoneFns.forEach(g => g()), this._onDoneFns = []; }
            _flushStartFns() { this._onStartFns.forEach(g => g()), this._onStartFns = []; }
            finish() { this.init(), !(this._state >= 3) && (this._state = 3, this._styler.finish(), this._flushStartFns(), this._specialStyles && this._specialStyles.finish(), this._flushDoneFns()); }
            setPosition(g) { this._styler.setPosition(g); }
            getPosition() { return this._styler.getPosition(); }
            hasStarted() { return this._state >= 2; }
            init() { this._state >= 1 || (this._state = 1, this._styler.apply(), this._delay && this._styler.pause()); }
            play() { this.init(), this.hasStarted() || (this._flushStartFns(), this._state = 2, this._specialStyles && this._specialStyles.start()), this._styler.resume(); }
            pause() { this.init(), this._styler.pause(); }
            restart() { this.reset(), this.play(); }
            reset() { this._state = 0, this._styler.destroy(), this._buildStyler(), this._styler.apply(); }
            _buildStyler() { this._styler = new lo(this.element, this.animationName, this._duration, this._delay, this.easing, "forwards", () => this.finish()); }
            triggerCallback(g) { const p = "start" == g ? this._onStartFns : this._onDoneFns; p.forEach(E => E()), p.length = 0; }
            beforeDestroy() { this.init(); const g = {}; if (this.hasStarted()) {
                const p = this._state >= 3;
                Object.keys(this._finalStyles).forEach(E => { "offset" != E && (g[E] = p ? this._finalStyles[E] : Xe(this.element, E)); });
            } this.currentSnapshot = g; }
        } class Hr extends ie.ZN {
            constructor(g, p) { super(), this.element = g, this._startingStyles = {}, this.__initialized = !1, this._styles = at(p); }
            init() { this.__initialized || !this._startingStyles || (this.__initialized = !0, Object.keys(this._styles).forEach(g => { this._startingStyles[g] = this.element.style[g]; }), super.init()); }
            play() { !this._startingStyles || (this.init(), Object.keys(this._styles).forEach(g => this.element.style.setProperty(g, this._styles[g])), super.play()); }
            destroy() { !this._startingStyles || (Object.keys(this._startingStyles).forEach(g => { const p = this._startingStyles[g]; p ? this.element.style.setProperty(g, p) : this.element.style.removeProperty(g); }), this._startingStyles = null, super.destroy()); }
        } class ys {
            constructor() { this._count = 0; }
            validateStyleProperty(g) { return rt(g); }
            matchesElement(g, p) { return !1; }
            containsElement(g, p) { return tt(g, p); }
            query(g, p, E) { return he(g, p, E); }
            computeStyle(g, p, E) { return window.getComputedStyle(g)[p]; }
            buildKeyframeElement(g, p, E) { E = E.map(Z => at(Z)); let F = `@keyframes ${p} {\n`, $ = ""; E.forEach(Z => { $ = " "; const be = parseFloat(Z.offset); F += `${$}${100 * be}% {\n`, $ += " ", Object.keys(Z).forEach($e => { const _t = Z[$e]; switch ($e) {
                case "offset": return;
                case "easing": return void (_t && (F += `${$}animation-timing-function: ${_t};\n`));
                default: return void (F += `${$}${$e}: ${_t};\n`);
            } }), F += `${$}}\n`; }), F += "}\n"; const q = document.createElement("style"); return q.textContent = F, q; }
            animate(g, p, E, F, $, q = [], Z) { const be = q.filter(xn => xn instanceof ur), $e = {}; Un(E, F) && be.forEach(xn => { let ai = xn.currentSnapshot; Object.keys(ai).forEach(li => $e[li] = ai[li]); }); const _t = function ko(R) { let g = {}; return R && (Array.isArray(R) ? R : [R]).forEach(E => { Object.keys(E).forEach(F => { "offset" == F || "easing" == F || (g[F] = E[F]); }); }), g; }(p = ti(g, p, $e)); if (0 == E)
                return new Hr(g, _t); const Pt = "gen_css_kf_" + this._count++, zt = this.buildKeyframeElement(g, Pt, p); (function Es(R) { var g; const p = null === (g = R.getRootNode) || void 0 === g ? void 0 : g.call(R); return "undefined" != typeof ShadowRoot && p instanceof ShadowRoot ? p : document.head; })(g).appendChild(zt); const Yt = ii(g, p), nn = new ur(g, p, Pt, E, F, $, _t, Yt); return nn.onDestroy(() => function As(R) { R.parentNode.removeChild(R); }(zt)), nn; }
        } class fr {
            constructor(g, p, E, F) { this.element = g, this.keyframes = p, this.options = E, this._specialStyles = F, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this.time = 0, this.parentPlayer = null, this.currentSnapshot = {}, this._duration = E.duration, this._delay = E.delay || 0, this.time = this._duration + this._delay; }
            _onFinish() { this._finished || (this._finished = !0, this._onDoneFns.forEach(g => g()), this._onDoneFns = []); }
            init() { this._buildPlayer(), this._preparePlayerBeforeStart(); }
            _buildPlayer() { if (this._initialized)
                return; this._initialized = !0; const g = this.keyframes; this.domPlayer = this._triggerWebAnimation(this.element, g, this.options), this._finalKeyframe = g.length ? g[g.length - 1] : {}, this.domPlayer.addEventListener("finish", () => this._onFinish()); }
            _preparePlayerBeforeStart() { this._delay ? this._resetDomPlayerState() : this.domPlayer.pause(); }
            _triggerWebAnimation(g, p, E) { return g.animate(p, E); }
            onStart(g) { this._onStartFns.push(g); }
            onDone(g) { this._onDoneFns.push(g); }
            onDestroy(g) { this._onDestroyFns.push(g); }
            play() { this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(g => g()), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play(); }
            pause() { this.init(), this.domPlayer.pause(); }
            finish() { this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish(); }
            reset() { this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1; }
            _resetDomPlayerState() { this.domPlayer && this.domPlayer.cancel(); }
            restart() { this.reset(), this.play(); }
            hasStarted() { return this._started; }
            destroy() { this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(g => g()), this._onDestroyFns = []); }
            setPosition(g) { void 0 === this.domPlayer && this.init(), this.domPlayer.currentTime = g * this.time; }
            getPosition() { return this.domPlayer.currentTime / this.time; }
            get totalTime() { return this._delay + this._duration; }
            beforeDestroy() { const g = {}; if (this.hasStarted()) {
                const p = this._finalKeyframe;
                Object.keys(p).forEach(E => { "offset" != E && (g[E] = this._finished ? p[E] : Xe(this.element, E)); });
            } this.currentSnapshot = g; }
            triggerCallback(g) { const p = "start" == g ? this._onStartFns : this._onDoneFns; p.forEach(E => E()), p.length = 0; }
        } class uo {
            constructor() { this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(M().toString()), this._cssKeyframesDriver = new ys; }
            validateStyleProperty(g) { return rt(g); }
            matchesElement(g, p) { return !1; }
            containsElement(g, p) { return tt(g, p); }
            query(g, p, E) { return he(g, p, E); }
            computeStyle(g, p, E) { return window.getComputedStyle(g)[p]; }
            overrideWebAnimationsSupport(g) { this._isNativeImpl = g; }
            animate(g, p, E, F, $, q = [], Z) { if (!Z && !this._isNativeImpl)
                return this._cssKeyframesDriver.animate(g, p, E, F, $, q); const _t = { duration: E, delay: F, fill: 0 == F ? "both" : "forwards" }; $ && (_t.easing = $); const Pt = {}, zt = q.filter(Yt => Yt instanceof fr); Un(E, F) && zt.forEach(Yt => { let nn = Yt.currentSnapshot; Object.keys(nn).forEach(xn => Pt[xn] = nn[xn]); }); const hn = ii(g, p = ti(g, p = p.map(Yt => Bt(Yt, !1)), Pt)); return new fr(g, p, _t, hn); }
        } function M() { return _e() && Element.prototype.animate || {}; } var N = V(9808); let S = (() => { class R extends ie._j {
            constructor(p, E) { super(), this._nextAnimationId = 0, this._renderer = p.createRenderer(E.body, { id: "0", encapsulation: _.ifc.None, styles: [], data: { animation: [] } }); }
            build(p) { const E = this._nextAnimationId.toString(); this._nextAnimationId++; const F = Array.isArray(p) ? (0, ie.vP)(p) : p; return Be(this._renderer, null, E, "register", [F]), new H(E, this._renderer); }
        } return R.\u0275fac = function (p) { return new (p || R)(_.LFG(_.FYo), _.LFG(N.K0)); }, R.\u0275prov = _.Yz7({ token: R, factory: R.\u0275fac }), R; })(); class H extends ie.LC {
            constructor(g, p) { super(), this._id = g, this._renderer = p; }
            create(g, p) { return new oe(this._id, g, p || {}, this._renderer); }
        } class oe {
            constructor(g, p, E, F) { this.id = g, this.element = p, this._renderer = F, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", E); }
            _listen(g, p) { return this._renderer.listen(this.element, `@@${this.id}:${g}`, p); }
            _command(g, ...p) { return Be(this._renderer, this.element, this.id, g, p); }
            onDone(g) { this._listen("done", g); }
            onStart(g) { this._listen("start", g); }
            onDestroy(g) { this._listen("destroy", g); }
            init() { this._command("init"); }
            hasStarted() { return this._started; }
            play() { this._command("play"), this._started = !0; }
            pause() { this._command("pause"); }
            restart() { this._command("restart"); }
            finish() { this._command("finish"); }
            destroy() { this._command("destroy"); }
            reset() { this._command("reset"), this._started = !1; }
            setPosition(g) { this._command("setPosition", g); }
            getPosition() { var g, p; return null !== (p = null === (g = this._renderer.engine.players[+this.id]) || void 0 === g ? void 0 : g.getPosition()) && void 0 !== p ? p : 0; }
        } function Be(R, g, p, E, F) { return R.setProperty(g, `@@${p}:${E}`, F); } const Mt = "@.disabled"; let jn = (() => { class R {
            constructor(p, E, F) { this.delegate = p, this.engine = E, this._zone = F, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, this.promise = Promise.resolve(0), E.onRemovalComplete = ($, q) => { const Z = null == q ? void 0 : q.parentNode($); Z && q.removeChild(Z, $); }; }
            createRenderer(p, E) { const $ = this.delegate.createRenderer(p, E); if (!(p && E && E.data && E.data.animation)) {
                let _t = this._rendererCache.get($);
                return _t || (_t = new On("", $, this.engine), this._rendererCache.set($, _t)), _t;
            } const q = E.id, Z = E.id + "-" + this._currentId; this._currentId++, this.engine.register(Z, p); const be = _t => { Array.isArray(_t) ? _t.forEach(be) : this.engine.registerTrigger(q, Z, p, _t.name, _t); }; return E.data.animation.forEach(be), new kn(this, Z, $, this.engine); }
            begin() { this._cdRecurDepth++, this.delegate.begin && this.delegate.begin(); }
            _scheduleCountTask() { this.promise.then(() => { this._microtaskId++; }); }
            scheduleListenerCallback(p, E, F) { p >= 0 && p < this._microtaskId ? this._zone.run(() => E(F)) : (0 == this._animationCallbacksBuffer.length && Promise.resolve(null).then(() => { this._zone.run(() => { this._animationCallbacksBuffer.forEach($ => { const [q, Z] = $; q(Z); }), this._animationCallbacksBuffer = []; }); }), this._animationCallbacksBuffer.push([E, F])); }
            end() { this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(() => { this._scheduleCountTask(), this.engine.flush(this._microtaskId); }), this.delegate.end && this.delegate.end(); }
            whenRenderingDone() { return this.engine.whenRenderingDone(); }
        } return R.\u0275fac = function (p) { return new (p || R)(_.LFG(_.FYo), _.LFG(oi), _.LFG(_.R0b)); }, R.\u0275prov = _.Yz7({ token: R, factory: R.\u0275fac }), R; })(); class On {
            constructor(g, p, E) { this.namespaceId = g, this.delegate = p, this.engine = E, this.destroyNode = this.delegate.destroyNode ? F => p.destroyNode(F) : null; }
            get data() { return this.delegate.data; }
            destroy() { this.engine.destroy(this.namespaceId, this.delegate), this.delegate.destroy(); }
            createElement(g, p) { return this.delegate.createElement(g, p); }
            createComment(g) { return this.delegate.createComment(g); }
            createText(g) { return this.delegate.createText(g); }
            appendChild(g, p) { this.delegate.appendChild(g, p), this.engine.onInsert(this.namespaceId, p, g, !1); }
            insertBefore(g, p, E, F = !0) { this.delegate.insertBefore(g, p, E), this.engine.onInsert(this.namespaceId, p, g, F); }
            removeChild(g, p, E) { this.engine.onRemove(this.namespaceId, p, this.delegate, E); }
            selectRootElement(g, p) { return this.delegate.selectRootElement(g, p); }
            parentNode(g) { return this.delegate.parentNode(g); }
            nextSibling(g) { return this.delegate.nextSibling(g); }
            setAttribute(g, p, E, F) { this.delegate.setAttribute(g, p, E, F); }
            removeAttribute(g, p, E) { this.delegate.removeAttribute(g, p, E); }
            addClass(g, p) { this.delegate.addClass(g, p); }
            removeClass(g, p) { this.delegate.removeClass(g, p); }
            setStyle(g, p, E, F) { this.delegate.setStyle(g, p, E, F); }
            removeStyle(g, p, E) { this.delegate.removeStyle(g, p, E); }
            setProperty(g, p, E) { "@" == p.charAt(0) && p == Mt ? this.disableAnimations(g, !!E) : this.delegate.setProperty(g, p, E); }
            setValue(g, p) { this.delegate.setValue(g, p); }
            listen(g, p, E) { return this.delegate.listen(g, p, E); }
            disableAnimations(g, p) { this.engine.disableAnimations(g, p); }
        } class kn extends On {
            constructor(g, p, E, F) { super(p, E, F), this.factory = g, this.namespaceId = p; }
            setProperty(g, p, E) { "@" == p.charAt(0) ? "." == p.charAt(1) && p == Mt ? this.disableAnimations(g, E = void 0 === E || !!E) : this.engine.process(this.namespaceId, g, p.substr(1), E) : this.delegate.setProperty(g, p, E); }
            listen(g, p, E) { if ("@" == p.charAt(0)) {
                const F = function dn(R) { switch (R) {
                    case "body": return document.body;
                    case "document": return document;
                    case "window": return window;
                    default: return R;
                } }(g);
                let $ = p.substr(1), q = "";
                return "@" != $.charAt(0) && ([$, q] = function fi(R) { const g = R.indexOf("."); return [R.substring(0, g), R.substr(g + 1)]; }($)), this.engine.listen(this.namespaceId, F, $, q, Z => { this.factory.scheduleListenerCallback(Z._data || -1, E, Z); });
            } return this.delegate.listen(g, p, E); }
        } let Vn = (() => { class R extends oi {
            constructor(p, E, F) { super(p.body, E, F); }
            ngOnDestroy() { this.flush(); }
        } return R.\u0275fac = function (p) { return new (p || R)(_.LFG(N.K0), _.LFG(vt), _.LFG(Fn)); }, R.\u0275prov = _.Yz7({ token: R, factory: R.\u0275fac }), R; })(); const vs = new _.OlP("AnimationModuleType"), Ss = [{ provide: ie._j, useClass: S }, { provide: Fn, useFactory: function Ks() { return new bs; } }, { provide: oi, useClass: Vn }, { provide: _.FYo, useFactory: function Wi(R, g, p) { return new jn(R, g, p); }, deps: [j.se, oi, _.R0b] }], Us = [{ provide: vt, useFactory: function Ot() { return function Gn() { return "function" == typeof M(); }() ? new uo : new ys; } }, { provide: vs, useValue: "BrowserAnimations" }, ...Ss], Mr = [{ provide: vt, useClass: cn }, { provide: vs, useValue: "NoopAnimations" }, ...Ss]; let Tr = (() => { class R {
            static withConfig(p) { return { ngModule: R, providers: p.disableAnimations ? Mr : Us }; }
        } return R.\u0275fac = function (p) { return new (p || R); }, R.\u0275mod = _.oAB({ type: R }), R.\u0275inj = _.cJS({ providers: Us, imports: [j.b2] }), R; })(); }, 2313: (St, Pe, V) => { V.d(Pe, { b2: () => si, H7: () => un, q6: () => Hn, se: () => ut }); var _ = V(9808), j = V(5e3); class ie extends _.w_ {
            constructor() { super(...arguments), this.supportsDOMEvents = !0; }
        } class _e extends ie {
            static makeCurrent() { (0, _.HT)(new _e); }
            onAndCancel(se, Y, J) { return se.addEventListener(Y, J, !1), () => { se.removeEventListener(Y, J, !1); }; }
            dispatchEvent(se, Y) { se.dispatchEvent(Y); }
            remove(se) { se.parentNode && se.parentNode.removeChild(se); }
            createElement(se, Y) { return (Y = Y || this.getDefaultDocument()).createElement(se); }
            createHtmlDocument() { return document.implementation.createHTMLDocument("fakeTitle"); }
            getDefaultDocument() { return document; }
            isElementNode(se) { return se.nodeType === Node.ELEMENT_NODE; }
            isShadowRoot(se) { return se instanceof DocumentFragment; }
            getGlobalEventTarget(se, Y) { return "window" === Y ? window : "document" === Y ? se : "body" === Y ? se.body : null; }
            getBaseHref(se) { const Y = function Te() { return Ae = Ae || document.querySelector("base"), Ae ? Ae.getAttribute("href") : null; }(); return null == Y ? null : function Ve(we) { Le = Le || document.createElement("a"), Le.setAttribute("href", we); const se = Le.pathname; return "/" === se.charAt(0) ? se : `/${se}`; }(Y); }
            resetBaseElement() { Ae = null; }
            getUserAgent() { return window.navigator.userAgent; }
            getCookie(se) { return (0, _.Mx)(document.cookie, se); }
        } let Le, Ae = null; const Ee = new j.OlP("TRANSITION_ID"), ce = [{ provide: j.ip1, useFactory: function de(we, se, Y) { return () => { Y.get(j.CZH).donePromise.then(() => { const J = (0, _.q)(), Qe = se.querySelectorAll(`style[ng-transition="${we}"]`); for (let Nt = 0; Nt < Qe.length; Nt++)
                    J.remove(Qe[Nt]); }); }; }, deps: [Ee, _.K0, j.zs3], multi: !0 }]; class fe {
            static init() { (0, j.VLi)(new fe); }
            addToWindow(se) { j.dqk.getAngularTestability = (J, Qe = !0) => { const Nt = se.findTestabilityInTree(J, Qe); if (null == Nt)
                throw new Error("Could not find testability for element."); return Nt; }, j.dqk.getAllAngularTestabilities = () => se.getAllTestabilities(), j.dqk.getAllAngularRootElements = () => se.getAllRootElements(), j.dqk.frameworkStabilizers || (j.dqk.frameworkStabilizers = []), j.dqk.frameworkStabilizers.push(J => { const Qe = j.dqk.getAllAngularTestabilities(); let Nt = Qe.length, Gt = !1; const pn = function (Fn) { Gt = Gt || Fn, Nt--, 0 == Nt && J(Gt); }; Qe.forEach(function (Fn) { Fn.whenStable(pn); }); }); }
            findTestabilityInTree(se, Y, J) { if (null == Y)
                return null; const Qe = se.getTestability(Y); return null != Qe ? Qe : J ? (0, _.q)().isShadowRoot(Y) ? this.findTestabilityInTree(se, Y.host, !0) : this.findTestabilityInTree(se, Y.parentElement, !0) : null; }
        } let ke = (() => { class we {
            build() { return new XMLHttpRequest; }
        } return we.\u0275fac = function (Y) { return new (Y || we); }, we.\u0275prov = j.Yz7({ token: we, factory: we.\u0275fac }), we; })(); const Ne = new j.OlP("EventManagerPlugins"); let qe = (() => { class we {
            constructor(Y, J) { this._zone = J, this._eventNameToPlugin = new Map, Y.forEach(Qe => Qe.manager = this), this._plugins = Y.slice().reverse(); }
            addEventListener(Y, J, Qe) { return this._findPluginFor(J).addEventListener(Y, J, Qe); }
            addGlobalEventListener(Y, J, Qe) { return this._findPluginFor(J).addGlobalEventListener(Y, J, Qe); }
            getZone() { return this._zone; }
            _findPluginFor(Y) { const J = this._eventNameToPlugin.get(Y); if (J)
                return J; const Qe = this._plugins; for (let Nt = 0; Nt < Qe.length; Nt++) {
                const Gt = Qe[Nt];
                if (Gt.supports(Y))
                    return this._eventNameToPlugin.set(Y, Gt), Gt;
            } throw new Error(`No event manager plugin found for event ${Y}`); }
        } return we.\u0275fac = function (Y) { return new (Y || we)(j.LFG(Ne), j.LFG(j.R0b)); }, we.\u0275prov = j.Yz7({ token: we, factory: we.\u0275fac }), we; })(); class Je {
            constructor(se) { this._doc = se; }
            addGlobalEventListener(se, Y, J) { const Qe = (0, _.q)().getGlobalEventTarget(this._doc, se); if (!Qe)
                throw new Error(`Unsupported event target ${Qe} for event ${Y}`); return this.addEventListener(Qe, Y, J); }
        } let Ke = (() => { class we {
            constructor() { this._stylesSet = new Set; }
            addStyles(Y) { const J = new Set; Y.forEach(Qe => { this._stylesSet.has(Qe) || (this._stylesSet.add(Qe), J.add(Qe)); }), this.onStylesAdded(J); }
            onStylesAdded(Y) { }
            getAllStyles() { return Array.from(this._stylesSet); }
        } return we.\u0275fac = function (Y) { return new (Y || we); }, we.\u0275prov = j.Yz7({ token: we, factory: we.\u0275fac }), we; })(), Ct = (() => { class we extends Ke {
            constructor(Y) { super(), this._doc = Y, this._hostNodes = new Map, this._hostNodes.set(Y.head, []); }
            _addStylesToHost(Y, J, Qe) { Y.forEach(Nt => { const Gt = this._doc.createElement("style"); Gt.textContent = Nt, Qe.push(J.appendChild(Gt)); }); }
            addHost(Y) { const J = []; this._addStylesToHost(this._stylesSet, Y, J), this._hostNodes.set(Y, J); }
            removeHost(Y) { const J = this._hostNodes.get(Y); J && J.forEach(rt), this._hostNodes.delete(Y); }
            onStylesAdded(Y) { this._hostNodes.forEach((J, Qe) => { this._addStylesToHost(Y, Qe, J); }); }
            ngOnDestroy() { this._hostNodes.forEach(Y => Y.forEach(rt)); }
        } return we.\u0275fac = function (Y) { return new (Y || we)(j.LFG(_.K0)); }, we.\u0275prov = j.Yz7({ token: we, factory: we.\u0275fac }), we; })(); function rt(we) { (0, _.q)().remove(we); } const yt = { svg: "http://www.w3.org/2000/svg", xhtml: "http://www.w3.org/1999/xhtml", xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" }, tt = /%COMP%/g; function Se(we, se, Y) { for (let J = 0; J < se.length; J++) {
            let Qe = se[J];
            Array.isArray(Qe) ? Se(we, Qe, Y) : (Qe = Qe.replace(tt, we), Y.push(Qe));
        } return Y; } function Oe(we) { return se => { if ("__ngUnwrap__" === se)
            return we; !1 === we(se) && (se.preventDefault(), se.returnValue = !1); }; } let ut = (() => { class we {
            constructor(Y, J, Qe) { this.eventManager = Y, this.sharedStylesHost = J, this.appId = Qe, this.rendererByCompId = new Map, this.defaultRenderer = new Me(Y); }
            createRenderer(Y, J) { if (!Y || !J)
                return this.defaultRenderer; switch (J.encapsulation) {
                case j.ifc.Emulated: {
                    let Qe = this.rendererByCompId.get(J.id);
                    return Qe || (Qe = new Cn(this.eventManager, this.sharedStylesHost, J, this.appId), this.rendererByCompId.set(J.id, Qe)), Qe.applyToHost(Y), Qe;
                }
                case 1:
                case j.ifc.ShadowDom: return new It(this.eventManager, this.sharedStylesHost, Y, J);
                default:
                    if (!this.rendererByCompId.has(J.id)) {
                        const Qe = Se(J.id, J.styles, []);
                        this.sharedStylesHost.addStyles(Qe), this.rendererByCompId.set(J.id, this.defaultRenderer);
                    }
                    return this.defaultRenderer;
            } }
            begin() { }
            end() { }
        } return we.\u0275fac = function (Y) { return new (Y || we)(j.LFG(qe), j.LFG(Ct), j.LFG(j.AFp)); }, we.\u0275prov = j.Yz7({ token: we, factory: we.\u0275fac }), we; })(); class Me {
            constructor(se) { this.eventManager = se, this.data = Object.create(null), this.destroyNode = null; }
            destroy() { }
            createElement(se, Y) { return Y ? document.createElementNS(yt[Y] || Y, se) : document.createElement(se); }
            createComment(se) { return document.createComment(se); }
            createText(se) { return document.createTextNode(se); }
            appendChild(se, Y) { se.appendChild(Y); }
            insertBefore(se, Y, J) { se && se.insertBefore(Y, J); }
            removeChild(se, Y) { se && se.removeChild(Y); }
            selectRootElement(se, Y) { let J = "string" == typeof se ? document.querySelector(se) : se; if (!J)
                throw new Error(`The selector "${se}" did not match any elements`); return Y || (J.textContent = ""), J; }
            parentNode(se) { return se.parentNode; }
            nextSibling(se) { return se.nextSibling; }
            setAttribute(se, Y, J, Qe) { if (Qe) {
                Y = Qe + ":" + Y;
                const Nt = yt[Qe];
                Nt ? se.setAttributeNS(Nt, Y, J) : se.setAttribute(Y, J);
            }
            else
                se.setAttribute(Y, J); }
            removeAttribute(se, Y, J) { if (J) {
                const Qe = yt[J];
                Qe ? se.removeAttributeNS(Qe, Y) : se.removeAttribute(`${J}:${Y}`);
            }
            else
                se.removeAttribute(Y); }
            addClass(se, Y) { se.classList.add(Y); }
            removeClass(se, Y) { se.classList.remove(Y); }
            setStyle(se, Y, J, Qe) { Qe & (j.JOm.DashCase | j.JOm.Important) ? se.style.setProperty(Y, J, Qe & j.JOm.Important ? "important" : "") : se.style[Y] = J; }
            removeStyle(se, Y, J) { J & j.JOm.DashCase ? se.style.removeProperty(Y) : se.style[Y] = ""; }
            setProperty(se, Y, J) { se[Y] = J; }
            setValue(se, Y) { se.nodeValue = Y; }
            listen(se, Y, J) { return "string" == typeof se ? this.eventManager.addGlobalEventListener(se, Y, Oe(J)) : this.eventManager.addEventListener(se, Y, Oe(J)); }
        } class Cn extends Me {
            constructor(se, Y, J, Qe) { super(se), this.component = J; const Nt = Se(Qe + "-" + J.id, J.styles, []); Y.addStyles(Nt), this.contentAttr = function ht(we) { return "_ngcontent-%COMP%".replace(tt, we); }(Qe + "-" + J.id), this.hostAttr = function pe(we) { return "_nghost-%COMP%".replace(tt, we); }(Qe + "-" + J.id); }
            applyToHost(se) { super.setAttribute(se, this.hostAttr, ""); }
            createElement(se, Y) { const J = super.createElement(se, Y); return super.setAttribute(J, this.contentAttr, ""), J; }
        } class It extends Me {
            constructor(se, Y, J, Qe) { super(se), this.sharedStylesHost = Y, this.hostEl = J, this.shadowRoot = J.attachShadow({ mode: "open" }), this.sharedStylesHost.addHost(this.shadowRoot); const Nt = Se(Qe.id, Qe.styles, []); for (let Gt = 0; Gt < Nt.length; Gt++) {
                const pn = document.createElement("style");
                pn.textContent = Nt[Gt], this.shadowRoot.appendChild(pn);
            } }
            nodeOrShadowRoot(se) { return se === this.hostEl ? this.shadowRoot : se; }
            destroy() { this.sharedStylesHost.removeHost(this.shadowRoot); }
            appendChild(se, Y) { return super.appendChild(this.nodeOrShadowRoot(se), Y); }
            insertBefore(se, Y, J) { return super.insertBefore(this.nodeOrShadowRoot(se), Y, J); }
            removeChild(se, Y) { return super.removeChild(this.nodeOrShadowRoot(se), Y); }
            parentNode(se) { return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(se))); }
        } let ve = (() => { class we extends Je {
            constructor(Y) { super(Y); }
            supports(Y) { return !0; }
            addEventListener(Y, J, Qe) { return Y.addEventListener(J, Qe, !1), () => this.removeEventListener(Y, J, Qe); }
            removeEventListener(Y, J, Qe) { return Y.removeEventListener(J, Qe); }
        } return we.\u0275fac = function (Y) { return new (Y || we)(j.LFG(_.K0)); }, we.\u0275prov = j.Yz7({ token: we, factory: we.\u0275fac }), we; })(); const lt = ["alt", "control", "meta", "shift"], mt = { "\b": "Backspace", "\t": "Tab", "\x7f": "Delete", "\x1b": "Escape", Del: "Delete", Esc: "Escape", Left: "ArrowLeft", Right: "ArrowRight", Up: "ArrowUp", Down: "ArrowDown", Menu: "ContextMenu", Scroll: "ScrollLock", Win: "OS" }, Bt = { A: "1", B: "2", C: "3", D: "4", E: "5", F: "6", G: "7", H: "8", I: "9", J: "*", K: "+", M: "-", N: ".", O: "/", "`": "0", "\x90": "NumLock" }, yn = { alt: we => we.altKey, control: we => we.ctrlKey, meta: we => we.metaKey, shift: we => we.shiftKey }; let jt = (() => { class we extends Je {
            constructor(Y) { super(Y); }
            supports(Y) { return null != we.parseEventName(Y); }
            addEventListener(Y, J, Qe) { const Nt = we.parseEventName(J), Gt = we.eventCallback(Nt.fullKey, Qe, this.manager.getZone()); return this.manager.getZone().runOutsideAngular(() => (0, _.q)().onAndCancel(Y, Nt.domEventName, Gt)); }
            static parseEventName(Y) { const J = Y.toLowerCase().split("."), Qe = J.shift(); if (0 === J.length || "keydown" !== Qe && "keyup" !== Qe)
                return null; const Nt = we._normalizeKey(J.pop()); let Gt = ""; if (lt.forEach(Fn => { const Li = J.indexOf(Fn); Li > -1 && (J.splice(Li, 1), Gt += Fn + "."); }), Gt += Nt, 0 != J.length || 0 === Nt.length)
                return null; const pn = {}; return pn.domEventName = Qe, pn.fullKey = Gt, pn; }
            static getEventFullKey(Y) { let J = "", Qe = function rn(we) { let se = we.key; if (null == se) {
                if (se = we.keyIdentifier, null == se)
                    return "Unidentified";
                se.startsWith("U+") && (se = String.fromCharCode(parseInt(se.substring(2), 16)), 3 === we.location && Bt.hasOwnProperty(se) && (se = Bt[se]));
            } return mt[se] || se; }(Y); return Qe = Qe.toLowerCase(), " " === Qe ? Qe = "space" : "." === Qe && (Qe = "dot"), lt.forEach(Nt => { Nt != Qe && yn[Nt](Y) && (J += Nt + "."); }), J += Qe, J; }
            static eventCallback(Y, J, Qe) { return Nt => { we.getEventFullKey(Nt) === Y && Qe.runGuarded(() => J(Nt)); }; }
            static _normalizeKey(Y) { return "esc" === Y ? "escape" : Y; }
        } return we.\u0275fac = function (Y) { return new (Y || we)(j.LFG(_.K0)); }, we.\u0275prov = j.Yz7({ token: we, factory: we.\u0275fac }), we; })(); const Hn = (0, j.eFA)(j._c5, "browser", [{ provide: j.Lbi, useValue: _.bD }, { provide: j.g9A, useValue: function Tn() { _e.makeCurrent(), fe.init(); }, multi: !0 }, { provide: _.K0, useFactory: function En() { return (0, j.RDi)(document), document; }, deps: [] }]), Yn = [{ provide: j.zSh, useValue: "root" }, { provide: j.qLn, useFactory: function Dn() { return new j.qLn; }, deps: [] }, { provide: Ne, useClass: ve, multi: !0, deps: [_.K0, j.R0b, j.Lbi] }, { provide: Ne, useClass: jt, multi: !0, deps: [_.K0] }, { provide: ut, useClass: ut, deps: [qe, Ct, j.AFp] }, { provide: j.FYo, useExisting: ut }, { provide: Ke, useExisting: Ct }, { provide: Ct, useClass: Ct, deps: [_.K0] }, { provide: j.dDg, useClass: j.dDg, deps: [j.R0b] }, { provide: qe, useClass: qe, deps: [Ne, j.R0b] }, { provide: _.JF, useClass: ke, deps: [] }]; let si = (() => { class we {
            constructor(Y) { if (Y)
                throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."); }
            static withServerTransition(Y) { return { ngModule: we, providers: [{ provide: j.AFp, useValue: Y.appId }, { provide: Ee, useExisting: j.AFp }, ce] }; }
        } return we.\u0275fac = function (Y) { return new (Y || we)(j.LFG(we, 12)); }, we.\u0275mod = j.oAB({ type: we }), we.\u0275inj = j.cJS({ providers: Yn, imports: [_.ez, j.hGG] }), we; })(); "undefined" != typeof window && window; let un = (() => { class we {
        } return we.\u0275fac = function (Y) { return new (Y || we); }, we.\u0275prov = j.Yz7({ token: we, factory: function (Y) { let J = null; return J = Y ? new (Y || we) : j.LFG(ri), J; }, providedIn: "root" }), we; })(), ri = (() => { class we extends un {
            constructor(Y) { super(), this._doc = Y; }
            sanitize(Y, J) { if (null == J)
                return null; switch (Y) {
                case j.q3G.NONE: return J;
                case j.q3G.HTML: return (0, j.qzn)(J, "HTML") ? (0, j.z3N)(J) : (0, j.EiD)(this._doc, String(J)).toString();
                case j.q3G.STYLE: return (0, j.qzn)(J, "Style") ? (0, j.z3N)(J) : J;
                case j.q3G.SCRIPT:
                    if ((0, j.qzn)(J, "Script"))
                        return (0, j.z3N)(J);
                    throw new Error("unsafe value used in a script context");
                case j.q3G.URL: return (0, j.yhl)(J), (0, j.qzn)(J, "URL") ? (0, j.z3N)(J) : (0, j.mCW)(String(J));
                case j.q3G.RESOURCE_URL:
                    if ((0, j.qzn)(J, "ResourceURL"))
                        return (0, j.z3N)(J);
                    throw new Error("unsafe value used in a resource URL context (see https://g.co/ng/security#xss)");
                default: throw new Error(`Unexpected SecurityContext ${Y} (see https://g.co/ng/security#xss)`);
            } }
            bypassSecurityTrustHtml(Y) { return (0, j.JVY)(Y); }
            bypassSecurityTrustStyle(Y) { return (0, j.L6k)(Y); }
            bypassSecurityTrustScript(Y) { return (0, j.eBb)(Y); }
            bypassSecurityTrustUrl(Y) { return (0, j.LAX)(Y); }
            bypassSecurityTrustResourceUrl(Y) { return (0, j.pB0)(Y); }
        } return we.\u0275fac = function (Y) { return new (Y || we)(j.LFG(_.K0)); }, we.\u0275prov = j.Yz7({ token: we, factory: function (Y) { let J = null; return J = Y ? new Y : function $t(we) { return new ri(we.get(_.K0)); }(j.LFG(j.zs3)), J; }, providedIn: "root" }), we; })(); }, 5020: (St, Pe, V) => { V.d(Pe, { F0: () => yi, rH: () => ji, yS: () => $r, Bz: () => wa, lC: () => dr }); var _ = V(5e3), j = V(8306), ie = V(4742), _e = V(2076), Ae = V(4671), Te = V(3268), Le = V(3269), Ve = V(1810), Ee = V(5403), de = V(9672); function ke(C, x, v) { C ? (0, de.f)(v, C, x) : x(); } const qe = (0, V(3888).d)(C => function () { C(this), this.name = "EmptyError", this.message = "no elements in sequence"; }); var Je = V(8421); function Ke(C) { return new j.y(x => { (0, Je.Xf)(C()).subscribe(x); }); } var Ct = V(727), rt = V(4482); function yt() { return (0, rt.e)((C, x) => { let v = null; C._refCount++; const A = new Ee.Q(x, void 0, void 0, void 0, () => { if (!C || C._refCount <= 0 || 0 < --C._refCount)
            return void (v = null); const I = C._connection, B = v; v = null, I && (!B || I === B) && I.unsubscribe(), x.unsubscribe(); }); C.subscribe(A), A.closed || (v = C.connect()); }); } class tt extends j.y {
            constructor(x, v) { super(), this.source = x, this.subjectFactory = v, this._subject = null, this._refCount = 0, this._connection = null, (0, rt.A)(x) && (this.lift = x.lift); }
            _subscribe(x) { return this.getSubject().subscribe(x); }
            getSubject() { const x = this._subject; return (!x || x.isStopped) && (this._subject = this.subjectFactory()), this._subject; }
            _teardown() { this._refCount = 0; const { _connection: x } = this; this._subject = this._connection = null, null == x || x.unsubscribe(); }
            connect() { let x = this._connection; if (!x) {
                x = this._connection = new Ct.w0;
                const v = this.getSubject();
                x.add(this.source.subscribe(new Ee.Q(v, void 0, () => { this._teardown(), v.complete(); }, A => { this._teardown(), v.error(A); }, () => this._teardown()))), x.closed && (this._connection = null, x = Ct.w0.EMPTY);
            } return x; }
            refCount() { return yt()(this); }
        } var he = V(9646), at = V(1135), cn = V(7272), vt = V(515), ht = V(7579); function pe(C, x, v, A, I) { return (B, K) => { let te = v, Ue = x, kt = 0; B.subscribe(new Ee.Q(K, mn => { const Kt = kt++; Ue = te ? C(Ue, mn, Kt) : (te = !0, mn), A && K.next(Ue); }, I && (() => { te && K.next(Ue), K.complete(); }))); }; } function Se(C, x) { return (0, rt.e)(pe(C, x, arguments.length >= 2, !0)); } var Oe = V(9300); function We(C) { return C <= 0 ? () => vt.E : (0, rt.e)((x, v) => { let A = []; x.subscribe(new Ee.Q(v, I => { A.push(I), C < A.length && A.shift(); }, () => { for (const I of A)
            v.next(I); v.complete(); }, void 0, () => { A = null; })); }); } function ut(C = Me) { return (0, rt.e)((x, v) => { let A = !1; x.subscribe(new Ee.Q(v, I => { A = !0, v.next(I); }, () => A ? v.complete() : v.error(C()))); }); } function Me() { return new qe; } function Xt(C) { return (0, rt.e)((x, v) => { let A = !1; x.subscribe(new Ee.Q(v, I => { A = !0, v.next(I); }, () => { A || v.next(C), v.complete(); })); }); } var Cn = V(5698); function It(C, x) { const v = arguments.length >= 2; return A => A.pipe(C ? (0, Oe.h)((I, B) => C(I, B, A)) : Ae.y, (0, Cn.q)(1), v ? Xt(x) : ut(() => new qe)); } var ve = V(4004), lt = V(3900), je = V(8675), mt = V(262), Bt = V(4351), yn = V(5577), jt = V(8505), rn = V(8746), Tn = V(8189), Dn = V(9808); class En {
            constructor(x, v) { this.id = x, this.url = v; }
        } class Wn extends En {
            constructor(x, v, A = "imperative", I = null) { super(x, v), this.navigationTrigger = A, this.restoredState = I; }
            toString() { return `NavigationStart(id: ${this.id}, url: '${this.url}')`; }
        } class Hn extends En {
            constructor(x, v, A) { super(x, v), this.urlAfterRedirects = A; }
            toString() { return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`; }
        } class Yn extends En {
            constructor(x, v, A) { super(x, v), this.reason = A; }
            toString() { return `NavigationCancel(id: ${this.id}, url: '${this.url}')`; }
        } class si extends En {
            constructor(x, v, A) { super(x, v), this.error = A; }
            toString() { return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`; }
        } class Ji extends En {
            constructor(x, v, A, I) { super(x, v), this.urlAfterRedirects = A, this.state = I; }
            toString() { return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
        } class qt extends En {
            constructor(x, v, A, I) { super(x, v), this.urlAfterRedirects = A, this.state = I; }
            toString() { return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
        } class ei extends En {
            constructor(x, v, A, I, B) { super(x, v), this.urlAfterRedirects = A, this.state = I, this.shouldActivate = B; }
            toString() { return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`; }
        } class Un extends En {
            constructor(x, v, A, I) { super(x, v), this.urlAfterRedirects = A, this.state = I; }
            toString() { return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
        } class ti extends En {
            constructor(x, v, A, I) { super(x, v), this.urlAfterRedirects = A, this.state = I; }
            toString() { return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`; }
        } class zn {
            constructor(x) { this.route = x; }
            toString() { return `RouteConfigLoadStart(path: ${this.route.path})`; }
        } class Xe {
            constructor(x) { this.route = x; }
            toString() { return `RouteConfigLoadEnd(path: ${this.route.path})`; }
        } class re {
            constructor(x) { this.snapshot = x; }
            toString() { return `ChildActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
        } class ne {
            constructor(x) { this.snapshot = x; }
            toString() { return `ChildActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
        } class ot {
            constructor(x) { this.snapshot = x; }
            toString() { return `ActivationStart(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
        } class ze {
            constructor(x) { this.snapshot = x; }
            toString() { return `ActivationEnd(path: '${this.snapshot.routeConfig && this.snapshot.routeConfig.path || ""}')`; }
        } class xt {
            constructor(x, v, A) { this.routerEvent = x, this.position = v, this.anchor = A; }
            toString() { return `Scroll(anchor: '${this.anchor}', position: '${this.position ? `${this.position[0]}, ${this.position[1]}` : null}')`; }
        } const Ge = "primary"; class wt {
            constructor(x) { this.params = x || {}; }
            has(x) { return Object.prototype.hasOwnProperty.call(this.params, x); }
            get(x) { if (this.has(x)) {
                const v = this.params[x];
                return Array.isArray(v) ? v[0] : v;
            } return null; }
            getAll(x) { if (this.has(x)) {
                const v = this.params[x];
                return Array.isArray(v) ? v : [v];
            } return []; }
            get keys() { return Object.keys(this.params); }
        } function en(C) { return new wt(C); } const Sn = "ngNavigationCancelingError"; function Jt(C) { const x = Error("NavigationCancelingError: " + C); return x[Sn] = !0, x; } function Fe(C, x, v) { const A = v.path.split("/"); if (A.length > C.length || "full" === v.pathMatch && (x.hasChildren() || A.length < C.length))
            return null; const I = {}; for (let B = 0; B < A.length; B++) {
            const K = A[B], te = C[B];
            if (K.startsWith(":"))
                I[K.substring(1)] = te;
            else if (K !== te.path)
                return null;
        } return { consumed: C.slice(0, A.length), posParams: I }; } function G(C, x) { const v = C ? Object.keys(C) : void 0, A = x ? Object.keys(x) : void 0; if (!v || !A || v.length != A.length)
            return !1; let I; for (let B = 0; B < v.length; B++)
            if (I = v[B], !le(C[I], x[I]))
                return !1; return !0; } function le(C, x) { if (Array.isArray(C) && Array.isArray(x)) {
            if (C.length !== x.length)
                return !1;
            const v = [...C].sort(), A = [...x].sort();
            return v.every((I, B) => A[B] === I);
        } return C === x; } function ge(C) { return Array.prototype.concat.apply([], C); } function gt(C) { return C.length > 0 ? C[C.length - 1] : null; } function X(C, x) { for (const v in C)
            C.hasOwnProperty(v) && x(C[v], v); } function et(C) { return (0, _.CqO)(C) ? C : (0, _.QGY)(C) ? (0, _e.D)(Promise.resolve(C)) : (0, he.of)(C); } const He = { exact: function $t(C, x, v) { if (!Gt(C.segments, x.segments) || !se(C.segments, x.segments, v) || C.numberOfChildren !== x.numberOfChildren)
                return !1; for (const A in x.children)
                if (!C.children[A] || !$t(C.children[A], x.children[A], v))
                    return !1; return !0; }, subset: _i }, Ye = { exact: function un(C, x) { return G(C, x); }, subset: function ri(C, x) { return Object.keys(x).length <= Object.keys(C).length && Object.keys(x).every(v => le(C[v], x[v])); }, ignored: () => !0 }; function Et(C, x, v) { return He[v.paths](C.root, x.root, v.matrixParams) && Ye[v.queryParams](C.queryParams, x.queryParams) && !("exact" === v.fragment && C.fragment !== x.fragment); } function _i(C, x, v) { return we(C, x, x.segments, v); } function we(C, x, v, A) { if (C.segments.length > v.length) {
            const I = C.segments.slice(0, v.length);
            return !(!Gt(I, v) || x.hasChildren() || !se(I, v, A));
        } if (C.segments.length === v.length) {
            if (!Gt(C.segments, v) || !se(C.segments, v, A))
                return !1;
            for (const I in x.children)
                if (!C.children[I] || !_i(C.children[I], x.children[I], A))
                    return !1;
            return !0;
        } {
            const I = v.slice(0, C.segments.length), B = v.slice(C.segments.length);
            return !!(Gt(C.segments, I) && se(C.segments, I, A) && C.children[Ge]) && we(C.children[Ge], x, B, A);
        } } function se(C, x, v) { return x.every((A, I) => Ye[v](C[I].parameters, A.parameters)); } class Y {
            constructor(x, v, A) { this.root = x, this.queryParams = v, this.fragment = A; }
            get queryParamMap() { return this._queryParamMap || (this._queryParamMap = en(this.queryParams)), this._queryParamMap; }
            toString() { return bs.serialize(this); }
        } class J {
            constructor(x, v) { this.segments = x, this.children = v, this.parent = null, X(v, (A, I) => A.parent = this); }
            hasChildren() { return this.numberOfChildren > 0; }
            get numberOfChildren() { return Object.keys(this.children).length; }
            toString() { return Oi(this); }
        } class Qe {
            constructor(x, v) { this.path = x, this.parameters = v; }
            get parameterMap() { return this._parameterMap || (this._parameterMap = en(this.parameters)), this._parameterMap; }
            toString() { return ye(this); }
        } function Gt(C, x) { return C.length === x.length && C.every((v, A) => v.path === x[A].path); } class Fn {
        } class Li {
            parse(x) { const v = new Ds(x); return new Y(v.parseRootSegment(), v.parseQueryParams(), v.parseFragment()); }
            serialize(x) { const v = `/${qn(x.root, !0)}`, A = function Wt(C) { const x = Object.keys(C).map(v => { const A = C[v]; return Array.isArray(A) ? A.map(I => `${ui(v)}=${ui(I)}`).join("&") : `${ui(v)}=${ui(A)}`; }).filter(v => !!v); return x.length ? `?${x.join("&")}` : ""; }(x.queryParams); return `${v}${A}${"string" == typeof x.fragment ? `#${function Dt(C) { return encodeURI(C); }(x.fragment)}` : ""}`; }
        } const bs = new Li; function Oi(C) { return C.segments.map(x => ye(x)).join("/"); } function qn(C, x) { if (!C.hasChildren())
            return Oi(C); if (x) {
            const v = C.children[Ge] ? qn(C.children[Ge], !1) : "", A = [];
            return X(C.children, (I, B) => { B !== Ge && A.push(`${B}:${qn(I, !1)}`); }), A.length > 0 ? `${v}(${A.join("//")})` : v;
        } {
            const v = function pn(C, x) { let v = []; return X(C.children, (A, I) => { I === Ge && (v = v.concat(x(A, I))); }), X(C.children, (A, I) => { I !== Ge && (v = v.concat(x(A, I))); }), v; }(C, (A, I) => I === Ge ? [qn(C.children[Ge], !1)] : [`${I}:${qn(A, !1)}`]);
            return 1 === Object.keys(C.children).length && null != C.children[Ge] ? `${Oi(C)}/${v[0]}` : `${Oi(C)}/(${v.join("//")})`;
        } } function es(C) { return encodeURIComponent(C).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ","); } function ui(C) { return es(C).replace(/%3B/gi, ";"); } function vn(C) { return es(C).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&"); } function z(C) { return decodeURIComponent(C); } function Re(C) { return z(C.replace(/\+/g, "%20")); } function ye(C) { return `${vn(C.path)}${function nt(C) { return Object.keys(C).map(x => `;${vn(x)}=${vn(C[x])}`).join(""); }(C.parameters)}`; } const Ht = /^[^\/()?;=#]+/; function Ai(C) { const x = C.match(Ht); return x ? x[0] : ""; } const gs = /^[^=?&#]+/, ki = /^[^&#]+/; class Ds {
            constructor(x) { this.url = x, this.remaining = x; }
            parseRootSegment() { return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new J([], {}) : new J([], this.parseChildren()); }
            parseQueryParams() { const x = {}; if (this.consumeOptional("?"))
                do {
                    this.parseQueryParam(x);
                } while (this.consumeOptional("&")); return x; }
            parseFragment() { return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null; }
            parseChildren() { if ("" === this.remaining)
                return {}; this.consumeOptional("/"); const x = []; for (this.peekStartsWith("(") || x.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");)
                this.capture("/"), x.push(this.parseSegment()); let v = {}; this.peekStartsWith("/(") && (this.capture("/"), v = this.parseParens(!0)); let A = {}; return this.peekStartsWith("(") && (A = this.parseParens(!1)), (x.length > 0 || Object.keys(v).length > 0) && (A[Ge] = new J(x, v)), A; }
            parseSegment() { const x = Ai(this.remaining); if ("" === x && this.peekStartsWith(";"))
                throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`); return this.capture(x), new Qe(z(x), this.parseMatrixParams()); }
            parseMatrixParams() { const x = {}; for (; this.consumeOptional(";");)
                this.parseParam(x); return x; }
            parseParam(x) { const v = Ai(this.remaining); if (!v)
                return; this.capture(v); let A = ""; if (this.consumeOptional("=")) {
                const I = Ai(this.remaining);
                I && (A = I, this.capture(A));
            } x[z(v)] = z(A); }
            parseQueryParam(x) { const v = function _n(C) { const x = C.match(gs); return x ? x[0] : ""; }(this.remaining); if (!v)
                return; this.capture(v); let A = ""; if (this.consumeOptional("=")) {
                const K = function ts(C) { const x = C.match(ki); return x ? x[0] : ""; }(this.remaining);
                K && (A = K, this.capture(A));
            } const I = Re(v), B = Re(A); if (x.hasOwnProperty(I)) {
                let K = x[I];
                Array.isArray(K) || (K = [K], x[I] = K), K.push(B);
            }
            else
                x[I] = B; }
            parseParens(x) { const v = {}; for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                const A = Ai(this.remaining), I = this.remaining[A.length];
                if ("/" !== I && ")" !== I && ";" !== I)
                    throw new Error(`Cannot parse url '${this.url}'`);
                let B;
                A.indexOf(":") > -1 ? (B = A.substr(0, A.indexOf(":")), this.capture(B), this.capture(":")) : x && (B = Ge);
                const K = this.parseChildren();
                v[B] = 1 === Object.keys(K).length ? K[Ge] : new J([], K), this.consumeOptional("//");
            } return v; }
            peekStartsWith(x) { return this.remaining.startsWith(x); }
            consumeOptional(x) { return !!this.peekStartsWith(x) && (this.remaining = this.remaining.substring(x.length), !0); }
            capture(x) { if (!this.consumeOptional(x))
                throw new Error(`Expected "${x}".`); }
        } class ns {
            constructor(x) { this._root = x; }
            get root() { return this._root.value; }
            parent(x) { const v = this.pathFromRoot(x); return v.length > 1 ? v[v.length - 2] : null; }
            children(x) { const v = hi(x, this._root); return v ? v.children.map(A => A.value) : []; }
            firstChild(x) { const v = hi(x, this._root); return v && v.children.length > 0 ? v.children[0].value : null; }
            siblings(x) { const v = fn(x, this._root); return v.length < 2 ? [] : v[v.length - 2].children.map(I => I.value).filter(I => I !== x); }
            pathFromRoot(x) { return fn(x, this._root).map(v => v.value); }
        } function hi(C, x) { if (C === x.value)
            return x; for (const v of x.children) {
            const A = hi(C, v);
            if (A)
                return A;
        } return null; } function fn(C, x) { if (C === x.value)
            return [x]; for (const v of x.children) {
            const A = fn(C, v);
            if (A.length)
                return A.unshift(x), A;
        } return []; } class Ri {
            constructor(x, v) { this.value = x, this.children = v; }
            toString() { return `TreeNode(${this.value})`; }
        } function An(C) { const x = {}; return C && C.children.forEach(v => x[v.value.outlet] = v), x; } class In extends ns {
            constructor(x, v) { super(x), this.snapshot = v, pi(this, x); }
            toString() { return this.snapshot.toString(); }
        } function Pi(C, x) { const v = function Ls(C, x) { const K = new is([], {}, {}, "", {}, Ge, x, null, C.root, -1, {}); return new ks("", new Ri(K, [])); }(C, x), A = new at.X([new Qe("", {})]), I = new at.X({}), B = new at.X({}), K = new at.X({}), te = new at.X(""), Ue = new ni(A, I, K, te, B, Ge, x, v.root); return Ue.snapshot = v.root, new In(new Ri(Ue, []), v); } class ni {
            constructor(x, v, A, I, B, K, te, Ue) { this.url = x, this.params = v, this.queryParams = A, this.fragment = I, this.data = B, this.outlet = K, this.component = te, this._futureSnapshot = Ue; }
            get routeConfig() { return this._futureSnapshot.routeConfig; }
            get root() { return this._routerState.root; }
            get parent() { return this._routerState.parent(this); }
            get firstChild() { return this._routerState.firstChild(this); }
            get children() { return this._routerState.children(this); }
            get pathFromRoot() { return this._routerState.pathFromRoot(this); }
            get paramMap() { return this._paramMap || (this._paramMap = this.params.pipe((0, ve.U)(x => en(x)))), this._paramMap; }
            get queryParamMap() { return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe((0, ve.U)(x => en(x)))), this._queryParamMap; }
            toString() { return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`; }
        } function di(C, x = "emptyOnly") { const v = C.pathFromRoot; let A = 0; if ("always" !== x)
            for (A = v.length - 1; A >= 1;) {
                const I = v[A], B = v[A - 1];
                if (I.routeConfig && "" === I.routeConfig.path)
                    A--;
                else {
                    if (B.component)
                        break;
                    A--;
                }
            } return function ps(C) { return C.reduce((x, v) => ({ params: Object.assign(Object.assign({}, x.params), v.params), data: Object.assign(Object.assign({}, x.data), v.data), resolve: Object.assign(Object.assign({}, x.resolve), v._resolvedData) }), { params: {}, data: {}, resolve: {} }); }(v.slice(A)); } class is {
            constructor(x, v, A, I, B, K, te, Ue, kt, mn, Kt) { this.url = x, this.params = v, this.queryParams = A, this.fragment = I, this.data = B, this.outlet = K, this.component = te, this.routeConfig = Ue, this._urlSegment = kt, this._lastPathIndex = mn, this._resolve = Kt; }
            get root() { return this._routerState.root; }
            get parent() { return this._routerState.parent(this); }
            get firstChild() { return this._routerState.firstChild(this); }
            get children() { return this._routerState.children(this); }
            get pathFromRoot() { return this._routerState.pathFromRoot(this); }
            get paramMap() { return this._paramMap || (this._paramMap = en(this.params)), this._paramMap; }
            get queryParamMap() { return this._queryParamMap || (this._queryParamMap = en(this.queryParams)), this._queryParamMap; }
            toString() { return `Route(url:'${this.url.map(A => A.toString()).join("/")}', path:'${this.routeConfig ? this.routeConfig.path : ""}')`; }
        } class ks extends ns {
            constructor(x, v) { super(v), this.url = x, pi(this, v); }
            toString() { return ss(this._root); }
        } function pi(C, x) { x.value._routerState = C, x.children.forEach(v => pi(C, v)); } function ss(C) { const x = C.children.length > 0 ? ` { ${C.children.map(ss).join(", ")} } ` : ""; return `${C.value}${x}`; } function wr(C) { if (C.snapshot) {
            const x = C.snapshot, v = C._futureSnapshot;
            C.snapshot = v, G(x.queryParams, v.queryParams) || C.queryParams.next(v.queryParams), x.fragment !== v.fragment && C.fragment.next(v.fragment), G(x.params, v.params) || C.params.next(v.params), function k(C, x) { if (C.length !== x.length)
                return !1; for (let v = 0; v < C.length; ++v)
                if (!G(C[v], x[v]))
                    return !1; return !0; }(x.url, v.url) || C.url.next(v.url), G(x.data, v.data) || C.data.next(v.data);
        }
        else
            C.snapshot = C._futureSnapshot, C.data.next(C._futureSnapshot.data); } function Er(C, x) { const v = G(C.params, x.params) && function Nt(C, x) { return Gt(C, x) && C.every((v, A) => G(v.parameters, x[A].parameters)); }(C.url, x.url); return v && !(!C.parent != !x.parent) && (!C.parent || Er(C.parent, x.parent)); } function bi(C, x, v) { if (v && C.shouldReuseRoute(x.value, v.value.snapshot)) {
            const A = v.value;
            A._futureSnapshot = x.value;
            const I = function Ws(C, x, v) { return x.children.map(A => { for (const I of v.children)
                if (C.shouldReuseRoute(A.value, I.value.snapshot))
                    return bi(C, A, I); return bi(C, A); }); }(C, x, v);
            return new Ri(A, I);
        } {
            if (C.shouldAttach(x.value)) {
                const B = C.retrieve(x.value);
                if (null !== B) {
                    const K = B.route;
                    return K.value._futureSnapshot = x.value, K.children = x.children.map(te => bi(C, te)), K;
                }
            }
            const A = function Fo(C) { return new ni(new at.X(C.url), new at.X(C.params), new at.X(C.queryParams), new at.X(C.fragment), new at.X(C.data), C.outlet, C.component, C); }(x.value), I = x.children.map(B => bi(C, B));
            return new Ri(A, I);
        } } function Ns(C) { return "object" == typeof C && null != C && !C.outlets && !C.segmentPath; } function Ys(C) { return "object" == typeof C && null != C && C.outlets; } function ms(C, x, v, A, I) { let B = {}; return A && X(A, (K, te) => { B[te] = Array.isArray(K) ? K.map(Ue => `${Ue}`) : `${K}`; }), new Y(v.root === C ? x : oi(v.root, C, x), B, I); } function oi(C, x, v) { const A = {}; return X(C.children, (I, B) => { A[B] = I === x ? v : oi(I, x, v); }), new J(C.segments, A); } class ii {
            constructor(x, v, A) { if (this.isAbsolute = x, this.numberOfDoubleDots = v, this.commands = A, x && A.length > 0 && Ns(A[0]))
                throw new Error("Root segment cannot have matrix parameters"); const I = A.find(Ys); if (I && I !== gt(A))
                throw new Error("{outlets:{}} has to be the last command"); }
            toRoot() { return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]; }
        } class or {
            constructor(x, v, A) { this.segmentGroup = x, this.processChildren = v, this.index = A; }
        } function ar(C, x, v) { if (C || (C = new J([], {})), 0 === C.segments.length && C.hasChildren())
            return Bs(C, x, v); const A = function lo(C, x, v) { let A = 0, I = x; const B = { match: !1, pathIndex: 0, commandIndex: 0 }; for (; I < C.segments.length;) {
            if (A >= v.length)
                return B;
            const K = C.segments[I], te = v[A];
            if (Ys(te))
                break;
            const Ue = `${te}`, kt = A < v.length - 1 ? v[A + 1] : null;
            if (I > 0 && void 0 === Ue)
                break;
            if (Ue && kt && "object" == typeof kt && void 0 === kt.outlets) {
                if (!js(Ue, kt, K))
                    return B;
                A += 2;
            }
            else {
                if (!js(Ue, {}, K))
                    return B;
                A++;
            }
            I++;
        } return { match: !0, pathIndex: I, commandIndex: A }; }(C, x, v), I = v.slice(A.commandIndex); if (A.match && A.pathIndex < C.segments.length) {
            const B = new J(C.segments.slice(0, A.pathIndex), {});
            return B.children[Ge] = new J(C.segments.slice(A.pathIndex), C.children), Bs(B, 0, I);
        } return A.match && 0 === I.length ? new J(C.segments, {}) : A.match && !C.hasChildren() ? lr(C, x, v) : A.match ? Bs(C, 0, I) : lr(C, x, v); } function Bs(C, x, v) { if (0 === v.length)
            return new J(C.segments, {}); {
            const A = function rs(C) { return Ys(C[0]) ? C[0].outlets : { [Ge]: C }; }(v), I = {};
            return X(A, (B, K) => { "string" == typeof B && (B = [B]), null !== B && (I[K] = ar(C.children[K], x, B)); }), X(C.children, (B, K) => { void 0 === A[K] && (I[K] = B); }), new J(C.segments, I);
        } } function lr(C, x, v) { const A = C.segments.slice(0, x); let I = 0; for (; I < v.length;) {
            const B = v[I];
            if (Ys(B)) {
                const Ue = co(B.outlets);
                return new J(A, Ue);
            }
            if (0 === I && Ns(v[0])) {
                A.push(new Qe(C.segments[x].path, os(v[0]))), I++;
                continue;
            }
            const K = Ys(B) ? B.outlets[Ge] : `${B}`, te = I < v.length - 1 ? v[I + 1] : null;
            K && te && Ns(te) ? (A.push(new Qe(K, os(te))), I += 2) : (A.push(new Qe(K, {})), I++);
        } return new J(A, {}); } function co(C) { const x = {}; return X(C, (v, A) => { "string" == typeof v && (v = [v]), null !== v && (x[A] = lr(new J([], {}), 0, v)); }), x; } function os(C) { const x = {}; return X(C, (v, A) => x[A] = `${v}`), x; } function js(C, x, v) { return C == v.path && G(x, v.parameters); } class Vs {
            constructor(x, v, A, I) { this.routeReuseStrategy = x, this.futureState = v, this.currState = A, this.forwardEvent = I; }
            activate(x) { const v = this.futureState._root, A = this.currState ? this.currState._root : null; this.deactivateChildRoutes(v, A, x), wr(this.futureState.root), this.activateChildRoutes(v, A, x); }
            deactivateChildRoutes(x, v, A) { const I = An(v); x.children.forEach(B => { const K = B.value.outlet; this.deactivateRoutes(B, I[K], A), delete I[K]; }), X(I, (B, K) => { this.deactivateRouteAndItsChildren(B, A); }); }
            deactivateRoutes(x, v, A) { const I = x.value, B = v ? v.value : null; if (I === B)
                if (I.component) {
                    const K = A.getContext(I.outlet);
                    K && this.deactivateChildRoutes(x, v, K.children);
                }
                else
                    this.deactivateChildRoutes(x, v, A);
            else
                B && this.deactivateRouteAndItsChildren(v, A); }
            deactivateRouteAndItsChildren(x, v) { x.value.component && this.routeReuseStrategy.shouldDetach(x.value.snapshot) ? this.detachAndStoreRouteSubtree(x, v) : this.deactivateRouteAndOutlet(x, v); }
            detachAndStoreRouteSubtree(x, v) { const A = v.getContext(x.value.outlet), I = A && x.value.component ? A.children : v, B = An(x); for (const K of Object.keys(B))
                this.deactivateRouteAndItsChildren(B[K], I); if (A && A.outlet) {
                const K = A.outlet.detach(), te = A.children.onOutletDeactivated();
                this.routeReuseStrategy.store(x.value.snapshot, { componentRef: K, route: x, contexts: te });
            } }
            deactivateRouteAndOutlet(x, v) { const A = v.getContext(x.value.outlet), I = A && x.value.component ? A.children : v, B = An(x); for (const K of Object.keys(B))
                this.deactivateRouteAndItsChildren(B[K], I); A && A.outlet && (A.outlet.deactivate(), A.children.onOutletDeactivated(), A.attachRef = null, A.resolver = null, A.route = null); }
            activateChildRoutes(x, v, A) { const I = An(v); x.children.forEach(B => { this.activateRoutes(B, I[B.value.outlet], A), this.forwardEvent(new ze(B.value.snapshot)); }), x.children.length && this.forwardEvent(new ne(x.value.snapshot)); }
            activateRoutes(x, v, A) { const I = x.value, B = v ? v.value : null; if (wr(I), I === B)
                if (I.component) {
                    const K = A.getOrCreateContext(I.outlet);
                    this.activateChildRoutes(x, v, K.children);
                }
                else
                    this.activateChildRoutes(x, v, A);
            else if (I.component) {
                const K = A.getOrCreateContext(I.outlet);
                if (this.routeReuseStrategy.shouldAttach(I.snapshot)) {
                    const te = this.routeReuseStrategy.retrieve(I.snapshot);
                    this.routeReuseStrategy.store(I.snapshot, null), K.children.onOutletReAttached(te.contexts), K.attachRef = te.componentRef, K.route = te.route.value, K.outlet && K.outlet.attach(te.componentRef, te.route.value), wr(te.route.value), this.activateChildRoutes(x, null, K.children);
                }
                else {
                    const te = function cr(C) { for (let x = C.parent; x; x = x.parent) {
                        const v = x.routeConfig;
                        if (v && v._loadedConfig)
                            return v._loadedConfig;
                        if (v && v.component)
                            return null;
                    } return null; }(I.snapshot), Ue = te ? te.module.componentFactoryResolver : null;
                    K.attachRef = null, K.route = I, K.resolver = Ue, K.outlet && K.outlet.activateWith(I, Ue), this.activateChildRoutes(x, null, K.children);
                }
            }
            else
                this.activateChildRoutes(x, null, A); }
        } class Hs {
            constructor(x, v) { this.routes = x, this.module = v; }
        } function zi(C) { return "function" == typeof C; } function ws(C) { return C instanceof Y; } const ys = Symbol("INITIAL_VALUE"); function Es() { return (0, lt.w)(C => function ce(...C) { const x = (0, Le.yG)(C), v = (0, Le.jO)(C), { args: A, keys: I } = (0, ie.D)(C); if (0 === A.length)
            return (0, _e.D)([], x); const B = new j.y(function fe(C, x, v = Ae.y) { return A => { ke(x, () => { const { length: I } = C, B = new Array(I); let K = I, te = I; for (let Ue = 0; Ue < I; Ue++)
            ke(x, () => { const kt = (0, _e.D)(C[Ue], x); let mn = !1; kt.subscribe(new Ee.Q(A, Kt => { B[Ue] = Kt, mn || (mn = !0, te--), te || A.next(v(B.slice())); }, () => { --K || A.complete(); })); }, A); }, A); }; }(A, x, I ? K => (0, Ve.n)(I, K) : Ae.y)); return v ? B.pipe((0, Te.Z)(v)) : B; }(C.map(x => x.pipe((0, Cn.q)(1), (0, je.O)(ys)))).pipe(Se((x, v) => { let A = !1; return v.reduce((I, B, K) => I !== ys ? I : (B === ys && (A = !0), A || !1 !== B && K !== v.length - 1 && !ws(B) ? I : B), x); }, ys), (0, Oe.h)(x => x !== ys), (0, ve.U)(x => ws(x) ? x : !0 === x), (0, Cn.q)(1))); } class ko {
            constructor() { this.outlet = null, this.route = null, this.resolver = null, this.children = new As, this.attachRef = null; }
        } class As {
            constructor() { this.contexts = new Map; }
            onChildOutletCreated(x, v) { const A = this.getOrCreateContext(x); A.outlet = v, this.contexts.set(x, A); }
            onChildOutletDestroyed(x) { const v = this.getContext(x); v && (v.outlet = null, v.attachRef = null); }
            onOutletDeactivated() { const x = this.contexts; return this.contexts = new Map, x; }
            onOutletReAttached(x) { this.contexts = x; }
            getOrCreateContext(x) { let v = this.getContext(x); return v || (v = new ko, this.contexts.set(x, v)), v; }
            getContext(x) { return this.contexts.get(x) || null; }
        } let dr = (() => { class C {
            constructor(v, A, I, B, K) { this.parentContexts = v, this.location = A, this.resolver = I, this.changeDetector = K, this.activated = null, this._activatedRoute = null, this.activateEvents = new _.vpe, this.deactivateEvents = new _.vpe, this.attachEvents = new _.vpe, this.detachEvents = new _.vpe, this.name = B || Ge, v.onChildOutletCreated(this.name, this); }
            ngOnDestroy() { this.parentContexts.onChildOutletDestroyed(this.name); }
            ngOnInit() { if (!this.activated) {
                const v = this.parentContexts.getContext(this.name);
                v && v.route && (v.attachRef ? this.attach(v.attachRef, v.route) : this.activateWith(v.route, v.resolver || null));
            } }
            get isActivated() { return !!this.activated; }
            get component() { if (!this.activated)
                throw new Error("Outlet is not activated"); return this.activated.instance; }
            get activatedRoute() { if (!this.activated)
                throw new Error("Outlet is not activated"); return this._activatedRoute; }
            get activatedRouteData() { return this._activatedRoute ? this._activatedRoute.snapshot.data : {}; }
            detach() { if (!this.activated)
                throw new Error("Outlet is not activated"); this.location.detach(); const v = this.activated; return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(v.instance), v; }
            attach(v, A) { this.activated = v, this._activatedRoute = A, this.location.insert(v.hostView), this.attachEvents.emit(v.instance); }
            deactivate() { if (this.activated) {
                const v = this.component;
                this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(v);
            } }
            activateWith(v, A) { if (this.isActivated)
                throw new Error("Cannot activate an already activated outlet"); this._activatedRoute = v; const K = (A = A || this.resolver).resolveComponentFactory(v._futureSnapshot.routeConfig.component), te = this.parentContexts.getOrCreateContext(this.name).children, Ue = new Kn(v, te, this.location.injector); this.activated = this.location.createComponent(K, this.location.length, Ue), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance); }
        } return C.\u0275fac = function (v) { return new (v || C)(_.Y36(As), _.Y36(_.s_b), _.Y36(_._Vd), _.$8M("name"), _.Y36(_.sBO)); }, C.\u0275dir = _.lG2({ type: C, selectors: [["router-outlet"]], outputs: { activateEvents: "activate", deactivateEvents: "deactivate", attachEvents: "attach", detachEvents: "detach" }, exportAs: ["outlet"] }), C; })(); class Kn {
            constructor(x, v, A) { this.route = x, this.childContexts = v, this.parent = A; }
            get(x, v) { return x === ni ? this.route : x === As ? this.childContexts : this.parent.get(x, v); }
        } let fr = (() => { class C {
        } return C.\u0275fac = function (v) { return new (v || C); }, C.\u0275cmp = _.Xpm({ type: C, selectors: [["ng-component"]], decls: 1, vars: 0, template: function (v, A) { 1 & v && _._UZ(0, "router-outlet"); }, directives: [dr], encapsulation: 2 }), C; })(); function uo(C, x = "") { for (let v = 0; v < C.length; v++) {
            const A = C[v];
            Gn(A, M(x, A));
        } } function Gn(C, x) { C.children && uo(C.children, x); } function M(C, x) { return x ? C || x.path ? C && !x.path ? `${C}/` : !C && x.path ? x.path : `${C}/${x.path}` : "" : C; } function N(C) { const x = C.children && C.children.map(N), v = x ? Object.assign(Object.assign({}, C), { children: x }) : Object.assign({}, C); return !v.component && (x || v.loadChildren) && v.outlet && v.outlet !== Ge && (v.component = fr), v; } function S(C) { return C.outlet || Ge; } function H(C, x) { const v = C.filter(A => S(A) === x); return v.push(...C.filter(A => S(A) !== x)), v; } const oe = { matched: !1, consumedSegments: [], lastChild: 0, parameters: {}, positionalParamSegments: {} }; function Be(C, x, v) { var A; if ("" === x.path)
            return "full" === x.pathMatch && (C.hasChildren() || v.length > 0) ? Object.assign({}, oe) : { matched: !0, consumedSegments: [], lastChild: 0, parameters: {}, positionalParamSegments: {} }; const B = (x.matcher || Fe)(v, C, x); if (!B)
            return Object.assign({}, oe); const K = {}; X(B.posParams, (Ue, kt) => { K[kt] = Ue.path; }); const te = B.consumed.length > 0 ? Object.assign(Object.assign({}, K), B.consumed[B.consumed.length - 1].parameters) : K; return { matched: !0, consumedSegments: B.consumed, lastChild: B.consumed.length, parameters: te, positionalParamSegments: null !== (A = B.posParams) && void 0 !== A ? A : {} }; } function it(C, x, v, A, I = "corrected") { if (v.length > 0 && function On(C, x, v) { return v.some(A => dn(C, x, A) && S(A) !== Ge); }(C, v, A)) {
            const K = new J(x, function jn(C, x, v, A) { const I = {}; I[Ge] = A, A._sourceSegment = C, A._segmentIndexShift = x.length; for (const B of v)
                if ("" === B.path && S(B) !== Ge) {
                    const K = new J([], {});
                    K._sourceSegment = C, K._segmentIndexShift = x.length, I[S(B)] = K;
                } return I; }(C, x, A, new J(v, C.children)));
            return K._sourceSegment = C, K._segmentIndexShift = x.length, { segmentGroup: K, slicedSegments: [] };
        } if (0 === v.length && function kn(C, x, v) { return v.some(A => dn(C, x, A)); }(C, v, A)) {
            const K = new J(C.segments, function Mt(C, x, v, A, I, B) { const K = {}; for (const te of A)
                if (dn(C, v, te) && !I[S(te)]) {
                    const Ue = new J([], {});
                    Ue._sourceSegment = C, Ue._segmentIndexShift = "legacy" === B ? C.segments.length : x.length, K[S(te)] = Ue;
                } return Object.assign(Object.assign({}, I), K); }(C, x, v, A, C.children, I));
            return K._sourceSegment = C, K._segmentIndexShift = x.length, { segmentGroup: K, slicedSegments: v };
        } const B = new J(C.segments, C.children); return B._sourceSegment = C, B._segmentIndexShift = x.length, { segmentGroup: B, slicedSegments: v }; } function dn(C, x, v) { return (!(C.hasChildren() || x.length > 0) || "full" !== v.pathMatch) && "" === v.path; } function fi(C, x, v, A) { return !!(S(C) === A || A !== Ge && dn(x, v, C)) && ("**" === C.path || Be(x, C, v).matched); } function Vn(C, x, v) { return 0 === x.length && !C.children[v]; } class Ot {
            constructor(x) { this.segmentGroup = x || null; }
        } class Ks {
            constructor(x) { this.urlTree = x; }
        } function Wi(C) { return new j.y(x => x.error(new Ot(C))); } function vs(C) { return new j.y(x => x.error(new Ks(C))); } function Ss(C) { return new j.y(x => x.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${C}'`))); } class Tr {
            constructor(x, v, A, I, B) { this.configLoader = v, this.urlSerializer = A, this.urlTree = I, this.config = B, this.allowRedirects = !0, this.ngModule = x.get(_.h0i); }
            apply() { const x = it(this.urlTree.root, [], [], this.config).segmentGroup, v = new J(x.segments, x.children); return this.expandSegmentGroup(this.ngModule, this.config, v, Ge).pipe((0, ve.U)(B => this.createUrlTree(R(B), this.urlTree.queryParams, this.urlTree.fragment))).pipe((0, mt.K)(B => { if (B instanceof Ks)
                return this.allowRedirects = !1, this.match(B.urlTree); throw B instanceof Ot ? this.noMatchError(B) : B; })); }
            match(x) { return this.expandSegmentGroup(this.ngModule, this.config, x.root, Ge).pipe((0, ve.U)(I => this.createUrlTree(R(I), x.queryParams, x.fragment))).pipe((0, mt.K)(I => { throw I instanceof Ot ? this.noMatchError(I) : I; })); }
            noMatchError(x) { return new Error(`Cannot match any routes. URL Segment: '${x.segmentGroup}'`); }
            createUrlTree(x, v, A) { const I = x.segments.length > 0 ? new J([], { [Ge]: x }) : x; return new Y(I, v, A); }
            expandSegmentGroup(x, v, A, I) { return 0 === A.segments.length && A.hasChildren() ? this.expandChildren(x, v, A).pipe((0, ve.U)(B => new J([], B))) : this.expandSegment(x, A, v, A.segments, I, !0); }
            expandChildren(x, v, A) { const I = []; for (const B of Object.keys(A.children))
                "primary" === B ? I.unshift(B) : I.push(B); return (0, _e.D)(I).pipe((0, Bt.b)(B => { const K = A.children[B], te = H(v, B); return this.expandSegmentGroup(x, te, K, B).pipe((0, ve.U)(Ue => ({ segment: Ue, outlet: B }))); }), Se((B, K) => (B[K.outlet] = K.segment, B), {}), function Zt(C, x) { const v = arguments.length >= 2; return A => A.pipe(C ? (0, Oe.h)((I, B) => C(I, B, A)) : Ae.y, We(1), v ? Xt(x) : ut(() => new qe)); }()); }
            expandSegment(x, v, A, I, B, K) { return (0, _e.D)(A).pipe((0, Bt.b)(te => this.expandSegmentAgainstRoute(x, v, A, te, I, B, K).pipe((0, mt.K)(kt => { if (kt instanceof Ot)
                return (0, he.of)(null); throw kt; }))), It(te => !!te), (0, mt.K)((te, Ue) => { if (te instanceof qe || "EmptyError" === te.name) {
                if (Vn(v, I, B))
                    return (0, he.of)(new J([], {}));
                throw new Ot(v);
            } throw te; })); }
            expandSegmentAgainstRoute(x, v, A, I, B, K, te) { return fi(I, v, B, K) ? void 0 === I.redirectTo ? this.matchSegmentAgainstRoute(x, v, I, B, K) : te && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(x, v, A, I, B, K) : Wi(v) : Wi(v); }
            expandSegmentAgainstRouteUsingRedirect(x, v, A, I, B, K) { return "**" === I.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(x, A, I, K) : this.expandRegularSegmentAgainstRouteUsingRedirect(x, v, A, I, B, K); }
            expandWildCardWithParamsAgainstRouteUsingRedirect(x, v, A, I) { const B = this.applyRedirectCommands([], A.redirectTo, {}); return A.redirectTo.startsWith("/") ? vs(B) : this.lineralizeSegments(A, B).pipe((0, yn.z)(K => { const te = new J(K, {}); return this.expandSegment(x, te, v, K, I, !1); })); }
            expandRegularSegmentAgainstRouteUsingRedirect(x, v, A, I, B, K) { const { matched: te, consumedSegments: Ue, lastChild: kt, positionalParamSegments: mn } = Be(v, I, B); if (!te)
                return Wi(v); const Kt = this.applyRedirectCommands(Ue, I.redirectTo, mn); return I.redirectTo.startsWith("/") ? vs(Kt) : this.lineralizeSegments(I, Kt).pipe((0, yn.z)(Nn => this.expandSegment(x, v, A, Nn.concat(B.slice(kt)), K, !1))); }
            matchSegmentAgainstRoute(x, v, A, I, B) { if ("**" === A.path)
                return A.loadChildren ? (A._loadedConfig ? (0, he.of)(A._loadedConfig) : this.configLoader.load(x.injector, A)).pipe((0, ve.U)(Nn => (A._loadedConfig = Nn, new J(I, {})))) : (0, he.of)(new J(I, {})); const { matched: K, consumedSegments: te, lastChild: Ue } = Be(v, A, I); if (!K)
                return Wi(v); const kt = I.slice(Ue); return this.getChildConfig(x, A, I).pipe((0, yn.z)(Kt => { const Nn = Kt.module, Bn = Kt.routes, { segmentGroup: Ki, slicedSegments: Gi } = it(v, te, kt, Bn), Ti = new J(Ki.segments, Ki.children); if (0 === Gi.length && Ti.hasChildren())
                return this.expandChildren(Nn, Bn, Ti).pipe((0, ve.U)(_o => new J(te, _o))); if (0 === Bn.length && 0 === Gi.length)
                return (0, he.of)(new J(te, {})); const qs = S(A) === B; return this.expandSegment(Nn, Ti, Bn, Gi, qs ? Ge : B, !0).pipe((0, ve.U)(Qi => new J(te.concat(Qi.segments), Qi.children))); })); }
            getChildConfig(x, v, A) { return v.children ? (0, he.of)(new Hs(v.children, x)) : v.loadChildren ? void 0 !== v._loadedConfig ? (0, he.of)(v._loadedConfig) : this.runCanLoadGuards(x.injector, v, A).pipe((0, yn.z)(I => I ? this.configLoader.load(x.injector, v).pipe((0, ve.U)(B => (v._loadedConfig = B, B))) : function Us(C) { return new j.y(x => x.error(Jt(`Cannot load children because the guard of the route "path: '${C.path}'" returned false`))); }(v))) : (0, he.of)(new Hs([], x)); }
            runCanLoadGuards(x, v, A) { const I = v.canLoad; if (!I || 0 === I.length)
                return (0, he.of)(!0); const B = I.map(K => { const te = x.get(K); let Ue; if (function ur(C) { return C && zi(C.canLoad); }(te))
                Ue = te.canLoad(v, A);
            else {
                if (!zi(te))
                    throw new Error("Invalid CanLoad guard");
                Ue = te(v, A);
            } return et(Ue); }); return (0, he.of)(B).pipe(Es(), (0, jt.b)(K => { if (!ws(K))
                return; const te = Jt(`Redirecting to "${this.urlSerializer.serialize(K)}"`); throw te.url = K, te; }), (0, ve.U)(K => !0 === K)); }
            lineralizeSegments(x, v) { let A = [], I = v.root; for (;;) {
                if (A = A.concat(I.segments), 0 === I.numberOfChildren)
                    return (0, he.of)(A);
                if (I.numberOfChildren > 1 || !I.children[Ge])
                    return Ss(x.redirectTo);
                I = I.children[Ge];
            } }
            applyRedirectCommands(x, v, A) { return this.applyRedirectCreatreUrlTree(v, this.urlSerializer.parse(v), x, A); }
            applyRedirectCreatreUrlTree(x, v, A, I) { const B = this.createSegmentGroup(x, v.root, A, I); return new Y(B, this.createQueryParams(v.queryParams, this.urlTree.queryParams), v.fragment); }
            createQueryParams(x, v) { const A = {}; return X(x, (I, B) => { if ("string" == typeof I && I.startsWith(":")) {
                const te = I.substring(1);
                A[B] = v[te];
            }
            else
                A[B] = I; }), A; }
            createSegmentGroup(x, v, A, I) { const B = this.createSegments(x, v.segments, A, I); let K = {}; return X(v.children, (te, Ue) => { K[Ue] = this.createSegmentGroup(x, te, A, I); }), new J(B, K); }
            createSegments(x, v, A, I) { return v.map(B => B.path.startsWith(":") ? this.findPosParam(x, B, I) : this.findOrReturn(B, A)); }
            findPosParam(x, v, A) { const I = A[v.path.substring(1)]; if (!I)
                throw new Error(`Cannot redirect to '${x}'. Cannot find '${v.path}'.`); return I; }
            findOrReturn(x, v) { let A = 0; for (const I of v) {
                if (I.path === x.path)
                    return v.splice(A), I;
                A++;
            } return x; }
        } function R(C) { const x = {}; for (const A of Object.keys(C.children)) {
            const B = R(C.children[A]);
            (B.segments.length > 0 || B.hasChildren()) && (x[A] = B);
        } return function ft(C) { if (1 === C.numberOfChildren && C.children[Ge]) {
            const x = C.children[Ge];
            return new J(C.segments.concat(x.segments), x.children);
        } return C; }(new J(C.segments, x)); } class p {
            constructor(x) { this.path = x, this.route = this.path[this.path.length - 1]; }
        } class E {
            constructor(x, v) { this.component = x, this.route = v; }
        } function F(C, x, v) { const A = C._root; return be(A, x ? x._root : null, v, [A.value]); } function q(C, x, v) { const A = function Z(C) { if (!C)
            return null; for (let x = C.parent; x; x = x.parent) {
            const v = x.routeConfig;
            if (v && v._loadedConfig)
                return v._loadedConfig;
        } return null; }(x); return (A ? A.module.injector : v).get(C); } function be(C, x, v, A, I = { canDeactivateChecks: [], canActivateChecks: [] }) { const B = An(x); return C.children.forEach(K => { (function $e(C, x, v, A, I = { canDeactivateChecks: [], canActivateChecks: [] }) { const B = C.value, K = x ? x.value : null, te = v ? v.getContext(C.value.outlet) : null; if (K && B.routeConfig === K.routeConfig) {
            const Ue = function _t(C, x, v) { if ("function" == typeof v)
                return v(C, x); switch (v) {
                case "pathParamsChange": return !Gt(C.url, x.url);
                case "pathParamsOrQueryParamsChange": return !Gt(C.url, x.url) || !G(C.queryParams, x.queryParams);
                case "always": return !0;
                case "paramsOrQueryParamsChange": return !Er(C, x) || !G(C.queryParams, x.queryParams);
                default: return !Er(C, x);
            } }(K, B, B.routeConfig.runGuardsAndResolvers);
            Ue ? I.canActivateChecks.push(new p(A)) : (B.data = K.data, B._resolvedData = K._resolvedData), be(C, x, B.component ? te ? te.children : null : v, A, I), Ue && te && te.outlet && te.outlet.isActivated && I.canDeactivateChecks.push(new E(te.outlet.component, K));
        }
        else
            K && Pt(x, te, I), I.canActivateChecks.push(new p(A)), be(C, null, B.component ? te ? te.children : null : v, A, I); })(K, B[K.value.outlet], v, A.concat([K.value]), I), delete B[K.value.outlet]; }), X(B, (K, te) => Pt(K, v.getContext(te), I)), I; } function Pt(C, x, v) { const A = An(C), I = C.value; X(A, (B, K) => { Pt(B, I.component ? x ? x.children.getContext(K) : null : x, v); }), v.canDeactivateChecks.push(new E(I.component && x && x.outlet && x.outlet.isActivated ? x.outlet.component : null, I)); } class mi {
        } function Ms(C) { return new j.y(x => x.error(C)); } class Si {
            constructor(x, v, A, I, B, K) { this.rootComponentType = x, this.config = v, this.urlTree = A, this.url = I, this.paramsInheritanceStrategy = B, this.relativeLinkResolution = K; }
            recognize() { const x = it(this.urlTree.root, [], [], this.config.filter(K => void 0 === K.redirectTo), this.relativeLinkResolution).segmentGroup, v = this.processSegmentGroup(this.config, x, Ge); if (null === v)
                return null; const A = new is([], Object.freeze({}), Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, Ge, this.rootComponentType, null, this.urlTree.root, -1, {}), I = new Ri(A, v), B = new ks(this.url, I); return this.inheritParamsAndData(B._root), B; }
            inheritParamsAndData(x) { const v = x.value, A = di(v, this.paramsInheritanceStrategy); v.params = Object.freeze(A.params), v.data = Object.freeze(A.data), x.children.forEach(I => this.inheritParamsAndData(I)); }
            processSegmentGroup(x, v, A) { return 0 === v.segments.length && v.hasChildren() ? this.processChildren(x, v) : this.processSegment(x, v, v.segments, A); }
            processChildren(x, v) { const A = []; for (const B of Object.keys(v.children)) {
                const K = v.children[B], te = H(x, B), Ue = this.processSegmentGroup(te, K, B);
                if (null === Ue)
                    return null;
                A.push(...Ue);
            } const I = hr(A); return function as(C) { C.sort((x, v) => x.value.outlet === Ge ? -1 : v.value.outlet === Ge ? 1 : x.value.outlet.localeCompare(v.value.outlet)); }(I), I; }
            processSegment(x, v, A, I) { for (const B of x) {
                const K = this.processSegmentAgainstRoute(B, v, A, I);
                if (null !== K)
                    return K;
            } return Vn(v, A, I) ? [] : null; }
            processSegmentAgainstRoute(x, v, A, I) { if (x.redirectTo || !fi(x, v, A, I))
                return null; let B, K = [], te = []; if ("**" === x.path) {
                const Bn = A.length > 0 ? gt(A).parameters : {};
                B = new is(A, Bn, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Gr(x), S(x), x.component, x, Ts(v), Ur(v) + A.length, Lt(x));
            }
            else {
                const Bn = Be(v, x, A);
                if (!Bn.matched)
                    return null;
                K = Bn.consumedSegments, te = A.slice(Bn.lastChild), B = new is(K, Bn.parameters, Object.freeze(Object.assign({}, this.urlTree.queryParams)), this.urlTree.fragment, Gr(x), S(x), x.component, x, Ts(v), Ur(v) + K.length, Lt(x));
            } const Ue = function Di(C) { return C.children ? C.children : C.loadChildren ? C._loadedConfig.routes : []; }(x), { segmentGroup: kt, slicedSegments: mn } = it(v, K, te, Ue.filter(Bn => void 0 === Bn.redirectTo), this.relativeLinkResolution); if (0 === mn.length && kt.hasChildren()) {
                const Bn = this.processChildren(Ue, kt);
                return null === Bn ? null : [new Ri(B, Bn)];
            } if (0 === Ue.length && 0 === mn.length)
                return [new Ri(B, [])]; const Kt = S(x) === I, Nn = this.processSegment(Ue, kt, mn, Kt ? Ge : I); return null === Nn ? null : [new Ri(B, Nn)]; }
        } function ls(C) { const x = C.value.routeConfig; return x && "" === x.path && void 0 === x.redirectTo; } function hr(C) { const x = [], v = new Set; for (const A of C) {
            if (!ls(A)) {
                x.push(A);
                continue;
            }
            const I = x.find(B => A.value.routeConfig === B.value.routeConfig);
            void 0 !== I ? (I.children.push(...A.children), v.add(I)) : x.push(A);
        } for (const A of v) {
            const I = hr(A.children);
            x.push(new Ri(A.value, I));
        } return x.filter(A => !v.has(A)); } function Ts(C) { let x = C; for (; x._sourceSegment;)
            x = x._sourceSegment; return x; } function Ur(C) { let x = C, v = x._segmentIndexShift ? x._segmentIndexShift : 0; for (; x._sourceSegment;)
            x = x._sourceSegment, v += x._segmentIndexShift ? x._segmentIndexShift : 0; return v - 1; } function Gr(C) { return C.data || {}; } function Lt(C) { return C.resolve || {}; } function Ci(C) { return (0, lt.w)(x => { const v = C(x); return v ? (0, _e.D)(v).pipe((0, ve.U)(() => x)) : (0, he.of)(x); }); } class fo extends class Xn {
            shouldDetach(x) { return !1; }
            store(x, v) { }
            shouldAttach(x) { return !1; }
            retrieve(x) { return null; }
            shouldReuseRoute(x, v) { return x.routeConfig === v.routeConfig; }
        } {
        } const ho = new _.OlP("ROUTES"); class Mi {
            constructor(x, v, A, I) { this.injector = x, this.compiler = v, this.onLoadStartListener = A, this.onLoadEndListener = I; }
            load(x, v) { if (v._loader$)
                return v._loader$; this.onLoadStartListener && this.onLoadStartListener(v); const I = this.loadModuleFactory(v.loadChildren).pipe((0, ve.U)(B => { this.onLoadEndListener && this.onLoadEndListener(v); const K = B.create(x); return new Hs(ge(K.injector.get(ho, void 0, _.XFs.Self | _.XFs.Optional)).map(N), K); }), (0, mt.K)(B => { throw v._loader$ = void 0, B; })); return v._loader$ = new tt(I, () => new ht.x).pipe(yt()), v._loader$; }
            loadModuleFactory(x) { return et(x()).pipe((0, yn.z)(v => v instanceof _.YKP ? (0, he.of)(v) : (0, _e.D)(this.compiler.compileModuleAsync(v)))); }
        } class Yi {
            shouldProcessUrl(x) { return !0; }
            extract(x) { return x; }
            merge(x, v) { return x; }
        } function cs(C) { throw C; } function Qs(C, x, v) { return x.parse("/"); } function Ca(C, x) { return (0, he.of)(null); } const ql = { paths: "exact", fragment: "ignored", matrixParams: "ignored", queryParams: "exact" }, xs = { paths: "subset", fragment: "ignored", matrixParams: "ignored", queryParams: "subset" }; let yi = (() => { class C {
            constructor(v, A, I, B, K, te, Ue) { this.rootComponentType = v, this.urlSerializer = A, this.rootContexts = I, this.location = B, this.config = Ue, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.disposed = !1, this.navigationId = 0, this.currentPageId = 0, this.isNgZoneEnabled = !1, this.events = new ht.x, this.errorHandler = cs, this.malformedUriErrorHandler = Qs, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = { beforePreactivation: Ca, afterPreactivation: Ca }, this.urlHandlingStrategy = new Yi, this.routeReuseStrategy = new fo, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "corrected", this.canceledNavigationResolution = "replace", this.ngModule = K.get(_.h0i), this.console = K.get(_.c2e); const Kt = K.get(_.R0b); this.isNgZoneEnabled = Kt instanceof _.R0b && _.R0b.isInAngularZone(), this.resetConfig(Ue), this.currentUrlTree = function xe() { return new Y(new J([], {}), {}, null); }(), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.configLoader = new Mi(K, te, Nn => this.triggerEvent(new zn(Nn)), Nn => this.triggerEvent(new Xe(Nn))), this.routerState = Pi(this.currentUrlTree, this.rootComponentType), this.transitions = new at.X({ id: 0, targetPageId: 0, currentUrlTree: this.currentUrlTree, currentRawUrl: this.currentUrlTree, extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree), urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree), rawUrl: this.currentUrlTree, extras: {}, resolve: null, reject: null, promise: Promise.resolve(!0), source: "imperative", restoredState: null, currentSnapshot: this.routerState.snapshot, targetSnapshot: null, currentRouterState: this.routerState, targetRouterState: null, guards: { canActivateChecks: [], canDeactivateChecks: [] }, guardsResult: null }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations(); }
            get browserPageId() { var v; return null === (v = this.location.getState()) || void 0 === v ? void 0 : v.\u0275routerPageId; }
            setupNavigations(v) { const A = this.events; return v.pipe((0, Oe.h)(I => 0 !== I.id), (0, ve.U)(I => Object.assign(Object.assign({}, I), { extractedUrl: this.urlHandlingStrategy.extract(I.rawUrl) })), (0, lt.w)(I => { let B = !1, K = !1; return (0, he.of)(I).pipe((0, jt.b)(te => { this.currentNavigation = { id: te.id, initialUrl: te.currentRawUrl, extractedUrl: te.extractedUrl, trigger: te.source, extras: te.extras, previousNavigation: this.lastSuccessfulNavigation ? Object.assign(Object.assign({}, this.lastSuccessfulNavigation), { previousNavigation: null }) : null }; }), (0, lt.w)(te => { const Ue = this.browserUrlTree.toString(), kt = !this.navigated || te.extractedUrl.toString() !== Ue || Ue !== this.currentUrlTree.toString(); if (("reload" === this.onSameUrlNavigation || kt) && this.urlHandlingStrategy.shouldProcessUrl(te.rawUrl))
                return No(te.source) && (this.browserUrlTree = te.extractedUrl), (0, he.of)(te).pipe((0, lt.w)(Kt => { const Nn = this.transitions.getValue(); return A.next(new Wn(Kt.id, this.serializeUrl(Kt.extractedUrl), Kt.source, Kt.restoredState)), Nn !== this.transitions.getValue() ? vt.E : Promise.resolve(Kt); }), function g(C, x, v, A) { return (0, lt.w)(I => function Mr(C, x, v, A, I) { return new Tr(C, x, v, A, I).apply(); }(C, x, v, I.extractedUrl, A).pipe((0, ve.U)(B => Object.assign(Object.assign({}, I), { urlAfterRedirects: B })))); }(this.ngModule.injector, this.configLoader, this.urlSerializer, this.config), (0, jt.b)(Kt => { this.currentNavigation = Object.assign(Object.assign({}, this.currentNavigation), { finalUrl: Kt.urlAfterRedirects }); }), function sn(C, x, v, A, I) { return (0, yn.z)(B => function Ui(C, x, v, A, I = "emptyOnly", B = "legacy") { try {
                    const K = new Si(C, x, v, A, I, B).recognize();
                    return null === K ? Ms(new mi) : (0, he.of)(K);
                }
                catch (K) {
                    return Ms(K);
                } }(C, x, B.urlAfterRedirects, v(B.urlAfterRedirects), A, I).pipe((0, ve.U)(K => Object.assign(Object.assign({}, B), { targetSnapshot: K })))); }(this.rootComponentType, this.config, Kt => this.serializeUrl(Kt), this.paramsInheritanceStrategy, this.relativeLinkResolution), (0, jt.b)(Kt => { if ("eager" === this.urlUpdateStrategy) {
                    if (!Kt.extras.skipLocationChange) {
                        const Bn = this.urlHandlingStrategy.merge(Kt.urlAfterRedirects, Kt.rawUrl);
                        this.setBrowserUrl(Bn, Kt);
                    }
                    this.browserUrlTree = Kt.urlAfterRedirects;
                } const Nn = new Ji(Kt.id, this.serializeUrl(Kt.extractedUrl), this.serializeUrl(Kt.urlAfterRedirects), Kt.targetSnapshot); A.next(Nn); })); if (kt && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                const { id: Nn, extractedUrl: Bn, source: Ki, restoredState: Gi, extras: Ti } = te, qs = new Wn(Nn, this.serializeUrl(Bn), Ki, Gi);
                A.next(qs);
                const qr = Pi(Bn, this.rootComponentType).snapshot;
                return (0, he.of)(Object.assign(Object.assign({}, te), { targetSnapshot: qr, urlAfterRedirects: Bn, extras: Object.assign(Object.assign({}, Ti), { skipLocationChange: !1, replaceUrl: !1 }) }));
            } return this.rawUrlTree = te.rawUrl, te.resolve(null), vt.E; }), Ci(te => { const { targetSnapshot: Ue, id: kt, extractedUrl: mn, rawUrl: Kt, extras: { skipLocationChange: Nn, replaceUrl: Bn } } = te; return this.hooks.beforePreactivation(Ue, { navigationId: kt, appliedUrlTree: mn, rawUrlTree: Kt, skipLocationChange: !!Nn, replaceUrl: !!Bn }); }), (0, jt.b)(te => { const Ue = new qt(te.id, this.serializeUrl(te.extractedUrl), this.serializeUrl(te.urlAfterRedirects), te.targetSnapshot); this.triggerEvent(Ue); }), (0, ve.U)(te => Object.assign(Object.assign({}, te), { guards: F(te.targetSnapshot, te.currentSnapshot, this.rootContexts) })), function zt(C, x) { return (0, yn.z)(v => { const { targetSnapshot: A, currentSnapshot: I, guards: { canActivateChecks: B, canDeactivateChecks: K } } = v; return 0 === K.length && 0 === B.length ? (0, he.of)(Object.assign(Object.assign({}, v), { guardsResult: !0 })) : function hn(C, x, v, A) { return (0, _e.D)(C).pipe((0, yn.z)(I => function Fi(C, x, v, A, I) { const B = x && x.routeConfig ? x.routeConfig.canDeactivate : null; if (!B || 0 === B.length)
                return (0, he.of)(!0); const K = B.map(te => { const Ue = q(te, x, I); let kt; if (function Sr(C) { return C && zi(C.canDeactivate); }(Ue))
                kt = et(Ue.canDeactivate(C, x, v, A));
            else {
                if (!zi(Ue))
                    throw new Error("Invalid CanDeactivate guard");
                kt = et(Ue(C, x, v, A));
            } return kt.pipe(It()); }); return (0, he.of)(K).pipe(Es()); }(I.component, I.route, v, x, A)), It(I => !0 !== I, !0)); }(K, A, I, C).pipe((0, yn.z)(te => te && function Ar(C) { return "boolean" == typeof C; }(te) ? function Yt(C, x, v, A) { return (0, _e.D)(x).pipe((0, Bt.b)(I => (0, cn.z)(function xn(C, x) { return null !== C && x && x(new re(C)), (0, he.of)(!0); }(I.route.parent, A), function nn(C, x) { return null !== C && x && x(new ot(C)), (0, he.of)(!0); }(I.route, A), function li(C, x, v) { const A = x[x.length - 1], B = x.slice(0, x.length - 1).reverse().map(K => function $(C) { const x = C.routeConfig ? C.routeConfig.canActivateChild : null; return x && 0 !== x.length ? { node: C, guards: x } : null; }(K)).filter(K => null !== K).map(K => Ke(() => { const te = K.guards.map(Ue => { const kt = q(Ue, K.node, v); let mn; if (function Bi(C) { return C && zi(C.canActivateChild); }(kt))
                mn = et(kt.canActivateChild(A, C));
            else {
                if (!zi(kt))
                    throw new Error("Invalid CanActivateChild guard");
                mn = et(kt(A, C));
            } return mn.pipe(It()); }); return (0, he.of)(te).pipe(Es()); })); return (0, he.of)(B).pipe(Es()); }(C, I.path, v), function ai(C, x, v) { const A = x.routeConfig ? x.routeConfig.canActivate : null; if (!A || 0 === A.length)
                return (0, he.of)(!0); const I = A.map(B => Ke(() => { const K = q(B, x, v); let te; if (function Hr(C) { return C && zi(C.canActivate); }(K))
                te = et(K.canActivate(x, C));
            else {
                if (!zi(K))
                    throw new Error("Invalid CanActivate guard");
                te = et(K(x, C));
            } return te.pipe(It()); })); return (0, he.of)(I).pipe(Es()); }(C, I.route, v))), It(I => !0 !== I, !0)); }(A, B, C, x) : (0, he.of)(te)), (0, ve.U)(te => Object.assign(Object.assign({}, v), { guardsResult: te }))); }); }(this.ngModule.injector, te => this.triggerEvent(te)), (0, jt.b)(te => { if (ws(te.guardsResult)) {
                const kt = Jt(`Redirecting to "${this.serializeUrl(te.guardsResult)}"`);
                throw kt.url = te.guardsResult, kt;
            } const Ue = new ei(te.id, this.serializeUrl(te.extractedUrl), this.serializeUrl(te.urlAfterRedirects), te.targetSnapshot, !!te.guardsResult); this.triggerEvent(Ue); }), (0, Oe.h)(te => !!te.guardsResult || (this.restoreHistory(te), this.cancelNavigationTransition(te, ""), !1)), Ci(te => { if (te.guards.canActivateChecks.length)
                return (0, he.of)(te).pipe((0, jt.b)(Ue => { const kt = new Un(Ue.id, this.serializeUrl(Ue.extractedUrl), this.serializeUrl(Ue.urlAfterRedirects), Ue.targetSnapshot); this.triggerEvent(kt); }), (0, lt.w)(Ue => { let kt = !1; return (0, he.of)(Ue).pipe(function on(C, x) { return (0, yn.z)(v => { const { targetSnapshot: A, guards: { canActivateChecks: I } } = v; if (!I.length)
                    return (0, he.of)(v); let B = 0; return (0, _e.D)(I).pipe((0, Bt.b)(K => function ln(C, x, v, A) { return function Qn(C, x, v, A) { const I = Object.keys(C); if (0 === I.length)
                    return (0, he.of)({}); const B = {}; return (0, _e.D)(I).pipe((0, yn.z)(K => function Rn(C, x, v, A) { const I = q(C, x, A); return et(I.resolve ? I.resolve(x, v) : I(x, v)); }(C[K], x, v, A).pipe((0, jt.b)(te => { B[K] = te; }))), We(1), (0, yn.z)(() => Object.keys(B).length === I.length ? (0, he.of)(B) : vt.E)); }(C._resolve, C, x, A).pipe((0, ve.U)(B => (C._resolvedData = B, C.data = Object.assign(Object.assign({}, C.data), di(C, v).resolve), null))); }(K.route, A, C, x)), (0, jt.b)(() => B++), We(1), (0, yn.z)(K => B === I.length ? (0, he.of)(v) : vt.E)); }); }(this.paramsInheritanceStrategy, this.ngModule.injector), (0, jt.b)({ next: () => kt = !0, complete: () => { kt || (this.restoreHistory(Ue), this.cancelNavigationTransition(Ue, "At least one route resolver didn't emit any value.")); } })); }), (0, jt.b)(Ue => { const kt = new ti(Ue.id, this.serializeUrl(Ue.extractedUrl), this.serializeUrl(Ue.urlAfterRedirects), Ue.targetSnapshot); this.triggerEvent(kt); })); }), Ci(te => { const { targetSnapshot: Ue, id: kt, extractedUrl: mn, rawUrl: Kt, extras: { skipLocationChange: Nn, replaceUrl: Bn } } = te; return this.hooks.afterPreactivation(Ue, { navigationId: kt, appliedUrlTree: mn, rawUrlTree: Kt, skipLocationChange: !!Nn, replaceUrl: !!Bn }); }), (0, ve.U)(te => { const Ue = function xi(C, x, v) { const A = bi(C, x._root, v ? v._root : void 0); return new In(A, x); }(this.routeReuseStrategy, te.targetSnapshot, te.currentRouterState); return Object.assign(Object.assign({}, te), { targetRouterState: Ue }); }), (0, jt.b)(te => { this.currentUrlTree = te.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(te.urlAfterRedirects, te.rawUrl), this.routerState = te.targetRouterState, "deferred" === this.urlUpdateStrategy && (te.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, te), this.browserUrlTree = te.urlAfterRedirects); }), ((C, x, v) => (0, ve.U)(A => (new Vs(x, A.targetRouterState, A.currentRouterState, v).activate(C), A)))(this.rootContexts, this.routeReuseStrategy, te => this.triggerEvent(te)), (0, jt.b)({ next() { B = !0; }, complete() { B = !0; } }), (0, rn.x)(() => { var te; B || K || this.cancelNavigationTransition(I, `Navigation ID ${I.id} is not equal to the current navigation id ${this.navigationId}`), (null === (te = this.currentNavigation) || void 0 === te ? void 0 : te.id) === I.id && (this.currentNavigation = null); }), (0, mt.K)(te => { if (K = !0, function me(C) { return C && C[Sn]; }(te)) {
                const Ue = ws(te.url);
                Ue || (this.navigated = !0, this.restoreHistory(I, !0));
                const kt = new Yn(I.id, this.serializeUrl(I.extractedUrl), te.message);
                A.next(kt), Ue ? setTimeout(() => { const mn = this.urlHandlingStrategy.merge(te.url, this.rawUrlTree), Kt = { skipLocationChange: I.extras.skipLocationChange, replaceUrl: "eager" === this.urlUpdateStrategy || No(I.source) }; this.scheduleNavigation(mn, "imperative", null, Kt, { resolve: I.resolve, reject: I.reject, promise: I.promise }); }, 0) : I.resolve(!1);
            }
            else {
                this.restoreHistory(I, !0);
                const Ue = new si(I.id, this.serializeUrl(I.extractedUrl), te);
                A.next(Ue);
                try {
                    I.resolve(this.errorHandler(te));
                }
                catch (kt) {
                    I.reject(kt);
                }
            } return vt.E; })); })); }
            resetRootComponentType(v) { this.rootComponentType = v, this.routerState.root.component = this.rootComponentType; }
            setTransition(v) { this.transitions.next(Object.assign(Object.assign({}, this.transitions.value), v)); }
            initialNavigation() { this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 }); }
            setUpLocationChangeListener() { this.locationSubscription || (this.locationSubscription = this.location.subscribe(v => { const A = "popstate" === v.type ? "popstate" : "hashchange"; "popstate" === A && setTimeout(() => { var I; const B = { replaceUrl: !0 }, K = (null === (I = v.state) || void 0 === I ? void 0 : I.navigationId) ? v.state : null; if (K) {
                const Ue = Object.assign({}, K);
                delete Ue.navigationId, delete Ue.\u0275routerPageId, 0 !== Object.keys(Ue).length && (B.state = Ue);
            } const te = this.parseUrl(v.url); this.scheduleNavigation(te, A, K, B); }, 0); })); }
            get url() { return this.serializeUrl(this.currentUrlTree); }
            getCurrentNavigation() { return this.currentNavigation; }
            triggerEvent(v) { this.events.next(v); }
            resetConfig(v) { uo(v), this.config = v.map(N), this.navigated = !1, this.lastSuccessfulId = -1; }
            ngOnDestroy() { this.dispose(); }
            dispose() { this.transitions.complete(), this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = void 0), this.disposed = !0; }
            createUrlTree(v, A = {}) { const { relativeTo: I, queryParams: B, fragment: K, queryParamsHandling: te, preserveFragment: Ue } = A, kt = I || this.routerState.root, mn = Ue ? this.currentUrlTree.fragment : K; let Kt = null; switch (te) {
                case "merge":
                    Kt = Object.assign(Object.assign({}, this.currentUrlTree.queryParams), B);
                    break;
                case "preserve":
                    Kt = this.currentUrlTree.queryParams;
                    break;
                default: Kt = B || null;
            } return null !== Kt && (Kt = this.removeEmptyProps(Kt)), function Lo(C, x, v, A, I) { if (0 === v.length)
                return ms(x.root, x.root, x, A, I); const B = function rr(C) { if ("string" == typeof C[0] && 1 === C.length && "/" === C[0])
                return new ii(!0, 0, C); let x = 0, v = !1; const A = C.reduce((I, B, K) => { if ("object" == typeof B && null != B) {
                if (B.outlets) {
                    const te = {};
                    return X(B.outlets, (Ue, kt) => { te[kt] = "string" == typeof Ue ? Ue.split("/") : Ue; }), [...I, { outlets: te }];
                }
                if (B.segmentPath)
                    return [...I, B.segmentPath];
            } return "string" != typeof B ? [...I, B] : 0 === K ? (B.split("/").forEach((te, Ue) => { 0 == Ue && "." === te || (0 == Ue && "" === te ? v = !0 : ".." === te ? x++ : "" != te && I.push(te)); }), I) : [...I, B]; }, []); return new ii(v, x, A); }(v); if (B.toRoot())
                return ms(x.root, new J([], {}), x, A, I); const K = function Cs(C, x, v) { if (C.isAbsolute)
                return new or(x.root, !0, 0); if (-1 === v.snapshot._lastPathIndex) {
                const B = v.snapshot._urlSegment;
                return new or(B, B === x.root, 0);
            } const A = Ns(C.commands[0]) ? 0 : 1; return function Vr(C, x, v) { let A = C, I = x, B = v; for (; B > I;) {
                if (B -= I, A = A.parent, !A)
                    throw new Error("Invalid number of '../'");
                I = A.segments.length;
            } return new or(A, !1, I - B); }(v.snapshot._urlSegment, v.snapshot._lastPathIndex + A, C.numberOfDoubleDots); }(B, x, C), te = K.processChildren ? Bs(K.segmentGroup, K.index, B.commands) : ar(K.segmentGroup, K.index, B.commands); return ms(K.segmentGroup, te, x, A, I); }(kt, this.currentUrlTree, v, Kt, null != mn ? mn : null); }
            navigateByUrl(v, A = { skipLocationChange: !1 }) { const I = ws(v) ? v : this.parseUrl(v), B = this.urlHandlingStrategy.merge(I, this.rawUrlTree); return this.scheduleNavigation(B, "imperative", null, A); }
            navigate(v, A = { skipLocationChange: !1 }) { return function cl(C) { for (let x = 0; x < C.length; x++) {
                const v = C[x];
                if (null == v)
                    throw new Error(`The requested path contains ${v} segment at index ${x}`);
            } }(v), this.navigateByUrl(this.createUrlTree(v, A), A); }
            serializeUrl(v) { return this.urlSerializer.serialize(v); }
            parseUrl(v) { let A; try {
                A = this.urlSerializer.parse(v);
            }
            catch (I) {
                A = this.malformedUriErrorHandler(I, this.urlSerializer, v);
            } return A; }
            isActive(v, A) { let I; if (I = !0 === A ? Object.assign({}, ql) : !1 === A ? Object.assign({}, xs) : A, ws(v))
                return Et(this.currentUrlTree, v, I); const B = this.parseUrl(v); return Et(this.currentUrlTree, B, I); }
            removeEmptyProps(v) { return Object.keys(v).reduce((A, I) => { const B = v[I]; return null != B && (A[I] = B), A; }, {}); }
            processNavigations() { this.navigations.subscribe(v => { this.navigated = !0, this.lastSuccessfulId = v.id, this.currentPageId = v.targetPageId, this.events.next(new Hn(v.id, this.serializeUrl(v.extractedUrl), this.serializeUrl(this.currentUrlTree))), this.lastSuccessfulNavigation = this.currentNavigation, v.resolve(!0); }, v => { this.console.warn(`Unhandled Navigation Error: ${v}`); }); }
            scheduleNavigation(v, A, I, B, K) { var te, Ue, kt; if (this.disposed)
                return Promise.resolve(!1); const mn = this.transitions.value, Kt = No(A) && mn && !No(mn.source), Nn = mn.rawUrl.toString() === v.toString(), Bn = mn.id === (null === (te = this.currentNavigation) || void 0 === te ? void 0 : te.id); if (Kt && Nn && Bn)
                return Promise.resolve(!0); let Gi, Ti, qs; K ? (Gi = K.resolve, Ti = K.reject, qs = K.promise) : qs = new Promise((_o, dl) => { Gi = _o, Ti = dl; }); const qr = ++this.navigationId; let Qi; return "computed" === this.canceledNavigationResolution ? (0 === this.currentPageId && (I = this.location.getState()), Qi = I && I.\u0275routerPageId ? I.\u0275routerPageId : B.replaceUrl || B.skipLocationChange ? null !== (Ue = this.browserPageId) && void 0 !== Ue ? Ue : 0 : (null !== (kt = this.browserPageId) && void 0 !== kt ? kt : 0) + 1) : Qi = 0, this.setTransition({ id: qr, targetPageId: Qi, source: A, restoredState: I, currentUrlTree: this.currentUrlTree, currentRawUrl: this.rawUrlTree, rawUrl: v, extras: B, resolve: Gi, reject: Ti, promise: qs, currentSnapshot: this.routerState.snapshot, currentRouterState: this.routerState }), qs.catch(_o => Promise.reject(_o)); }
            setBrowserUrl(v, A) { const I = this.urlSerializer.serialize(v), B = Object.assign(Object.assign({}, A.extras.state), this.generateNgRouterState(A.id, A.targetPageId)); this.location.isCurrentPathEqualTo(I) || A.extras.replaceUrl ? this.location.replaceState(I, "", B) : this.location.go(I, "", B); }
            restoreHistory(v, A = !1) { var I, B; if ("computed" === this.canceledNavigationResolution) {
                const K = this.currentPageId - v.targetPageId;
                "popstate" !== v.source && "eager" !== this.urlUpdateStrategy && this.currentUrlTree !== (null === (I = this.currentNavigation) || void 0 === I ? void 0 : I.finalUrl) || 0 === K ? this.currentUrlTree === (null === (B = this.currentNavigation) || void 0 === B ? void 0 : B.finalUrl) && 0 === K && (this.resetState(v), this.browserUrlTree = v.currentUrlTree, this.resetUrlToCurrentUrlTree()) : this.location.historyGo(K);
            }
            else
                "replace" === this.canceledNavigationResolution && (A && this.resetState(v), this.resetUrlToCurrentUrlTree()); }
            resetState(v) { this.routerState = v.currentRouterState, this.currentUrlTree = v.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, v.rawUrl); }
            resetUrlToCurrentUrlTree() { this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId)); }
            cancelNavigationTransition(v, A) { const I = new Yn(v.id, this.serializeUrl(v.extractedUrl), A); this.triggerEvent(I), v.resolve(!1); }
            generateNgRouterState(v, A) { return "computed" === this.canceledNavigationResolution ? { navigationId: v, \u0275routerPageId: A } : { navigationId: v }; }
        } return C.\u0275fac = function (v) { _.$Z(); }, C.\u0275prov = _.Yz7({ token: C, factory: C.\u0275fac }), C; })(); function No(C) { return "imperative" !== C; } let ji = (() => { class C {
            constructor(v, A, I, B, K) { this.router = v, this.route = A, this.tabIndexAttribute = I, this.renderer = B, this.el = K, this.commands = null, this.onChanges = new ht.x, this.setTabIndexIfNotOnNativeEl("0"); }
            setTabIndexIfNotOnNativeEl(v) { if (null != this.tabIndexAttribute)
                return; const A = this.renderer, I = this.el.nativeElement; null !== v ? A.setAttribute(I, "tabindex", v) : A.removeAttribute(I, "tabindex"); }
            ngOnChanges(v) { this.onChanges.next(this); }
            set routerLink(v) { null != v ? (this.commands = Array.isArray(v) ? v : [v], this.setTabIndexIfNotOnNativeEl("0")) : (this.commands = null, this.setTabIndexIfNotOnNativeEl(null)); }
            onClick() { if (null === this.urlTree)
                return !0; const v = { skipLocationChange: zr(this.skipLocationChange), replaceUrl: zr(this.replaceUrl), state: this.state }; return this.router.navigateByUrl(this.urlTree, v), !0; }
            get urlTree() { return null === this.commands ? null : this.router.createUrlTree(this.commands, { relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route, queryParams: this.queryParams, fragment: this.fragment, queryParamsHandling: this.queryParamsHandling, preserveFragment: zr(this.preserveFragment) }); }
        } return C.\u0275fac = function (v) { return new (v || C)(_.Y36(yi), _.Y36(ni), _.$8M("tabindex"), _.Y36(_.Qsj), _.Y36(_.SBq)); }, C.\u0275dir = _.lG2({ type: C, selectors: [["", "routerLink", "", 5, "a", 5, "area"]], hostBindings: function (v, A) { 1 & v && _.NdJ("click", function () { return A.onClick(); }); }, inputs: { queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", preserveFragment: "preserveFragment", skipLocationChange: "skipLocationChange", replaceUrl: "replaceUrl", state: "state", relativeTo: "relativeTo", routerLink: "routerLink" }, features: [_.TTD] }), C; })(), $r = (() => { class C {
            constructor(v, A, I) { this.router = v, this.route = A, this.locationStrategy = I, this.commands = null, this.href = null, this.onChanges = new ht.x, this.subscription = v.events.subscribe(B => { B instanceof Hn && this.updateTargetUrlAndHref(); }); }
            set routerLink(v) { this.commands = null != v ? Array.isArray(v) ? v : [v] : null; }
            ngOnChanges(v) { this.updateTargetUrlAndHref(), this.onChanges.next(this); }
            ngOnDestroy() { this.subscription.unsubscribe(); }
            onClick(v, A, I, B, K) { if (0 !== v || A || I || B || K || "string" == typeof this.target && "_self" != this.target || null === this.urlTree)
                return !0; const te = { skipLocationChange: zr(this.skipLocationChange), replaceUrl: zr(this.replaceUrl), state: this.state }; return this.router.navigateByUrl(this.urlTree, te), !1; }
            updateTargetUrlAndHref() { this.href = null !== this.urlTree ? this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) : null; }
            get urlTree() { return null === this.commands ? null : this.router.createUrlTree(this.commands, { relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route, queryParams: this.queryParams, fragment: this.fragment, queryParamsHandling: this.queryParamsHandling, preserveFragment: zr(this.preserveFragment) }); }
        } return C.\u0275fac = function (v) { return new (v || C)(_.Y36(yi), _.Y36(ni), _.Y36(Dn.S$)); }, C.\u0275dir = _.lG2({ type: C, selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]], hostVars: 2, hostBindings: function (v, A) { 1 & v && _.NdJ("click", function (B) { return A.onClick(B.button, B.ctrlKey, B.shiftKey, B.altKey, B.metaKey); }), 2 & v && _.uIk("target", A.target)("href", A.href, _.LSH); }, inputs: { target: "target", queryParams: "queryParams", fragment: "fragment", queryParamsHandling: "queryParamsHandling", preserveFragment: "preserveFragment", skipLocationChange: "skipLocationChange", replaceUrl: "replaceUrl", state: "state", relativeTo: "relativeTo", routerLink: "routerLink" }, features: [_.TTD] }), C; })(); function zr(C) { return "" === C || !!C; } class Zl {
        } class Bo {
            preload(x, v) { return (0, he.of)(null); }
        } let Wr = (() => { class C {
            constructor(v, A, I, B) { this.router = v, this.injector = I, this.preloadingStrategy = B, this.loader = new Mi(I, A, Ue => v.triggerEvent(new zn(Ue)), Ue => v.triggerEvent(new Xe(Ue))); }
            setUpPreloading() { this.subscription = this.router.events.pipe((0, Oe.h)(v => v instanceof Hn), (0, Bt.b)(() => this.preload())).subscribe(() => { }); }
            preload() { const v = this.injector.get(_.h0i); return this.processRoutes(v, this.router.config); }
            ngOnDestroy() { this.subscription && this.subscription.unsubscribe(); }
            processRoutes(v, A) { const I = []; for (const B of A)
                if (B.loadChildren && !B.canLoad && B._loadedConfig) {
                    const K = B._loadedConfig;
                    I.push(this.processRoutes(K.module, K.routes));
                }
                else
                    B.loadChildren && !B.canLoad ? I.push(this.preloadConfig(v, B)) : B.children && I.push(this.processRoutes(v, B.children)); return (0, _e.D)(I).pipe((0, Tn.J)(), (0, ve.U)(B => { })); }
            preloadConfig(v, A) { return this.preloadingStrategy.preload(A, () => (A._loadedConfig ? (0, he.of)(A._loadedConfig) : this.loader.load(v.injector, A)).pipe((0, yn.z)(B => (A._loadedConfig = B, this.processRoutes(B.module, B.routes))))); }
        } return C.\u0275fac = function (v) { return new (v || C)(_.LFG(yi), _.LFG(_.Sil), _.LFG(_.zs3), _.LFG(Zl)); }, C.\u0275prov = _.Yz7({ token: C, factory: C.\u0275fac }), C; })(), Yr = (() => { class C {
            constructor(v, A, I = {}) { this.router = v, this.viewportScroller = A, this.options = I, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, I.scrollPositionRestoration = I.scrollPositionRestoration || "disabled", I.anchorScrolling = I.anchorScrolling || "disabled"; }
            init() { "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents(); }
            createScrollEvents() { return this.router.events.subscribe(v => { v instanceof Wn ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = v.navigationTrigger, this.restoredId = v.restoredState ? v.restoredState.navigationId : 0) : v instanceof Hn && (this.lastId = v.id, this.scheduleScrollEvent(v, this.router.parseUrl(v.urlAfterRedirects).fragment)); }); }
            consumeScrollEvents() { return this.router.events.subscribe(v => { v instanceof xt && (v.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(v.position) : v.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(v.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0])); }); }
            scheduleScrollEvent(v, A) { this.router.triggerEvent(new xt(v, "popstate" === this.lastSource ? this.store[this.restoredId] : null, A)); }
            ngOnDestroy() { this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe(); }
        } return C.\u0275fac = function (v) { _.$Z(); }, C.\u0275prov = _.Yz7({ token: C, factory: C.\u0275fac }), C; })(); const gr = new _.OlP("ROUTER_CONFIGURATION"), pr = new _.OlP("ROUTER_FORROOT_GUARD"), ec = [Dn.Ye, { provide: Fn, useClass: Li }, { provide: yi, useFactory: function Ea(C, x, v, A, I, B, K = {}, te, Ue) { const kt = new yi(null, C, x, v, A, I, ge(B)); return te && (kt.urlHandlingStrategy = te), Ue && (kt.routeReuseStrategy = Ue), function nc(C, x) { C.errorHandler && (x.errorHandler = C.errorHandler), C.malformedUriErrorHandler && (x.malformedUriErrorHandler = C.malformedUriErrorHandler), C.onSameUrlNavigation && (x.onSameUrlNavigation = C.onSameUrlNavigation), C.paramsInheritanceStrategy && (x.paramsInheritanceStrategy = C.paramsInheritanceStrategy), C.relativeLinkResolution && (x.relativeLinkResolution = C.relativeLinkResolution), C.urlUpdateStrategy && (x.urlUpdateStrategy = C.urlUpdateStrategy), C.canceledNavigationResolution && (x.canceledNavigationResolution = C.canceledNavigationResolution); }(K, kt), K.enableTracing && kt.events.subscribe(mn => { var Kt, Nn; null === (Kt = console.group) || void 0 === Kt || Kt.call(console, `Router Event: ${mn.constructor.name}`), console.log(mn.toString()), console.log(mn), null === (Nn = console.groupEnd) || void 0 === Nn || Nn.call(console); }), kt; }, deps: [Fn, As, Dn.Ye, _.zs3, _.Sil, ho, gr, [class _s {
                        }, new _.FiY], [class Is {
                        }, new _.FiY]] }, As, { provide: ni, useFactory: function yo(C) { return C.routerState.root; }, deps: [yi] }, Wr, Bo, class go {
                preload(x, v) { return v().pipe((0, mt.K)(() => (0, he.of)(null))); }
            }, { provide: gr, useValue: { enableTracing: !1 } }]; function Or() { return new _.PXZ("Router", yi); } let wa = (() => { class C {
            constructor(v, A) { }
            static forRoot(v, A) { return { ngModule: C, providers: [ec, mo(v), { provide: pr, useFactory: ul, deps: [[yi, new _.FiY, new _.tp0]] }, { provide: gr, useValue: A || {} }, { provide: Dn.S$, useFactory: tc, deps: [Dn.lw, [new _.tBr(Dn.mr), new _.FiY], gr] }, { provide: Yr, useFactory: po, deps: [yi, Dn.EM, gr] }, { provide: Zl, useExisting: A && A.preloadingStrategy ? A.preloadingStrategy : Bo }, { provide: _.PXZ, multi: !0, useFactory: Or }, [Kr, { provide: _.ip1, multi: !0, useFactory: jo, deps: [Kr] }, { provide: Qr, useFactory: vo, deps: [Kr] }, { provide: _.tb, multi: !0, useExisting: Qr }]] }; }
            static forChild(v) { return { ngModule: C, providers: [mo(v)] }; }
        } return C.\u0275fac = function (v) { return new (v || C)(_.LFG(pr, 8), _.LFG(yi, 8)); }, C.\u0275mod = _.oAB({ type: C }), C.\u0275inj = _.cJS({}), C; })(); function po(C, x, v) { return v.scrollOffset && x.setOffset(v.scrollOffset), new Yr(C, x, v); } function tc(C, x, v = {}) { return v.useHash ? new Dn.Do(C, x) : new Dn.b0(C, x); } function ul(C) { return "guarded"; } function mo(C) { return [{ provide: _.deG, multi: !0, useValue: C }, { provide: ho, multi: !0, useValue: C }]; } let Kr = (() => { class C {
            constructor(v) { this.injector = v, this.initNavigation = !1, this.destroyed = !1, this.resultOfPreactivationDone = new ht.x; }
            appInitializer() { return this.injector.get(Dn.V_, Promise.resolve(null)).then(() => { if (this.destroyed)
                return Promise.resolve(!0); let A = null; const I = new Promise(te => A = te), B = this.injector.get(yi), K = this.injector.get(gr); return "disabled" === K.initialNavigation ? (B.setUpLocationChangeListener(), A(!0)) : "enabled" === K.initialNavigation || "enabledBlocking" === K.initialNavigation ? (B.hooks.afterPreactivation = () => this.initNavigation ? (0, he.of)(null) : (this.initNavigation = !0, A(!0), this.resultOfPreactivationDone), B.initialNavigation()) : A(!0), I; }); }
            bootstrapListener(v) { const A = this.injector.get(gr), I = this.injector.get(Wr), B = this.injector.get(Yr), K = this.injector.get(yi), te = this.injector.get(_.z2F); v === te.components[0] && (("enabledNonBlocking" === A.initialNavigation || void 0 === A.initialNavigation) && K.initialNavigation(), I.setUpPreloading(), B.init(), K.resetRootComponentType(te.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete()); }
            ngOnDestroy() { this.destroyed = !0; }
        } return C.\u0275fac = function (v) { return new (v || C)(_.LFG(_.zs3)); }, C.\u0275prov = _.Yz7({ token: C, factory: C.\u0275fac }), C; })(); function jo(C) { return C.appInitializer.bind(C); } function vo(C) { return C.bootstrapListener.bind(C); } const Qr = new _.OlP("Router Initializer"); }, 483: (St, Pe, V) => { V.d(Pe, { jh: () => ph, vQ: () => Yp }); var _ = V(5e3); const ie = "undefined" == typeof window ? function (r) { return r(); } : window.requestAnimationFrame; function _e(r, s, n) { const o = n || (d => Array.prototype.slice.call(d)); let l = !1, u = []; return function (...d) { u = o(d), l || (l = !0, ie.call(window, () => { l = !1, r.apply(s, u); })); }; } const Te = r => "start" === r ? "left" : "end" === r ? "right" : "center", Le = (r, s, n) => "start" === r ? s : "end" === r ? n : (s + n) / 2; function Ee() { } const de = function () { let r = 0; return function () { return r++; }; }(); function ce(r) { return null == r; } function fe(r) { if (Array.isArray && Array.isArray(r))
            return !0; const s = Object.prototype.toString.call(r); return "[object" === s.substr(0, 7) && "Array]" === s.substr(-6); } function ke(r) { return null !== r && "[object Object]" === Object.prototype.toString.call(r); } const Ne = r => ("number" == typeof r || r instanceof Number) && isFinite(+r); function qe(r, s) { return Ne(r) ? r : s; } function Je(r, s) { return void 0 === r ? s : r; } const Ct = (r, s) => "string" == typeof r && r.endsWith("%") ? parseFloat(r) / 100 * s : +r; function rt(r, s, n) { if (r && "function" == typeof r.call)
            return r.apply(n, s); } function yt(r, s, n, o) { let l, u, d; if (fe(r))
            if (u = r.length, o)
                for (l = u - 1; l >= 0; l--)
                    s.call(n, r[l], l);
            else
                for (l = 0; l < u; l++)
                    s.call(n, r[l], l);
        else if (ke(r))
            for (d = Object.keys(r), u = d.length, l = 0; l < u; l++)
                s.call(n, r[d[l]], d[l]); } function tt(r, s) { let n, o, l, u; if (!r || !s || r.length !== s.length)
            return !1; for (n = 0, o = r.length; n < o; ++n)
            if (l = r[n], u = s[n], l.datasetIndex !== u.datasetIndex || l.index !== u.index)
                return !1; return !0; } function he(r) { if (fe(r))
            return r.map(he); if (ke(r)) {
            const s = Object.create(null), n = Object.keys(r), o = n.length;
            let l = 0;
            for (; l < o; ++l)
                s[n[l]] = he(r[n[l]]);
            return s;
        } return r; } function at(r) { return -1 === ["__proto__", "prototype", "constructor"].indexOf(r); } function cn(r, s, n, o) { if (!at(r))
            return; const l = s[r], u = n[r]; ke(l) && ke(u) ? vt(l, u, o) : s[r] = he(u); } function vt(r, s, n) { const o = fe(s) ? s : [s], l = o.length; if (!ke(r))
            return r; const u = (n = n || {}).merger || cn; for (let d = 0; d < l; ++d) {
            if (!ke(s = o[d]))
                continue;
            const h = Object.keys(s);
            for (let y = 0, D = h.length; y < D; ++y)
                u(h[y], r, s, n);
        } return r; } function ht(r, s) { return vt(r, s, { merger: pe }); } function pe(r, s, n) { if (!at(r))
            return; const o = s[r], l = n[r]; ke(o) && ke(l) ? ht(o, l) : Object.prototype.hasOwnProperty.call(s, r) || (s[r] = he(l)); } function ut(r, s) { const n = r.indexOf(".", s); return -1 === n ? r.length : n; } function Me(r, s) { if ("" === s)
            return r; let n = 0, o = ut(s, n); for (; r && o > n;)
            r = r[s.substr(n, o - n)], n = o + 1, o = ut(s, n); return r; } function Xt(r) { return r.charAt(0).toUpperCase() + r.slice(1); } const Zt = r => void 0 !== r, Cn = r => "function" == typeof r, It = (r, s) => { if (r.size !== s.size)
            return !1; for (const n of r)
            if (!s.has(n))
                return !1; return !0; }, lt = Math.PI, je = 2 * lt, mt = je + lt, Bt = Number.POSITIVE_INFINITY, yn = lt / 180, jt = lt / 2, rn = lt / 4, Tn = 2 * lt / 3, Dn = Math.log10, En = Math.sign; function Wn(r) { const s = Math.round(r); r = si(r, s, r / 1e3) ? s : r; const n = Math.pow(10, Math.floor(Dn(r))), o = r / n; return (o <= 1 ? 1 : o <= 2 ? 2 : o <= 5 ? 5 : 10) * n; } function Yn(r) { return !isNaN(parseFloat(r)) && isFinite(r); } function si(r, s, n) { return Math.abs(r - s) < n; } function qt(r, s, n) { let o, l, u; for (o = 0, l = r.length; o < l; o++)
            u = r[o][n], isNaN(u) || (s.min = Math.min(s.min, u), s.max = Math.max(s.max, u)); } function ei(r) { return r * (lt / 180); } function Un(r) { return r * (180 / lt); } function ti(r) { if (!Ne(r))
            return; let s = 1, n = 0; for (; Math.round(r * s) / s !== r;)
            s *= 10, n++; return n; } function zn(r, s) { const n = s.x - r.x, o = s.y - r.y, l = Math.sqrt(n * n + o * o); let u = Math.atan2(o, n); return u < -.5 * lt && (u += je), { angle: u, distance: l }; } function Xe(r, s) { return Math.sqrt(Math.pow(s.x - r.x, 2) + Math.pow(s.y - r.y, 2)); } function re(r, s) { return (r - s + mt) % je - lt; } function ne(r) { return (r % je + je) % je; } function ot(r, s, n, o) { const l = ne(r), u = ne(s), d = ne(n), h = ne(u - l), y = ne(d - l), D = ne(l - u), T = ne(l - d); return l === u || l === d || o && u === d || h > y && D < T; } function ze(r, s, n) { return Math.max(s, Math.min(n, r)); } function Ge(r, s, n, o = 1e-6) { return r >= Math.min(s, n) - o && r <= Math.max(s, n) + o; } const wt = r => 0 === r || 1 === r, en = (r, s, n) => -Math.pow(2, 10 * (r -= 1)) * Math.sin((r - s) * je / n), Sn = (r, s, n) => Math.pow(2, -10 * r) * Math.sin((r - s) * je / n) + 1, Jt = { linear: r => r, easeInQuad: r => r * r, easeOutQuad: r => -r * (r - 2), easeInOutQuad: r => (r /= .5) < 1 ? .5 * r * r : -.5 * (--r * (r - 2) - 1), easeInCubic: r => r * r * r, easeOutCubic: r => (r -= 1) * r * r + 1, easeInOutCubic: r => (r /= .5) < 1 ? .5 * r * r * r : .5 * ((r -= 2) * r * r + 2), easeInQuart: r => r * r * r * r, easeOutQuart: r => -((r -= 1) * r * r * r - 1), easeInOutQuart: r => (r /= .5) < 1 ? .5 * r * r * r * r : -.5 * ((r -= 2) * r * r * r - 2), easeInQuint: r => r * r * r * r * r, easeOutQuint: r => (r -= 1) * r * r * r * r + 1, easeInOutQuint: r => (r /= .5) < 1 ? .5 * r * r * r * r * r : .5 * ((r -= 2) * r * r * r * r + 2), easeInSine: r => 1 - Math.cos(r * jt), easeOutSine: r => Math.sin(r * jt), easeInOutSine: r => -.5 * (Math.cos(lt * r) - 1), easeInExpo: r => 0 === r ? 0 : Math.pow(2, 10 * (r - 1)), easeOutExpo: r => 1 === r ? 1 : 1 - Math.pow(2, -10 * r), easeInOutExpo: r => wt(r) ? r : r < .5 ? .5 * Math.pow(2, 10 * (2 * r - 1)) : .5 * (2 - Math.pow(2, -10 * (2 * r - 1))), easeInCirc: r => r >= 1 ? r : -(Math.sqrt(1 - r * r) - 1), easeOutCirc: r => Math.sqrt(1 - (r -= 1) * r), easeInOutCirc: r => (r /= .5) < 1 ? -.5 * (Math.sqrt(1 - r * r) - 1) : .5 * (Math.sqrt(1 - (r -= 2) * r) + 1), easeInElastic: r => wt(r) ? r : en(r, .075, .3), easeOutElastic: r => wt(r) ? r : Sn(r, .075, .3), easeInOutElastic(r) { const s = .1125; return wt(r) ? r : r < .5 ? .5 * en(2 * r, s, .45) : .5 + .5 * Sn(2 * r - 1, s, .45); }, easeInBack(r) { const s = 1.70158; return r * r * ((s + 1) * r - s); }, easeOutBack(r) { const s = 1.70158; return (r -= 1) * r * ((s + 1) * r + s) + 1; }, easeInOutBack(r) { let s = 1.70158; return (r /= .5) < 1 ? r * r * ((1 + (s *= 1.525)) * r - s) * .5 : .5 * ((r -= 2) * r * ((1 + (s *= 1.525)) * r + s) + 2); }, easeInBounce: r => 1 - Jt.easeOutBounce(1 - r), easeOutBounce(r) { const s = 7.5625, n = 2.75; return r < 1 / n ? s * r * r : r < 2 / n ? s * (r -= 1.5 / n) * r + .75 : r < 2.5 / n ? s * (r -= 2.25 / n) * r + .9375 : s * (r -= 2.625 / n) * r + .984375; }, easeInOutBounce: r => r < .5 ? .5 * Jt.easeInBounce(2 * r) : .5 * Jt.easeOutBounce(2 * r - 1) + .5 }, me = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, Fe = "0123456789ABCDEF", k = r => Fe[15 & r], G = r => Fe[(240 & r) >> 4] + Fe[15 & r], le = r => (240 & r) >> 4 == (15 & r); function X(r) { return r + .5 | 0; } const et = (r, s, n) => Math.max(Math.min(r, n), s); function xe(r) { return et(X(2.55 * r), 0, 255); } function He(r) { return et(X(255 * r), 0, 255); } function Ye(r) { return et(X(r / 2.55) / 100, 0, 1); } function Et(r) { return et(X(100 * r), 0, 100); } const un = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/, _i = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/; function we(r, s, n) { const o = s * Math.min(n, 1 - n), l = (u, d = (u + r / 30) % 12) => n - o * Math.max(Math.min(d - 3, 9 - d, 1), -1); return [l(0), l(8), l(4)]; } function se(r, s, n) { const o = (l, u = (l + r / 60) % 6) => n - n * s * Math.max(Math.min(u, 4 - u, 1), 0); return [o(5), o(3), o(1)]; } function Y(r, s, n) { const o = we(r, 1, .5); let l; for (s + n > 1 && (l = 1 / (s + n), s *= l, n *= l), l = 0; l < 3; l++)
            o[l] *= 1 - s - n, o[l] += s; return o; } function J(r) { const n = r.r / 255, o = r.g / 255, l = r.b / 255, u = Math.max(n, o, l), d = Math.min(n, o, l), h = (u + d) / 2; let y, D, T; return u !== d && (T = u - d, D = h > .5 ? T / (2 - u - d) : T / (u + d), y = u === n ? (o - l) / T + (o < l ? 6 : 0) : u === o ? (l - n) / T + 2 : (n - o) / T + 4, y = 60 * y + .5), [0 | y, D || 0, h]; } function Qe(r, s, n, o) { return (Array.isArray(s) ? r(s[0], s[1], s[2]) : r(s, n, o)).map(He); } function Nt(r, s, n) { return Qe(we, r, s, n); } function Fn(r) { return (r % 360 + 360) % 360; } const qn = { x: "dark", Z: "light", Y: "re", X: "blu", W: "gr", V: "medium", U: "slate", A: "ee", T: "ol", S: "or", B: "ra", C: "lateg", D: "ights", R: "in", Q: "turquois", E: "hi", P: "ro", O: "al", N: "le", M: "de", L: "yello", F: "en", K: "ch", G: "arks", H: "ea", I: "ightg", J: "wh" }, es = { OiceXe: "f0f8ff", antiquewEte: "faebd7", aqua: "ffff", aquamarRe: "7fffd4", azuY: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "0", blanKedOmond: "ffebcd", Xe: "ff", XeviTet: "8a2be2", bPwn: "a52a2a", burlywood: "deb887", caMtXe: "5f9ea0", KartYuse: "7fff00", KocTate: "d2691e", cSO: "ff7f50", cSnflowerXe: "6495ed", cSnsilk: "fff8dc", crimson: "dc143c", cyan: "ffff", xXe: "8b", xcyan: "8b8b", xgTMnPd: "b8860b", xWay: "a9a9a9", xgYF: "6400", xgYy: "a9a9a9", xkhaki: "bdb76b", xmagFta: "8b008b", xTivegYF: "556b2f", xSange: "ff8c00", xScEd: "9932cc", xYd: "8b0000", xsOmon: "e9967a", xsHgYF: "8fbc8f", xUXe: "483d8b", xUWay: "2f4f4f", xUgYy: "2f4f4f", xQe: "ced1", xviTet: "9400d3", dAppRk: "ff1493", dApskyXe: "bfff", dimWay: "696969", dimgYy: "696969", dodgerXe: "1e90ff", fiYbrick: "b22222", flSOwEte: "fffaf0", foYstWAn: "228b22", fuKsia: "ff00ff", gaRsbSo: "dcdcdc", ghostwEte: "f8f8ff", gTd: "ffd700", gTMnPd: "daa520", Way: "808080", gYF: "8000", gYFLw: "adff2f", gYy: "808080", honeyMw: "f0fff0", hotpRk: "ff69b4", RdianYd: "cd5c5c", Rdigo: "4b0082", ivSy: "fffff0", khaki: "f0e68c", lavFMr: "e6e6fa", lavFMrXsh: "fff0f5", lawngYF: "7cfc00", NmoncEffon: "fffacd", ZXe: "add8e6", ZcSO: "f08080", Zcyan: "e0ffff", ZgTMnPdLw: "fafad2", ZWay: "d3d3d3", ZgYF: "90ee90", ZgYy: "d3d3d3", ZpRk: "ffb6c1", ZsOmon: "ffa07a", ZsHgYF: "20b2aa", ZskyXe: "87cefa", ZUWay: "778899", ZUgYy: "778899", ZstAlXe: "b0c4de", ZLw: "ffffe0", lime: "ff00", limegYF: "32cd32", lRF: "faf0e6", magFta: "ff00ff", maPon: "800000", VaquamarRe: "66cdaa", VXe: "cd", VScEd: "ba55d3", VpurpN: "9370db", VsHgYF: "3cb371", VUXe: "7b68ee", VsprRggYF: "fa9a", VQe: "48d1cc", VviTetYd: "c71585", midnightXe: "191970", mRtcYam: "f5fffa", mistyPse: "ffe4e1", moccasR: "ffe4b5", navajowEte: "ffdead", navy: "80", Tdlace: "fdf5e6", Tive: "808000", TivedBb: "6b8e23", Sange: "ffa500", SangeYd: "ff4500", ScEd: "da70d6", pOegTMnPd: "eee8aa", pOegYF: "98fb98", pOeQe: "afeeee", pOeviTetYd: "db7093", papayawEp: "ffefd5", pHKpuff: "ffdab9", peru: "cd853f", pRk: "ffc0cb", plum: "dda0dd", powMrXe: "b0e0e6", purpN: "800080", YbeccapurpN: "663399", Yd: "ff0000", Psybrown: "bc8f8f", PyOXe: "4169e1", saddNbPwn: "8b4513", sOmon: "fa8072", sandybPwn: "f4a460", sHgYF: "2e8b57", sHshell: "fff5ee", siFna: "a0522d", silver: "c0c0c0", skyXe: "87ceeb", UXe: "6a5acd", UWay: "708090", UgYy: "708090", snow: "fffafa", sprRggYF: "ff7f", stAlXe: "4682b4", tan: "d2b48c", teO: "8080", tEstN: "d8bfd8", tomato: "ff6347", Qe: "40e0d0", viTet: "ee82ee", JHt: "f5deb3", wEte: "ffffff", wEtesmoke: "f5f5f5", Lw: "ffff00", LwgYF: "9acd32" }; let Dt; function z(r, s, n) { if (r) {
            let o = J(r);
            o[s] = Math.max(0, Math.min(o[s] + o[s] * n, 0 === s ? 360 : 1)), o = Nt(o), r.r = o[0], r.g = o[1], r.b = o[2];
        } } function Re(r, s) { return r && Object.assign(s || {}, r); } function ye(r) { var s = { r: 0, g: 0, b: 0, a: 255 }; return Array.isArray(r) ? r.length >= 3 && (s = { r: r[0], g: r[1], b: r[2], a: 255 }, r.length > 3 && (s.a = He(r[3]))) : (s = Re(r, { r: 0, g: 0, b: 0, a: 1 })).a = He(s.a), s; } function nt(r) { return "r" === r.charAt(0) ? function $t(r) { const s = un.exec(r); let o, l, u, n = 255; if (s) {
            if (s[7] !== o) {
                const d = +s[7];
                n = 255 & (s[8] ? xe(d) : 255 * d);
            }
            return o = +s[1], l = +s[3], u = +s[5], o = 255 & (s[2] ? xe(o) : o), l = 255 & (s[4] ? xe(l) : l), u = 255 & (s[6] ? xe(u) : u), { r: o, g: l, b: u, a: n };
        } }(r) : function Li(r) { const s = _i.exec(r); let o, n = 255; if (!s)
            return; s[5] !== o && (n = s[6] ? xe(+s[5]) : He(+s[5])); const l = Fn(+s[2]), u = +s[3] / 100, d = +s[4] / 100; return o = "hwb" === s[1] ? function Gt(r, s, n) { return Qe(Y, r, s, n); }(l, u, d) : "hsv" === s[1] ? function pn(r, s, n) { return Qe(se, r, s, n); }(l, u, d) : Nt(l, u, d), { r: o[0], g: o[1], b: o[2], a: n }; }(r); } class Wt {
            constructor(s) { if (s instanceof Wt)
                return s; const n = typeof s; let o; "object" === n ? o = ye(s) : "string" === n && (o = function gt(r) { var n, s = r.length; return "#" === r[0] && (4 === s || 5 === s ? n = { r: 255 & 17 * me[r[1]], g: 255 & 17 * me[r[2]], b: 255 & 17 * me[r[3]], a: 5 === s ? 17 * me[r[4]] : 255 } : (7 === s || 9 === s) && (n = { r: me[r[1]] << 4 | me[r[2]], g: me[r[3]] << 4 | me[r[4]], b: me[r[5]] << 4 | me[r[6]], a: 9 === s ? me[r[7]] << 4 | me[r[8]] : 255 })), n; }(s) || function vn(r) { Dt || (Dt = function ui() { const r = {}, s = Object.keys(es), n = Object.keys(qn); let o, l, u, d, h; for (o = 0; o < s.length; o++) {
                for (d = h = s[o], l = 0; l < n.length; l++)
                    u = n[l], h = h.replace(u, qn[u]);
                u = parseInt(es[d], 16), r[h] = [u >> 16 & 255, u >> 8 & 255, 255 & u];
            } return r; }(), Dt.transparent = [0, 0, 0, 0]); const s = Dt[r.toLowerCase()]; return s && { r: s[0], g: s[1], b: s[2], a: 4 === s.length ? s[3] : 255 }; }(s) || nt(s)), this._rgb = o, this._valid = !!o; }
            get valid() { return this._valid; }
            get rgb() { var s = Re(this._rgb); return s && (s.a = Ye(s.a)), s; }
            set rgb(s) { this._rgb = ye(s); }
            rgbString() { return this._valid ? function ri(r) { return r && (r.a < 255 ? `rgba(${r.r}, ${r.g}, ${r.b}, ${Ye(r.a)})` : `rgb(${r.r}, ${r.g}, ${r.b})`); }(this._rgb) : this._rgb; }
            hexString() { return this._valid ? function Vt(r) { var s = function ge(r) { return le(r.r) && le(r.g) && le(r.b) && le(r.a); }(r) ? k : G; return r && "#" + s(r.r) + s(r.g) + s(r.b) + (r.a < 255 ? s(r.a) : ""); }(this._rgb) : this._rgb; }
            hslString() { return this._valid ? function Oi(r) { if (!r)
                return; const s = J(r), n = s[0], o = Et(s[1]), l = Et(s[2]); return r.a < 255 ? `hsla(${n}, ${o}%, ${l}%, ${Ye(r.a)})` : `hsl(${n}, ${o}%, ${l}%)`; }(this._rgb) : this._rgb; }
            mix(s, n) { const o = this; if (s) {
                const l = o.rgb, u = s.rgb;
                let d;
                const h = n === d ? .5 : n, y = 2 * h - 1, D = l.a - u.a, T = ((y * D == -1 ? y : (y + D) / (1 + y * D)) + 1) / 2;
                d = 1 - T, l.r = 255 & T * l.r + d * u.r + .5, l.g = 255 & T * l.g + d * u.g + .5, l.b = 255 & T * l.b + d * u.b + .5, l.a = h * l.a + (1 - h) * u.a, o.rgb = l;
            } return o; }
            clone() { return new Wt(this.rgb); }
            alpha(s) { return this._rgb.a = He(s), this; }
            clearer(s) { return this._rgb.a *= 1 - s, this; }
            greyscale() { const s = this._rgb, n = X(.3 * s.r + .59 * s.g + .11 * s.b); return s.r = s.g = s.b = n, this; }
            opaquer(s) { return this._rgb.a *= 1 + s, this; }
            negate() { const s = this._rgb; return s.r = 255 - s.r, s.g = 255 - s.g, s.b = 255 - s.b, this; }
            lighten(s) { return z(this._rgb, 2, s), this; }
            darken(s) { return z(this._rgb, 2, -s), this; }
            saturate(s) { return z(this._rgb, 1, s), this; }
            desaturate(s) { return z(this._rgb, 1, -s), this; }
            rotate(s) { return function bs(r, s) { var n = J(r); n[0] = Fn(n[0] + s), n = Nt(n), r.r = n[0], r.g = n[1], r.b = n[2]; }(this._rgb, s), this; }
        } function Ht(r) { return new Wt(r); } const Ai = r => r instanceof CanvasGradient || r instanceof CanvasPattern; function gs(r) { return Ai(r) ? r : Ht(r); } function _n(r) { return Ai(r) ? r : Ht(r).saturate(.5).darken(.1).hexString(); } const ki = Object.create(null), ts = Object.create(null); function Ds(r, s) { if (!s)
            return r; const n = s.split("."); for (let o = 0, l = n.length; o < l; ++o) {
            const u = n[o];
            r = r[u] || (r[u] = Object.create(null));
        } return r; } function ns(r, s, n) { return "string" == typeof s ? vt(Ds(r, s), n) : vt(Ds(r, ""), s); } var fn = new class hi {
            constructor(s) { this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = n => n.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"], this.font = { family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif", size: 12, style: "normal", lineHeight: 1.2, weight: null }, this.hover = {}, this.hoverBackgroundColor = (n, o) => _n(o.backgroundColor), this.hoverBorderColor = (n, o) => _n(o.borderColor), this.hoverColor = (n, o) => _n(o.color), this.indexAxis = "x", this.interaction = { mode: "nearest", intersect: !0 }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(s); }
            set(s, n) { return ns(this, s, n); }
            get(s) { return Ds(this, s); }
            describe(s, n) { return ns(ts, s, n); }
            override(s, n) { return ns(ki, s, n); }
            route(s, n, o, l) { const u = Ds(this, s), d = Ds(this, o), h = "_" + n; Object.defineProperties(u, { [h]: { value: u[n], writable: !0 }, [n]: { enumerable: !0, get() { const y = this[h], D = d[l]; return ke(y) ? Object.assign({}, D, y) : Je(y, D); }, set(y) { this[h] = y; } } }); }
        }({ _scriptable: r => !r.startsWith("on"), _indexable: r => "events" !== r, hover: { _fallback: "interaction" }, interaction: { _scriptable: !1, _indexable: !1 } }); function An(r, s, n, o, l) { let u = s[l]; return u || (u = s[l] = r.measureText(l).width, n.push(l)), u > o && (o = u), o; } function In(r, s, n, o) { let l = (o = o || {}).data = o.data || {}, u = o.garbageCollect = o.garbageCollect || []; o.font !== s && (l = o.data = {}, u = o.garbageCollect = [], o.font = s), r.save(), r.font = s; let d = 0; const h = n.length; let y, D, T, P, U; for (y = 0; y < h; y++)
            if (P = n[y], null != P && !0 !== fe(P))
                d = An(r, l, u, d, P);
            else if (fe(P))
                for (D = 0, T = P.length; D < T; D++)
                    U = P[D], null != U && !fe(U) && (d = An(r, l, u, d, U)); r.restore(); const Q = u.length / 2; if (Q > n.length) {
            for (y = 0; y < Q; y++)
                delete l[u[y]];
            u.splice(0, Q);
        } return d; } function Pi(r, s, n) { const o = r.currentDevicePixelRatio, l = 0 !== n ? Math.max(n / 2, .5) : 0; return Math.round((s - l) * o) / o + l; } function Ls(r, s) { (s = s || r.getContext("2d")).save(), s.resetTransform(), s.clearRect(0, 0, r.width, r.height), s.restore(); } function ni(r, s, n, o) { let l, u, d, h, y; const D = s.pointStyle, T = s.rotation, P = s.radius; let U = (T || 0) * yn; if (D && "object" == typeof D && (l = D.toString(), "[object HTMLImageElement]" === l || "[object HTMLCanvasElement]" === l))
            return r.save(), r.translate(n, o), r.rotate(U), r.drawImage(D, -D.width / 2, -D.height / 2, D.width, D.height), void r.restore(); if (!(isNaN(P) || P <= 0)) {
            switch (r.beginPath(), D) {
                default:
                    r.arc(n, o, P, 0, je), r.closePath();
                    break;
                case "triangle":
                    r.moveTo(n + Math.sin(U) * P, o - Math.cos(U) * P), U += Tn, r.lineTo(n + Math.sin(U) * P, o - Math.cos(U) * P), U += Tn, r.lineTo(n + Math.sin(U) * P, o - Math.cos(U) * P), r.closePath();
                    break;
                case "rectRounded":
                    y = .516 * P, h = P - y, u = Math.cos(U + rn) * h, d = Math.sin(U + rn) * h, r.arc(n - u, o - d, y, U - lt, U - jt), r.arc(n + d, o - u, y, U - jt, U), r.arc(n + u, o + d, y, U, U + jt), r.arc(n - d, o + u, y, U + jt, U + lt), r.closePath();
                    break;
                case "rect":
                    if (!T) {
                        h = Math.SQRT1_2 * P, r.rect(n - h, o - h, 2 * h, 2 * h);
                        break;
                    }
                    U += rn;
                case "rectRot":
                    u = Math.cos(U) * P, d = Math.sin(U) * P, r.moveTo(n - u, o - d), r.lineTo(n + d, o - u), r.lineTo(n + u, o + d), r.lineTo(n - d, o + u), r.closePath();
                    break;
                case "crossRot": U += rn;
                case "cross":
                    u = Math.cos(U) * P, d = Math.sin(U) * P, r.moveTo(n - u, o - d), r.lineTo(n + u, o + d), r.moveTo(n + d, o - u), r.lineTo(n - d, o + u);
                    break;
                case "star":
                    u = Math.cos(U) * P, d = Math.sin(U) * P, r.moveTo(n - u, o - d), r.lineTo(n + u, o + d), r.moveTo(n + d, o - u), r.lineTo(n - d, o + u), U += rn, u = Math.cos(U) * P, d = Math.sin(U) * P, r.moveTo(n - u, o - d), r.lineTo(n + u, o + d), r.moveTo(n + d, o - u), r.lineTo(n - d, o + u);
                    break;
                case "line":
                    u = Math.cos(U) * P, d = Math.sin(U) * P, r.moveTo(n - u, o - d), r.lineTo(n + u, o + d);
                    break;
                case "dash": r.moveTo(n, o), r.lineTo(n + Math.cos(U) * P, o + Math.sin(U) * P);
            }
            r.fill(), s.borderWidth > 0 && r.stroke();
        } } function di(r, s, n) { return n = n || .5, !s || r && r.x > s.left - n && r.x < s.right + n && r.y > s.top - n && r.y < s.bottom + n; } function ps(r, s) { r.save(), r.beginPath(), r.rect(s.left, s.top, s.right - s.left, s.bottom - s.top), r.clip(); } function is(r) { r.restore(); } function ks(r, s, n, o, l) { if (!s)
            return r.lineTo(n.x, n.y); if ("middle" === l) {
            const u = (s.x + n.x) / 2;
            r.lineTo(u, s.y), r.lineTo(u, n.y);
        }
        else
            "after" === l != !!o ? r.lineTo(s.x, n.y) : r.lineTo(n.x, s.y); r.lineTo(n.x, n.y); } function pi(r, s, n, o) { if (!s)
            return r.lineTo(n.x, n.y); r.bezierCurveTo(o ? s.cp1x : s.cp2x, o ? s.cp1y : s.cp2y, o ? n.cp2x : n.cp1x, o ? n.cp2y : n.cp1y, n.x, n.y); } function ss(r, s, n, o, l, u = {}) { const d = fe(s) ? s : [s], h = u.strokeWidth > 0 && "" !== u.strokeColor; let y, D; for (r.save(), r.font = l.string, function wr(r, s) { s.translation && r.translate(s.translation[0], s.translation[1]), ce(s.rotation) || r.rotate(s.rotation), s.color && (r.fillStyle = s.color), s.textAlign && (r.textAlign = s.textAlign), s.textBaseline && (r.textBaseline = s.textBaseline); }(r, u), y = 0; y < d.length; ++y)
            D = d[y], h && (u.strokeColor && (r.strokeStyle = u.strokeColor), ce(u.strokeWidth) || (r.lineWidth = u.strokeWidth), r.strokeText(D, n, o, u.maxWidth)), r.fillText(D, n, o, u.maxWidth), Er(r, n, o, D, u), o += l.lineHeight; r.restore(); } function Er(r, s, n, o, l) { if (l.strikethrough || l.underline) {
            const u = r.measureText(o), d = s - u.actualBoundingBoxLeft, h = s + u.actualBoundingBoxRight, y = n - u.actualBoundingBoxAscent, D = n + u.actualBoundingBoxDescent, T = l.strikethrough ? (y + D) / 2 : D;
            r.strokeStyle = r.fillStyle, r.beginPath(), r.lineWidth = l.decorationWidth || 2, r.moveTo(d, T), r.lineTo(h, T), r.stroke();
        } } function xi(r, s) { const { x: n, y: o, w: l, h: u, radius: d } = s; r.arc(n + d.topLeft, o + d.topLeft, d.topLeft, -jt, lt, !0), r.lineTo(n, o + u - d.bottomLeft), r.arc(n + d.bottomLeft, o + u - d.bottomLeft, d.bottomLeft, lt, jt, !0), r.lineTo(n + l - d.bottomRight, o + u), r.arc(n + l - d.bottomRight, o + u - d.bottomRight, d.bottomRight, jt, 0, !0), r.lineTo(n + l, o + d.topRight), r.arc(n + l - d.topRight, o + d.topRight, d.topRight, 0, -jt, !0), r.lineTo(n + d.topLeft, o); } const bi = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/), Ws = new RegExp(/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/); function Fo(r, s) { const n = ("" + r).match(bi); if (!n || "normal" === n[1])
            return 1.2 * s; switch (r = +n[2], n[3]) {
            case "px": return r;
            case "%": r /= 100;
        } return s * r; } const Lo = r => +r || 0; function Ns(r, s) { const n = {}, o = ke(s), l = o ? Object.keys(s) : s, u = ke(r) ? o ? d => Je(r[d], r[s[d]]) : d => r[d] : () => r; for (const d of l)
            n[d] = Lo(u(d)); return n; } function Ys(r) { return Ns(r, { top: "y", right: "x", bottom: "y", left: "x" }); } function ms(r) { return Ns(r, ["topLeft", "topRight", "bottomLeft", "bottomRight"]); } function oi(r) { const s = Ys(r); return s.width = s.left + s.right, s.height = s.top + s.bottom, s; } function ii(r, s) { let n = Je((r = r || {}).size, (s = s || fn.font).size); "string" == typeof n && (n = parseInt(n, 10)); let o = Je(r.style, s.style); o && !("" + o).match(Ws) && (console.warn('Invalid font style specified: "' + o + '"'), o = ""); const l = { family: Je(r.family, s.family), lineHeight: Fo(Je(r.lineHeight, s.lineHeight), n), size: n, style: o, weight: Je(r.weight, s.weight), string: "" }; return l.string = function Ri(r) { return !r || ce(r.size) || ce(r.family) ? null : (r.style ? r.style + " " : "") + (r.weight ? r.weight + " " : "") + r.size + "px " + r.family; }(l), l; } function rr(r, s, n, o) { let u, d, h, l = !0; for (u = 0, d = r.length; u < d; ++u)
            if (h = r[u], void 0 !== h && (void 0 !== s && "function" == typeof h && (h = h(s), l = !1), void 0 !== n && fe(h) && (h = h[n % h.length], l = !1), void 0 !== h))
                return o && !l && (o.cacheable = !1), h; } function Cs(r, s) { return Object.assign(Object.create(r), s); } function Vr(r, s, n) { n = n || (d => r[d] < s); let u, o = r.length - 1, l = 0; for (; o - l > 1;)
            u = l + o >> 1, n(u) ? l = u : o = u; return { lo: l, hi: o }; } const rs = (r, s, n) => Vr(r, n, o => r[o][s] < n), ar = (r, s, n) => Vr(r, n, o => r[o][s] >= n), lo = ["push", "pop", "shift", "splice", "unshift"]; function co(r, s) { const n = r._chartjs; if (!n)
            return; const o = n.listeners, l = o.indexOf(s); -1 !== l && o.splice(l, 1), !(o.length > 0) && (lo.forEach(u => { delete r[u]; }), delete r._chartjs); } function os(r) { const s = new Set; let n, o; for (n = 0, o = r.length; n < o; ++n)
            s.add(r[n]); return s.size === o ? r : Array.from(s); } function js(r, s = [""], n = r, o, l = (() => r[0])) { Zt(o) || (o = dr("_fallback", r)); const u = { [Symbol.toStringTag]: "Object", _cacheable: !0, _scopes: r, _rootScopes: n, _fallback: o, _getTarget: l, override: d => js([d, ...r], s, n, o) }; return new Proxy(u, { deleteProperty: (d, h) => (delete d[h], delete d._keys, delete r[0][h], !0), get: (d, h) => zi(d, h, () => function As(r, s, n, o) { let l; for (const u of s)
                if (l = dr(cr(u, r), n), Zt(l))
                    return Hs(r, l) ? ys(n, o, r, l) : l; }(h, s, r, d)), getOwnPropertyDescriptor: (d, h) => Reflect.getOwnPropertyDescriptor(d._scopes[0], h), getPrototypeOf: () => Reflect.getPrototypeOf(r[0]), has: (d, h) => Kn(d).includes(h), ownKeys: d => Kn(d), set(d, h, y) { const D = d._storage || (d._storage = l()); return d[h] = D[h] = y, delete d._keys, !0; } }); } function Ni(r, s, n, o) { const l = { _cacheable: !1, _proxy: r, _context: s, _subProxy: n, _stack: new Set, _descriptors: Vs(r, o), setContext: u => Ni(r, u, n, o), override: u => Ni(r.override(u), s, n, o) }; return new Proxy(l, { deleteProperty: (u, d) => (delete u[d], delete r[d], !0), get: (u, d, h) => zi(u, d, () => function Ar(r, s, n) { const { _proxy: o, _context: l, _subProxy: u, _descriptors: d } = r; let h = o[s]; return Cn(h) && d.isScriptable(s) && (h = function ws(r, s, n, o) { const { _proxy: l, _context: u, _subProxy: d, _stack: h } = n; if (h.has(r))
                throw new Error("Recursion detected: " + Array.from(h).join("->") + "->" + r); return h.add(r), s = s(u, d || o), h.delete(r), Hs(r, s) && (s = ys(l._scopes, l, r, s)), s; }(s, h, r, n)), fe(h) && h.length && (h = function ur(r, s, n, o) { const { _proxy: l, _context: u, _subProxy: d, _descriptors: h } = n; if (Zt(u.index) && o(r))
                s = s[u.index % s.length];
            else if (ke(s[0])) {
                const y = s, D = l._scopes.filter(T => T !== y);
                s = [];
                for (const T of y) {
                    const P = ys(D, l, r, T);
                    s.push(Ni(P, u, d && d[r], h));
                }
            } return s; }(s, h, r, d.isIndexable)), Hs(s, h) && (h = Ni(h, l, u && u[s], d)), h; }(u, d, h)), getOwnPropertyDescriptor: (u, d) => u._descriptors.allKeys ? Reflect.has(r, d) ? { enumerable: !0, configurable: !0 } : void 0 : Reflect.getOwnPropertyDescriptor(r, d), getPrototypeOf: () => Reflect.getPrototypeOf(r), has: (u, d) => Reflect.has(r, d), ownKeys: () => Reflect.ownKeys(r), set: (u, d, h) => (r[d] = h, delete u[d], !0) }); } function Vs(r, s = { scriptable: !0, indexable: !0 }) { const { _scriptable: n = s.scriptable, _indexable: o = s.indexable, _allKeys: l = s.allKeys } = r; return { allKeys: l, scriptable: n, indexable: o, isScriptable: Cn(n) ? n : () => n, isIndexable: Cn(o) ? o : () => o }; } const cr = (r, s) => r ? r + Xt(s) : s, Hs = (r, s) => ke(s) && "adapters" !== r && (null === Object.getPrototypeOf(s) || s.constructor === Object); function zi(r, s, n) { if (Object.prototype.hasOwnProperty.call(r, s))
            return r[s]; const o = n(); return r[s] = o, o; } function Hr(r, s, n) { return Cn(r) ? r(s, n) : r; } const Bi = (r, s) => !0 === r ? s : "string" == typeof r ? Me(s, r) : void 0; function Sr(r, s, n, o, l) { for (const u of s) {
            const d = Bi(n, u);
            if (d) {
                r.add(d);
                const h = Hr(d._fallback, n, l);
                if (Zt(h) && h !== n && h !== o)
                    return h;
            }
            else if (!1 === d && Zt(o) && n !== o)
                return null;
        } return !1; } function ys(r, s, n, o) { const l = s._rootScopes, u = Hr(s._fallback, n, o), d = [...r, ...l], h = new Set; h.add(o); let y = Es(h, d, n, u || n, o); return !(null === y || Zt(u) && u !== n && (y = Es(h, d, u, y, o), null === y)) && js(Array.from(h), [""], l, u, () => function ko(r, s, n) { const o = r._getTarget(); s in o || (o[s] = {}); const l = o[s]; return fe(l) && ke(n) ? n : l; }(s, n, o)); } function Es(r, s, n, o, l) { for (; n;)
            n = Sr(r, s, n, o, l); return n; } function dr(r, s) { for (const n of s) {
            if (!n)
                continue;
            const o = n[r];
            if (Zt(o))
                return o;
        } } function Kn(r) { let s = r._keys; return s || (s = r._keys = function fr(r) { const s = new Set; for (const n of r)
            for (const o of Object.keys(n).filter(l => !l.startsWith("_")))
                s.add(o); return Array.from(s); }(r._scopes)), s; } const uo = Number.EPSILON || 1e-14, Gn = (r, s) => s < r.length && !r[s].skip && r[s], M = r => "x" === r ? "y" : "x"; function N(r, s, n, o) { const l = r.skip ? s : r, u = s, d = n.skip ? s : n, h = Xe(u, l), y = Xe(d, u); let D = h / (h + y), T = y / (h + y); D = isNaN(D) ? 0 : D, T = isNaN(T) ? 0 : T; const P = o * D, U = o * T; return { previous: { x: u.x - P * (d.x - l.x), y: u.y - P * (d.y - l.y) }, next: { x: u.x + U * (d.x - l.x), y: u.y + U * (d.y - l.y) } }; } function Be(r, s, n) { return Math.max(Math.min(r, n), s); } function Mt(r, s, n, o, l) { let u, d, h, y; if (s.spanGaps && (r = r.filter(D => !D.skip)), "monotone" === s.cubicInterpolationMode)
            !function oe(r, s = "x") { const n = M(s), o = r.length, l = Array(o).fill(0), u = Array(o); let d, h, y, D = Gn(r, 0); for (d = 0; d < o; ++d)
                if (h = y, y = D, D = Gn(r, d + 1), y) {
                    if (D) {
                        const T = D[s] - y[s];
                        l[d] = 0 !== T ? (D[n] - y[n]) / T : 0;
                    }
                    u[d] = h ? D ? En(l[d - 1]) !== En(l[d]) ? 0 : (l[d - 1] + l[d]) / 2 : l[d - 1] : l[d];
                } (function S(r, s, n) { const o = r.length; let l, u, d, h, y, D = Gn(r, 0); for (let T = 0; T < o - 1; ++T)
                if (y = D, D = Gn(r, T + 1), y && D) {
                    if (si(s[T], 0, uo)) {
                        n[T] = n[T + 1] = 0;
                        continue;
                    }
                    l = n[T] / s[T], u = n[T + 1] / s[T], h = Math.pow(l, 2) + Math.pow(u, 2), !(h <= 9) && (d = 3 / Math.sqrt(h), n[T] = l * d * s[T], n[T + 1] = u * d * s[T]);
                } })(r, l, u), function H(r, s, n = "x") { const o = M(n), l = r.length; let u, d, h, y = Gn(r, 0); for (let D = 0; D < l; ++D) {
                if (d = h, h = y, y = Gn(r, D + 1), !h)
                    continue;
                const T = h[n], P = h[o];
                d && (u = (T - d[n]) / 3, h[`cp1${n}`] = T - u, h[`cp1${o}`] = P - u * s[D]), y && (u = (y[n] - T) / 3, h[`cp2${n}`] = T + u, h[`cp2${o}`] = P + u * s[D]);
            } }(r, u, s); }(r, l);
        else {
            let D = o ? r[r.length - 1] : r[0];
            for (u = 0, d = r.length; u < d; ++u)
                h = r[u], y = N(D, h, r[Math.min(u + 1, d - (o ? 0 : 1)) % d], s.tension), h.cp1x = y.previous.x, h.cp1y = y.previous.y, h.cp2x = y.next.x, h.cp2y = y.next.y, D = h;
        } s.capBezierPoints && function it(r, s) { let n, o, l, u, d, h = di(r[0], s); for (n = 0, o = r.length; n < o; ++n)
            d = u, u = h, h = n < o - 1 && di(r[n + 1], s), u && (l = r[n], d && (l.cp1x = Be(l.cp1x, s.left, s.right), l.cp1y = Be(l.cp1y, s.top, s.bottom)), h && (l.cp2x = Be(l.cp2x, s.left, s.right), l.cp2y = Be(l.cp2y, s.top, s.bottom))); }(r, n); } function jn() { return "undefined" != typeof window && "undefined" != typeof document; } function On(r) { let s = r.parentNode; return s && "[object ShadowRoot]" === s.toString() && (s = s.host), s; } function kn(r, s, n) { let o; return "string" == typeof r ? (o = parseInt(r, 10), -1 !== r.indexOf("%") && (o = o / 100 * s.parentNode[n])) : o = r, o; } const dn = r => window.getComputedStyle(r, null), Vn = ["top", "right", "bottom", "left"]; function Ot(r, s, n) { const o = {}; n = n ? "-" + n : ""; for (let l = 0; l < 4; l++) {
            const u = Vn[l];
            o[u] = parseFloat(r[s + "-" + u + n]) || 0;
        } return o.width = o.left + o.right, o.height = o.top + o.bottom, o; } function vs(r, s) { const { canvas: n, currentDevicePixelRatio: o } = s, l = dn(n), u = "border-box" === l.boxSizing, d = Ot(l, "padding"), h = Ot(l, "border", "width"), { x: y, y: D, box: T } = function Wi(r, s) { const n = r.native || r, o = n.touches, l = o && o.length ? o[0] : n, { offsetX: u, offsetY: d } = l; let y, D, h = !1; if (((r, s, n) => (r > 0 || s > 0) && (!n || !n.shadowRoot))(u, d, n.target))
            y = u, D = d;
        else {
            const T = s.getBoundingClientRect();
            y = l.clientX - T.left, D = l.clientY - T.top, h = !0;
        } return { x: y, y: D, box: h }; }(r, n), P = d.left + (T && h.left), U = d.top + (T && h.top); let { width: Q, height: ee } = s; return u && (Q -= d.width + h.width, ee -= d.height + h.height), { x: Math.round((y - P) / Q * n.width / o), y: Math.round((D - U) / ee * n.height / o) }; } const Us = r => Math.round(10 * r) / 10; function Tr(r, s, n) { const o = s || 1, l = Math.floor(r.height * o), u = Math.floor(r.width * o); r.height = l / o, r.width = u / o; const d = r.canvas; return d.style && (n || !d.style.height && !d.style.width) && (d.style.height = `${r.height}px`, d.style.width = `${r.width}px`), (r.currentDevicePixelRatio !== o || d.height !== l || d.width !== u) && (r.currentDevicePixelRatio = o, d.height = l, d.width = u, r.ctx.setTransform(o, 0, 0, o, 0, 0), !0); } const ft = function () { let r = !1; try {
            const s = { get passive() { return r = !0, !1; } };
            window.addEventListener("test", null, s), window.removeEventListener("test", null, s);
        }
        catch (s) { } return r; }(); function R(r, s) { const n = function fi(r, s) { return dn(r).getPropertyValue(s); }(r, s), o = n && n.match(/^(\d+)(\.\d+)?px$/); return o ? +o[1] : void 0; } function g(r, s, n, o) { return { x: r.x + n * (s.x - r.x), y: r.y + n * (s.y - r.y) }; } function p(r, s, n, o) { return { x: r.x + n * (s.x - r.x), y: "middle" === o ? n < .5 ? r.y : s.y : "after" === o ? n < 1 ? r.y : s.y : n > 0 ? s.y : r.y }; } function E(r, s, n, o) { const l = { x: r.cp2x, y: r.cp2y }, u = { x: s.cp1x, y: s.cp1y }, d = g(r, l, n), h = g(l, u, n), y = g(u, s, n), D = g(d, h, n), T = g(h, y, n); return g(D, T, n); } const F = new Map; function q(r, s, n) { return function $(r, s) { s = s || {}; const n = r + JSON.stringify(s); let o = F.get(n); return o || (o = new Intl.NumberFormat(r, s), F.set(n, o)), o; }(s, n).format(r); } function $e(r, s, n) { return r ? function (r, s) { return { x: n => r + r + s - n, setWidth(n) { s = n; }, textAlign: n => "center" === n ? n : "right" === n ? "left" : "right", xPlus: (n, o) => n - o, leftForLtr: (n, o) => n - o }; }(s, n) : { x: r => r, setWidth(r) { }, textAlign: r => r, xPlus: (r, s) => r + s, leftForLtr: (r, s) => r }; } function _t(r, s) { let n, o; ("ltr" === s || "rtl" === s) && (n = r.canvas.style, o = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")], n.setProperty("direction", s, "important"), r.prevTextDirection = o); } function Pt(r, s) { void 0 !== s && (delete r.prevTextDirection, r.canvas.style.setProperty("direction", s[0], s[1])); } function zt(r) { return "angle" === r ? { between: ot, compare: re, normalize: ne } : { between: Ge, compare: (s, n) => s - n, normalize: s => s }; } function hn({ start: r, end: s, count: n, loop: o, style: l }) { return { start: r % n, end: s % n, loop: o && (s - r + 1) % n == 0, style: l }; } function nn(r, s, n) { if (!n)
            return [r]; const { property: o, start: l, end: u } = n, d = s.length, { compare: h, between: y, normalize: D } = zt(o), { start: T, end: P, loop: U, style: Q } = function Yt(r, s, n) { const { property: o, start: l, end: u } = n, { between: d, normalize: h } = zt(o), y = s.length; let U, Q, { start: D, end: T, loop: P } = r; if (P) {
            for (D += y, T += y, U = 0, Q = y; U < Q && d(h(s[D % y][o]), l, u); ++U)
                D--, T--;
            D %= y, T %= y;
        } return T < D && (T += y), { start: D, end: T, loop: P, style: r.style }; }(r, s, n), ee = []; let Ie, dt, At, ue = !1, Ce = null; for (let Qt = T, tn = T; Qt <= P; ++Qt)
            dt = s[Qt % d], !dt.skip && (Ie = D(dt[o]), Ie !== At && (ue = y(Ie, l, u), null === Ce && (ue || y(l, At, Ie) && 0 !== h(l, At)) && (Ce = 0 === h(Ie, l) ? Qt : tn), null !== Ce && (!ue || 0 === h(u, Ie) || y(u, At, Ie)) && (ee.push(hn({ start: Ce, end: Qt, loop: U, count: d, style: Q })), Ce = null), tn = Qt, At = Ie)); return null !== Ce && ee.push(hn({ start: Ce, end: P, loop: U, count: d, style: Q })), ee; } function xn(r, s) { const n = [], o = r.segments; for (let l = 0; l < o.length; l++) {
            const u = nn(o[l], r.points, s);
            u.length && n.push(...u);
        } return n; } function Ui(r) { return { backgroundColor: r.backgroundColor, borderCapStyle: r.borderCapStyle, borderDash: r.borderDash, borderDashOffset: r.borderDashOffset, borderJoinStyle: r.borderJoinStyle, borderWidth: r.borderWidth, borderColor: r.borderColor }; } function Si(r, s) { return s && JSON.stringify(r) !== JSON.stringify(s); } var Di = new class as {
            constructor() { this._request = null, this._charts = new Map, this._running = !1, this._lastDate = void 0; }
            _notify(s, n, o, l) { const d = n.duration; n.listeners[l].forEach(h => h({ chart: s, initial: n.initial, numSteps: d, currentStep: Math.min(o - n.start, d) })); }
            _refresh() { this._request || (this._running = !0, this._request = ie.call(window, () => { this._update(), this._request = null, this._running && this._refresh(); })); }
            _update(s = Date.now()) { let n = 0; this._charts.forEach((o, l) => { if (!o.running || !o.items.length)
                return; const u = o.items; let y, d = u.length - 1, h = !1; for (; d >= 0; --d)
                y = u[d], y._active ? (y._total > o.duration && (o.duration = y._total), y.tick(s), h = !0) : (u[d] = u[u.length - 1], u.pop()); h && (l.draw(), this._notify(l, o, s, "progress")), u.length || (o.running = !1, this._notify(l, o, s, "complete"), o.initial = !1), n += u.length; }), this._lastDate = s, 0 === n && (this._running = !1); }
            _getAnims(s) { const n = this._charts; let o = n.get(s); return o || (o = { running: !1, initial: !0, items: [], listeners: { complete: [], progress: [] } }, n.set(s, o)), o; }
            listen(s, n, o) { this._getAnims(s).listeners[n].push(o); }
            add(s, n) { !n || !n.length || this._getAnims(s).items.push(...n); }
            has(s) { return this._getAnims(s).items.length > 0; }
            start(s) { const n = this._charts.get(s); !n || (n.running = !0, n.start = Date.now(), n.duration = n.items.reduce((o, l) => Math.max(o, l._duration), 0), this._refresh()); }
            running(s) { if (!this._running)
                return !1; const n = this._charts.get(s); return !(!n || !n.running || !n.items.length); }
            stop(s) { const n = this._charts.get(s); if (!n || !n.items.length)
                return; const o = n.items; let l = o.length - 1; for (; l >= 0; --l)
                o[l].cancel(); n.items = [], this._notify(s, n, Date.now(), "complete"); }
            remove(s) { return this._charts.delete(s); }
        }; const ls = "transparent", hr = { boolean: (r, s, n) => n > .5 ? s : r, color(r, s, n) { const o = gs(r || ls), l = o.valid && gs(s || ls); return l && l.valid ? l.mix(o, n).hexString() : s; }, number: (r, s, n) => r + (s - r) * n }; class Ir {
            constructor(s, n, o, l) { const u = n[o]; l = rr([s.to, l, u, s.from]); const d = rr([s.from, u, l]); this._active = !0, this._fn = s.fn || hr[s.type || typeof d], this._easing = Jt[s.easing] || Jt.linear, this._start = Math.floor(Date.now() + (s.delay || 0)), this._duration = this._total = Math.floor(s.duration), this._loop = !!s.loop, this._target = n, this._prop = o, this._from = d, this._to = l, this._promises = void 0; }
            active() { return this._active; }
            update(s, n, o) { if (this._active) {
                this._notify(!1);
                const l = this._target[this._prop], u = o - this._start, d = this._duration - u;
                this._start = o, this._duration = Math.floor(Math.max(d, s.duration)), this._total += u, this._loop = !!s.loop, this._to = rr([s.to, n, l, s.from]), this._from = rr([s.from, l, n]);
            } }
            cancel() { this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1)); }
            tick(s) { const n = s - this._start, o = this._duration, l = this._prop, u = this._from, d = this._loop, h = this._to; let y; if (this._active = u !== h && (d || n < o), !this._active)
                return this._target[l] = h, void this._notify(!0); n < 0 ? this._target[l] = u : (y = n / o % 2, y = d && y > 1 ? 2 - y : y, y = this._easing(Math.min(1, Math.max(0, y))), this._target[l] = this._fn(u, h, y)); }
            wait() { const s = this._promises || (this._promises = []); return new Promise((n, o) => { s.push({ res: n, rej: o }); }); }
            _notify(s) { const n = s ? "res" : "rej", o = this._promises || []; for (let l = 0; l < o.length; l++)
                o[l][n](); }
        } fn.set("animation", { delay: void 0, duration: 1e3, easing: "easeOutQuart", fn: void 0, from: void 0, loop: void 0, to: void 0, type: void 0 }); const Gr = Object.keys(fn.animation); fn.describe("animation", { _fallback: !1, _indexable: !1, _scriptable: r => "onProgress" !== r && "onComplete" !== r && "fn" !== r }), fn.set("animations", { colors: { type: "color", properties: ["color", "borderColor", "backgroundColor"] }, numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius", "tension"] } }), fn.describe("animations", { _fallback: "animation" }), fn.set("transitions", { active: { animation: { duration: 400 } }, resize: { animation: { duration: 0 } }, show: { animations: { colors: { from: "transparent" }, visible: { type: "boolean", duration: 0 } } }, hide: { animations: { colors: { to: "transparent" }, visible: { type: "boolean", easing: "linear", fn: r => 0 | r } } } }); class Lt {
            constructor(s, n) { this._chart = s, this._properties = new Map, this.configure(n); }
            configure(s) { if (!ke(s))
                return; const n = this._properties; Object.getOwnPropertyNames(s).forEach(o => { const l = s[o]; if (!ke(l))
                return; const u = {}; for (const d of Gr)
                u[d] = l[d]; (fe(l.properties) && l.properties || [o]).forEach(d => { (d === o || !n.has(d)) && n.set(d, u); }); }); }
            _animateOptions(s, n) { const o = n.options, l = function on(r, s) { if (!s)
                return; let n = r.options; if (n)
                return n.$shared && (r.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })), n; r.options = s; }(s, o); if (!l)
                return []; const u = this._createAnimations(l, o); return o.$shared && function sn(r, s) { const n = [], o = Object.keys(s); for (let l = 0; l < o.length; l++) {
                const u = r[o[l]];
                u && u.active() && n.push(u.wait());
            } return Promise.all(n); }(s.options.$animations, o).then(() => { s.options = o; }, () => { }), u; }
            _createAnimations(s, n) { const o = this._properties, l = [], u = s.$animations || (s.$animations = {}), d = Object.keys(n), h = Date.now(); let y; for (y = d.length - 1; y >= 0; --y) {
                const D = d[y];
                if ("$" === D.charAt(0))
                    continue;
                if ("options" === D) {
                    l.push(...this._animateOptions(s, n));
                    continue;
                }
                const T = n[D];
                let P = u[D];
                const U = o.get(D);
                if (P) {
                    if (U && P.active()) {
                        P.update(U, T, h);
                        continue;
                    }
                    P.cancel();
                }
                U && U.duration ? (u[D] = P = new Ir(U, s, D, T), l.push(P)) : s[D] = T;
            } return l; }
            update(s, n) { if (0 === this._properties.size)
                return void Object.assign(s, n); const o = this._createAnimations(s, n); return o.length ? (Di.add(this._chart, o), !0) : void 0; }
        } function ln(r, s) { const n = r && r.options || {}, o = n.reverse, l = void 0 === n.min ? s : 0, u = void 0 === n.max ? s : 0; return { start: o ? u : l, end: o ? l : u }; } function Ci(r, s) { const n = [], o = r._getSortedDatasetMetas(s); let l, u; for (l = 0, u = o.length; l < u; ++l)
            n.push(o[l].index); return n; } function Is(r, s, n, o = {}) { const l = r.keys, u = "single" === o.mode; let d, h, y, D; if (null !== s) {
            for (d = 0, h = l.length; d < h; ++d) {
                if (y = +l[d], y === n) {
                    if (o.all)
                        continue;
                    break;
                }
                D = r.values[y], Ne(D) && (u || 0 === s || En(s) === En(D)) && (s += D);
            }
            return s;
        } } function fo(r, s) { const n = r && r.options.stacked; return n || void 0 === n && void 0 !== s.stack; } function _s(r, s, n) { const o = r[s] || (r[s] = {}); return o[n] || (o[n] = {}); } function Yi(r, s, n, o) { for (const l of s.getMatchingVisibleMetas(o).reverse()) {
            const u = r[l.index];
            if (n && u > 0 || !n && u < 0)
                return l.index;
        } return null; } function cs(r, s) { const { chart: n, _cachedMeta: o } = r, l = n._stacks || (n._stacks = {}), { iScale: u, vScale: d, index: h } = o, y = u.axis, D = d.axis, T = function ho(r, s, n) { return `${r.id}.${s.id}.${n.stack || n.type}`; }(u, d, o), P = s.length; let U; for (let Q = 0; Q < P; ++Q) {
            const ee = s[Q], { [y]: ue, [D]: Ce } = ee;
            U = (ee._stacks || (ee._stacks = {}))[D] = _s(l, T, ue), U[h] = Ce, U._top = Yi(U, d, !0, o.type), U._bottom = Yi(U, d, !1, o.type);
        } } function Qs(r, s) { const n = r.scales; return Object.keys(n).filter(o => n[o].axis === s).shift(); } function xs(r, s) { const n = r.controller.index, o = r.vScale && r.vScale.axis; if (o) {
            s = s || r._parsed;
            for (const l of s) {
                const u = l._stacks;
                if (!u || void 0 === u[o] || void 0 === u[o][n])
                    return;
                delete u[o][n];
            }
        } } const yi = r => "reset" === r || "none" === r, cl = (r, s) => s ? r : Object.assign({}, r); let ji = (() => { class r {
            constructor(n, o) { this.chart = n, this._ctx = n.ctx, this.index = o, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.$context = void 0, this._syncList = [], this.initialize(); }
            initialize() { const n = this._cachedMeta; this.configure(), this.linkScales(), n._stacked = fo(n.vScale, n), this.addElements(); }
            updateIndex(n) { this.index !== n && xs(this._cachedMeta), this.index = n; }
            linkScales() { const n = this.chart, o = this._cachedMeta, l = this.getDataset(), u = (U, Q, ee, ue) => "x" === U ? Q : "r" === U ? ue : ee, d = o.xAxisID = Je(l.xAxisID, Qs(n, "x")), h = o.yAxisID = Je(l.yAxisID, Qs(n, "y")), y = o.rAxisID = Je(l.rAxisID, Qs(n, "r")), D = o.indexAxis, T = o.iAxisID = u(D, d, h, y), P = o.vAxisID = u(D, h, d, y); o.xScale = this.getScaleForId(d), o.yScale = this.getScaleForId(h), o.rScale = this.getScaleForId(y), o.iScale = this.getScaleForId(T), o.vScale = this.getScaleForId(P); }
            getDataset() { return this.chart.data.datasets[this.index]; }
            getMeta() { return this.chart.getDatasetMeta(this.index); }
            getScaleForId(n) { return this.chart.scales[n]; }
            _getOtherScale(n) { const o = this._cachedMeta; return n === o.iScale ? o.vScale : o.iScale; }
            reset() { this._update("reset"); }
            _destroy() { const n = this._cachedMeta; this._data && co(this._data, this), n._stacked && xs(n); }
            _dataCheck() { const n = this.getDataset(), o = n.data || (n.data = []), l = this._data; if (ke(o))
                this._data = function Xn(r) { const s = Object.keys(r), n = new Array(s.length); let o, l, u; for (o = 0, l = s.length; o < l; ++o)
                    u = s[o], n[o] = { x: u, y: r[u] }; return n; }(o);
            else if (l !== o) {
                if (l) {
                    co(l, this);
                    const u = this._cachedMeta;
                    xs(u), u._parsed = [];
                }
                o && Object.isExtensible(o) && function lr(r, s) { r._chartjs ? r._chartjs.listeners.push(s) : (Object.defineProperty(r, "_chartjs", { configurable: !0, enumerable: !1, value: { listeners: [s] } }), lo.forEach(n => { const o = "_onData" + Xt(n), l = r[n]; Object.defineProperty(r, n, { configurable: !0, enumerable: !1, value(...u) { const d = l.apply(this, u); return r._chartjs.listeners.forEach(h => { "function" == typeof h[o] && h[o](...u); }), d; } }); })); }(o, this), this._syncList = [], this._data = o;
            } }
            addElements() { const n = this._cachedMeta; this._dataCheck(), this.datasetElementType && (n.dataset = new this.datasetElementType); }
            buildOrUpdateElements(n) { const o = this._cachedMeta, l = this.getDataset(); let u = !1; this._dataCheck(); const d = o._stacked; o._stacked = fo(o.vScale, o), o.stack !== l.stack && (u = !0, xs(o), o.stack = l.stack), this._resyncElements(n), (u || d !== o._stacked) && cs(this, o._parsed); }
            configure() { const n = this.chart.config, o = n.datasetScopeKeys(this._type), l = n.getOptionScopes(this.getDataset(), o, !0); this.options = n.createResolver(l, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {}; }
            parse(n, o) { const { _cachedMeta: l, _data: u } = this, { iScale: d, _stacked: h } = l, y = d.axis; let P, U, Q, D = 0 === n && o === u.length || l._sorted, T = n > 0 && l._parsed[n - 1]; if (!1 === this._parsing)
                l._parsed = u, l._sorted = !0, Q = u;
            else {
                Q = fe(u[n]) ? this.parseArrayData(l, u, n, o) : ke(u[n]) ? this.parseObjectData(l, u, n, o) : this.parsePrimitiveData(l, u, n, o);
                const ee = () => null === U[y] || T && U[y] < T[y];
                for (P = 0; P < o; ++P)
                    l._parsed[P + n] = U = Q[P], D && (ee() && (D = !1), T = U);
                l._sorted = D;
            } h && cs(this, Q); }
            parsePrimitiveData(n, o, l, u) { const { iScale: d, vScale: h } = n, y = d.axis, D = h.axis, T = d.getLabels(), P = d === h, U = new Array(u); let Q, ee, ue; for (Q = 0, ee = u; Q < ee; ++Q)
                ue = Q + l, U[Q] = { [y]: P || d.parse(T[ue], ue), [D]: h.parse(o[ue], ue) }; return U; }
            parseArrayData(n, o, l, u) { const { xScale: d, yScale: h } = n, y = new Array(u); let D, T, P, U; for (D = 0, T = u; D < T; ++D)
                P = D + l, U = o[P], y[D] = { x: d.parse(U[0], P), y: h.parse(U[1], P) }; return y; }
            parseObjectData(n, o, l, u) { const { xScale: d, yScale: h } = n, { xAxisKey: y = "x", yAxisKey: D = "y" } = this._parsing, T = new Array(u); let P, U, Q, ee; for (P = 0, U = u; P < U; ++P)
                Q = P + l, ee = o[Q], T[P] = { x: d.parse(Me(ee, y), Q), y: h.parse(Me(ee, D), Q) }; return T; }
            getParsed(n) { return this._cachedMeta._parsed[n]; }
            getDataElement(n) { return this._cachedMeta.data[n]; }
            applyStack(n, o, l) { const d = this._cachedMeta, h = o[n.axis]; return Is({ keys: Ci(this.chart, !0), values: o._stacks[n.axis] }, h, d.index, { mode: l }); }
            updateRangeFromParsed(n, o, l, u) { const d = l[o.axis]; let h = null === d ? NaN : d; const y = u && l._stacks[o.axis]; u && y && (u.values = y, h = Is(u, d, this._cachedMeta.index)), n.min = Math.min(n.min, h), n.max = Math.max(n.max, h); }
            getMinMax(n, o) { const l = this._cachedMeta, u = l._parsed, d = l._sorted && n === l.iScale, h = u.length, y = this._getOtherScale(n), D = ((r, s, n) => r && !s.hidden && s._stacked && { keys: Ci(this.chart, !0), values: null })(o, l), T = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY }, { min: P, max: U } = function Mi(r) { const { min: s, max: n, minDefined: o, maxDefined: l } = r.getUserBounds(); return { min: o ? s : Number.NEGATIVE_INFINITY, max: l ? n : Number.POSITIVE_INFINITY }; }(y); let Q, ee; function ue() { ee = u[Q]; const Ce = ee[y.axis]; return !Ne(ee[n.axis]) || P > Ce || U < Ce; } for (Q = 0; Q < h && (ue() || (this.updateRangeFromParsed(T, n, ee, D), !d)); ++Q)
                ; if (d)
                for (Q = h - 1; Q >= 0; --Q)
                    if (!ue()) {
                        this.updateRangeFromParsed(T, n, ee, D);
                        break;
                    } return T; }
            getAllParsedValues(n) { const o = this._cachedMeta._parsed, l = []; let u, d, h; for (u = 0, d = o.length; u < d; ++u)
                h = o[u][n.axis], Ne(h) && l.push(h); return l; }
            getMaxOverflow() { return !1; }
            getLabelAndValue(n) { const o = this._cachedMeta, l = o.iScale, u = o.vScale, d = this.getParsed(n); return { label: l ? "" + l.getLabelForValue(d[l.axis]) : "", value: u ? "" + u.getLabelForValue(d[u.axis]) : "" }; }
            _update(n) { const o = this._cachedMeta; this.update(n || "default"), o._clip = function Rn(r) { let s, n, o, l; return ke(r) ? (s = r.top, n = r.right, o = r.bottom, l = r.left) : s = n = o = l = r, { top: s, right: n, bottom: o, left: l, disabled: !1 === r }; }(Je(this.options.clip, function Qn(r, s, n) { if (!1 === n)
                return !1; const o = ln(r, n), l = ln(s, n); return { top: l.end, right: o.end, bottom: l.start, left: o.start }; }(o.xScale, o.yScale, this.getMaxOverflow()))); }
            update(n) { }
            draw() { const n = this._ctx, l = this._cachedMeta, u = l.data || [], d = this.chart.chartArea, h = [], y = this._drawStart || 0, D = this._drawCount || u.length - y, T = this.options.drawActiveElementsOnTop; let P; for (l.dataset && l.dataset.draw(n, d, y, D), P = y; P < y + D; ++P) {
                const U = u[P];
                U.hidden || (U.active && T ? h.push(U) : U.draw(n, d));
            } for (P = 0; P < h.length; ++P)
                h[P].draw(n, d); }
            getStyle(n, o) { const l = o ? "active" : "default"; return void 0 === n && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(l) : this.resolveDataElementOptions(n || 0, l); }
            getContext(n, o, l) { const u = this.getDataset(); let d; if (n >= 0 && n < this._cachedMeta.data.length) {
                const h = this._cachedMeta.data[n];
                d = h.$context || (h.$context = function ql(r, s, n) { return Cs(r, { active: !1, dataIndex: s, parsed: void 0, raw: void 0, element: n, index: s, mode: "default", type: "data" }); }(this.getContext(), n, h)), d.parsed = this.getParsed(n), d.raw = u.data[n], d.index = d.dataIndex = n;
            }
            else
                d = this.$context || (this.$context = function Ca(r, s) { return Cs(r, { active: !1, dataset: void 0, datasetIndex: s, index: s, mode: "default", type: "dataset" }); }(this.chart.getContext(), this.index)), d.dataset = u, d.index = d.datasetIndex = this.index; return d.active = !!o, d.mode = l, d; }
            resolveDatasetElementOptions(n) { return this._resolveElementOptions(this.datasetElementType.id, n); }
            resolveDataElementOptions(n, o) { return this._resolveElementOptions(this.dataElementType.id, o, n); }
            _resolveElementOptions(n, o = "default", l) { const u = "active" === o, d = this._cachedDataOpts, h = n + "-" + o, y = d[h], D = this.enableOptionSharing && Zt(l); if (y)
                return cl(y, D); const T = this.chart.config, P = T.datasetElementScopeKeys(this._type, n), U = u ? [`${n}Hover`, "hover", n, ""] : [n, ""], Q = T.getOptionScopes(this.getDataset(), P), ee = Object.keys(fn.elements[n]), Ce = T.resolveNamedOptions(Q, ee, () => this.getContext(l, u), U); return Ce.$shared && (Ce.$shared = D, d[h] = Object.freeze(cl(Ce, D))), Ce; }
            _resolveAnimations(n, o, l) { const u = this.chart, d = this._cachedDataOpts, h = `animation-${o}`, y = d[h]; if (y)
                return y; let D; if (!1 !== u.options.animation) {
                const P = this.chart.config, U = P.datasetAnimationScopeKeys(this._type, o), Q = P.getOptionScopes(this.getDataset(), U);
                D = P.createResolver(Q, this.getContext(n, l, o));
            } const T = new Lt(u, D && D.animations); return D && D._cacheable && (d[h] = Object.freeze(T)), T; }
            getSharedOptions(n) { if (n.$shared)
                return this._sharedOptions || (this._sharedOptions = Object.assign({}, n)); }
            includeOptions(n, o) { return !o || yi(n) || this.chart._animationsDisabled; }
            updateElement(n, o, l, u) { yi(u) ? Object.assign(n, l) : this._resolveAnimations(o, u).update(n, l); }
            updateSharedOptions(n, o, l) { n && !yi(o) && this._resolveAnimations(void 0, o).update(n, l); }
            _setStyle(n, o, l, u) { n.active = u; const d = this.getStyle(o, u); this._resolveAnimations(o, l, u).update(n, { options: !u && this.getSharedOptions(d) || d }); }
            removeHoverStyle(n, o, l) { this._setStyle(n, l, "active", !1); }
            setHoverStyle(n, o, l) { this._setStyle(n, l, "active", !0); }
            _removeDatasetHoverStyle() { const n = this._cachedMeta.dataset; n && this._setStyle(n, void 0, "active", !1); }
            _setDatasetHoverStyle() { const n = this._cachedMeta.dataset; n && this._setStyle(n, void 0, "active", !0); }
            _resyncElements(n) { const o = this._data, l = this._cachedMeta.data; for (const [y, D, T] of this._syncList)
                this[y](D, T); this._syncList = []; const u = l.length, d = o.length, h = Math.min(d, u); h && this.parse(0, h), d > u ? this._insertElements(u, d - u, n) : d < u && this._removeElements(d, u - d); }
            _insertElements(n, o, l = !0) { const u = this._cachedMeta, d = u.data, h = n + o; let y; const D = T => { for (T.length += o, y = T.length - 1; y >= h; y--)
                T[y] = T[y - o]; }; for (D(d), y = n; y < h; ++y)
                d[y] = new this.dataElementType; this._parsing && D(u._parsed), this.parse(n, o), l && this.updateElements(d, n, o, "reset"); }
            updateElements(n, o, l, u) { }
            _removeElements(n, o) { const l = this._cachedMeta; if (this._parsing) {
                const u = l._parsed.splice(n, o);
                l._stacked && xs(l, u);
            } l.data.splice(n, o); }
            _sync(n) { if (this._parsing)
                this._syncList.push(n);
            else {
                const [o, l, u] = n;
                this[o](l, u);
            } this.chart._dataChanges.push([this.index, ...n]); }
            _onDataPush() { const n = arguments.length; this._sync(["_insertElements", this.getDataset().data.length - n, n]); }
            _onDataPop() { this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]); }
            _onDataShift() { this._sync(["_removeElements", 0, 1]); }
            _onDataSplice(n, o) { o && this._sync(["_removeElements", n, o]); const l = arguments.length - 2; l && this._sync(["_insertElements", n, l]); }
            _onDataUnshift() { this._sync(["_insertElements", 0, arguments.length]); }
        } return r.defaults = {}, r; })(); function zr(r) { const s = r.iScale, n = function $r(r, s) { if (!r._cache.$bar) {
            const n = r.getMatchingVisibleMetas(s);
            let o = [];
            for (let l = 0, u = n.length; l < u; l++)
                o = o.concat(n[l].controller.getAllParsedValues(r));
            r._cache.$bar = os(o.sort((l, u) => l - u));
        } return r._cache.$bar; }(s, r.type); let l, u, d, h, o = s._length; const y = () => { 32767 === d || -32768 === d || (Zt(h) && (o = Math.min(o, Math.abs(d - h) || o)), h = d); }; for (l = 0, u = n.length; l < u; ++l)
            d = s.getPixelForValue(n[l]), y(); for (h = void 0, l = 0, u = s.ticks.length; l < u; ++l)
            d = s.getPixelForTick(l), y(); return o; } function go(r, s, n, o) { return fe(r) ? function Zl(r, s, n, o) { const l = n.parse(r[0], o), u = n.parse(r[1], o), d = Math.min(l, u), h = Math.max(l, u); let y = d, D = h; Math.abs(d) > Math.abs(h) && (y = h, D = d), s[n.axis] = D, s._custom = { barStart: y, barEnd: D, start: l, end: u, min: d, max: h }; }(r, s, n, o) : s[n.axis] = n.parse(r, o), s; } function Bo(r, s, n, o) { const l = r.iScale, u = r.vScale, d = l.getLabels(), h = l === u, y = []; let D, T, P, U; for (D = n, T = n + o; D < T; ++D)
            U = s[D], P = {}, P[l.axis] = h || l.parse(d[D], D), y.push(go(U, P, u, D)); return y; } function Wr(r) { return r && void 0 !== r.barStart && void 0 !== r.barEnd; } function gr(r, s, n, o) { let l = s.borderSkipped; const u = {}; if (!l)
            return void (r.borderSkipped = u); const { start: d, end: h, reverse: y, top: D, bottom: T } = function Jl(r) { let s, n, o, l, u; return r.horizontal ? (s = r.base > r.x, n = "left", o = "right") : (s = r.base < r.y, n = "bottom", o = "top"), s ? (l = "end", u = "start") : (l = "start", u = "end"), { start: n, end: o, reverse: s, top: l, bottom: u }; }(r); "middle" === l && n && (r.enableBorderRadius = !0, (n._top || 0) === o ? l = D : (n._bottom || 0) === o ? l = T : (u[pr(T, d, h, y)] = !0, l = D)), u[pr(l, d, h, y)] = !0, r.borderSkipped = u; } function pr(r, s, n, o) { return o ? (r = function ec(r, s, n) { return r === s ? n : r === n ? s : r; }(r, s, n), r = Or(r, n, s)) : r = Or(r, s, n), r; } function Or(r, s, n) { return "start" === r ? s : "end" === r ? n : r; } function wa(r, { inflateAmount: s }, n) { r.inflateAmount = "auto" === s ? 1 === n ? .33 : 0 : s; } ji.prototype.datasetElementType = null, ji.prototype.dataElementType = null; let po = (() => { class r extends ji {
            parsePrimitiveData(n, o, l, u) { return Bo(n, o, l, u); }
            parseArrayData(n, o, l, u) { return Bo(n, o, l, u); }
            parseObjectData(n, o, l, u) { const { iScale: d, vScale: h } = n, { xAxisKey: y = "x", yAxisKey: D = "y" } = this._parsing, T = "x" === d.axis ? y : D, P = "x" === h.axis ? y : D, U = []; let Q, ee, ue, Ce; for (Q = l, ee = l + u; Q < ee; ++Q)
                Ce = o[Q], ue = {}, ue[d.axis] = d.parse(Me(Ce, T), Q), U.push(go(Me(Ce, P), ue, h, Q)); return U; }
            updateRangeFromParsed(n, o, l, u) { super.updateRangeFromParsed(n, o, l, u); const d = l._custom; d && o === this._cachedMeta.vScale && (n.min = Math.min(n.min, d.min), n.max = Math.max(n.max, d.max)); }
            getMaxOverflow() { return 0; }
            getLabelAndValue(n) { const o = this._cachedMeta, { iScale: l, vScale: u } = o, d = this.getParsed(n), h = d._custom, y = Wr(h) ? "[" + h.start + ", " + h.end + "]" : "" + u.getLabelForValue(d[u.axis]); return { label: "" + l.getLabelForValue(d[l.axis]), value: y }; }
            initialize() { this.enableOptionSharing = !0, super.initialize(), this._cachedMeta.stack = this.getDataset().stack; }
            update(n) { const o = this._cachedMeta; this.updateElements(o.data, 0, o.data.length, n); }
            updateElements(n, o, l, u) { const d = "reset" === u, { index: h, _cachedMeta: { vScale: y } } = this, D = y.getBasePixel(), T = y.isHorizontal(), P = this._getRuler(), U = this.resolveDataElementOptions(o, u), Q = this.getSharedOptions(U), ee = this.includeOptions(u, Q); this.updateSharedOptions(Q, u, U); for (let ue = o; ue < o + l; ue++) {
                const Ce = this.getParsed(ue), Ie = d || ce(Ce[y.axis]) ? { base: D, head: D } : this._calculateBarValuePixels(ue), dt = this._calculateBarIndexPixels(ue, P), At = (Ce._stacks || {})[y.axis], pt = { horizontal: T, base: Ie.base, enableBorderRadius: !At || Wr(Ce._custom) || h === At._top || h === At._bottom, x: T ? Ie.head : dt.center, y: T ? dt.center : Ie.head, height: T ? dt.size : Math.abs(Ie.size), width: T ? Math.abs(Ie.size) : dt.size };
                ee && (pt.options = Q || this.resolveDataElementOptions(ue, n[ue].active ? "active" : u));
                const st = pt.options || n[ue].options;
                gr(pt, st, At, h), wa(pt, st, P.ratio), this.updateElement(n[ue], ue, pt, u);
            } }
            _getStacks(n, o) { const u = this._cachedMeta.iScale, d = u.getMatchingVisibleMetas(this._type), h = u.options.stacked, y = d.length, D = []; let T, P; for (T = 0; T < y; ++T)
                if (P = d[T], P.controller.options.grouped) {
                    if (void 0 !== o) {
                        const U = P.controller.getParsed(o)[P.controller._cachedMeta.vScale.axis];
                        if (ce(U) || isNaN(U))
                            continue;
                    }
                    if ((!1 === h || -1 === D.indexOf(P.stack) || void 0 === h && void 0 === P.stack) && D.push(P.stack), P.index === n)
                        break;
                } return D.length || D.push(void 0), D; }
            _getStackCount(n) { return this._getStacks(void 0, n).length; }
            _getStackIndex(n, o, l) { const u = this._getStacks(n, l), d = void 0 !== o ? u.indexOf(o) : -1; return -1 === d ? u.length - 1 : d; }
            _getRuler() { const n = this.options, o = this._cachedMeta, l = o.iScale, u = []; let d, h; for (d = 0, h = o.data.length; d < h; ++d)
                u.push(l.getPixelForValue(this.getParsed(d)[l.axis], d)); const y = n.barThickness; return { min: y || zr(o), pixels: u, start: l._startPixel, end: l._endPixel, stackCount: this._getStackCount(), scale: l, grouped: n.grouped, ratio: y ? 1 : n.categoryPercentage * n.barPercentage }; }
            _calculateBarValuePixels(n) { const { _cachedMeta: { vScale: o, _stacked: l }, options: { base: u, minBarLength: d } } = this, h = u || 0, y = this.getParsed(n), D = y._custom, T = Wr(D); let ee, ue, P = y[o.axis], U = 0, Q = l ? this.applyStack(o, y, l) : P; Q !== P && (U = Q - P, Q = P), T && (P = D.barStart, Q = D.barEnd - D.barStart, 0 !== P && En(P) !== En(D.barEnd) && (U = 0), U += P); const Ce = ce(u) || T ? U : u; let Ie = o.getPixelForValue(Ce); if (ee = this.chart.getDataVisibility(n) ? o.getPixelForValue(U + Q) : Ie, ue = ee - Ie, Math.abs(ue) < d && (ue = function Yr(r, s, n) { return 0 !== r ? En(r) : (s.isHorizontal() ? 1 : -1) * (s.min >= n ? 1 : -1); }(ue, o, h) * d, P === h && (Ie -= ue / 2), ee = Ie + ue), Ie === o.getPixelForValue(h)) {
                const dt = En(ue) * o.getLineWidthForValue(h) / 2;
                Ie += dt, ue -= dt;
            } return { size: ue, base: Ie, head: ee, center: ee + ue / 2 }; }
            _calculateBarIndexPixels(n, o) { const l = o.scale, u = this.options, d = u.skipNull, h = Je(u.maxBarThickness, 1 / 0); let y, D; if (o.grouped) {
                const T = d ? this._getStackCount(n) : o.stackCount, P = "flex" === u.barThickness ? function $u(r, s, n, o) { const l = s.pixels, u = l[r]; let d = r > 0 ? l[r - 1] : null, h = r < l.length - 1 ? l[r + 1] : null; const y = n.categoryPercentage; null === d && (d = u - (null === h ? s.end - s.start : h - u)), null === h && (h = u + u - d); const D = u - (u - Math.min(d, h)) / 2 * y; return { chunk: Math.abs(h - d) / 2 * y / o, ratio: n.barPercentage, start: D }; }(n, o, u, T) : function Xl(r, s, n, o) { const l = n.barThickness; let u, d; return ce(l) ? (u = s.min * n.categoryPercentage, d = n.barPercentage) : (u = l * o, d = 1), { chunk: u / o, ratio: d, start: s.pixels[r] - u / 2 }; }(n, o, u, T), U = this._getStackIndex(this.index, this._cachedMeta.stack, d ? n : void 0);
                y = P.start + P.chunk * U + P.chunk / 2, D = Math.min(h, P.chunk * P.ratio);
            }
            else
                y = l.getPixelForValue(this.getParsed(n)[l.axis], n), D = Math.min(h, o.min * o.ratio); return { base: y - D / 2, head: y + D / 2, center: y, size: D }; }
            draw() { const n = this._cachedMeta, o = n.vScale, l = n.data, u = l.length; let d = 0; for (; d < u; ++d)
                null !== this.getParsed(d)[o.axis] && l[d].draw(this._ctx); }
        } return r.id = "bar", r.defaults = { datasetElementType: !1, dataElementType: "bar", categoryPercentage: .8, barPercentage: .9, grouped: !0, animations: { numbers: { type: "number", properties: ["x", "y", "base", "width", "height"] } } }, r.overrides = { scales: { _index_: { type: "category", offset: !0, grid: { offset: !0 } }, _value_: { type: "linear", beginAtZero: !0 } } }, r; })(), tc = (() => { class r extends ji {
            initialize() { this.enableOptionSharing = !0, super.initialize(); }
            parsePrimitiveData(n, o, l, u) { const d = super.parsePrimitiveData(n, o, l, u); for (let h = 0; h < d.length; h++)
                d[h]._custom = this.resolveDataElementOptions(h + l).radius; return d; }
            parseArrayData(n, o, l, u) { const d = super.parseArrayData(n, o, l, u); for (let h = 0; h < d.length; h++)
                d[h]._custom = Je(o[l + h][2], this.resolveDataElementOptions(h + l).radius); return d; }
            parseObjectData(n, o, l, u) { const d = super.parseObjectData(n, o, l, u); for (let h = 0; h < d.length; h++) {
                const y = o[l + h];
                d[h]._custom = Je(y && y.r && +y.r, this.resolveDataElementOptions(h + l).radius);
            } return d; }
            getMaxOverflow() { const n = this._cachedMeta.data; let o = 0; for (let l = n.length - 1; l >= 0; --l)
                o = Math.max(o, n[l].size(this.resolveDataElementOptions(l)) / 2); return o > 0 && o; }
            getLabelAndValue(n) { const o = this._cachedMeta, { xScale: l, yScale: u } = o, d = this.getParsed(n), h = l.getLabelForValue(d.x), y = u.getLabelForValue(d.y), D = d._custom; return { label: o.label, value: "(" + h + ", " + y + (D ? ", " + D : "") + ")" }; }
            update(n) { const o = this._cachedMeta.data; this.updateElements(o, 0, o.length, n); }
            updateElements(n, o, l, u) { const d = "reset" === u, { iScale: h, vScale: y } = this._cachedMeta, D = this.resolveDataElementOptions(o, u), T = this.getSharedOptions(D), P = this.includeOptions(u, T), U = h.axis, Q = y.axis; for (let ee = o; ee < o + l; ee++) {
                const ue = n[ee], Ce = !d && this.getParsed(ee), Ie = {}, dt = Ie[U] = d ? h.getPixelForDecimal(.5) : h.getPixelForValue(Ce[U]), At = Ie[Q] = d ? y.getBasePixel() : y.getPixelForValue(Ce[Q]);
                Ie.skip = isNaN(dt) || isNaN(At), P && (Ie.options = this.resolveDataElementOptions(ee, ue.active ? "active" : u), d && (Ie.options.radius = 0)), this.updateElement(ue, ee, Ie, u);
            } this.updateSharedOptions(T, u, D); }
            resolveDataElementOptions(n, o) { const l = this.getParsed(n); let u = super.resolveDataElementOptions(n, o); u.$shared && (u = Object.assign({}, u, { $shared: !1 })); const d = u.radius; return "active" !== o && (u.radius = 0), u.radius += Je(l && l._custom, d), u; }
        } return r.id = "bubble", r.defaults = { datasetElementType: !1, dataElementType: "point", animations: { numbers: { type: "number", properties: ["x", "y", "borderWidth", "radius"] } } }, r.overrides = { scales: { x: { type: "linear" }, y: { type: "linear" } }, plugins: { tooltip: { callbacks: { title: () => "" } } } }, r; })(), mo = (() => { class r extends ji {
            constructor(n, o) { super(n, o), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0; }
            linkScales() { }
            parse(n, o) { const l = this.getDataset().data, u = this._cachedMeta; if (!1 === this._parsing)
                u._parsed = l;
            else {
                let h, y, d = D => +l[D];
                if (ke(l[n])) {
                    const { key: D = "value" } = this._parsing;
                    d = T => +Me(l[T], D);
                }
                for (h = n, y = n + o; h < y; ++h)
                    u._parsed[h] = d(h);
            } }
            _getRotation() { return ei(this.options.rotation - 90); }
            _getCircumference() { return ei(this.options.circumference); }
            _getRotationExtents() { let n = je, o = -je; for (let l = 0; l < this.chart.data.datasets.length; ++l)
                if (this.chart.isDatasetVisible(l)) {
                    const u = this.chart.getDatasetMeta(l).controller, d = u._getRotation(), h = u._getCircumference();
                    n = Math.min(n, d), o = Math.max(o, d + h);
                } return { rotation: n, circumference: o - n }; }
            update(n) { const o = this.chart, { chartArea: l } = o, u = this._cachedMeta, d = u.data, h = this.getMaxBorderWidth() + this.getMaxOffset(d) + this.options.spacing, y = Math.max((Math.min(l.width, l.height) - h) / 2, 0), D = Math.min(((r, s) => "string" == typeof r && r.endsWith("%") ? parseFloat(r) / 100 : r / s)(this.options.cutout, y), 1), T = this._getRingWeight(this.index), { circumference: P, rotation: U } = this._getRotationExtents(), { ratioX: Q, ratioY: ee, offsetX: ue, offsetY: Ce } = function ul(r, s, n) { let o = 1, l = 1, u = 0, d = 0; if (s < je) {
                const h = r, y = h + s, D = Math.cos(h), T = Math.sin(h), P = Math.cos(y), U = Math.sin(y), Q = (At, pt, st) => ot(At, h, y, !0) ? 1 : Math.max(pt, pt * n, st, st * n), ee = (At, pt, st) => ot(At, h, y, !0) ? -1 : Math.min(pt, pt * n, st, st * n), ue = Q(0, D, P), Ce = Q(jt, T, U), Ie = ee(lt, D, P), dt = ee(lt + jt, T, U);
                o = (ue - Ie) / 2, l = (Ce - dt) / 2, u = -(ue + Ie) / 2, d = -(Ce + dt) / 2;
            } return { ratioX: o, ratioY: l, offsetX: u, offsetY: d }; }(U, P, D), At = Math.max(Math.min((l.width - h) / Q, (l.height - h) / ee) / 2, 0), pt = Ct(this.options.radius, At), Rt = (pt - Math.max(pt * D, 0)) / this._getVisibleDatasetWeightTotal(); this.offsetX = ue * pt, this.offsetY = Ce * pt, u.total = this.calculateTotal(), this.outerRadius = pt - Rt * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - Rt * T, 0), this.updateElements(d, 0, d.length, n); }
            _circumference(n, o) { const l = this.options, u = this._cachedMeta, d = this._getCircumference(); return o && l.animation.animateRotate || !this.chart.getDataVisibility(n) || null === u._parsed[n] || u.data[n].hidden ? 0 : this.calculateCircumference(u._parsed[n] * d / je); }
            updateElements(n, o, l, u) { const d = "reset" === u, h = this.chart, y = h.chartArea, P = (y.left + y.right) / 2, U = (y.top + y.bottom) / 2, Q = d && h.options.animation.animateScale, ee = Q ? 0 : this.innerRadius, ue = Q ? 0 : this.outerRadius, Ce = this.resolveDataElementOptions(o, u), Ie = this.getSharedOptions(Ce), dt = this.includeOptions(u, Ie); let pt, At = this._getRotation(); for (pt = 0; pt < o; ++pt)
                At += this._circumference(pt, d); for (pt = o; pt < o + l; ++pt) {
                const st = this._circumference(pt, d), Rt = n[pt], Ft = { x: P + this.offsetX, y: U + this.offsetY, startAngle: At, endAngle: At + st, circumference: st, outerRadius: ue, innerRadius: ee };
                dt && (Ft.options = Ie || this.resolveDataElementOptions(pt, Rt.active ? "active" : u)), At += st, this.updateElement(Rt, pt, Ft, u);
            } this.updateSharedOptions(Ie, u, Ce); }
            calculateTotal() { const n = this._cachedMeta, o = n.data; let u, l = 0; for (u = 0; u < o.length; u++) {
                const d = n._parsed[u];
                null !== d && !isNaN(d) && this.chart.getDataVisibility(u) && !o[u].hidden && (l += Math.abs(d));
            } return l; }
            calculateCircumference(n) { const o = this._cachedMeta.total; return o > 0 && !isNaN(n) ? je * (Math.abs(n) / o) : 0; }
            getLabelAndValue(n) { const l = this.chart, u = l.data.labels || [], d = q(this._cachedMeta._parsed[n], l.options.locale); return { label: u[n] || "", value: d }; }
            getMaxBorderWidth(n) { let o = 0; const l = this.chart; let u, d, h, y, D; if (!n)
                for (u = 0, d = l.data.datasets.length; u < d; ++u)
                    if (l.isDatasetVisible(u)) {
                        h = l.getDatasetMeta(u), n = h.data, y = h.controller;
                        break;
                    } if (!n)
                return 0; for (u = 0, d = n.length; u < d; ++u)
                D = y.resolveDataElementOptions(u), "inner" !== D.borderAlign && (o = Math.max(o, D.borderWidth || 0, D.hoverBorderWidth || 0)); return o; }
            getMaxOffset(n) { let o = 0; for (let l = 0, u = n.length; l < u; ++l) {
                const d = this.resolveDataElementOptions(l);
                o = Math.max(o, d.offset || 0, d.hoverOffset || 0);
            } return o; }
            _getRingWeightOffset(n) { let o = 0; for (let l = 0; l < n; ++l)
                this.chart.isDatasetVisible(l) && (o += this._getRingWeight(l)); return o; }
            _getRingWeight(n) { return Math.max(Je(this.chart.data.datasets[n].weight, 1), 0); }
            _getVisibleDatasetWeightTotal() { return this._getRingWeightOffset(this.chart.data.datasets.length) || 1; }
        } return r.id = "doughnut", r.defaults = { datasetElementType: !1, dataElementType: "arc", animation: { animateRotate: !0, animateScale: !1 }, animations: { numbers: { type: "number", properties: ["circumference", "endAngle", "innerRadius", "outerRadius", "startAngle", "x", "y", "offset", "borderWidth", "spacing"] } }, cutout: "50%", rotation: 0, circumference: 360, radius: "100%", spacing: 0, indexAxis: "r" }, r.descriptors = { _scriptable: s => "spacing" !== s, _indexable: s => "spacing" !== s }, r.overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(s) { const n = s.data; if (n.labels.length && n.datasets.length) {
                            const { labels: { pointStyle: o } } = s.legend.options;
                            return n.labels.map((l, u) => { const h = s.getDatasetMeta(0).controller.getStyle(u); return { text: l, fillStyle: h.backgroundColor, strokeStyle: h.borderColor, lineWidth: h.borderWidth, pointStyle: o, hidden: !s.getDataVisibility(u), index: u }; });
                        } return []; } }, onClick(s, n, o) { o.chart.toggleDataVisibility(n.index), o.chart.update(); } }, tooltip: { callbacks: { title: () => "", label(s) { let n = s.label; const o = ": " + s.formattedValue; return fe(n) ? (n = n.slice(), n[0] += o) : n += o, n; } } } } }, r; })(), Ea = (() => { class r extends ji {
            initialize() { this.enableOptionSharing = !0, super.initialize(); }
            update(n) { const o = this._cachedMeta, { dataset: l, data: u = [], _dataset: d } = o, h = this.chart._animationsDisabled; let { start: y, count: D } = function nc(r, s, n) { const o = s.length; let l = 0, u = o; if (r._sorted) {
                const { iScale: d, _parsed: h } = r, y = d.axis, { min: D, max: T, minDefined: P, maxDefined: U } = d.getUserBounds();
                P && (l = ze(Math.min(rs(h, d.axis, D).lo, n ? o : rs(s, y, d.getPixelForValue(D)).lo), 0, o - 1)), u = U ? ze(Math.max(rs(h, d.axis, T).hi + 1, n ? 0 : rs(s, y, d.getPixelForValue(T)).hi + 1), l, o) - l : o - l;
            } return { start: l, count: u }; }(o, u, h); this._drawStart = y, this._drawCount = D, function yo(r) { const { xScale: s, yScale: n, _scaleRanges: o } = r, l = { xmin: s.min, xmax: s.max, ymin: n.min, ymax: n.max }; if (!o)
                return r._scaleRanges = l, !0; const u = o.xmin !== s.min || o.xmax !== s.max || o.ymin !== n.min || o.ymax !== n.max; return Object.assign(o, l), u; }(o) && (y = 0, D = u.length), l._chart = this.chart, l._datasetIndex = this.index, l._decimated = !!d._decimated, l.points = u; const T = this.resolveDatasetElementOptions(n); this.options.showLine || (T.borderWidth = 0), T.segment = this.options.segment, this.updateElement(l, void 0, { animated: !h, options: T }, n), this.updateElements(u, y, D, n); }
            updateElements(n, o, l, u) { const d = "reset" === u, { iScale: h, vScale: y, _stacked: D, _dataset: T } = this._cachedMeta, P = this.resolveDataElementOptions(o, u), U = this.getSharedOptions(P), Q = this.includeOptions(u, U), ee = h.axis, ue = y.axis, { spanGaps: Ce, segment: Ie } = this.options, dt = Yn(Ce) ? Ce : Number.POSITIVE_INFINITY, At = this.chart._animationsDisabled || d || "none" === u; let pt = o > 0 && this.getParsed(o - 1); for (let st = o; st < o + l; ++st) {
                const Rt = n[st], Ft = this.getParsed(st), Qt = At ? Rt : {}, tn = ce(Ft[ue]), $n = Qt[ee] = h.getPixelForValue(Ft[ee], st), Mn = Qt[ue] = d || tn ? y.getBasePixel() : y.getPixelForValue(D ? this.applyStack(y, Ft, D) : Ft[ue], st);
                Qt.skip = isNaN($n) || isNaN(Mn) || tn, Qt.stop = st > 0 && Ft[ee] - pt[ee] > dt, Ie && (Qt.parsed = Ft, Qt.raw = T.data[st]), Q && (Qt.options = U || this.resolveDataElementOptions(st, Rt.active ? "active" : u)), At || this.updateElement(Rt, st, Qt, u), pt = Ft;
            } this.updateSharedOptions(U, u, P); }
            getMaxOverflow() { const n = this._cachedMeta, o = n.dataset, l = o.options && o.options.borderWidth || 0, u = n.data || []; if (!u.length)
                return l; const d = u[0].size(this.resolveDataElementOptions(0)), h = u[u.length - 1].size(this.resolveDataElementOptions(u.length - 1)); return Math.max(l, d, h) / 2; }
            draw() { const n = this._cachedMeta; n.dataset.updateControlPoints(this.chart.chartArea, n.iScale.axis), super.draw(); }
        } return r.id = "line", r.defaults = { datasetElementType: "line", dataElementType: "point", showLine: !0, spanGaps: !1 }, r.overrides = { scales: { _index_: { type: "category" }, _value_: { type: "linear" } } }, r; })(), Kr = (() => { class r extends ji {
            constructor(n, o) { super(n, o), this.innerRadius = void 0, this.outerRadius = void 0; }
            getLabelAndValue(n) { const l = this.chart, u = l.data.labels || [], d = q(this._cachedMeta._parsed[n].r, l.options.locale); return { label: u[n] || "", value: d }; }
            update(n) { const o = this._cachedMeta.data; this._updateRadius(), this.updateElements(o, 0, o.length, n); }
            _updateRadius() { const n = this.chart, o = n.chartArea, l = n.options, u = Math.min(o.right - o.left, o.bottom - o.top), d = Math.max(u / 2, 0), y = (d - Math.max(l.cutoutPercentage ? d / 100 * l.cutoutPercentage : 1, 0)) / n.getVisibleDatasetCount(); this.outerRadius = d - y * this.index, this.innerRadius = this.outerRadius - y; }
            updateElements(n, o, l, u) { const d = "reset" === u, h = this.chart, y = this.getDataset(), T = h.options.animation, P = this._cachedMeta.rScale, U = P.xCenter, Q = P.yCenter, ee = P.getIndexAngle(0) - .5 * lt; let Ce, ue = ee; const Ie = 360 / this.countVisibleElements(); for (Ce = 0; Ce < o; ++Ce)
                ue += this._computeAngle(Ce, u, Ie); for (Ce = o; Ce < o + l; Ce++) {
                const dt = n[Ce];
                let At = ue, pt = ue + this._computeAngle(Ce, u, Ie), st = h.getDataVisibility(Ce) ? P.getDistanceFromCenterForValue(y.data[Ce]) : 0;
                ue = pt, d && (T.animateScale && (st = 0), T.animateRotate && (At = pt = ee));
                const Rt = { x: U, y: Q, innerRadius: 0, outerRadius: st, startAngle: At, endAngle: pt, options: this.resolveDataElementOptions(Ce, dt.active ? "active" : u) };
                this.updateElement(dt, Ce, Rt, u);
            } }
            countVisibleElements() { const n = this.getDataset(); let l = 0; return this._cachedMeta.data.forEach((u, d) => { !isNaN(n.data[d]) && this.chart.getDataVisibility(d) && l++; }), l; }
            _computeAngle(n, o, l) { return this.chart.getDataVisibility(n) ? ei(this.resolveDataElementOptions(n, o).angle || l) : 0; }
        } return r.id = "polarArea", r.defaults = { dataElementType: "arc", animation: { animateRotate: !0, animateScale: !0 }, animations: { numbers: { type: "number", properties: ["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius"] } }, indexAxis: "r", startAngle: 0 }, r.overrides = { aspectRatio: 1, plugins: { legend: { labels: { generateLabels(s) { const n = s.data; if (n.labels.length && n.datasets.length) {
                            const { labels: { pointStyle: o } } = s.legend.options;
                            return n.labels.map((l, u) => { const h = s.getDatasetMeta(0).controller.getStyle(u); return { text: l, fillStyle: h.backgroundColor, strokeStyle: h.borderColor, lineWidth: h.borderWidth, pointStyle: o, hidden: !s.getDataVisibility(u), index: u }; });
                        } return []; } }, onClick(s, n, o) { o.chart.toggleDataVisibility(n.index), o.chart.update(); } }, tooltip: { callbacks: { title: () => "", label: s => s.chart.data.labels[s.dataIndex] + ": " + s.formattedValue } } }, scales: { r: { type: "radialLinear", angleLines: { display: !1 }, beginAtZero: !0, grid: { circular: !0 }, pointLabels: { display: !1 }, startAngle: 0 } } }, r; })(), jo = (() => { class r extends mo {
        } return r.id = "pie", r.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" }, r; })(), vo = (() => { class r extends ji {
            getLabelAndValue(n) { const o = this._cachedMeta.vScale, l = this.getParsed(n); return { label: o.getLabels()[n], value: "" + o.getLabelForValue(l[o.axis]) }; }
            update(n) { const o = this._cachedMeta, l = o.dataset, u = o.data || [], d = o.iScale.getLabels(); if (l.points = u, "resize" !== n) {
                const h = this.resolveDatasetElementOptions(n);
                this.options.showLine || (h.borderWidth = 0), this.updateElement(l, void 0, { _loop: !0, _fullLoop: d.length === u.length, options: h }, n);
            } this.updateElements(u, 0, u.length, n); }
            updateElements(n, o, l, u) { const d = this.getDataset(), h = this._cachedMeta.rScale, y = "reset" === u; for (let D = o; D < o + l; D++) {
                const T = n[D], P = this.resolveDataElementOptions(D, T.active ? "active" : u), U = h.getPointPositionForValue(D, d.data[D]), Q = y ? h.xCenter : U.x, ee = y ? h.yCenter : U.y, ue = { x: Q, y: ee, angle: U.angle, skip: isNaN(Q) || isNaN(ee), options: P };
                this.updateElement(T, D, ue, u);
            } }
        } return r.id = "radar", r.defaults = { datasetElementType: "line", dataElementType: "point", indexAxis: "r", showLine: !0, elements: { line: { fill: "start" } } }, r.overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } }, r; })(), Qr = (() => { class r extends Ea {
        } return r.id = "scatter", r.defaults = { showLine: !1, fill: !1 }, r.overrides = { interaction: { mode: "point" }, plugins: { tooltip: { callbacks: { title: () => "", label: s => "(" + s.label + ", " + s.formattedValue + ")" } } }, scales: { x: { type: "linear" }, y: { type: "linear" } } }, r; })(); function Rr() { throw new Error("This method is not implemented: Check that a complete date adapter is provided."); } var x = { _date: (() => { class r {
                constructor(n) { this.options = n || {}; }
                formats() { return Rr(); }
                parse(n, o) { return Rr(); }
                format(n, o) { return Rr(); }
                add(n, o, l) { return Rr(); }
                diff(n, o, l) { return Rr(); }
                startOf(n, o, l) { return Rr(); }
                endOf(n, o) { return Rr(); }
            } return r.override = function (s) { Object.assign(r.prototype, s); }, r; })() }; function v(r, s) { return "native" in r ? { x: r.x, y: r.y } : vs(r, s); } function I(r, s, n, o) { const { controller: l, data: u, _sorted: d } = r, h = l._cachedMeta.iScale; if (h && s === h.axis && "r" !== s && d && u.length) {
            const y = h._reversePixels ? ar : rs;
            if (!o)
                return y(u, s, n);
            if (l._sharedOptions) {
                const D = u[0], T = "function" == typeof D.getRange && D.getRange(s);
                if (T) {
                    const P = y(u, s, n - T), U = y(u, s, n + T);
                    return { lo: P.lo, hi: U.hi };
                }
            }
        } return { lo: 0, hi: u.length - 1 }; } function B(r, s, n, o, l) { const u = r.getSortedVisibleDatasetMetas(), d = n[s]; for (let h = 0, y = u.length; h < y; ++h) {
            const { index: D, data: T } = u[h], { lo: P, hi: U } = I(u[h], s, d, l);
            for (let Q = P; Q <= U; ++Q) {
                const ee = T[Q];
                ee.skip || o(ee, D, Q);
            }
        } } function te(r, s, n, o) { const l = []; return di(s, r.chartArea, r._minPadding) && B(r, n, s, function (d, h, y) { d.inRange(s.x, s.y, o) && l.push({ element: d, datasetIndex: h, index: y }); }, !0), l; } function mn(r, s, n, o, l) { return di(s, r.chartArea, r._minPadding) ? "r" !== n || o ? function kt(r, s, n, o, l) { let u = []; const d = function K(r) { const s = -1 !== r.indexOf("x"), n = -1 !== r.indexOf("y"); return function (o, l) { const u = s ? Math.abs(o.x - l.x) : 0, d = n ? Math.abs(o.y - l.y) : 0; return Math.sqrt(Math.pow(u, 2) + Math.pow(d, 2)); }; }(n); let h = Number.POSITIVE_INFINITY; return B(r, n, s, function y(D, T, P) { const U = D.inRange(s.x, s.y, l); if (o && !U)
            return; const Q = D.getCenterPoint(l); if (!di(Q, r.chartArea, r._minPadding) && !U)
            return; const ue = d(s, Q); ue < h ? (u = [{ element: D, datasetIndex: T, index: P }], h = ue) : ue === h && u.push({ element: D, datasetIndex: T, index: P }); }), u; }(r, s, n, o, l) : function Ue(r, s, n, o) { let l = []; return B(r, n, s, function u(d, h, y) { const { startAngle: D, endAngle: T } = d.getProps(["startAngle", "endAngle"], o), { angle: P } = zn(d, { x: s.x, y: s.y }); ot(P, D, T) && l.push({ element: d, datasetIndex: h, index: y }); }), l; }(r, s, n, l) : []; } function Kt(r, s, n, o) { const l = v(s, r), u = [], d = n.axis, h = "x" === d ? "inXRange" : "inYRange"; let y = !1; return function A(r, s) { const n = r.getSortedVisibleDatasetMetas(); let o, l, u; for (let d = 0, h = n.length; d < h; ++d) {
            ({ index: o, data: l } = n[d]);
            for (let y = 0, D = l.length; y < D; ++y)
                u = l[y], u.skip || s(u, o, y);
        } }(r, (D, T, P) => { D[h](l[d], o) && u.push({ element: D, datasetIndex: T, index: P }), D.inRange(l.x, l.y, o) && (y = !0); }), n.intersect && !y ? [] : u; } var Nn = { modes: { index(r, s, n, o) { const l = v(s, r), u = n.axis || "x", d = n.intersect ? te(r, l, u, o) : mn(r, l, u, !1, o), h = []; return d.length ? (r.getSortedVisibleDatasetMetas().forEach(y => { const D = d[0].index, T = y.data[D]; T && !T.skip && h.push({ element: T, datasetIndex: y.index, index: D }); }), h) : []; }, dataset(r, s, n, o) { const l = v(s, r), u = n.axis || "xy"; let d = n.intersect ? te(r, l, u, o) : mn(r, l, u, !1, o); if (d.length > 0) {
                    const h = d[0].datasetIndex, y = r.getDatasetMeta(h).data;
                    d = [];
                    for (let D = 0; D < y.length; ++D)
                        d.push({ element: y[D], datasetIndex: h, index: D });
                } return d; }, point: (r, s, n, o) => te(r, v(s, r), n.axis || "xy", o), nearest: (r, s, n, o) => mn(r, v(s, r), n.axis || "xy", n.intersect, o), x: (r, s, n, o) => Kt(r, s, { axis: "x", intersect: n.intersect }, o), y: (r, s, n, o) => Kt(r, s, { axis: "y", intersect: n.intersect }, o) } }; const Bn = ["left", "top", "right", "bottom"]; function Ki(r, s) { return r.filter(n => n.pos === s); } function Gi(r, s) { return r.filter(n => -1 === Bn.indexOf(n.pos) && n.box.axis === s); } function Ti(r, s) { return r.sort((n, o) => { const l = s ? o : n, u = s ? n : o; return l.weight === u.weight ? l.index - u.index : l.weight - u.weight; }); } function dl(r, s, n, o) { return Math.max(r[n], s[n]) + Math.max(r[o], s[o]); } function gi(r, s) { r.top = Math.max(r.top, s.top), r.left = Math.max(r.left, s.left), r.bottom = Math.max(r.bottom, s.bottom), r.right = Math.max(r.right, s.right); } function Lh(r, s, n, o) { const { pos: l, box: u } = n, d = r.maxPadding; if (!ke(l)) {
            n.size && (r[l] -= n.size);
            const P = o[n.stack] || { size: 0, count: 1 };
            P.size = Math.max(P.size, n.horizontal ? u.height : u.width), n.size = P.size / P.count, r[l] += n.size;
        } u.getPadding && gi(d, u.getPadding()); const h = Math.max(0, s.outerWidth - dl(d, r, "left", "right")), y = Math.max(0, s.outerHeight - dl(d, r, "top", "bottom")), D = h !== r.w, T = y !== r.h; return r.w = h, r.h = y, n.horizontal ? { same: D, other: T } : { same: T, other: D }; } function Wm(r, s) { const n = s.maxPadding; return function o(l) { const u = { left: 0, top: 0, right: 0, bottom: 0 }; return l.forEach(d => { u[d] = Math.max(s[d], n[d]); }), u; }(r ? ["left", "right"] : ["top", "bottom"]); } function fl(r, s, n, o) { const l = []; let u, d, h, y, D, T; for (u = 0, d = r.length, D = 0; u < d; ++u) {
            h = r[u], y = h.box, y.update(h.width || s.w, h.height || s.h, Wm(h.horizontal, s));
            const { same: P, other: U } = Lh(s, n, h, o);
            D |= P && l.length, T = T || U, y.fullSize || l.push(h);
        } return D && fl(l, s, n, o) || T; } function sc(r, s, n, o, l) { r.top = n, r.left = s, r.right = s + o, r.bottom = n + l, r.width = o, r.height = l; } function kh(r, s, n, o) { const l = n.padding; let { x: u, y: d } = s; for (const h of r) {
            const y = h.box, D = o[h.stack] || { count: 1, placed: 0, weight: 1 }, T = h.stackWeight / D.weight || 1;
            if (h.horizontal) {
                const P = s.w * T, U = D.size || y.height;
                Zt(D.start) && (d = D.start), y.fullSize ? sc(y, l.left, d, n.outerWidth - l.right - l.left, U) : sc(y, s.left + D.placed, d, P, U), D.start = d, D.placed += P, d = y.bottom;
            }
            else {
                const P = s.h * T, U = D.size || y.width;
                Zt(D.start) && (u = D.start), y.fullSize ? sc(y, u, l.top, U, n.outerHeight - l.bottom - l.top) : sc(y, u, s.top + D.placed, U, P), D.start = u, D.placed += P, u = y.right;
            }
        } s.x = u, s.y = d; } fn.set("layout", { autoPadding: !0, padding: { top: 0, right: 0, bottom: 0, left: 0 } }); var us = { addBox(r, s) { r.boxes || (r.boxes = []), s.fullSize = s.fullSize || !1, s.position = s.position || "top", s.weight = s.weight || 0, s._layers = s._layers || function () { return [{ z: 0, draw(n) { s.draw(n); } }]; }, r.boxes.push(s); }, removeBox(r, s) { const n = r.boxes ? r.boxes.indexOf(s) : -1; -1 !== n && r.boxes.splice(n, 1); }, configure(r, s, n) { s.fullSize = n.fullSize, s.position = n.position, s.weight = n.weight; }, update(r, s, n, o) { if (!r)
                return; const l = oi(r.options.layout.padding), u = Math.max(s - l.width, 0), d = Math.max(n - l.height, 0), h = function _o(r) { const s = function qs(r) { const s = []; let n, o, l, u, d, h; for (n = 0, o = (r || []).length; n < o; ++n)
                l = r[n], ({ position: u, options: { stack: d, stackWeight: h = 1 } } = l), s.push({ index: n, box: l, pos: u, horizontal: l.isHorizontal(), weight: l.weight, stack: d && u + d, stackWeight: h }); return s; }(r), n = Ti(s.filter(D => D.box.fullSize), !0), o = Ti(Ki(s, "left"), !0), l = Ti(Ki(s, "right")), u = Ti(Ki(s, "top"), !0), d = Ti(Ki(s, "bottom")), h = Gi(s, "x"), y = Gi(s, "y"); return { fullSize: n, leftAndTop: o.concat(u), rightAndBottom: l.concat(y).concat(d).concat(h), chartArea: Ki(s, "chartArea"), vertical: o.concat(l).concat(y), horizontal: u.concat(d).concat(h) }; }(r.boxes), y = h.vertical, D = h.horizontal; yt(r.boxes, ue => { "function" == typeof ue.beforeLayout && ue.beforeLayout(); }); const T = y.reduce((ue, Ce) => Ce.box.options && !1 === Ce.box.options.display ? ue : ue + 1, 0) || 1, P = Object.freeze({ outerWidth: s, outerHeight: n, padding: l, availableWidth: u, availableHeight: d, vBoxMaxWidth: u / 2 / T, hBoxMaxHeight: d / 2 }), U = Object.assign({}, l); gi(U, oi(o)); const Q = Object.assign({ maxPadding: U, w: u, h: d, x: l.left, y: l.top }, l), ee = function Qi(r, s) { const n = function qr(r) { const s = {}; for (const n of r) {
                const { stack: o, pos: l, stackWeight: u } = n;
                if (!o || !Bn.includes(l))
                    continue;
                const d = s[o] || (s[o] = { count: 0, placed: 0, weight: 0, size: 0 });
                d.count++, d.weight += u;
            } return s; }(r), { vBoxMaxWidth: o, hBoxMaxHeight: l } = s; let u, d, h; for (u = 0, d = r.length; u < d; ++u) {
                h = r[u];
                const { fullSize: y } = h.box, D = n[h.stack], T = D && h.stackWeight / D.weight;
                h.horizontal ? (h.width = T ? T * o : y && s.availableWidth, h.height = l) : (h.width = o, h.height = T ? T * l : y && s.availableHeight);
            } return n; }(y.concat(D), P); fl(h.fullSize, Q, P, ee), fl(y, Q, P, ee), fl(D, Q, P, ee) && fl(y, Q, P, ee), function zm(r) { const s = r.maxPadding; function n(o) { const l = Math.max(s[o] - r[o], 0); return r[o] += l, l; } r.y += n("top"), r.x += n("left"), n("right"), n("bottom"); }(Q), kh(h.leftAndTop, Q, P, ee), Q.x += Q.w, Q.y += Q.h, kh(h.rightAndBottom, Q, P, ee), r.chartArea = { left: Q.left, top: Q.top, right: Q.left + Q.w, bottom: Q.top + Q.h, height: Q.h, width: Q.w }, yt(h.chartArea, ue => { const Ce = ue.box; Object.assign(Ce, r.chartArea), Ce.update(Q.w, Q.h, { left: 0, top: 0, right: 0, bottom: 0 }); }); } }; class Vo {
            acquireContext(s, n) { }
            releaseContext(s) { return !1; }
            addEventListener(s, n, o) { }
            removeEventListener(s, n, o) { }
            getDevicePixelRatio() { return 1; }
            getMaximumSize(s, n, o, l) { return n = Math.max(0, n || s.width), o = o || s.height, { width: n, height: Math.max(0, l ? Math.floor(n / l) : o) }; }
            isAttached(s) { return !0; }
            updateConfig(s) { }
        } class Ym extends Vo {
            acquireContext(s) { return s && s.getContext && s.getContext("2d") || null; }
            updateConfig(s) { s.options.animation = !1; }
        } const vi = "$chartjs", rc = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup", pointerenter: "mouseenter", pointerdown: "mousedown", pointermove: "mousemove", pointerup: "mouseup", pointerleave: "mouseout", pointerout: "mouseout" }, Ho = r => null === r || "" === r, zu = !!ft && { passive: !0 }; function mr(r, s, n) { r.canvas.removeEventListener(s, n, zu); } function xo(r, s) { for (const n of r)
            if (n === s || n.contains(s))
                return !0; } function Aa(r, s, n) { const o = r.canvas, l = new MutationObserver(u => { let d = !1; for (const h of u)
            d = d || xo(h.addedNodes, o), d = d && !xo(h.removedNodes, o); d && n(); }); return l.observe(document, { childList: !0, subtree: !0 }), l; } function Yu(r, s, n) { const o = r.canvas, l = new MutationObserver(u => { let d = !1; for (const h of u)
            d = d || xo(h.removedNodes, o), d = d && !xo(h.addedNodes, o); d && n(); }); return l.observe(document, { childList: !0, subtree: !0 }), l; } const Sa = new Map; let Ku = 0; function Nh() { const r = window.devicePixelRatio; r !== Ku && (Ku = r, Sa.forEach((s, n) => { n.currentDevicePixelRatio !== r && s(); })); } function Os(r, s, n) { const o = r.canvas, l = o && On(o); if (!l)
            return; const u = _e((h, y) => { const D = l.clientWidth; n(h, y), D < l.clientWidth && n(); }, window), d = new ResizeObserver(h => { const y = h[0], D = y.contentRect.width, T = y.contentRect.height; 0 === D && 0 === T || u(D, T); }); return d.observe(l), function Qm(r, s) { Sa.size || window.addEventListener("resize", Nh), Sa.set(r, s); }(r, u), d; } function Ma(r, s, n) { n && n.disconnect(), "resize" === s && function Qu(r) { Sa.delete(r), Sa.size || window.removeEventListener("resize", Nh); }(r); } function Uo(r, s, n) { const o = r.canvas, l = _e(u => { null !== r.ctx && n(function Wu(r, s) { const n = rc[r.type] || r.type, { x: o, y: l } = vs(r, s); return { type: n, chart: s, native: r, x: void 0 !== o ? o : null, y: void 0 !== l ? l : null }; }(u, r)); }, r, u => { const d = u[0]; return [d, d.offsetX, d.offsetY]; }); return function Gs(r, s, n) { r.addEventListener(s, n, zu); }(o, s, l), l; } class qm extends Vo {
            acquireContext(s, n) { const o = s && s.getContext && s.getContext("2d"); return o && o.canvas === s ? (function Km(r, s) { const n = r.style, o = r.getAttribute("height"), l = r.getAttribute("width"); if (r[vi] = { initial: { height: o, width: l, style: { display: n.display, height: n.height, width: n.width } } }, n.display = n.display || "block", n.boxSizing = n.boxSizing || "border-box", Ho(l)) {
                const u = R(r, "width");
                void 0 !== u && (r.width = u);
            } if (Ho(o))
                if ("" === r.style.height)
                    r.height = r.width / (s || 2);
                else {
                    const u = R(r, "height");
                    void 0 !== u && (r.height = u);
                } }(s, n), o) : null; }
            releaseContext(s) { const n = s.canvas; if (!n[vi])
                return !1; const o = n[vi].initial; ["height", "width"].forEach(u => { const d = o[u]; ce(d) ? n.removeAttribute(u) : n.setAttribute(u, d); }); const l = o.style || {}; return Object.keys(l).forEach(u => { n.style[u] = l[u]; }), n.width = n.width, delete n[vi], !0; }
            addEventListener(s, n, o) { this.removeEventListener(s, n), (s.$proxies || (s.$proxies = {}))[n] = ({ attach: Aa, detach: Yu, resize: Os }[n] || Uo)(s, n, o); }
            removeEventListener(s, n) { const o = s.$proxies || (s.$proxies = {}), l = o[n]; l && (({ attach: Ma, detach: Ma, resize: Ma }[n] || mr)(s, n, l), o[n] = void 0); }
            getDevicePixelRatio() { return window.devicePixelRatio; }
            getMaximumSize(s, n, o, l) { return function Mr(r, s, n, o) { const l = dn(r), u = Ot(l, "margin"), d = kn(l.maxWidth, r, "clientWidth") || Bt, h = kn(l.maxHeight, r, "clientHeight") || Bt, y = function Ss(r, s, n) { let o, l; if (void 0 === s || void 0 === n) {
                const u = On(r);
                if (u) {
                    const d = u.getBoundingClientRect(), h = dn(u), y = Ot(h, "border", "width"), D = Ot(h, "padding");
                    s = d.width - D.width - y.width, n = d.height - D.height - y.height, o = kn(h.maxWidth, u, "clientWidth"), l = kn(h.maxHeight, u, "clientHeight");
                }
                else
                    s = r.clientWidth, n = r.clientHeight;
            } return { width: s, height: n, maxWidth: o || Bt, maxHeight: l || Bt }; }(r, s, n); let { width: D, height: T } = y; if ("content-box" === l.boxSizing) {
                const P = Ot(l, "border", "width"), U = Ot(l, "padding");
                D -= U.width + P.width, T -= U.height + P.height;
            } return D = Math.max(0, D - u.width), T = Math.max(0, o ? Math.floor(D / o) : T - u.height), D = Us(Math.min(D, d, y.maxWidth)), T = Us(Math.min(T, h, y.maxHeight)), D && !T && (T = Us(D / 2)), { width: D, height: T }; }(s, n, o, l); }
            isAttached(s) { const n = On(s); return !(!n || !n.isConnected); }
        } class Xs {
            constructor() { this.x = void 0, this.y = void 0, this.active = !1, this.options = void 0, this.$animations = void 0; }
            tooltipPosition(s) { const { x: n, y: o } = this.getProps(["x", "y"], s); return { x: n, y: o }; }
            hasValue() { return Yn(this.x) && Yn(this.y); }
            getProps(s, n) { const o = this.$animations; if (!n || !o)
                return this; const l = {}; return s.forEach(u => { l[u] = o[u] && o[u].active() ? o[u]._to : this[u]; }), l; }
        } Xs.defaults = {}, Xs.defaultRoutes = void 0; const Xu = { values: r => fe(r) ? r : "" + r, numeric(r, s, n) { if (0 === r)
                return "0"; const o = this.chart.options.locale; let l, u = r; if (n.length > 1) {
                const D = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
                (D < 1e-4 || D > 1e15) && (l = "scientific"), u = function Bh(r, s) { let n = s.length > 3 ? s[2].value - s[1].value : s[1].value - s[0].value; return Math.abs(n) >= 1 && r !== Math.floor(r) && (n = r - Math.floor(r)), n; }(r, n);
            } const d = Dn(Math.abs(u)), h = Math.max(Math.min(-1 * Math.floor(d), 20), 0), y = { notation: l, minimumFractionDigits: h, maximumFractionDigits: h }; return Object.assign(y, this.options.ticks.format), q(r, o, y); }, logarithmic(r, s, n) { if (0 === r)
                return "0"; const o = r / Math.pow(10, Math.floor(Dn(r))); return 1 === o || 2 === o || 5 === o ? Xu.numeric.call(this, r, s, n) : ""; } }; var hl = { formatters: Xu }; function Xr(r, s, n, o, l) { const u = Je(o, 0), d = Math.min(Je(l, r.length), r.length); let y, D, T, h = 0; for (n = Math.ceil(n), l && (y = l - o, n = y / Math.floor(y / n)), T = u; T < 0;)
            h++, T = Math.round(u + h * n); for (D = Math.max(u, 0); D < d; D++)
            D === T && (s.push(r[D]), h++, T = Math.round(u + h * n)); } fn.set("scale", { display: !0, offset: !1, reverse: !1, beginAtZero: !1, bounds: "ticks", grace: 0, grid: { display: !0, lineWidth: 1, drawBorder: !0, drawOnChartArea: !0, drawTicks: !0, tickLength: 8, tickWidth: (r, s) => s.lineWidth, tickColor: (r, s) => s.color, offset: !1, borderDash: [], borderDashOffset: 0, borderWidth: 1 }, title: { display: !1, text: "", padding: { top: 4, bottom: 4 } }, ticks: { minRotation: 0, maxRotation: 50, mirror: !1, textStrokeWidth: 0, textStrokeColor: "", padding: 3, display: !0, autoSkip: !0, autoSkipPadding: 3, labelOffset: 0, callback: hl.formatters.values, minor: {}, major: {}, align: "center", crossAlign: "near", showLabelBackdrop: !1, backdropColor: "rgba(255, 255, 255, 0.75)", backdropPadding: 2 } }), fn.route("scale.ticks", "color", "", "color"), fn.route("scale.grid", "color", "", "borderColor"), fn.route("scale.grid", "borderColor", "", "borderColor"), fn.route("scale.title", "color", "", "color"), fn.describe("scale", { _fallback: !1, _scriptable: r => !r.startsWith("before") && !r.startsWith("after") && "callback" !== r && "parser" !== r, _indexable: r => "borderDash" !== r && "tickBorderDash" !== r }), fn.describe("scales", { _fallback: "scale" }), fn.describe("scale.ticks", { _scriptable: r => "backdropPadding" !== r && "callback" !== r, _indexable: r => "backdropPadding" !== r }); const Ju = (r, s, n) => "top" === s || "left" === s ? r[s] + n : r[s] - n; function ed(r, s) { const n = [], o = r.length / s, l = r.length; let u = 0; for (; u < l; u += o)
            n.push(r[Math.floor(u)]); return n; } function Vh(r, s, n) { const o = r.ticks.length, l = Math.min(s, o - 1), u = r._startPixel, d = r._endPixel, h = 1e-6; let D, y = r.getPixelForTick(l); if (!(n && (D = 1 === o ? Math.max(y - u, d - y) : 0 === s ? (r.getPixelForTick(1) - y) / 2 : (y - r.getPixelForTick(l - 1)) / 2, y += l < s ? D : -D, y < u - h || y > d + h)))
            return y; } function Ta(r) { return r.drawTicks ? r.tickLength : 0; } function Go(r, s) { if (!r.display)
            return 0; const n = ii(r.font, s), o = oi(r.padding); return (fe(r.text) ? r.text.length : 1) * n.lineHeight + o.height; } function Vi(r, s, n) { let o = Te(r); return (n && "right" !== s || !n && "right" === s) && (o = (r => "left" === r ? "right" : "right" === r ? "left" : r)(o)), o; } class bo extends Xs {
            constructor(s) { super(), this.id = s.id, this.type = s.type, this.options = void 0, this.ctx = s.ctx, this.chart = s.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = { left: 0, right: 0, top: 0, bottom: 0 }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0; }
            init(s) { this.options = s.setContext(this.getContext()), this.axis = s.axis, this._userMin = this.parse(s.min), this._userMax = this.parse(s.max), this._suggestedMin = this.parse(s.suggestedMin), this._suggestedMax = this.parse(s.suggestedMax); }
            parse(s, n) { return s; }
            getUserBounds() { let { _userMin: s, _userMax: n, _suggestedMin: o, _suggestedMax: l } = this; return s = qe(s, Number.POSITIVE_INFINITY), n = qe(n, Number.NEGATIVE_INFINITY), o = qe(o, Number.POSITIVE_INFINITY), l = qe(l, Number.NEGATIVE_INFINITY), { min: qe(s, o), max: qe(n, l), minDefined: Ne(s), maxDefined: Ne(n) }; }
            getMinMax(s) { let d, { min: n, max: o, minDefined: l, maxDefined: u } = this.getUserBounds(); if (l && u)
                return { min: n, max: o }; const h = this.getMatchingVisibleMetas(); for (let y = 0, D = h.length; y < D; ++y)
                d = h[y].controller.getMinMax(this, s), l || (n = Math.min(n, d.min)), u || (o = Math.max(o, d.max)); return n = u && n > o ? o : n, o = l && n > o ? n : o, { min: qe(n, qe(o, n)), max: qe(o, qe(n, o)) }; }
            getPadding() { return { left: this.paddingLeft || 0, top: this.paddingTop || 0, right: this.paddingRight || 0, bottom: this.paddingBottom || 0 }; }
            getTicks() { return this.ticks; }
            getLabels() { const s = this.chart.data; return this.options.labels || (this.isHorizontal() ? s.xLabels : s.yLabels) || s.labels || []; }
            beforeLayout() { this._cache = {}, this._dataLimitsCached = !1; }
            beforeUpdate() { rt(this.options.beforeUpdate, [this]); }
            update(s, n, o) { const { beginAtZero: l, grace: u, ticks: d } = this.options, h = d.sampleSize; this.beforeUpdate(), this.maxWidth = s, this.maxHeight = n, this._margins = o = Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, o), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + o.left + o.right : this.height + o.top + o.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = function or(r, s, n) { const { min: o, max: l } = r, u = Ct(s, (l - o) / 2), d = (h, y) => n && 0 === h ? 0 : h + y; return { min: d(o, -Math.abs(u)), max: d(l, u) }; }(this, u, l), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks(); const y = h < this.ticks.length; this._convertTicksToLabels(y ? ed(this.ticks, h) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), d.display && (d.autoSkip || "auto" === d.source) && (this.ticks = function jh(r, s) { const n = r.options.ticks, o = n.maxTicksLimit || function Zu(r) { const s = r.options.offset, n = r._tickSize(); return Math.floor(Math.min(r._length / n + (s ? 0 : 1), r._maxLength / n)); }(r), l = n.major.enabled ? function gl(r) { const s = []; let n, o; for (n = 0, o = r.length; n < o; n++)
                r[n].major && s.push(n); return s; }(s) : [], u = l.length, d = l[0], h = l[u - 1], y = []; if (u > o)
                return function Xm(r, s, n, o) { let d, l = 0, u = n[0]; for (o = Math.ceil(o), d = 0; d < r.length; d++)
                    d === u && (s.push(r[d]), l++, u = n[l * o]); }(s, y, l, u / o), y; const D = function oc(r, s, n) { const o = function ac(r) { const s = r.length; let n, o; if (s < 2)
                return !1; for (o = r[0], n = 1; n < s; ++n)
                if (r[n] - r[n - 1] !== o)
                    return !1; return o; }(r), l = s.length / n; if (!o)
                return Math.max(l, 1); const u = function Hn(r) { const s = [], n = Math.sqrt(r); let o; for (o = 1; o < n; o++)
                r % o == 0 && (s.push(o), s.push(r / o)); return n === (0 | n) && s.push(n), s.sort((l, u) => l - u).pop(), s; }(o); for (let d = 0, h = u.length - 1; d < h; d++) {
                const y = u[d];
                if (y > l)
                    return y;
            } return Math.max(l, 1); }(l, s, o); if (u > 0) {
                let T, P;
                const U = u > 1 ? Math.round((h - d) / (u - 1)) : null;
                for (Xr(s, y, D, ce(U) ? 0 : d - U, d), T = 0, P = u - 1; T < P; T++)
                    Xr(s, y, D, l[T], l[T + 1]);
                return Xr(s, y, D, h, ce(U) ? s.length : h + U), y;
            } return Xr(s, y, D), y; }(this, this.ticks), this._labelSizes = null), y && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate(); }
            configure() { let n, o, s = this.options.reverse; this.isHorizontal() ? (n = this.left, o = this.right) : (n = this.top, o = this.bottom, s = !s), this._startPixel = n, this._endPixel = o, this._reversePixels = s, this._length = o - n, this._alignToPixels = this.options.alignToPixels; }
            afterUpdate() { rt(this.options.afterUpdate, [this]); }
            beforeSetDimensions() { rt(this.options.beforeSetDimensions, [this]); }
            setDimensions() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0; }
            afterSetDimensions() { rt(this.options.afterSetDimensions, [this]); }
            _callHooks(s) { this.chart.notifyPlugins(s, this.getContext()), rt(this.options[s], [this]); }
            beforeDataLimits() { this._callHooks("beforeDataLimits"); }
            determineDataLimits() { }
            afterDataLimits() { this._callHooks("afterDataLimits"); }
            beforeBuildTicks() { this._callHooks("beforeBuildTicks"); }
            buildTicks() { return []; }
            afterBuildTicks() { this._callHooks("afterBuildTicks"); }
            beforeTickToLabelConversion() { rt(this.options.beforeTickToLabelConversion, [this]); }
            generateTickLabels(s) { const n = this.options.ticks; let o, l, u; for (o = 0, l = s.length; o < l; o++)
                u = s[o], u.label = rt(n.callback, [u.value, o, s], this); }
            afterTickToLabelConversion() { rt(this.options.afterTickToLabelConversion, [this]); }
            beforeCalculateLabelRotation() { rt(this.options.beforeCalculateLabelRotation, [this]); }
            calculateLabelRotation() { const s = this.options, n = s.ticks, o = this.ticks.length, l = n.minRotation || 0, u = n.maxRotation; let h, y, D, d = l; if (!this._isVisible() || !n.display || l >= u || o <= 1 || !this.isHorizontal())
                return void (this.labelRotation = l); const T = this._getLabelSizes(), P = T.widest.width, U = T.highest.height, Q = ze(this.chart.width - P, 0, this.maxWidth); h = s.offset ? this.maxWidth / o : Q / (o - 1), P + 6 > h && (h = Q / (o - (s.offset ? .5 : 1)), y = this.maxHeight - Ta(s.grid) - n.padding - Go(s.title, this.chart.options.font), D = Math.sqrt(P * P + U * U), d = Un(Math.min(Math.asin(ze((T.highest.height + 6) / h, -1, 1)), Math.asin(ze(y / D, -1, 1)) - Math.asin(ze(U / D, -1, 1)))), d = Math.max(l, Math.min(u, d))), this.labelRotation = d; }
            afterCalculateLabelRotation() { rt(this.options.afterCalculateLabelRotation, [this]); }
            beforeFit() { rt(this.options.beforeFit, [this]); }
            fit() { const s = { width: 0, height: 0 }, { chart: n, options: { ticks: o, title: l, grid: u } } = this, d = this._isVisible(), h = this.isHorizontal(); if (d) {
                const y = Go(l, n.options.font);
                if (h ? (s.width = this.maxWidth, s.height = Ta(u) + y) : (s.height = this.maxHeight, s.width = Ta(u) + y), o.display && this.ticks.length) {
                    const { first: D, last: T, widest: P, highest: U } = this._getLabelSizes(), Q = 2 * o.padding, ee = ei(this.labelRotation), ue = Math.cos(ee), Ce = Math.sin(ee);
                    h ? s.height = Math.min(this.maxHeight, s.height + (o.mirror ? 0 : Ce * P.width + ue * U.height) + Q) : s.width = Math.min(this.maxWidth, s.width + (o.mirror ? 0 : ue * P.width + Ce * U.height) + Q), this._calculatePadding(D, T, Ce, ue);
                }
            } this._handleMargins(), h ? (this.width = this._length = n.width - this._margins.left - this._margins.right, this.height = s.height) : (this.width = s.width, this.height = this._length = n.height - this._margins.top - this._margins.bottom); }
            _calculatePadding(s, n, o, l) { const { ticks: { align: u, padding: d }, position: h } = this.options, y = 0 !== this.labelRotation, D = "top" !== h && "x" === this.axis; if (this.isHorizontal()) {
                const T = this.getPixelForTick(0) - this.left, P = this.right - this.getPixelForTick(this.ticks.length - 1);
                let U = 0, Q = 0;
                y ? D ? (U = l * s.width, Q = o * n.height) : (U = o * s.height, Q = l * n.width) : "start" === u ? Q = n.width : "end" === u ? U = s.width : (U = s.width / 2, Q = n.width / 2), this.paddingLeft = Math.max((U - T + d) * this.width / (this.width - T), 0), this.paddingRight = Math.max((Q - P + d) * this.width / (this.width - P), 0);
            }
            else {
                let T = n.height / 2, P = s.height / 2;
                "start" === u ? (T = 0, P = s.height) : "end" === u && (T = n.height, P = 0), this.paddingTop = T + d, this.paddingBottom = P + d;
            } }
            _handleMargins() { this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom)); }
            afterFit() { rt(this.options.afterFit, [this]); }
            isHorizontal() { const { axis: s, position: n } = this.options; return "top" === n || "bottom" === n || "x" === s; }
            isFullSize() { return this.options.fullSize; }
            _convertTicksToLabels(s) { let n, o; for (this.beforeTickToLabelConversion(), this.generateTickLabels(s), n = 0, o = s.length; n < o; n++)
                ce(s[n].label) && (s.splice(n, 1), o--, n--); this.afterTickToLabelConversion(); }
            _getLabelSizes() { let s = this._labelSizes; if (!s) {
                const n = this.options.ticks.sampleSize;
                let o = this.ticks;
                n < o.length && (o = ed(o, n)), this._labelSizes = s = this._computeLabelSizes(o, o.length);
            } return s; }
            _computeLabelSizes(s, n) { const { ctx: o, _longestTextCache: l } = this, u = [], d = []; let D, T, P, U, Q, ee, ue, Ce, Ie, dt, At, h = 0, y = 0; for (D = 0; D < n; ++D) {
                if (U = s[D].label, Q = this._resolveTickFontOptions(D), o.font = ee = Q.string, ue = l[ee] = l[ee] || { data: {}, gc: [] }, Ce = Q.lineHeight, Ie = dt = 0, ce(U) || fe(U)) {
                    if (fe(U))
                        for (T = 0, P = U.length; T < P; ++T)
                            At = U[T], !ce(At) && !fe(At) && (Ie = An(o, ue.data, ue.gc, Ie, At), dt += Ce);
                }
                else
                    Ie = An(o, ue.data, ue.gc, Ie, U), dt = Ce;
                u.push(Ie), d.push(dt), h = Math.max(Ie, h), y = Math.max(dt, y);
            } !function td(r, s) { yt(r, n => { const o = n.gc, l = o.length / 2; let u; if (l > s) {
                for (u = 0; u < l; ++u)
                    delete n.data[o[u]];
                o.splice(0, l);
            } }); }(l, n); const pt = u.indexOf(h), st = d.indexOf(y), Rt = Ft => ({ width: u[Ft] || 0, height: d[Ft] || 0 }); return { first: Rt(0), last: Rt(n - 1), widest: Rt(pt), highest: Rt(st), widths: u, heights: d }; }
            getLabelForValue(s) { return s; }
            getPixelForValue(s, n) { return NaN; }
            getValueForPixel(s) { }
            getPixelForTick(s) { const n = this.ticks; return s < 0 || s > n.length - 1 ? null : this.getPixelForValue(n[s].value); }
            getPixelForDecimal(s) { this._reversePixels && (s = 1 - s); const n = this._startPixel + s * this._length; return function xt(r) { return ze(r, -32768, 32767); }(this._alignToPixels ? Pi(this.chart, n, 0) : n); }
            getDecimalForPixel(s) { const n = (s - this._startPixel) / this._length; return this._reversePixels ? 1 - n : n; }
            getBasePixel() { return this.getPixelForValue(this.getBaseValue()); }
            getBaseValue() { const { min: s, max: n } = this; return s < 0 && n < 0 ? n : s > 0 && n > 0 ? s : 0; }
            getContext(s) { const n = this.ticks || []; if (s >= 0 && s < n.length) {
                const o = n[s];
                return o.$context || (o.$context = function Hh(r, s, n) { return Cs(r, { tick: n, index: s, type: "tick" }); }(this.getContext(), s, o));
            } return this.$context || (this.$context = function nd(r, s) { return Cs(r, { scale: s, type: "scale" }); }(this.chart.getContext(), this)); }
            _tickSize() { const s = this.options.ticks, n = ei(this.labelRotation), o = Math.abs(Math.cos(n)), l = Math.abs(Math.sin(n)), u = this._getLabelSizes(), d = s.autoSkipPadding || 0, h = u ? u.widest.width + d : 0, y = u ? u.highest.height + d : 0; return this.isHorizontal() ? y * o > h * l ? h / o : y / l : y * l < h * o ? y / o : h / l; }
            _isVisible() { const s = this.options.display; return "auto" !== s ? !!s : this.getMatchingVisibleMetas().length > 0; }
            _computeGridLineItems(s) { const n = this.axis, o = this.chart, l = this.options, { grid: u, position: d } = l, h = u.offset, y = this.isHorizontal(), T = this.ticks.length + (h ? 1 : 0), P = Ta(u), U = [], Q = u.setContext(this.getContext()), ee = Q.drawBorder ? Q.borderWidth : 0, ue = ee / 2, Ce = function (wn) { return Pi(o, wn, ee); }; let Ie, dt, At, pt, st, Rt, Ft, Qt, tn, $n, Mn, Ln; if ("top" === d)
                Ie = Ce(this.bottom), Rt = this.bottom - P, Qt = Ie - ue, $n = Ce(s.top) + ue, Ln = s.bottom;
            else if ("bottom" === d)
                Ie = Ce(this.top), $n = s.top, Ln = Ce(s.bottom) - ue, Rt = Ie + ue, Qt = this.top + P;
            else if ("left" === d)
                Ie = Ce(this.right), st = this.right - P, Ft = Ie - ue, tn = Ce(s.left) + ue, Mn = s.right;
            else if ("right" === d)
                Ie = Ce(this.left), tn = s.left, Mn = Ce(s.right) - ue, st = Ie + ue, Ft = this.left + P;
            else if ("x" === n) {
                if ("center" === d)
                    Ie = Ce((s.top + s.bottom) / 2 + .5);
                else if (ke(d)) {
                    const wn = Object.keys(d)[0];
                    Ie = Ce(this.chart.scales[wn].getPixelForValue(d[wn]));
                }
                $n = s.top, Ln = s.bottom, Rt = Ie + ue, Qt = Rt + P;
            }
            else if ("y" === n) {
                if ("center" === d)
                    Ie = Ce((s.left + s.right) / 2);
                else if (ke(d)) {
                    const wn = Object.keys(d)[0];
                    Ie = Ce(this.chart.scales[wn].getPixelForValue(d[wn]));
                }
                st = Ie - ue, Ft = st - P, tn = s.left, Mn = s.right;
            } const Ei = Je(l.ticks.maxTicksLimit, T), Zi = Math.max(1, Math.ceil(T / Ei)); for (dt = 0; dt < T; dt += Zi) {
                const wn = u.setContext(this.getContext(dt)), Zn = wn.lineWidth, sl = wn.color, io = u.borderDash || [], xa = wn.borderDashOffset, rl = wn.tickWidth, so = wn.tickColor, ba = wn.tickBorderDash || [], Da = wn.tickBorderDashOffset;
                At = Vh(this, dt, h), void 0 !== At && (pt = Pi(o, At, Zn), y ? st = Ft = tn = Mn = pt : Rt = Qt = $n = Ln = pt, U.push({ tx1: st, ty1: Rt, tx2: Ft, ty2: Qt, x1: tn, y1: $n, x2: Mn, y2: Ln, width: Zn, color: sl, borderDash: io, borderDashOffset: xa, tickWidth: rl, tickColor: so, tickBorderDash: ba, tickBorderDashOffset: Da }));
            } return this._ticksLength = T, this._borderValue = Ie, U; }
            _computeLabelItems(s) { const n = this.axis, o = this.options, { position: l, ticks: u } = o, d = this.isHorizontal(), h = this.ticks, { align: y, crossAlign: D, padding: T, mirror: P } = u, U = Ta(o.grid), Q = U + T, ee = P ? -T : Q, ue = -ei(this.labelRotation), Ce = []; let Ie, dt, At, pt, st, Rt, Ft, Qt, tn, $n, Mn, Ln, Ei = "middle"; if ("top" === l)
                Rt = this.bottom - ee, Ft = this._getXAxisLabelAlignment();
            else if ("bottom" === l)
                Rt = this.top + ee, Ft = this._getXAxisLabelAlignment();
            else if ("left" === l) {
                const wn = this._getYAxisLabelAlignment(U);
                Ft = wn.textAlign, st = wn.x;
            }
            else if ("right" === l) {
                const wn = this._getYAxisLabelAlignment(U);
                Ft = wn.textAlign, st = wn.x;
            }
            else if ("x" === n) {
                if ("center" === l)
                    Rt = (s.top + s.bottom) / 2 + Q;
                else if (ke(l)) {
                    const wn = Object.keys(l)[0];
                    Rt = this.chart.scales[wn].getPixelForValue(l[wn]) + Q;
                }
                Ft = this._getXAxisLabelAlignment();
            }
            else if ("y" === n) {
                if ("center" === l)
                    st = (s.left + s.right) / 2 - Q;
                else if (ke(l)) {
                    const wn = Object.keys(l)[0];
                    st = this.chart.scales[wn].getPixelForValue(l[wn]);
                }
                Ft = this._getYAxisLabelAlignment(U).textAlign;
            } "y" === n && ("start" === y ? Ei = "top" : "end" === y && (Ei = "bottom")); const Zi = this._getLabelSizes(); for (Ie = 0, dt = h.length; Ie < dt; ++Ie) {
                At = h[Ie], pt = At.label;
                const wn = u.setContext(this.getContext(Ie));
                Qt = this.getPixelForTick(Ie) + u.labelOffset, tn = this._resolveTickFontOptions(Ie), $n = tn.lineHeight, Mn = fe(pt) ? pt.length : 1;
                const Zn = Mn / 2, sl = wn.color, io = wn.textStrokeColor, xa = wn.textStrokeWidth;
                let rl;
                if (d ? (st = Qt, Ln = "top" === l ? "near" === D || 0 !== ue ? -Mn * $n + $n / 2 : "center" === D ? -Zi.highest.height / 2 - Zn * $n + $n : $n / 2 - Zi.highest.height : "near" === D || 0 !== ue ? $n / 2 : "center" === D ? Zi.highest.height / 2 - Zn * $n : Zi.highest.height - Mn * $n, P && (Ln *= -1)) : (Rt = Qt, Ln = (1 - Mn) * $n / 2), wn.showLabelBackdrop) {
                    const so = oi(wn.backdropPadding), ba = Zi.heights[Ie], Da = Zi.widths[Ie];
                    let Vl = Rt + Ln - so.top, Hl = st - so.left;
                    switch (Ei) {
                        case "middle":
                            Vl -= ba / 2;
                            break;
                        case "bottom": Vl -= ba;
                    }
                    switch (Ft) {
                        case "center":
                            Hl -= Da / 2;
                            break;
                        case "right": Hl -= Da;
                    }
                    rl = { left: Hl, top: Vl, width: Da + so.width, height: ba + so.height, color: wn.backdropColor };
                }
                Ce.push({ rotation: ue, label: pt, font: tn, color: sl, strokeColor: io, strokeWidth: xa, textOffset: Ln, textAlign: Ft, textBaseline: Ei, translation: [st, Rt], backdrop: rl });
            } return Ce; }
            _getXAxisLabelAlignment() { const { position: s, ticks: n } = this.options; if (-ei(this.labelRotation))
                return "top" === s ? "left" : "right"; let l = "center"; return "start" === n.align ? l = "left" : "end" === n.align && (l = "right"), l; }
            _getYAxisLabelAlignment(s) { const { position: n, ticks: { crossAlign: o, mirror: l, padding: u } } = this.options, h = s + u, y = this._getLabelSizes().widest.width; let D, T; return "left" === n ? l ? (T = this.right + u, "near" === o ? D = "left" : "center" === o ? (D = "center", T += y / 2) : (D = "right", T += y)) : (T = this.right - h, "near" === o ? D = "right" : "center" === o ? (D = "center", T -= y / 2) : (D = "left", T = this.left)) : "right" === n ? l ? (T = this.left + u, "near" === o ? D = "right" : "center" === o ? (D = "center", T -= y / 2) : (D = "left", T -= y)) : (T = this.left + h, "near" === o ? D = "left" : "center" === o ? (D = "center", T += y / 2) : (D = "right", T = this.right)) : D = "right", { textAlign: D, x: T }; }
            _computeLabelArea() { if (this.options.ticks.mirror)
                return; const s = this.chart, n = this.options.position; return "left" === n || "right" === n ? { top: 0, left: this.left, bottom: s.height, right: this.right } : "top" === n || "bottom" === n ? { top: this.top, left: 0, bottom: this.bottom, right: s.width } : void 0; }
            drawBackground() { const { ctx: s, options: { backgroundColor: n }, left: o, top: l, width: u, height: d } = this; n && (s.save(), s.fillStyle = n, s.fillRect(o, l, u, d), s.restore()); }
            getLineWidthForValue(s) { const n = this.options.grid; if (!this._isVisible() || !n.display)
                return 0; const l = this.ticks.findIndex(u => u.value === s); return l >= 0 ? n.setContext(this.getContext(l)).lineWidth : 0; }
            drawGrid(s) { const n = this.options.grid, o = this.ctx, l = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(s)); let u, d; const h = (y, D, T) => { !T.width || !T.color || (o.save(), o.lineWidth = T.width, o.strokeStyle = T.color, o.setLineDash(T.borderDash || []), o.lineDashOffset = T.borderDashOffset, o.beginPath(), o.moveTo(y.x, y.y), o.lineTo(D.x, D.y), o.stroke(), o.restore()); }; if (n.display)
                for (u = 0, d = l.length; u < d; ++u) {
                    const y = l[u];
                    n.drawOnChartArea && h({ x: y.x1, y: y.y1 }, { x: y.x2, y: y.y2 }, y), n.drawTicks && h({ x: y.tx1, y: y.ty1 }, { x: y.tx2, y: y.ty2 }, { color: y.tickColor, width: y.tickWidth, borderDash: y.tickBorderDash, borderDashOffset: y.tickBorderDashOffset });
                } }
            drawBorder() { const { chart: s, ctx: n, options: { grid: o } } = this, l = o.setContext(this.getContext()), u = o.drawBorder ? l.borderWidth : 0; if (!u)
                return; const d = o.setContext(this.getContext(0)).lineWidth, h = this._borderValue; let y, D, T, P; this.isHorizontal() ? (y = Pi(s, this.left, u) - u / 2, D = Pi(s, this.right, d) + d / 2, T = P = h) : (T = Pi(s, this.top, u) - u / 2, P = Pi(s, this.bottom, d) + d / 2, y = D = h), n.save(), n.lineWidth = l.borderWidth, n.strokeStyle = l.borderColor, n.beginPath(), n.moveTo(y, T), n.lineTo(D, P), n.stroke(), n.restore(); }
            drawLabels(s) { if (!this.options.ticks.display)
                return; const o = this.ctx, l = this._computeLabelArea(); l && ps(o, l); const u = this._labelItems || (this._labelItems = this._computeLabelItems(s)); let d, h; for (d = 0, h = u.length; d < h; ++d) {
                const y = u[d], D = y.font, T = y.label;
                y.backdrop && (o.fillStyle = y.backdrop.color, o.fillRect(y.backdrop.left, y.backdrop.top, y.backdrop.width, y.backdrop.height)), ss(o, T, 0, y.textOffset, D, y);
            } l && is(o); }
            drawTitle() { const { ctx: s, options: { position: n, title: o, reverse: l } } = this; if (!o.display)
                return; const u = ii(o.font), d = oi(o.padding), h = o.align; let y = u.lineHeight / 2; "bottom" === n || "center" === n || ke(n) ? (y += d.bottom, fe(o.text) && (y += u.lineHeight * (o.text.length - 1))) : y += d.top; const { titleX: D, titleY: T, maxWidth: P, rotation: U } = function id(r, s, n, o) { const { top: l, left: u, bottom: d, right: h, chart: y } = r, { chartArea: D, scales: T } = y; let U, Q, ee, P = 0; const ue = d - l, Ce = h - u; if (r.isHorizontal()) {
                if (Q = Le(o, u, h), ke(n)) {
                    const Ie = Object.keys(n)[0];
                    ee = T[Ie].getPixelForValue(n[Ie]) + ue - s;
                }
                else
                    ee = "center" === n ? (D.bottom + D.top) / 2 + ue - s : Ju(r, n, s);
                U = h - u;
            }
            else {
                if (ke(n)) {
                    const Ie = Object.keys(n)[0];
                    Q = T[Ie].getPixelForValue(n[Ie]) - Ce + s;
                }
                else
                    Q = "center" === n ? (D.left + D.right) / 2 - Ce + s : Ju(r, n, s);
                ee = Le(o, d, l), P = "left" === n ? -jt : jt;
            } return { titleX: Q, titleY: ee, maxWidth: U, rotation: P }; }(this, y, n, h); ss(s, o.text, 0, 0, u, { color: o.color, maxWidth: P, rotation: U, textAlign: Vi(h, n, l), textBaseline: "middle", translation: [D, T] }); }
            draw(s) { !this._isVisible() || (this.drawBackground(), this.drawGrid(s), this.drawBorder(), this.drawTitle(), this.drawLabels(s)); }
            _layers() { const s = this.options, n = s.ticks && s.ticks.z || 0, o = Je(s.grid && s.grid.z, -1); return this._isVisible() && this.draw === bo.prototype.draw ? [{ z: o, draw: l => { this.drawBackground(), this.drawGrid(l), this.drawTitle(); } }, { z: o + 1, draw: () => { this.drawBorder(); } }, { z: n, draw: l => { this.drawLabels(l); } }] : [{ z: n, draw: l => { this.draw(l); } }]; }
            getMatchingVisibleMetas(s) { const n = this.chart.getSortedVisibleDatasetMetas(), o = this.axis + "AxisID", l = []; let u, d; for (u = 0, d = n.length; u < d; ++u) {
                const h = n[u];
                h[o] === this.id && (!s || h.type === s) && l.push(h);
            } return l; }
            _resolveTickFontOptions(s) { return ii(this.options.ticks.setContext(this.getContext(s)).font); }
            _maxDigits() { const s = this._resolveTickFontOptions(0).lineHeight; return (this.isHorizontal() ? this.width : this.height) / s; }
        } class $o {
            constructor(s, n, o) { this.type = s, this.scope = n, this.override = o, this.items = Object.create(null); }
            isForType(s) { return Object.prototype.isPrototypeOf.call(this.type.prototype, s.prototype); }
            register(s) { const n = Object.getPrototypeOf(s); let o; (function Gh(r) { return "id" in r && "defaults" in r; })(n) && (o = this.register(n)); const l = this.items, u = s.id, d = this.scope + "." + u; if (!u)
                throw new Error("class does not have id: " + s); return u in l || (l[u] = s, function Ia(r, s, n) { const o = vt(Object.create(null), [n ? fn.get(n) : {}, fn.get(s), r.defaults]); fn.set(s, o), r.defaultRoutes && function Uh(r, s) { Object.keys(s).forEach(n => { const o = n.split("."), l = o.pop(), u = [r].concat(o).join("."), d = s[n].split("."), h = d.pop(), y = d.join("."); fn.route(u, l, y, h); }); }(s, r.defaultRoutes), r.descriptors && fn.describe(s, r.descriptors); }(s, d, o), this.override && fn.override(s.id, s.overrides)), d; }
            get(s) { return this.items[s]; }
            unregister(s) { const n = this.items, o = s.id, l = this.scope; o in n && delete n[o], l && o in fn[l] && (delete fn[l][o], this.override && delete ki[o]); }
        } var Rs = new class $h {
            constructor() { this.controllers = new $o(ji, "datasets", !0), this.elements = new $o(Xs, "elements"), this.plugins = new $o(Object, "plugins"), this.scales = new $o(bo, "scales"), this._typedRegistries = [this.controllers, this.scales, this.elements]; }
            add(...s) { this._each("register", s); }
            remove(...s) { this._each("unregister", s); }
            addControllers(...s) { this._each("register", s, this.controllers); }
            addElements(...s) { this._each("register", s, this.elements); }
            addPlugins(...s) { this._each("register", s, this.plugins); }
            addScales(...s) { this._each("register", s, this.scales); }
            getController(s) { return this._get(s, this.controllers, "controller"); }
            getElement(s) { return this._get(s, this.elements, "element"); }
            getPlugin(s) { return this._get(s, this.plugins, "plugin"); }
            getScale(s) { return this._get(s, this.scales, "scale"); }
            removeControllers(...s) { this._each("unregister", s, this.controllers); }
            removeElements(...s) { this._each("unregister", s, this.elements); }
            removePlugins(...s) { this._each("unregister", s, this.plugins); }
            removeScales(...s) { this._each("unregister", s, this.scales); }
            _each(s, n, o) { [...n].forEach(l => { const u = o || this._getRegistryForType(l); o || u.isForType(l) || u === this.plugins && l.id ? this._exec(s, u, l) : yt(l, d => { const h = o || this._getRegistryForType(d); this._exec(s, h, d); }); }); }
            _exec(s, n, o) { const l = Xt(s); rt(o["before" + l], [], o), n[s](o), rt(o["after" + l], [], o); }
            _getRegistryForType(s) { for (let n = 0; n < this._typedRegistries.length; n++) {
                const o = this._typedRegistries[n];
                if (o.isForType(s))
                    return o;
            } return this.plugins; }
            _get(s, n, o) { const l = n.get(s); if (void 0 === l)
                throw new Error('"' + s + '" is not a registered ' + o + "."); return l; }
        }; class Do {
            constructor() { this._init = []; }
            notify(s, n, o, l) { "beforeInit" === n && (this._init = this._createDescriptors(s, !0), this._notify(this._init, s, "install")); const u = l ? this._descriptors(s).filter(l) : this._descriptors(s), d = this._notify(u, s, n, o); return "afterDestroy" === n && (this._notify(u, s, "stop"), this._notify(this._init, s, "uninstall")), d; }
            _notify(s, n, o, l) { l = l || {}; for (const u of s) {
                const d = u.plugin;
                if (!1 === rt(d[o], [n, l, u.options], d) && l.cancelable)
                    return !1;
            } return !0; }
            invalidate() { ce(this._cache) || (this._oldCache = this._cache, this._cache = void 0); }
            _descriptors(s) { if (this._cache)
                return this._cache; const n = this._cache = this._createDescriptors(s); return this._notifyStateChanges(s), n; }
            _createDescriptors(s, n) { const o = s && s.config, l = Je(o.options && o.options.plugins, {}), u = function sd(r) { const s = [], n = Object.keys(Rs.plugins.items); for (let l = 0; l < n.length; l++)
                s.push(Rs.getPlugin(n[l])); const o = r.plugins || []; for (let l = 0; l < o.length; l++) {
                const u = o[l];
                -1 === s.indexOf(u) && s.push(u);
            } return s; }(o); return !1 !== l || n ? function zh(r, s, n, o) { const l = [], u = r.getContext(); for (let d = 0; d < s.length; d++) {
                const h = s[d], D = zo(n[h.id], o);
                null !== D && l.push({ plugin: h, options: rd(r.config, h, D, u) });
            } return l; }(s, u, l, n) : []; }
            _notifyStateChanges(s) { const n = this._oldCache || [], o = this._cache, l = (u, d) => u.filter(h => !d.some(y => h.plugin.id === y.plugin.id)); this._notify(l(n, o), s, "stop"), this._notify(l(o, n), s, "start"); }
        } function zo(r, s) { return s || !1 !== r ? !0 === r ? {} : r : null; } function rd(r, s, n, o) { const l = r.pluginScopeKeys(s), u = r.getOptionScopes(n, l); return r.createResolver(u, o, [""], { scriptable: !1, indexable: !1, allKeys: !0 }); } function Oa(r, s) { return ((s.datasets || {})[r] || {}).indexAxis || s.indexAxis || (fn.datasets[r] || {}).indexAxis || "x"; } function lc(r, s) { return "x" === r || "y" === r ? r : s.axis || function Wh(r) { return "top" === r || "bottom" === r ? "x" : "left" === r || "right" === r ? "y" : void 0; }(s.position) || r.charAt(0).toLowerCase(); } function Yo(r) { const s = r.options || (r.options = {}); s.plugins = Je(s.plugins, {}), s.scales = function Wo(r, s) { const n = ki[r.type] || { scales: {} }, o = s.scales || {}, l = Oa(r.type, s), u = Object.create(null), d = Object.create(null); return Object.keys(o).forEach(h => { const y = o[h]; if (!ke(y))
            return console.error(`Invalid scale configuration for scale: ${h}`); if (y._proxy)
            return console.warn(`Ignoring resolver passed as options for scale: ${h}`); const D = lc(h, y), T = function od(r, s) { return r === s ? "_index_" : "_value_"; }(D, l), P = n.scales || {}; u[D] = u[D] || h, d[h] = ht(Object.create(null), [{ axis: D }, y, P[D], P[T]]); }), r.data.datasets.forEach(h => { const y = h.type || r.type, D = h.indexAxis || Oa(y, s), P = (ki[y] || {}).scales || {}; Object.keys(P).forEach(U => { const Q = function ml(r, s) { let n = r; return "_index_" === r ? n = s : "_value_" === r && (n = "x" === s ? "y" : "x"), n; }(U, D), ee = h[Q + "AxisID"] || u[Q] || Q; d[ee] = d[ee] || Object.create(null), ht(d[ee], [{ axis: Q }, o[ee], P[U]]); }); }), Object.keys(d).forEach(h => { const y = d[h]; ht(y, [fn.scales[y.type], fn.scale]); }), d; }(r, s); } function ad(r) { return (r = r || {}).datasets = r.datasets || [], r.labels = r.labels || [], r; } const cc = new Map, ld = new Set; function uc(r, s) { let n = cc.get(r); return n || (n = s(), cc.set(r, n), ld.add(n)), n; } const Ra = (r, s, n) => { const o = Me(s, n); void 0 !== o && r.add(o); }; class Yh {
            constructor(s) { this._config = function Zm(r) { return (r = r || {}).data = ad(r.data), Yo(r), r; }(s), this._scopeCache = new Map, this._resolverCache = new Map; }
            get platform() { return this._config.platform; }
            get type() { return this._config.type; }
            set type(s) { this._config.type = s; }
            get data() { return this._config.data; }
            set data(s) { this._config.data = ad(s); }
            get options() { return this._config.options; }
            set options(s) { this._config.options = s; }
            get plugins() { return this._config.plugins; }
            update() { const s = this._config; this.clearCache(), Yo(s); }
            clearCache() { this._scopeCache.clear(), this._resolverCache.clear(); }
            datasetScopeKeys(s) { return uc(s, () => [[`datasets.${s}`, ""]]); }
            datasetAnimationScopeKeys(s, n) { return uc(`${s}.transition.${n}`, () => [[`datasets.${s}.transitions.${n}`, `transitions.${n}`], [`datasets.${s}`, ""]]); }
            datasetElementScopeKeys(s, n) { return uc(`${s}-${n}`, () => [[`datasets.${s}.elements.${n}`, `datasets.${s}`, `elements.${n}`, ""]]); }
            pluginScopeKeys(s) { const n = s.id; return uc(`${this.type}-plugin-${n}`, () => [[`plugins.${n}`, ...s.additionalOptionScopes || []]]); }
            _cachedScopes(s, n) { const o = this._scopeCache; let l = o.get(s); return (!l || n) && (l = new Map, o.set(s, l)), l; }
            getOptionScopes(s, n, o) { const { options: l, type: u } = this, d = this._cachedScopes(s, o), h = d.get(n); if (h)
                return h; const y = new Set; n.forEach(T => { s && (y.add(s), T.forEach(P => Ra(y, s, P))), T.forEach(P => Ra(y, l, P)), T.forEach(P => Ra(y, ki[u] || {}, P)), T.forEach(P => Ra(y, fn, P)), T.forEach(P => Ra(y, ts, P)); }); const D = Array.from(y); return 0 === D.length && D.push(Object.create(null)), ld.has(n) && d.set(n, D), D; }
            chartOptionScopes() { const { options: s, type: n } = this; return [s, ki[n] || {}, fn.datasets[n] || {}, { type: n }, fn, ts]; }
            resolveNamedOptions(s, n, o, l = [""]) { const u = { $shared: !0 }, { resolver: d, subPrefixes: h } = cd(this._resolverCache, s, l); let y = d; (function dc(r, s) { const { isScriptable: n, isIndexable: o } = Vs(r); for (const l of s) {
                const u = n(l), d = o(l), h = (d || u) && r[l];
                if (u && (Cn(h) || yl(h)) || d && fe(h))
                    return !0;
            } return !1; })(d, n) && (u.$shared = !1, y = Ni(d, o = Cn(o) ? o() : o, this.createResolver(s, o, h))); for (const D of n)
                u[D] = y[D]; return u; }
            createResolver(s, n, o = [""], l) { const { resolver: u } = cd(this._resolverCache, s, o); return ke(n) ? Ni(u, n, void 0, l) : u; }
        } function cd(r, s, n) { let o = r.get(s); o || (o = new Map, r.set(s, o)); const l = n.join(); let u = o.get(l); return u || (u = { resolver: js(s, n), subPrefixes: n.filter(h => !h.toLowerCase().includes("hover")) }, o.set(l, u)), u; } const yl = r => ke(r) && Object.getOwnPropertyNames(r).reduce((s, n) => s || Cn(r[n]), !1), Kh = ["top", "bottom", "left", "right", "chartArea"]; function ud(r, s) { return "top" === r || "bottom" === r || -1 === Kh.indexOf(r) && "x" === s; } function Qh(r, s) { return function (n, o) { return n[r] === o[r] ? n[s] - o[s] : n[r] - o[r]; }; } function Pa(r) { const s = r.chart, n = s.options.animation; s.notifyPlugins("afterRender"), rt(n && n.onComplete, [r], s); } function fc(r) { const s = r.chart, n = s.options.animation; rt(n && n.onProgress, [r], s); } function hc(r) { return jn() && "string" == typeof r ? r = document.getElementById(r) : r && r.length && (r = r[0]), r && r.canvas && (r = r.canvas), r; } const Fa = {}, gc = r => { const s = hc(r); return Object.values(Fa).filter(n => n.canvas === s).pop(); }; function Co(r, s, n) { const o = Object.keys(r); for (const l of o) {
            const u = +l;
            if (u >= s) {
                const d = r[l];
                delete r[l], (n > 0 || u > s) && (r[u + n] = d);
            }
        } } class La {
            constructor(s, n) { const o = this.config = new Yh(n), l = hc(s), u = gc(l); if (u)
                throw new Error("Canvas is already in use. Chart with ID '" + u.id + "' must be destroyed before the canvas can be reused."); const d = o.createResolver(o.chartOptionScopes(), this.getContext()); this.platform = new (o.platform || function qu(r) { return !jn() || "undefined" != typeof OffscreenCanvas && r instanceof OffscreenCanvas ? Ym : qm; }(l)), this.platform.updateConfig(o); const h = this.platform.acquireContext(l, d.aspectRatio), y = h && h.canvas, D = y && y.height, T = y && y.width; this.id = de(), this.ctx = h, this.canvas = y, this.width = T, this.height = D, this._options = d, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Do, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = function Ae(r, s) { let n; return function (...o) { return s ? (clearTimeout(n), n = setTimeout(r, s, o)) : r.apply(this, o), s; }; }(P => this.update(P), d.resizeDelay || 0), this._dataChanges = [], Fa[this.id] = this, h && y ? (Di.listen(this, "complete", Pa), Di.listen(this, "progress", fc), this._initialize(), this.attached && this.update()) : console.error("Failed to create chart: can't acquire context from the given item"); }
            get aspectRatio() { const { options: { aspectRatio: s, maintainAspectRatio: n }, width: o, height: l, _aspectRatio: u } = this; return ce(s) ? n && u ? u : l ? o / l : null : s; }
            get data() { return this.config.data; }
            set data(s) { this.config.data = s; }
            get options() { return this._options; }
            set options(s) { this.config.options = s; }
            _initialize() { return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Tr(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this; }
            clear() { return Ls(this.canvas, this.ctx), this; }
            stop() { return Di.stop(this), this; }
            resize(s, n) { Di.running(this) ? this._resizeBeforeDraw = { width: s, height: n } : this._resize(s, n); }
            _resize(s, n) { const o = this.options, d = this.platform.getMaximumSize(this.canvas, s, n, o.maintainAspectRatio && this.aspectRatio), h = o.devicePixelRatio || this.platform.getDevicePixelRatio(), y = this.width ? "resize" : "attach"; this.width = d.width, this.height = d.height, this._aspectRatio = this.aspectRatio, Tr(this, h, !0) && (this.notifyPlugins("resize", { size: d }), rt(o.onResize, [this, d], this), this.attached && this._doResize(y) && this.render()); }
            ensureScalesHaveIDs() { yt(this.options.scales || {}, (o, l) => { o.id = l; }); }
            buildOrUpdateScales() { const s = this.options, n = s.scales, o = this.scales, l = Object.keys(o).reduce((d, h) => (d[h] = !1, d), {}); let u = []; n && (u = u.concat(Object.keys(n).map(d => { const h = n[d], y = lc(d, h), D = "r" === y, T = "x" === y; return { options: h, dposition: D ? "chartArea" : T ? "bottom" : "left", dtype: D ? "radialLinear" : T ? "category" : "linear" }; }))), yt(u, d => { const h = d.options, y = h.id, D = lc(y, h), T = Je(h.type, d.dtype); (void 0 === h.position || ud(h.position, D) !== ud(d.dposition)) && (h.position = d.dposition), l[y] = !0; let P = null; y in o && o[y].type === T ? P = o[y] : (P = new (Rs.getScale(T))({ id: y, type: T, ctx: this.ctx, chart: this }), o[P.id] = P), P.init(h, s); }), yt(l, (d, h) => { d || delete o[h]; }), yt(o, d => { us.configure(this, d, d.options), us.addBox(this, d); }); }
            _updateMetasets() { const s = this._metasets, n = this.data.datasets.length, o = s.length; if (s.sort((l, u) => l.index - u.index), o > n) {
                for (let l = n; l < o; ++l)
                    this._destroyDatasetMeta(l);
                s.splice(n, o - n);
            } this._sortedMetasets = s.slice(0).sort(Qh("order", "index")); }
            _removeUnreferencedMetasets() { const { _metasets: s, data: { datasets: n } } = this; s.length > n.length && delete this._stacks, s.forEach((o, l) => { 0 === n.filter(u => u === o._dataset).length && this._destroyDatasetMeta(l); }); }
            buildOrUpdateControllers() { const s = [], n = this.data.datasets; let o, l; for (this._removeUnreferencedMetasets(), o = 0, l = n.length; o < l; o++) {
                const u = n[o];
                let d = this.getDatasetMeta(o);
                const h = u.type || this.config.type;
                if (d.type && d.type !== h && (this._destroyDatasetMeta(o), d = this.getDatasetMeta(o)), d.type = h, d.indexAxis = u.indexAxis || Oa(h, this.options), d.order = u.order || 0, d.index = o, d.label = "" + u.label, d.visible = this.isDatasetVisible(o), d.controller)
                    d.controller.updateIndex(o), d.controller.linkScales();
                else {
                    const y = Rs.getController(h), { datasetElementType: D, dataElementType: T } = fn.datasets[h];
                    Object.assign(y.prototype, { dataElementType: Rs.getElement(T), datasetElementType: D && Rs.getElement(D) }), d.controller = new y(this, o), s.push(d.controller);
                }
            } return this._updateMetasets(), s; }
            _resetElements() { yt(this.data.datasets, (s, n) => { this.getDatasetMeta(n).controller.reset(); }, this); }
            reset() { this._resetElements(), this.notifyPlugins("reset"); }
            update(s) { const n = this.config; n.update(); const o = this._options = n.createResolver(n.chartOptionScopes(), this.getContext()), l = this._animationsDisabled = !o.animation; if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), !1 === this.notifyPlugins("beforeUpdate", { mode: s, cancelable: !0 }))
                return; const u = this.buildOrUpdateControllers(); this.notifyPlugins("beforeElementsUpdate"); let d = 0; for (let D = 0, T = this.data.datasets.length; D < T; D++) {
                const { controller: P } = this.getDatasetMeta(D), U = !l && -1 === u.indexOf(P);
                P.buildOrUpdateElements(U), d = Math.max(+P.getMaxOverflow(), d);
            } d = this._minPadding = o.layout.autoPadding ? d : 0, this._updateLayout(d), l || yt(u, D => { D.reset(); }), this._updateDatasets(s), this.notifyPlugins("afterUpdate", { mode: s }), this._layers.sort(Qh("z", "_idx")); const { _active: h, _lastEvent: y } = this; y ? this._eventHandler(y, !0) : h.length && this._updateHoverStyles(h, h, !0), this.render(); }
            _updateScales() { yt(this.scales, s => { us.removeBox(this, s); }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales(); }
            _checkEventBindings() { const s = this.options, n = new Set(Object.keys(this._listeners)), o = new Set(s.events); (!It(n, o) || !!this._responsiveListeners !== s.responsive) && (this.unbindEvents(), this.bindEvents()); }
            _updateHiddenIndices() { const { _hiddenIndices: s } = this, n = this._getUniformDataChanges() || []; for (const { method: o, start: l, count: u } of n)
                Co(s, l, "_removeElements" === o ? -u : u); }
            _getUniformDataChanges() { const s = this._dataChanges; if (!s || !s.length)
                return; this._dataChanges = []; const n = this.data.datasets.length, o = u => new Set(s.filter(d => d[0] === u).map((d, h) => h + "," + d.splice(1).join(","))), l = o(0); for (let u = 1; u < n; u++)
                if (!It(l, o(u)))
                    return; return Array.from(l).map(u => u.split(",")).map(u => ({ method: u[1], start: +u[2], count: +u[3] })); }
            _updateLayout(s) { if (!1 === this.notifyPlugins("beforeLayout", { cancelable: !0 }))
                return; us.update(this, this.width, this.height, s); const n = this.chartArea, o = n.width <= 0 || n.height <= 0; this._layers = [], yt(this.boxes, l => { o && "chartArea" === l.position || (l.configure && l.configure(), this._layers.push(...l._layers())); }, this), this._layers.forEach((l, u) => { l._idx = u; }), this.notifyPlugins("afterLayout"); }
            _updateDatasets(s) { if (!1 !== this.notifyPlugins("beforeDatasetsUpdate", { mode: s, cancelable: !0 })) {
                for (let n = 0, o = this.data.datasets.length; n < o; ++n)
                    this.getDatasetMeta(n).controller.configure();
                for (let n = 0, o = this.data.datasets.length; n < o; ++n)
                    this._updateDataset(n, Cn(s) ? s({ datasetIndex: n }) : s);
                this.notifyPlugins("afterDatasetsUpdate", { mode: s });
            } }
            _updateDataset(s, n) { const o = this.getDatasetMeta(s), l = { meta: o, index: s, mode: n, cancelable: !0 }; !1 !== this.notifyPlugins("beforeDatasetUpdate", l) && (o.controller._update(n), l.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", l)); }
            render() { !1 !== this.notifyPlugins("beforeRender", { cancelable: !0 }) && (Di.has(this) ? this.attached && !Di.running(this) && Di.start(this) : (this.draw(), Pa({ chart: this }))); }
            draw() { let s; if (this._resizeBeforeDraw) {
                const { width: o, height: l } = this._resizeBeforeDraw;
                this._resize(o, l), this._resizeBeforeDraw = null;
            } if (this.clear(), this.width <= 0 || this.height <= 0 || !1 === this.notifyPlugins("beforeDraw", { cancelable: !0 }))
                return; const n = this._layers; for (s = 0; s < n.length && n[s].z <= 0; ++s)
                n[s].draw(this.chartArea); for (this._drawDatasets(); s < n.length; ++s)
                n[s].draw(this.chartArea); this.notifyPlugins("afterDraw"); }
            _getSortedDatasetMetas(s) { const n = this._sortedMetasets, o = []; let l, u; for (l = 0, u = n.length; l < u; ++l) {
                const d = n[l];
                (!s || d.visible) && o.push(d);
            } return o; }
            getSortedVisibleDatasetMetas() { return this._getSortedDatasetMetas(!0); }
            _drawDatasets() { if (!1 === this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }))
                return; const s = this.getSortedVisibleDatasetMetas(); for (let n = s.length - 1; n >= 0; --n)
                this._drawDataset(s[n]); this.notifyPlugins("afterDatasetsDraw"); }
            _drawDataset(s) { const n = this.ctx, o = s._clip, l = !o.disabled, u = this.chartArea, d = { meta: s, index: s.index, cancelable: !0 }; !1 !== this.notifyPlugins("beforeDatasetDraw", d) && (l && ps(n, { left: !1 === o.left ? 0 : u.left - o.left, right: !1 === o.right ? this.width : u.right + o.right, top: !1 === o.top ? 0 : u.top - o.top, bottom: !1 === o.bottom ? this.height : u.bottom + o.bottom }), s.controller.draw(), l && is(n), d.cancelable = !1, this.notifyPlugins("afterDatasetDraw", d)); }
            getElementsAtEventForMode(s, n, o, l) { const u = Nn.modes[n]; return "function" == typeof u ? u(this, s, o, l) : []; }
            getDatasetMeta(s) { const n = this.data.datasets[s], o = this._metasets; let l = o.filter(u => u && u._dataset === n).pop(); return l || (l = { type: null, data: [], dataset: null, controller: null, hidden: null, xAxisID: null, yAxisID: null, order: n && n.order || 0, index: s, _dataset: n, _parsed: [], _sorted: !1 }, o.push(l)), l; }
            getContext() { return this.$context || (this.$context = Cs(null, { chart: this, type: "chart" })); }
            getVisibleDatasetCount() { return this.getSortedVisibleDatasetMetas().length; }
            isDatasetVisible(s) { const n = this.data.datasets[s]; if (!n)
                return !1; const o = this.getDatasetMeta(s); return "boolean" == typeof o.hidden ? !o.hidden : !n.hidden; }
            setDatasetVisibility(s, n) { this.getDatasetMeta(s).hidden = !n; }
            toggleDataVisibility(s) { this._hiddenIndices[s] = !this._hiddenIndices[s]; }
            getDataVisibility(s) { return !this._hiddenIndices[s]; }
            _updateVisibility(s, n, o) { const l = o ? "show" : "hide", u = this.getDatasetMeta(s), d = u.controller._resolveAnimations(void 0, l); Zt(n) ? (u.data[n].hidden = !o, this.update()) : (this.setDatasetVisibility(s, o), d.update(u, { visible: o }), this.update(h => h.datasetIndex === s ? l : void 0)); }
            hide(s, n) { this._updateVisibility(s, n, !1); }
            show(s, n) { this._updateVisibility(s, n, !0); }
            _destroyDatasetMeta(s) { const n = this._metasets[s]; n && n.controller && n.controller._destroy(), delete this._metasets[s]; }
            _stop() { let s, n; for (this.stop(), Di.remove(this), s = 0, n = this.data.datasets.length; s < n; ++s)
                this._destroyDatasetMeta(s); }
            destroy() { this.notifyPlugins("beforeDestroy"); const { canvas: s, ctx: n } = this; this._stop(), this.config.clearCache(), s && (this.unbindEvents(), Ls(s, n), this.platform.releaseContext(n), this.canvas = null, this.ctx = null), this.notifyPlugins("destroy"), delete Fa[this.id], this.notifyPlugins("afterDestroy"); }
            toBase64Image(...s) { return this.canvas.toDataURL(...s); }
            bindEvents() { this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0; }
            bindUserEvents() { const s = this._listeners, n = this.platform, o = (u, d) => { n.addEventListener(this, u, d), s[u] = d; }, l = (u, d, h) => { u.offsetX = d, u.offsetY = h, this._eventHandler(u); }; yt(this.options.events, u => o(u, l)); }
            bindResponsiveEvents() { this._responsiveListeners || (this._responsiveListeners = {}); const s = this._responsiveListeners, n = this.platform, o = (y, D) => { n.addEventListener(this, y, D), s[y] = D; }, l = (y, D) => { s[y] && (n.removeEventListener(this, y, D), delete s[y]); }, u = (y, D) => { this.canvas && this.resize(y, D); }; let d; const h = () => { l("attach", h), this.attached = !0, this.resize(), o("resize", u), o("detach", d); }; d = () => { this.attached = !1, l("resize", u), this._stop(), this._resize(0, 0), o("attach", h); }, n.isAttached(this.canvas) ? h() : d(); }
            unbindEvents() { yt(this._listeners, (s, n) => { this.platform.removeEventListener(this, n, s); }), this._listeners = {}, yt(this._responsiveListeners, (s, n) => { this.platform.removeEventListener(this, n, s); }), this._responsiveListeners = void 0; }
            updateHoverStyle(s, n, o) { const l = o ? "set" : "remove"; let u, d, h, y; for ("dataset" === n && (u = this.getDatasetMeta(s[0].datasetIndex), u.controller["_" + l + "DatasetHoverStyle"]()), h = 0, y = s.length; h < y; ++h) {
                d = s[h];
                const D = d && this.getDatasetMeta(d.datasetIndex).controller;
                D && D[l + "HoverStyle"](d.element, d.datasetIndex, d.index);
            } }
            getActiveElements() { return this._active || []; }
            setActiveElements(s) { const n = this._active || [], o = s.map(({ datasetIndex: u, index: d }) => { const h = this.getDatasetMeta(u); if (!h)
                throw new Error("No dataset found at index " + u); return { datasetIndex: u, element: h.data[d], index: d }; }); !tt(o, n) && (this._active = o, this._lastEvent = null, this._updateHoverStyles(o, n)); }
            notifyPlugins(s, n, o) { return this._plugins.notify(this, s, n, o); }
            _updateHoverStyles(s, n, o) { const l = this.options.hover, u = (y, D) => y.filter(T => !D.some(P => T.datasetIndex === P.datasetIndex && T.index === P.index)), d = u(n, s), h = o ? s : u(s, n); d.length && this.updateHoverStyle(d, l.mode, !1), h.length && l.mode && this.updateHoverStyle(h, l.mode, !0); }
            _eventHandler(s, n) { const o = { event: s, replay: n, cancelable: !0, inChartArea: di(s, this.chartArea, this._minPadding) }, l = d => (d.options.events || this.options.events).includes(s.native.type); if (!1 === this.notifyPlugins("beforeEvent", o, l))
                return; const u = this._handleEvent(s, n, o.inChartArea); return o.cancelable = !1, this.notifyPlugins("afterEvent", o, l), (u || o.changed) && this.render(), this; }
            _handleEvent(s, n, o) { const { _active: l = [], options: u } = this, h = this._getActiveElements(s, l, o, n), y = function ve(r) { return "mouseup" === r.type || "click" === r.type || "contextmenu" === r.type; }(s), D = function qh(r, s, n, o) { return n && "mouseout" !== r.type ? o ? s : r : null; }(s, this._lastEvent, o, y); o && (this._lastEvent = null, rt(u.onHover, [s, h, this], this), y && rt(u.onClick, [s, h, this], this)); const T = !tt(h, l); return (T || n) && (this._active = h, this._updateHoverStyles(h, l, n)), this._lastEvent = D, T; }
            _getActiveElements(s, n, o, l) { if ("mouseout" === s.type)
                return []; if (!o)
                return n; const u = this.options.hover; return this.getElementsAtEventForMode(s, u.mode, u, l); }
        } const dd = () => yt(La.instances, r => r._plugins.invalidate()), Zr = !0; function fd(r, s, n) { const { startAngle: o, pixelMargin: l, x: u, y: d, outerRadius: h, innerRadius: y } = s; let D = l / h; r.beginPath(), r.arc(u, d, h, o - D, n + D), y > l ? (D = l / y, r.arc(u, d, y, n + D, o - D, !0)) : r.arc(u, d, l, n + jt, o - jt), r.closePath(), r.clip(); } function wo(r, s, n, o) { return { x: n + r * Math.cos(s), y: o + r * Math.sin(s) }; } function pc(r, s, n, o, l) { const { x: u, y: d, startAngle: h, pixelMargin: y, innerRadius: D } = s, T = Math.max(s.outerRadius + o + n - y, 0), P = D > 0 ? D + o + n + y : 0; let U = 0; const Q = l - h; if (o) {
            const io = ((D > 0 ? D - o : 0) + (T > 0 ? T - o : 0)) / 2;
            U = (Q - (0 !== io ? Q * io / (io + o) : Q)) / 2;
        } const ue = (Q - Math.max(.001, Q * T - n / lt) / T) / 2, Ce = h + ue + U, Ie = l - ue - U, { outerStart: dt, outerEnd: At, innerStart: pt, innerEnd: st } = function Qo(r, s, n, o) { const l = function Pr(r) { return Ns(r, ["outerStart", "outerEnd", "innerStart", "innerEnd"]); }(r.options.borderRadius), u = (n - s) / 2, d = Math.min(u, o * s / 2), h = y => { const D = (n - Math.min(u, y)) * o / 2; return ze(y, 0, Math.min(u, D)); }; return { outerStart: h(l.outerStart), outerEnd: h(l.outerEnd), innerStart: ze(l.innerStart, 0, d), innerEnd: ze(l.innerEnd, 0, d) }; }(s, P, T, Ie - Ce), Rt = T - dt, Ft = T - At, Qt = Ce + dt / Rt, tn = Ie - At / Ft, $n = P + pt, Mn = P + st, Ln = Ce + pt / $n, Ei = Ie - st / Mn; if (r.beginPath(), r.arc(u, d, T, Qt, tn), At > 0) {
            const Zn = wo(Ft, tn, u, d);
            r.arc(Zn.x, Zn.y, At, tn, Ie + jt);
        } const Zi = wo(Mn, Ie, u, d); if (r.lineTo(Zi.x, Zi.y), st > 0) {
            const Zn = wo(Mn, Ei, u, d);
            r.arc(Zn.x, Zn.y, st, Ie + jt, Ei + Math.PI);
        } if (r.arc(u, d, P, Ie - st / P, Ce + pt / P, !0), pt > 0) {
            const Zn = wo($n, Ln, u, d);
            r.arc(Zn.x, Zn.y, pt, Ln + Math.PI, Ce - jt);
        } const wn = wo(Rt, Ce, u, d); if (r.lineTo(wn.x, wn.y), dt > 0) {
            const Zn = wo(Rt, Qt, u, d);
            r.arc(Zn.x, Zn.y, dt, Ce - jt, Qt);
        } r.closePath(); } Object.defineProperties(La, { defaults: { enumerable: Zr, value: fn }, instances: { enumerable: Zr, value: Fa }, overrides: { enumerable: Zr, value: ki }, registry: { enumerable: Zr, value: Rs }, version: { enumerable: Zr, value: "3.7.1" }, getChart: { enumerable: Zr, value: gc }, register: { enumerable: Zr, value: (...r) => { Rs.add(...r), dd(); } }, unregister: { enumerable: Zr, value: (...r) => { Rs.remove(...r), dd(); } } }); class ka extends Xs {
            constructor(s) { super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, s && Object.assign(this, s); }
            inRange(s, n, o) { const l = this.getProps(["x", "y"], o), { angle: u, distance: d } = zn(l, { x: s, y: n }), { startAngle: h, endAngle: y, innerRadius: D, outerRadius: T, circumference: P } = this.getProps(["startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], o), U = this.options.spacing / 2, ee = Je(P, y - h) >= je || ot(u, h, y), ue = Ge(d, D + U, T + U); return ee && ue; }
            getCenterPoint(s) { const { x: n, y: o, startAngle: l, endAngle: u, innerRadius: d, outerRadius: h } = this.getProps(["x", "y", "startAngle", "endAngle", "innerRadius", "outerRadius", "circumference"], s), { offset: y, spacing: D } = this.options, T = (l + u) / 2, P = (d + h + D + y) / 2; return { x: n + Math.cos(T) * P, y: o + Math.sin(T) * P }; }
            tooltipPosition(s) { return this.getCenterPoint(s); }
            draw(s) { const { options: n, circumference: o } = this, l = (n.offset || 0) / 2, u = (n.spacing || 0) / 2; if (this.pixelMargin = "inner" === n.borderAlign ? .33 : 0, this.fullCircles = o > je ? Math.floor(o / je) : 0, 0 === o || this.innerRadius < 0 || this.outerRadius < 0)
                return; s.save(); let d = 0; if (l) {
                d = l / 2;
                const y = (this.startAngle + this.endAngle) / 2;
                s.translate(Math.cos(y) * d, Math.sin(y) * d), this.circumference >= lt && (d = l);
            } s.fillStyle = n.backgroundColor, s.strokeStyle = n.borderColor; const h = function Xh(r, s, n, o) { const { fullCircles: l, startAngle: u, circumference: d } = s; let h = s.endAngle; if (l) {
                pc(r, s, n, o, u + je);
                for (let y = 0; y < l; ++y)
                    r.fill();
                isNaN(d) || (h = u + d % je, d % je == 0 && (h += je));
            } return pc(r, s, n, o, h), r.fill(), h; }(s, this, d, u); (function Jh(r, s, n, o, l) { const { options: u } = s, { borderWidth: d, borderJoinStyle: h } = u, y = "inner" === u.borderAlign; !d || (y ? (r.lineWidth = 2 * d, r.lineJoin = h || "round") : (r.lineWidth = d, r.lineJoin = h || "bevel"), s.fullCircles && function Zh(r, s, n) { const { x: o, y: l, startAngle: u, pixelMargin: d, fullCircles: h } = s, y = Math.max(s.outerRadius - d, 0), D = s.innerRadius + d; let T; for (n && fd(r, s, u + je), r.beginPath(), r.arc(o, l, D, u + je, u, !0), T = 0; T < h; ++T)
                r.stroke(); for (r.beginPath(), r.arc(o, l, y, u, u + je), T = 0; T < h; ++T)
                r.stroke(); }(r, s, y), y && fd(r, s, l), pc(r, s, n, o, l), r.stroke()); })(s, this, d, u, h), s.restore(); }
        } function mc(r, s, n = s) { r.lineCap = Je(n.borderCapStyle, s.borderCapStyle), r.setLineDash(Je(n.borderDash, s.borderDash)), r.lineDashOffset = Je(n.borderDashOffset, s.borderDashOffset), r.lineJoin = Je(n.borderJoinStyle, s.borderJoinStyle), r.lineWidth = Je(n.borderWidth, s.borderWidth), r.strokeStyle = Je(n.borderColor, s.borderColor); } function eg(r, s, n) { r.lineTo(n.x, n.y); } function hd(r, s, n = {}) { const o = r.length, { start: l = 0, end: u = o - 1 } = n, { start: d, end: h } = s, y = Math.max(l, d), D = Math.min(u, h); return { count: o, start: y, loop: s.loop, ilen: D < y && !(l < d && u < d || l > h && u > h) ? o + D - y : D - y }; } function ng(r, s, n, o) { const { points: l, options: u } = s, { count: d, start: h, loop: y, ilen: D } = hd(l, n, o), T = function tg(r) { return r.stepped ? ks : r.tension || "monotone" === r.cubicInterpolationMode ? pi : eg; }(u); let Q, ee, ue, { move: P = !0, reverse: U } = o || {}; for (Q = 0; Q <= D; ++Q)
            ee = l[(h + (U ? D - Q : Q)) % d], !ee.skip && (P ? (r.moveTo(ee.x, ee.y), P = !1) : T(r, ue, ee, U, u.stepped), ue = ee); return y && (ee = l[(h + (U ? D : 0)) % d], T(r, ue, ee, U, u.stepped)), !!y; } function Jm(r, s, n, o) { const l = s.points, { count: u, start: d, ilen: h } = hd(l, n, o), { move: y = !0, reverse: D } = o || {}; let U, Q, ee, ue, Ce, Ie, T = 0, P = 0; const dt = pt => (d + (D ? h - pt : pt)) % u, At = () => { ue !== Ce && (r.lineTo(T, Ce), r.lineTo(T, ue), r.lineTo(T, Ie)); }; for (y && (Q = l[dt(0)], r.moveTo(Q.x, Q.y)), U = 0; U <= h; ++U) {
            if (Q = l[dt(U)], Q.skip)
                continue;
            const pt = Q.x, st = Q.y, Rt = 0 | pt;
            Rt === ee ? (st < ue ? ue = st : st > Ce && (Ce = st), T = (P * T + pt) / ++P) : (At(), r.lineTo(pt, st), ee = Rt, P = 0, ue = Ce = st), Ie = st;
        } At(); } function yc(r) { const s = r.options; return r._decimated || r._loop || s.tension || "monotone" === s.cubicInterpolationMode || s.stepped || s.borderDash && s.borderDash.length ? ng : Jm; } ka.id = "arc", ka.defaults = { borderAlign: "center", borderColor: "#fff", borderJoinStyle: void 0, borderRadius: 0, borderWidth: 2, offset: 0, spacing: 0, angle: void 0 }, ka.defaultRoutes = { backgroundColor: "backgroundColor" }; const Ba = "function" == typeof Path2D; let qo = (() => { class r extends Xs {
            constructor(n) { super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, n && Object.assign(this, n); }
            updateControlPoints(n, o) { const l = this.options; !l.tension && "monotone" !== l.cubicInterpolationMode || l.stepped || this._pointsUpdated || (Mt(this._points, l, n, l.spanGaps ? this._loop : this._fullLoop, o), this._pointsUpdated = !0); }
            set points(n) { this._points = n, delete this._segments, delete this._path, this._pointsUpdated = !1; }
            get points() { return this._points; }
            get segments() { return this._segments || (this._segments = function Fi(r, s) { const n = r.points, o = r.options.spanGaps, l = n.length; if (!l)
                return []; const u = !!r._loop, { start: d, end: h } = function ai(r, s, n, o) { let l = 0, u = s - 1; if (n && !o)
                for (; l < s && !r[l].skip;)
                    l++; for (; l < s && r[l].skip;)
                l++; for (l %= s, n && (u += l); u > l && r[u % s].skip;)
                u--; return u %= s, { start: l, end: u }; }(n, l, u, o); return function mi(r, s, n, o) { return o && o.setContext && n ? function Ms(r, s, n, o) { const l = r._chart.getContext(), u = Ui(r.options), { _datasetIndex: d, options: { spanGaps: h } } = r, y = n.length, D = []; let T = u, P = s[0].start, U = P; function Q(ee, ue, Ce, Ie) { const dt = h ? -1 : 1; if (ee !== ue) {
                for (ee += y; n[ee % y].skip;)
                    ee -= dt;
                for (; n[ue % y].skip;)
                    ue += dt;
                ee % y != ue % y && (D.push({ start: ee % y, end: ue % y, loop: Ce, style: Ie }), T = Ie, P = ue % y);
            } } for (const ee of s) {
                P = h ? P : ee.start;
                let Ce, ue = n[P % y];
                for (U = P + 1; U <= ee.end; U++) {
                    const Ie = n[U % y];
                    Ce = Ui(o.setContext(Cs(l, { type: "segment", p0: ue, p1: Ie, p0DataIndex: (U - 1) % y, p1DataIndex: U % y, datasetIndex: d }))), Si(Ce, T) && Q(P, U - 1, ee.loop, T), ue = Ie, T = Ce;
                }
                P < U - 1 && Q(P, U - 1, ee.loop, T);
            } return D; }(r, s, n, o) : s; }(r, !0 === o ? [{ start: d, end: h, loop: u }] : function li(r, s, n, o) { const l = r.length, u = []; let y, d = s, h = r[s]; for (y = s + 1; y <= n; ++y) {
                const D = r[y % l];
                D.skip || D.stop ? h.skip || (u.push({ start: s % l, end: (y - 1) % l, loop: o = !1 }), s = d = D.stop ? y : null) : (d = y, h.skip && (s = y)), h = D;
            } return null !== d && u.push({ start: s % l, end: d % l, loop: o }), u; }(n, d, h < d ? h + l : h, !!r._fullLoop && 0 === d && h === l - 1), n, s); }(this, this.options.segment)); }
            first() { const n = this.segments; return n.length && this.points[n[0].start]; }
            last() { const n = this.segments, l = n.length; return l && this.points[n[l - 1].end]; }
            interpolate(n, o) { const l = this.options, u = n[o], d = this.points, h = xn(this, { property: o, start: u, end: u }); if (!h.length)
                return; const y = [], D = function Na(r) { return r.stepped ? p : r.tension || "monotone" === r.cubicInterpolationMode ? E : g; }(l); let T, P; for (T = 0, P = h.length; T < P; ++T) {
                const { start: U, end: Q } = h[T], ee = d[U], ue = d[Q];
                if (ee === ue) {
                    y.push(ee);
                    continue;
                }
                const Ie = D(ee, ue, Math.abs((u - ee[o]) / (ue[o] - ee[o])), l.stepped);
                Ie[o] = n[o], y.push(Ie);
            } return 1 === y.length ? y[0] : y; }
            pathSegment(n, o, l) { return yc(this)(n, this, o, l); }
            path(n, o, l) { const u = this.segments, d = yc(this); let h = this._loop; o = o || 0, l = l || this.points.length - o; for (const y of u)
                h &= d(n, this, y, { start: o, end: o + l - 1 }); return !!h; }
            draw(n, o, l, u) { (this.points || []).length && (this.options || {}).borderWidth && (n.save(), function pd(r, s, n, o) { Ba && !s.options.segment ? function gd(r, s, n, o) { let l = s._path; l || (l = s._path = new Path2D, s.path(l, n, o) && l.closePath()), mc(r, s.options), r.stroke(l); }(r, s, n, o) : function yr(r, s, n, o) { const { segments: l, options: u } = s, d = yc(s); for (const h of l)
                mc(r, u, h.style), r.beginPath(), d(r, s, h, { start: n, end: n + o - 1 }) && r.closePath(), r.stroke(); }(r, s, n, o); }(n, this, l, u), n.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0); }
        } return r.id = "line", r.defaults = { borderCapStyle: "butt", borderDash: [], borderDashOffset: 0, borderJoinStyle: "miter", borderWidth: 3, capBezierPoints: !0, cubicInterpolationMode: "default", fill: !1, spanGaps: !1, stepped: !1, tension: 0 }, r.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" }, r.descriptors = { _scriptable: !0, _indexable: s => "borderDash" !== s && "fill" !== s }, r; })(); function vc(r, s, n, o) { const l = r.options, { [n]: u } = r.getProps([n], o); return Math.abs(s - u) < l.radius + l.hitRadius; } let ig = (() => { class r extends Xs {
            constructor(n) { super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, n && Object.assign(this, n); }
            inRange(n, o, l) { const u = this.options, { x: d, y: h } = this.getProps(["x", "y"], l); return Math.pow(n - d, 2) + Math.pow(o - h, 2) < Math.pow(u.hitRadius + u.radius, 2); }
            inXRange(n, o) { return vc(this, n, "x", o); }
            inYRange(n, o) { return vc(this, n, "y", o); }
            getCenterPoint(n) { const { x: o, y: l } = this.getProps(["x", "y"], n); return { x: o, y: l }; }
            size(n) { let o = (n = n || this.options || {}).radius || 0; return o = Math.max(o, o && n.hoverRadius || 0), 2 * (o + (o && n.borderWidth || 0)); }
            draw(n, o) { const l = this.options; this.skip || l.radius < .1 || !di(this, o, this.size(l) / 2) || (n.strokeStyle = l.borderColor, n.lineWidth = l.borderWidth, n.fillStyle = l.backgroundColor, ni(n, l, this.x, this.y)); }
            getRange() { const n = this.options || {}; return n.radius + n.hitRadius; }
        } return r.id = "point", r.defaults = { borderWidth: 1, hitRadius: 1, hoverBorderWidth: 1, hoverRadius: 4, pointStyle: "circle", radius: 3, rotation: 0 }, r.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" }, r; })(); function sg(r, s) { const { x: n, y: o, base: l, width: u, height: d } = r.getProps(["x", "y", "base", "width", "height"], s); let h, y, D, T, P; return r.horizontal ? (P = d / 2, h = Math.min(n, l), y = Math.max(n, l), D = o - P, T = o + P) : (P = u / 2, h = n - P, y = n + P, D = Math.min(o, l), T = Math.max(o, l)), { left: h, top: D, right: y, bottom: T }; } function Eo(r, s, n, o) { return r ? 0 : ze(s, n, o); } function md(r, s, n, o) { const l = null === s, u = null === n, h = r && !(l && u) && sg(r, o); return h && (l || Ge(s, h.left, h.right)) && (u || Ge(n, h.top, h.bottom)); } function yd(r, s) { r.rect(s.x, s.y, s.w, s.h); } function Dc(r, s, n = {}) { const o = r.x !== n.x ? -s : 0, l = r.y !== n.y ? -s : 0; return { x: r.x + o, y: r.y + l, w: r.w + ((r.x + r.w !== n.x + n.w ? s : 0) - o), h: r.h + ((r.y + r.h !== n.y + n.h ? s : 0) - l), radius: r.radius }; } class ja extends Xs {
            constructor(s) { super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, s && Object.assign(this, s); }
            draw(s) { const { inflateAmount: n, options: { borderColor: o, backgroundColor: l } } = this, { inner: u, outer: d } = function bc(r) { const s = sg(r), n = s.right - s.left, o = s.bottom - s.top, l = function _c(r, s, n) { const l = r.borderSkipped, u = Ys(r.options.borderWidth); return { t: Eo(l.top, u.top, 0, n), r: Eo(l.right, u.right, 0, s), b: Eo(l.bottom, u.bottom, 0, n), l: Eo(l.left, u.left, 0, s) }; }(r, n / 2, o / 2), u = function xc(r, s, n) { const { enableBorderRadius: o } = r.getProps(["enableBorderRadius"]), l = r.options.borderRadius, u = ms(l), d = Math.min(s, n), h = r.borderSkipped, y = o || ke(l); return { topLeft: Eo(!y || h.top || h.left, u.topLeft, 0, d), topRight: Eo(!y || h.top || h.right, u.topRight, 0, d), bottomLeft: Eo(!y || h.bottom || h.left, u.bottomLeft, 0, d), bottomRight: Eo(!y || h.bottom || h.right, u.bottomRight, 0, d) }; }(r, n / 2, o / 2); return { outer: { x: s.left, y: s.top, w: n, h: o, radius: u }, inner: { x: s.left + l.l, y: s.top + l.t, w: n - l.l - l.r, h: o - l.t - l.b, radius: { topLeft: Math.max(0, u.topLeft - Math.max(l.t, l.l)), topRight: Math.max(0, u.topRight - Math.max(l.t, l.r)), bottomLeft: Math.max(0, u.bottomLeft - Math.max(l.b, l.l)), bottomRight: Math.max(0, u.bottomRight - Math.max(l.b, l.r)) } } }; }(this), h = function ey(r) { return r.topLeft || r.topRight || r.bottomLeft || r.bottomRight; }(d.radius) ? xi : yd; s.save(), (d.w !== u.w || d.h !== u.h) && (s.beginPath(), h(s, Dc(d, n, u)), s.clip(), h(s, Dc(u, -n, d)), s.fillStyle = o, s.fill("evenodd")), s.beginPath(), h(s, Dc(u, n)), s.fillStyle = l, s.fill(), s.restore(); }
            inRange(s, n, o) { return md(this, s, n, o); }
            inXRange(s, n) { return md(this, s, null, n); }
            inYRange(s, n) { return md(this, null, s, n); }
            getCenterPoint(s) { const { x: n, y: o, base: l, horizontal: u } = this.getProps(["x", "y", "base", "horizontal"], s); return { x: u ? (n + l) / 2 : n, y: u ? o : (o + l) / 2 }; }
            getRange(s) { return "x" === s ? this.width / 2 : this.height / 2; }
        } function cg(r, s, n) { const o = function lg(r) { const s = r.options, n = s.fill; let o = Je(n && n.target, n); return void 0 === o && (o = !!s.backgroundColor), !1 !== o && null !== o && (!0 === o ? "origin" : o); }(r); if (ke(o))
            return !isNaN(o.value) && o; let l = parseFloat(o); return Ne(l) && Math.floor(l) === l ? (("-" === o[0] || "+" === o[0]) && (l = s + l), !(l === s || l < 0 || l >= n) && l) : ["origin", "start", "end", "stack", "shape"].indexOf(o) >= 0 && o; } ja.id = "bar", ja.defaults = { borderSkipped: "start", borderWidth: 0, borderRadius: 0, inflateAmount: "auto", pointStyle: void 0 }, ja.defaultRoutes = { backgroundColor: "backgroundColor", borderColor: "borderColor" }; class Ac {
            constructor(s) { this.x = s.x, this.y = s.y, this.radius = s.radius; }
            pathSegment(s, n, o) { const { x: l, y: u, radius: d } = this; return s.arc(l, u, d, (n = n || { start: 0, end: je }).end, n.start, !0), !o.bounds; }
            interpolate(s) { const { x: n, y: o, radius: l } = this, u = s.angle; return { x: n + Math.cos(u) * l, y: o + Math.sin(u) * l, angle: u }; }
        } function Sc(r, s, n) { for (; s > r; s--) {
            const o = n[s];
            if (!isNaN(o.x) && !isNaN(o.y))
                break;
        } return s; } function ny(r, s, n) { const o = []; for (let l = 0; l < n.length; l++) {
            const u = n[l], { first: d, last: h, point: y } = Ha(u, s, "x");
            if (!(!y || d && h))
                if (d)
                    o.unshift(y);
                else if (r.push(y), !h)
                    break;
        } r.push(...o); } function Ha(r, s, n) { const o = r.interpolate(s, n); if (!o)
            return {}; const l = o[n], u = r.segments, d = r.points; let h = !1, y = !1; for (let D = 0; D < u.length; D++) {
            const T = u[D], P = d[T.start][n], U = d[T.end][n];
            if (Ge(l, P, U)) {
                h = l === P, y = l === U;
                break;
            }
        } return { first: h, last: y, point: o }; } function ds(r) { const { chart: s, fill: n, line: o } = r; if (Ne(n))
            return function wi(r, s) { const n = r.getDatasetMeta(s); return n && r.isDatasetVisible(s) ? n.dataset : null; }(s, n); if ("stack" === n)
            return function hg(r) { const { scale: s, index: n, line: o } = r, l = [], u = o.segments, d = o.points, h = function ty(r, s) { const n = [], o = r.getMatchingVisibleMetas("line"); for (let l = 0; l < o.length; l++) {
                const u = o[l];
                if (u.index === s)
                    break;
                u.hidden || n.unshift(u.dataset);
            } return n; }(s, n); h.push(vl({ x: null, y: s.bottom }, o)); for (let y = 0; y < u.length; y++) {
                const D = u[y];
                for (let T = D.start; T <= D.end; T++)
                    ny(l, d[T], h);
            } return new qo({ points: l, options: {} }); }(r); if ("shape" === n)
            return !0; const l = function dg(r) { return (r.scale || {}).getPointPositionForValue ? function ug(r) { const { scale: s, fill: n } = r, o = s.options, l = s.getLabels().length, u = [], d = o.reverse ? s.max : s.min; let y, D, T; if (T = "start" === n ? d : "end" === n ? o.reverse ? s.min : s.max : ke(n) ? n.value : s.getBaseValue(), o.grid.circular)
            return D = s.getPointPositionForValue(0, d), new Ac({ x: D.x, y: D.y, radius: s.getDistanceFromCenterForValue(T) }); for (y = 0; y < l; ++y)
            u.push(s.getPointPositionForValue(y, T)); return u; }(r) : function Ec(r) { const { scale: s = {}, fill: n } = r; let l, o = null; return "start" === n ? o = s.bottom : "end" === n ? o = s.top : ke(n) ? o = s.getPixelForValue(n.value) : s.getBasePixel && (o = s.getBasePixel()), Ne(o) ? (l = s.isHorizontal(), { x: l ? o : null, y: l ? null : o }) : null; }(r); }(r); return l instanceof Ac ? l : vl(l, o); } function vl(r, s) { let n = [], o = !1; return fe(r) ? (o = !0, n = r) : n = function fg(r, s) { const { x: n = null, y: o = null } = r || {}, l = s.points, u = []; return s.segments.forEach(({ start: d, end: h }) => { h = Sc(d, h, l); const y = l[d], D = l[h]; null !== o ? (u.push({ x: y.x, y: o }), u.push({ x: D.x, y: o })) : null !== n && (u.push({ x: n, y: y.y }), u.push({ x: n, y: D.y })); }), u; }(r, s), n.length ? new qo({ points: n, options: { tension: 0 }, _loop: o, _fullLoop: o }) : null; } function _d(r, s, n) { let l = r[s].fill; const u = [s]; let d; if (!n)
            return l; for (; !1 !== l && -1 === u.indexOf(l);) {
            if (!Ne(l))
                return l;
            if (d = r[l], !d)
                return !1;
            if (d.visible)
                return l;
            u.push(l), l = d.fill;
        } return !1; } function Mc(r, s, n) { const { segments: o, points: l } = s; let u = !0, d = !1; r.beginPath(); for (const h of o) {
            const { start: y, end: D } = h, T = l[y], P = l[Sc(y, D, l)];
            u ? (r.moveTo(T.x, T.y), u = !1) : (r.lineTo(T.x, n), r.lineTo(T.x, T.y)), d = !!s.pathSegment(r, h, { move: d }), d ? r.closePath() : r.lineTo(P.x, n);
        } r.lineTo(s.first().x, n), r.closePath(), r.clip(); } function Hi(r, s, n, o) { if (o)
            return; let l = s[r], u = n[r]; return "angle" === r && (l = ne(l), u = ne(u)), { property: r, start: l, end: u }; } function Xo(r, s, n, o) { return r && s ? o(r[n], s[n]) : r ? r[n] : s ? s[n] : 0; } function gg(r, s, n) { const { top: o, bottom: l } = s.chart.chartArea, { property: u, start: d, end: h } = n || {}; "x" === u && (r.beginPath(), r.rect(d, o, h - d, l - o), r.clip()); } function xd(r, s, n, o) { const l = s.interpolate(n, o); l && r.lineTo(l.x, l.y); } function Ic(r, s) { const { line: n, target: o, property: l, color: u, scale: d } = s, h = function Tc(r, s, n) { const o = r.segments, l = r.points, u = s.points, d = []; for (const h of o) {
            let { start: y, end: D } = h;
            D = Sc(y, D, l);
            const T = Hi(n, l[y], l[D], h.loop);
            if (!s.segments) {
                d.push({ source: h, target: T, start: l[y], end: l[D] });
                continue;
            }
            const P = xn(s, T);
            for (const U of P) {
                const Q = Hi(n, u[U.start], u[U.end], U.loop), ee = nn(h, l, Q);
                for (const ue of ee)
                    d.push({ source: ue, target: U, start: { [n]: Xo(T, Q, "start", Math.max) }, end: { [n]: Xo(T, Q, "end", Math.min) } });
            }
        } return d; }(n, o, l); for (const { source: y, target: D, start: T, end: P } of h) {
            const { style: { backgroundColor: U = u } = {} } = y, Q = !0 !== o;
            r.save(), r.fillStyle = U, gg(r, d, Q && Hi(l, T, P)), r.beginPath();
            const ee = !!n.pathSegment(r, y);
            let ue;
            if (Q) {
                ee ? r.closePath() : xd(r, o, P, l);
                const Ce = !!o.pathSegment(r, D, { move: ee, reverse: !0 });
                ue = ee && Ce, ue || xd(r, o, T, l);
            }
            r.closePath(), r.fill(ue ? "evenodd" : "nonzero"), r.restore();
        } } function _l(r, s, n) { const o = ds(s), { line: l, scale: u, axis: d } = s, h = l.options, y = h.fill, D = h.backgroundColor, { above: T = D, below: P = D } = y || {}; o && l.points.length && (ps(r, n), function pg(r, s) { const { line: n, target: o, above: l, below: u, area: d, scale: h } = s, y = n._loop ? "angle" : s.axis; r.save(), "x" === y && u !== l && (Mc(r, o, d.top), Ic(r, { line: n, target: o, color: l, scale: h, property: y }), r.restore(), r.save(), Mc(r, o, d.bottom)), Ic(r, { line: n, target: o, color: u, scale: h, property: y }), r.restore(); }(r, { line: l, target: o, above: T, below: P, area: n, scale: u, axis: d }), is(r)); } var bd = { id: "filler", afterDatasetsUpdate(r, s, n) { const o = (r.data.datasets || []).length, l = []; let u, d, h, y; for (d = 0; d < o; ++d)
                u = r.getDatasetMeta(d), h = u.dataset, y = null, h && h.options && h instanceof qo && (y = { visible: r.isDatasetVisible(d), index: d, fill: cg(h, d, o), chart: r, axis: u.controller.options.indexAxis, scale: u.vScale, line: h }), u.$filler = y, l.push(y); for (d = 0; d < o; ++d)
                y = l[d], y && !1 !== y.fill && (y.fill = _d(l, d, n.propagate)); }, beforeDraw(r, s, n) { const o = "beforeDraw" === n.drawTime, l = r.getSortedVisibleDatasetMetas(), u = r.chartArea; for (let d = l.length - 1; d >= 0; --d) {
                const h = l[d].$filler;
                !h || (h.line.updateControlPoints(u, h.axis), o && _l(r.ctx, h, u));
            } }, beforeDatasetsDraw(r, s, n) { if ("beforeDatasetsDraw" !== n.drawTime)
                return; const o = r.getSortedVisibleDatasetMetas(); for (let l = o.length - 1; l >= 0; --l) {
                const u = o[l].$filler;
                u && _l(r.ctx, u, r.chartArea);
            } }, beforeDatasetDraw(r, s, n) { const o = s.meta.$filler; !o || !1 === o.fill || "beforeDatasetDraw" !== n.drawTime || _l(r.ctx, o, r.chartArea); }, defaults: { propagate: !0, drawTime: "beforeDatasetDraw" } }; const Oc = (r, s) => { let { boxHeight: n = s, boxWidth: o = s } = r; return r.usePointStyle && (n = Math.min(n, s), o = Math.min(o, s)), { boxWidth: o, boxHeight: n, itemHeight: Math.max(s, n) }; }; class Dd extends Xs {
            constructor(s) { super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = s.chart, this.options = s.options, this.ctx = s.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0; }
            update(s, n, o) { this.maxWidth = s, this.maxHeight = n, this._margins = o, this.setDimensions(), this.buildLabels(), this.fit(); }
            setDimensions() { this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height); }
            buildLabels() { const s = this.options.labels || {}; let n = rt(s.generateLabels, [this.chart], this) || []; s.filter && (n = n.filter(o => s.filter(o, this.chart.data))), s.sort && (n = n.sort((o, l) => s.sort(o, l, this.chart.data))), this.options.reverse && n.reverse(), this.legendItems = n; }
            fit() { const { options: s, ctx: n } = this; if (!s.display)
                return void (this.width = this.height = 0); const o = s.labels, l = ii(o.font), u = l.size, d = this._computeTitleHeight(), { boxWidth: h, itemHeight: y } = Oc(o, u); let D, T; n.font = l.string, this.isHorizontal() ? (D = this.maxWidth, T = this._fitRows(d, u, h, y) + 10) : (T = this.maxHeight, D = this._fitCols(d, u, h, y) + 10), this.width = Math.min(D, s.maxWidth || this.maxWidth), this.height = Math.min(T, s.maxHeight || this.maxHeight); }
            _fitRows(s, n, o, l) { const { ctx: u, maxWidth: d, options: { labels: { padding: h } } } = this, y = this.legendHitBoxes = [], D = this.lineWidths = [0], T = l + h; let P = s; u.textAlign = "left", u.textBaseline = "middle"; let U = -1, Q = -T; return this.legendItems.forEach((ee, ue) => { const Ce = o + n / 2 + u.measureText(ee.text).width; (0 === ue || D[D.length - 1] + Ce + 2 * h > d) && (P += T, D[D.length - (ue > 0 ? 0 : 1)] = 0, Q += T, U++), y[ue] = { left: 0, top: Q, row: U, width: Ce, height: l }, D[D.length - 1] += Ce + h; }), P; }
            _fitCols(s, n, o, l) { const { ctx: u, maxHeight: d, options: { labels: { padding: h } } } = this, y = this.legendHitBoxes = [], D = this.columnSizes = [], T = d - s; let P = h, U = 0, Q = 0, ee = 0, ue = 0; return this.legendItems.forEach((Ce, Ie) => { const dt = o + n / 2 + u.measureText(Ce.text).width; Ie > 0 && Q + l + 2 * h > T && (P += U + h, D.push({ width: U, height: Q }), ee += U + h, ue++, U = Q = 0), y[Ie] = { left: ee, top: Q, col: ue, width: dt, height: l }, U = Math.max(U, dt), Q += l + h; }), P += U, D.push({ width: U, height: Q }), P; }
            adjustHitBoxes() { if (!this.options.display)
                return; const s = this._computeTitleHeight(), { legendHitBoxes: n, options: { align: o, labels: { padding: l }, rtl: u } } = this, d = $e(u, this.left, this.width); if (this.isHorizontal()) {
                let h = 0, y = Le(o, this.left + l, this.right - this.lineWidths[h]);
                for (const D of n)
                    h !== D.row && (h = D.row, y = Le(o, this.left + l, this.right - this.lineWidths[h])), D.top += this.top + s + l, D.left = d.leftForLtr(d.x(y), D.width), y += D.width + l;
            }
            else {
                let h = 0, y = Le(o, this.top + s + l, this.bottom - this.columnSizes[h].height);
                for (const D of n)
                    D.col !== h && (h = D.col, y = Le(o, this.top + s + l, this.bottom - this.columnSizes[h].height)), D.top = y, D.left += this.left + l, D.left = d.leftForLtr(d.x(D.left), D.width), y += D.height + l;
            } }
            isHorizontal() { return "top" === this.options.position || "bottom" === this.options.position; }
            draw() { if (this.options.display) {
                const s = this.ctx;
                ps(s, this), this._draw(), is(s);
            } }
            _draw() { const { options: s, columnSizes: n, lineWidths: o, ctx: l } = this, { align: u, labels: d } = s, h = fn.color, y = $e(s.rtl, this.left, this.width), D = ii(d.font), { color: T, padding: P } = d, U = D.size, Q = U / 2; let ee; this.drawTitle(), l.textAlign = y.textAlign("left"), l.textBaseline = "middle", l.lineWidth = .5, l.font = D.string; const { boxWidth: ue, boxHeight: Ce, itemHeight: Ie } = Oc(d, U), pt = this.isHorizontal(), st = this._computeTitleHeight(); ee = pt ? { x: Le(u, this.left + P, this.right - o[0]), y: this.top + P + st, line: 0 } : { x: this.left + P, y: Le(u, this.top + st + P, this.bottom - n[0].height), line: 0 }, _t(this.ctx, s.textDirection); const Rt = Ie + P; this.legendItems.forEach((Ft, Qt) => { l.strokeStyle = Ft.fontColor || T, l.fillStyle = Ft.fontColor || T; const tn = l.measureText(Ft.text).width, $n = y.textAlign(Ft.textAlign || (Ft.textAlign = d.textAlign)), Mn = ue + Q + tn; let Ln = ee.x, Ei = ee.y; y.setWidth(this.width), pt ? Qt > 0 && Ln + Mn + P > this.right && (Ei = ee.y += Rt, ee.line++, Ln = ee.x = Le(u, this.left + P, this.right - o[ee.line])) : Qt > 0 && Ei + Rt > this.bottom && (Ln = ee.x = Ln + n[ee.line].width + P, ee.line++, Ei = ee.y = Le(u, this.top + st + P, this.bottom - n[ee.line].height)), function (Ft, Qt, tn) { if (isNaN(ue) || ue <= 0 || isNaN(Ce) || Ce < 0)
                return; l.save(); const $n = Je(tn.lineWidth, 1); if (l.fillStyle = Je(tn.fillStyle, h), l.lineCap = Je(tn.lineCap, "butt"), l.lineDashOffset = Je(tn.lineDashOffset, 0), l.lineJoin = Je(tn.lineJoin, "miter"), l.lineWidth = $n, l.strokeStyle = Je(tn.strokeStyle, h), l.setLineDash(Je(tn.lineDash, [])), d.usePointStyle) {
                const Mn = { radius: ue * Math.SQRT2 / 2, pointStyle: tn.pointStyle, rotation: tn.rotation, borderWidth: $n }, Ln = y.xPlus(Ft, ue / 2);
                ni(l, Mn, Ln, Qt + Q);
            }
            else {
                const Mn = Qt + Math.max((U - Ce) / 2, 0), Ln = y.leftForLtr(Ft, ue), Ei = ms(tn.borderRadius);
                l.beginPath(), Object.values(Ei).some(Zi => 0 !== Zi) ? xi(l, { x: Ln, y: Mn, w: ue, h: Ce, radius: Ei }) : l.rect(Ln, Mn, ue, Ce), l.fill(), 0 !== $n && l.stroke();
            } l.restore(); }(y.x(Ln), Ei, Ft), Ln = ((r, s, n, o) => r === (o ? "left" : "right") ? n : "center" === r ? (s + n) / 2 : s)($n, Ln + ue + Q, pt ? Ln + Mn : this.right, s.rtl), function (Ft, Qt, tn) { ss(l, tn.text, Ft, Qt + Ie / 2, D, { strikethrough: tn.hidden, textAlign: y.textAlign(tn.textAlign) }); }(y.x(Ln), Ei, Ft), pt ? ee.x += Mn + P : ee.y += Rt; }), Pt(this.ctx, s.textDirection); }
            drawTitle() { const s = this.options, n = s.title, o = ii(n.font), l = oi(n.padding); if (!n.display)
                return; const u = $e(s.rtl, this.left, this.width), d = this.ctx, h = n.position, D = l.top + o.size / 2; let T, P = this.left, U = this.width; if (this.isHorizontal())
                U = Math.max(...this.lineWidths), T = this.top + D, P = Le(s.align, P, this.right - U);
            else {
                const ee = this.columnSizes.reduce((ue, Ce) => Math.max(ue, Ce.height), 0);
                T = D + Le(s.align, this.top, this.bottom - ee - s.labels.padding - this._computeTitleHeight());
            } const Q = Le(h, P, P + U); d.textAlign = u.textAlign(Te(h)), d.textBaseline = "middle", d.strokeStyle = n.color, d.fillStyle = n.color, d.font = o.string, ss(d, n.text, Q, T, o); }
            _computeTitleHeight() { const s = this.options.title, n = ii(s.font), o = oi(s.padding); return s.display ? n.lineHeight + o.height : 0; }
            _getLegendItemAt(s, n) { let o, l, u; if (Ge(s, this.left, this.right) && Ge(n, this.top, this.bottom))
                for (u = this.legendHitBoxes, o = 0; o < u.length; ++o)
                    if (l = u[o], Ge(s, l.left, l.left + l.width) && Ge(n, l.top, l.top + l.height))
                        return this.legendItems[o]; return null; }
            handleEvent(s) { const n = this.options; if (!function Rc(r, s) { return !!("mousemove" === r && (s.onHover || s.onLeave) || s.onClick && ("click" === r || "mouseup" === r)); }(s.type, n))
                return; const o = this._getLegendItemAt(s.x, s.y); if ("mousemove" === s.type) {
                const l = this._hoveredItem, u = ((r, s) => null !== r && null !== s && r.datasetIndex === s.datasetIndex && r.index === s.index)(l, o);
                l && !u && rt(n.onLeave, [s, l, this], this), this._hoveredItem = o, o && !u && rt(n.onHover, [s, o, this], this);
            }
            else
                o && rt(n.onClick, [s, o, this], this); }
        } var Cd = { id: "legend", _element: Dd, start(r, s, n) { const o = r.legend = new Dd({ ctx: r.ctx, options: n, chart: r }); us.configure(r, o, n), us.addBox(r, o); }, stop(r) { us.removeBox(r, r.legend), delete r.legend; }, beforeUpdate(r, s, n) { const o = r.legend; us.configure(r, o, n), o.options = n; }, afterUpdate(r) { const s = r.legend; s.buildLabels(), s.adjustHitBoxes(); }, afterEvent(r, s) { s.replay || r.legend.handleEvent(s.event); }, defaults: { display: !0, position: "top", align: "center", fullSize: !0, reverse: !1, weight: 1e3, onClick(r, s, n) { const o = s.datasetIndex, l = n.chart; l.isDatasetVisible(o) ? (l.hide(o), s.hidden = !0) : (l.show(o), s.hidden = !1); }, onHover: null, onLeave: null, labels: { color: r => r.chart.options.color, boxWidth: 40, padding: 10, generateLabels(r) { const s = r.data.datasets, { labels: { usePointStyle: n, pointStyle: o, textAlign: l, color: u } } = r.legend.options; return r._getSortedDatasetMetas().map(d => { const h = d.controller.getStyle(n ? 0 : void 0), y = oi(h.borderWidth); return { text: s[d.index].label, fillStyle: h.backgroundColor, fontColor: u, hidden: !d.visible, lineCap: h.borderCapStyle, lineDash: h.borderDash, lineDashOffset: h.borderDashOffset, lineJoin: h.borderJoinStyle, lineWidth: (y.width + y.height) / 4, strokeStyle: h.borderColor, pointStyle: o || h.pointStyle, rotation: h.rotation, textAlign: l || h.textAlign, borderRadius: 0, datasetIndex: d.index }; }, this); } }, title: { color: r => r.chart.options.color, display: !1, position: "center", text: "" } }, descriptors: { _scriptable: r => !r.startsWith("on"), labels: { _scriptable: r => !["generateLabels", "filter", "sort"].includes(r) } } }; class Pc extends Xs {
            constructor(s) { super(), this.chart = s.chart, this.options = s.options, this.ctx = s.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0; }
            update(s, n) { const o = this.options; if (this.left = 0, this.top = 0, !o.display)
                return void (this.width = this.height = this.right = this.bottom = 0); this.width = this.right = s, this.height = this.bottom = n; const l = fe(o.text) ? o.text.length : 1; this._padding = oi(o.padding); const u = l * ii(o.font).lineHeight + this._padding.height; this.isHorizontal() ? this.height = u : this.width = u; }
            isHorizontal() { const s = this.options.position; return "top" === s || "bottom" === s; }
            _drawArgs(s) { const { top: n, left: o, bottom: l, right: u, options: d } = this, h = d.align; let D, T, P, y = 0; return this.isHorizontal() ? (T = Le(h, o, u), P = n + s, D = u - o) : ("left" === d.position ? (T = o + s, P = Le(h, l, n), y = -.5 * lt) : (T = u - s, P = Le(h, n, l), y = .5 * lt), D = l - n), { titleX: T, titleY: P, maxWidth: D, rotation: y }; }
            draw() { const s = this.ctx, n = this.options; if (!n.display)
                return; const o = ii(n.font), u = o.lineHeight / 2 + this._padding.top, { titleX: d, titleY: h, maxWidth: y, rotation: D } = this._drawArgs(u); ss(s, n.text, 0, 0, o, { color: n.color, maxWidth: y, rotation: D, textAlign: Te(n.align), textBaseline: "middle", translation: [d, h] }); }
        } var wd = { id: "title", _element: Pc, start(r, s, n) { !function Fc(r, s) { const n = new Pc({ ctx: r.ctx, options: s, chart: r }); us.configure(r, n, s), us.addBox(r, n), r.titleBlock = n; }(r, n); }, stop(r) { us.removeBox(r, r.titleBlock), delete r.titleBlock; }, beforeUpdate(r, s, n) { const o = r.titleBlock; us.configure(r, o, n), o.options = n; }, defaults: { align: "center", display: !1, font: { weight: "bold" }, fullSize: !0, padding: 10, position: "top", text: "", weight: 2e3 }, defaultRoutes: { color: "color" }, descriptors: { _scriptable: !0, _indexable: !1 } }; const Ga = { average(r) { if (!r.length)
                return !1; let s, n, o = 0, l = 0, u = 0; for (s = 0, n = r.length; s < n; ++s) {
                const d = r[s].element;
                if (d && d.hasValue()) {
                    const h = d.tooltipPosition();
                    o += h.x, l += h.y, ++u;
                }
            } return { x: o / u, y: l / u }; }, nearest(r, s) { if (!r.length)
                return !1; let u, d, h, n = s.x, o = s.y, l = Number.POSITIVE_INFINITY; for (u = 0, d = r.length; u < d; ++u) {
                const y = r[u].element;
                if (y && y.hasValue()) {
                    const T = Xe(s, y.getCenterPoint());
                    T < l && (l = T, h = y);
                }
            } if (h) {
                const y = h.tooltipPosition();
                n = y.x, o = y.y;
            } return { x: n, y: o }; } }; function vr(r, s) { return s && (fe(s) ? Array.prototype.push.apply(r, s) : r.push(s)), r; } function Fr(r) { return ("string" == typeof r || r instanceof String) && r.indexOf("\n") > -1 ? r.split("\n") : r; } function yg(r, s) { const { element: n, datasetIndex: o, index: l } = s, u = r.getDatasetMeta(o).controller, { label: d, value: h } = u.getLabelAndValue(l); return { chart: r, label: d, parsed: u.getParsed(l), raw: r.data.datasets[o].data[l], formattedValue: h, dataset: u.getDataset(), dataIndex: l, datasetIndex: o, element: n }; } function Ed(r, s) { const n = r.chart.ctx, { body: o, footer: l, title: u } = r, { boxWidth: d, boxHeight: h } = s, y = ii(s.bodyFont), D = ii(s.titleFont), T = ii(s.footerFont), P = u.length, U = l.length, Q = o.length, ee = oi(s.padding); let ue = ee.height, Ce = 0, Ie = o.reduce((pt, st) => pt + st.before.length + st.lines.length + st.after.length, 0); Ie += r.beforeBody.length + r.afterBody.length, P && (ue += P * D.lineHeight + (P - 1) * s.titleSpacing + s.titleMarginBottom), Ie && (ue += Q * (s.displayColors ? Math.max(h, y.lineHeight) : y.lineHeight) + (Ie - Q) * y.lineHeight + (Ie - 1) * s.bodySpacing), U && (ue += s.footerMarginTop + U * T.lineHeight + (U - 1) * s.footerSpacing); let dt = 0; const At = function (pt) { Ce = Math.max(Ce, n.measureText(pt).width + dt); }; return n.save(), n.font = D.string, yt(r.title, At), n.font = y.string, yt(r.beforeBody.concat(r.afterBody), At), dt = s.displayColors ? d + 2 + s.boxPadding : 0, yt(o, pt => { yt(pt.before, At), yt(pt.lines, At), yt(pt.after, At); }), dt = 0, n.font = T.string, yt(r.footer, At), n.restore(), Ce += ee.width, { width: Ce, height: ue }; } function _g(r, s, n, o) { const { x: l, width: u } = n, { width: d, chartArea: { left: h, right: y } } = r; let D = "center"; return "center" === o ? D = l <= (h + y) / 2 ? "left" : "right" : l <= u / 2 ? D = "left" : l >= d - u / 2 && (D = "right"), function vg(r, s, n, o) { const { x: l, width: u } = o, d = n.caretSize + n.caretPadding; if ("left" === r && l + u + d > s.width || "right" === r && l - u - d < 0)
            return !0; }(D, r, s, n) && (D = "center"), D; } function Sd(r, s, n) { const o = n.yAlign || s.yAlign || function Ad(r, s) { const { y: n, height: o } = s; return n < o / 2 ? "top" : n > r.height - o / 2 ? "bottom" : "center"; }(r, n); return { xAlign: n.xAlign || s.xAlign || _g(r, s, n, o), yAlign: o }; } function Td(r, s, n, o) { const { caretSize: l, caretPadding: u, cornerRadius: d } = r, { xAlign: h, yAlign: y } = n, D = l + u, { topLeft: T, topRight: P, bottomLeft: U, bottomRight: Q } = ms(d); let ee = function xg(r, s) { let { x: n, width: o } = r; return "right" === s ? n -= o : "center" === s && (n -= o / 2), n; }(s, h); const ue = function Md(r, s, n) { let { y: o, height: l } = r; return "top" === s ? o += n : o -= "bottom" === s ? l + n : l / 2, o; }(s, y, D); return "center" === y ? "left" === h ? ee += D : "right" === h && (ee -= D) : "left" === h ? ee -= Math.max(T, U) + l : "right" === h && (ee += Math.max(P, Q) + l), { x: ze(ee, 0, o.width - s.width), y: ze(ue, 0, o.height - s.height) }; } function bl(r, s, n) { const o = oi(n.padding); return "center" === s ? r.x + r.width / 2 : "right" === s ? r.x + r.width - o.right : r.x + o.left; } function Id(r) { return vr([], Fr(r)); } function Zs(r, s) { const n = s && s.dataset && s.dataset.tooltip && s.dataset.tooltip.callbacks; return n ? r.override(n) : r; } let bg = (() => { class r extends Xs {
            constructor(n) { super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = n.chart || n._chart, this._chart = this.chart, this.options = n.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0; }
            initialize(n) { this.options = n, this._cachedAnimations = void 0, this.$context = void 0; }
            _resolveAnimations() { const n = this._cachedAnimations; if (n)
                return n; const o = this.chart, l = this.options.setContext(this.getContext()), u = l.enabled && o.options.animation && l.animations, d = new Lt(this.chart, u); return u._cacheable && (this._cachedAnimations = Object.freeze(d)), d; }
            getContext() { return this.$context || (this.$context = function Zo(r, s, n) { return Cs(r, { tooltip: s, tooltipItems: n, type: "tooltip" }); }(this.chart.getContext(), this, this._tooltipItems)); }
            getTitle(n, o) { const { callbacks: l } = o, u = l.beforeTitle.apply(this, [n]), d = l.title.apply(this, [n]), h = l.afterTitle.apply(this, [n]); let y = []; return y = vr(y, Fr(u)), y = vr(y, Fr(d)), y = vr(y, Fr(h)), y; }
            getBeforeBody(n, o) { return Id(o.callbacks.beforeBody.apply(this, [n])); }
            getBody(n, o) { const { callbacks: l } = o, u = []; return yt(n, d => { const h = { before: [], lines: [], after: [] }, y = Zs(l, d); vr(h.before, Fr(y.beforeLabel.call(this, d))), vr(h.lines, y.label.call(this, d)), vr(h.after, Fr(y.afterLabel.call(this, d))), u.push(h); }), u; }
            getAfterBody(n, o) { return Id(o.callbacks.afterBody.apply(this, [n])); }
            getFooter(n, o) { const { callbacks: l } = o, u = l.beforeFooter.apply(this, [n]), d = l.footer.apply(this, [n]), h = l.afterFooter.apply(this, [n]); let y = []; return y = vr(y, Fr(u)), y = vr(y, Fr(d)), y = vr(y, Fr(h)), y; }
            _createItems(n) { const o = this._active, l = this.chart.data, u = [], d = [], h = []; let D, T, y = []; for (D = 0, T = o.length; D < T; ++D)
                y.push(yg(this.chart, o[D])); return n.filter && (y = y.filter((P, U, Q) => n.filter(P, U, Q, l))), n.itemSort && (y = y.sort((P, U) => n.itemSort(P, U, l))), yt(y, P => { const U = Zs(n.callbacks, P); u.push(U.labelColor.call(this, P)), d.push(U.labelPointStyle.call(this, P)), h.push(U.labelTextColor.call(this, P)); }), this.labelColors = u, this.labelPointStyles = d, this.labelTextColors = h, this.dataPoints = y, y; }
            update(n, o) { const l = this.options.setContext(this.getContext()), u = this._active; let d, h = []; if (u.length) {
                const y = Ga[l.position].call(this, u, this._eventPosition);
                h = this._createItems(l), this.title = this.getTitle(h, l), this.beforeBody = this.getBeforeBody(h, l), this.body = this.getBody(h, l), this.afterBody = this.getAfterBody(h, l), this.footer = this.getFooter(h, l);
                const D = this._size = Ed(this, l), T = Object.assign({}, y, D), P = Sd(this.chart, l, T), U = Td(l, T, P, this.chart);
                this.xAlign = P.xAlign, this.yAlign = P.yAlign, d = { opacity: 1, x: U.x, y: U.y, width: D.width, height: D.height, caretX: y.x, caretY: y.y };
            }
            else
                0 !== this.opacity && (d = { opacity: 0 }); this._tooltipItems = h, this.$context = void 0, d && this._resolveAnimations().update(this, d), n && l.external && l.external.call(this, { chart: this.chart, tooltip: this, replay: o }); }
            drawCaret(n, o, l, u) { const d = this.getCaretPosition(n, l, u); o.lineTo(d.x1, d.y1), o.lineTo(d.x2, d.y2), o.lineTo(d.x3, d.y3); }
            getCaretPosition(n, o, l) { const { xAlign: u, yAlign: d } = this, { caretSize: h, cornerRadius: y } = l, { topLeft: D, topRight: T, bottomLeft: P, bottomRight: U } = ms(y), { x: Q, y: ee } = n, { width: ue, height: Ce } = o; let Ie, dt, At, pt, st, Rt; return "center" === d ? (st = ee + Ce / 2, "left" === u ? (Ie = Q, dt = Ie - h, pt = st + h, Rt = st - h) : (Ie = Q + ue, dt = Ie + h, pt = st - h, Rt = st + h), At = Ie) : (dt = "left" === u ? Q + Math.max(D, P) + h : "right" === u ? Q + ue - Math.max(T, U) - h : this.caretX, "top" === d ? (pt = ee, st = pt - h, Ie = dt - h, At = dt + h) : (pt = ee + Ce, st = pt + h, Ie = dt + h, At = dt - h), Rt = pt), { x1: Ie, x2: dt, x3: At, y1: pt, y2: st, y3: Rt }; }
            drawTitle(n, o, l) { const u = this.title, d = u.length; let h, y, D; if (d) {
                const T = $e(l.rtl, this.x, this.width);
                for (n.x = bl(this, l.titleAlign, l), o.textAlign = T.textAlign(l.titleAlign), o.textBaseline = "middle", h = ii(l.titleFont), y = l.titleSpacing, o.fillStyle = l.titleColor, o.font = h.string, D = 0; D < d; ++D)
                    o.fillText(u[D], T.x(n.x), n.y + h.lineHeight / 2), n.y += h.lineHeight + y, D + 1 === d && (n.y += l.titleMarginBottom - y);
            } }
            _drawColorBox(n, o, l, u, d) { const h = this.labelColors[l], y = this.labelPointStyles[l], { boxHeight: D, boxWidth: T, boxPadding: P } = d, U = ii(d.bodyFont), Q = bl(this, "left", d), ee = u.x(Q), Ce = o.y + (D < U.lineHeight ? (U.lineHeight - D) / 2 : 0); if (d.usePointStyle) {
                const Ie = { radius: Math.min(T, D) / 2, pointStyle: y.pointStyle, rotation: y.rotation, borderWidth: 1 }, dt = u.leftForLtr(ee, T) + T / 2, At = Ce + D / 2;
                n.strokeStyle = d.multiKeyBackground, n.fillStyle = d.multiKeyBackground, ni(n, Ie, dt, At), n.strokeStyle = h.borderColor, n.fillStyle = h.backgroundColor, ni(n, Ie, dt, At);
            }
            else {
                n.lineWidth = h.borderWidth || 1, n.strokeStyle = h.borderColor, n.setLineDash(h.borderDash || []), n.lineDashOffset = h.borderDashOffset || 0;
                const Ie = u.leftForLtr(ee, T - P), dt = u.leftForLtr(u.xPlus(ee, 1), T - P - 2), At = ms(h.borderRadius);
                Object.values(At).some(pt => 0 !== pt) ? (n.beginPath(), n.fillStyle = d.multiKeyBackground, xi(n, { x: Ie, y: Ce, w: T, h: D, radius: At }), n.fill(), n.stroke(), n.fillStyle = h.backgroundColor, n.beginPath(), xi(n, { x: dt, y: Ce + 1, w: T - 2, h: D - 2, radius: At }), n.fill()) : (n.fillStyle = d.multiKeyBackground, n.fillRect(Ie, Ce, T, D), n.strokeRect(Ie, Ce, T, D), n.fillStyle = h.backgroundColor, n.fillRect(dt, Ce + 1, T - 2, D - 2));
            } n.fillStyle = this.labelTextColors[l]; }
            drawBody(n, o, l) { const { body: u } = this, { bodySpacing: d, bodyAlign: h, displayColors: y, boxHeight: D, boxWidth: T, boxPadding: P } = l, U = ii(l.bodyFont); let Q = U.lineHeight, ee = 0; const ue = $e(l.rtl, this.x, this.width), Ce = function (tn) { o.fillText(tn, ue.x(n.x + ee), n.y + Q / 2), n.y += Q + d; }, Ie = ue.textAlign(h); let dt, At, pt, st, Rt, Ft, Qt; for (o.textAlign = h, o.textBaseline = "middle", o.font = U.string, n.x = bl(this, Ie, l), o.fillStyle = l.bodyColor, yt(this.beforeBody, Ce), ee = y && "right" !== Ie ? "center" === h ? T / 2 + P : T + 2 + P : 0, st = 0, Ft = u.length; st < Ft; ++st) {
                for (dt = u[st], At = this.labelTextColors[st], o.fillStyle = At, yt(dt.before, Ce), pt = dt.lines, y && pt.length && (this._drawColorBox(o, n, st, ue, l), Q = Math.max(U.lineHeight, D)), Rt = 0, Qt = pt.length; Rt < Qt; ++Rt)
                    Ce(pt[Rt]), Q = U.lineHeight;
                yt(dt.after, Ce);
            } ee = 0, Q = U.lineHeight, yt(this.afterBody, Ce), n.y -= d; }
            drawFooter(n, o, l) { const u = this.footer, d = u.length; let h, y; if (d) {
                const D = $e(l.rtl, this.x, this.width);
                for (n.x = bl(this, l.footerAlign, l), n.y += l.footerMarginTop, o.textAlign = D.textAlign(l.footerAlign), o.textBaseline = "middle", h = ii(l.footerFont), o.fillStyle = l.footerColor, o.font = h.string, y = 0; y < d; ++y)
                    o.fillText(u[y], D.x(n.x), n.y + h.lineHeight / 2), n.y += h.lineHeight + l.footerSpacing;
            } }
            drawBackground(n, o, l, u) { const { xAlign: d, yAlign: h } = this, { x: y, y: D } = n, { width: T, height: P } = l, { topLeft: U, topRight: Q, bottomLeft: ee, bottomRight: ue } = ms(u.cornerRadius); o.fillStyle = u.backgroundColor, o.strokeStyle = u.borderColor, o.lineWidth = u.borderWidth, o.beginPath(), o.moveTo(y + U, D), "top" === h && this.drawCaret(n, o, l, u), o.lineTo(y + T - Q, D), o.quadraticCurveTo(y + T, D, y + T, D + Q), "center" === h && "right" === d && this.drawCaret(n, o, l, u), o.lineTo(y + T, D + P - ue), o.quadraticCurveTo(y + T, D + P, y + T - ue, D + P), "bottom" === h && this.drawCaret(n, o, l, u), o.lineTo(y + ee, D + P), o.quadraticCurveTo(y, D + P, y, D + P - ee), "center" === h && "left" === d && this.drawCaret(n, o, l, u), o.lineTo(y, D + U), o.quadraticCurveTo(y, D, y + U, D), o.closePath(), o.fill(), u.borderWidth > 0 && o.stroke(); }
            _updateAnimationTarget(n) { const o = this.chart, l = this.$animations, u = l && l.x, d = l && l.y; if (u || d) {
                const h = Ga[n.position].call(this, this._active, this._eventPosition);
                if (!h)
                    return;
                const y = this._size = Ed(this, n), D = Object.assign({}, h, this._size), T = Sd(o, n, D), P = Td(n, D, T, o);
                (u._to !== P.x || d._to !== P.y) && (this.xAlign = T.xAlign, this.yAlign = T.yAlign, this.width = y.width, this.height = y.height, this.caretX = h.x, this.caretY = h.y, this._resolveAnimations().update(this, P));
            } }
            draw(n) { const o = this.options.setContext(this.getContext()); let l = this.opacity; if (!l)
                return; this._updateAnimationTarget(o); const u = { width: this.width, height: this.height }, d = { x: this.x, y: this.y }; l = Math.abs(l) < .001 ? 0 : l; const h = oi(o.padding); o.enabled && (this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length) && (n.save(), n.globalAlpha = l, this.drawBackground(d, n, u, o), _t(n, o.textDirection), d.y += h.top, this.drawTitle(d, n, o), this.drawBody(d, n, o), this.drawFooter(d, n, o), Pt(n, o.textDirection), n.restore()); }
            getActiveElements() { return this._active || []; }
            setActiveElements(n, o) { const l = this._active, u = n.map(({ datasetIndex: y, index: D }) => { const T = this.chart.getDatasetMeta(y); if (!T)
                throw new Error("Cannot find a dataset at index " + y); return { datasetIndex: y, element: T.data[D], index: D }; }), d = !tt(l, u), h = this._positionChanged(u, o); (d || h) && (this._active = u, this._eventPosition = o, this._ignoreReplayEvents = !0, this.update(!0)); }
            handleEvent(n, o, l = !0) { if (o && this._ignoreReplayEvents)
                return !1; this._ignoreReplayEvents = !1; const u = this.options, d = this._active || [], h = this._getActiveElements(n, d, o, l), y = this._positionChanged(h, n), D = o || !tt(h, d) || y; return D && (this._active = h, (u.enabled || u.external) && (this._eventPosition = { x: n.x, y: n.y }, this.update(!0, o))), D; }
            _getActiveElements(n, o, l, u) { const d = this.options; if ("mouseout" === n.type)
                return []; if (!u)
                return o; const h = this.chart.getElementsAtEventForMode(n, d.mode, d, l); return d.reverse && h.reverse(), h; }
            _positionChanged(n, o) { const { caretX: l, caretY: u, options: d } = this, h = Ga[d.position].call(this, n, o); return !1 !== h && (l !== h.x || u !== h.y); }
        } return r.positioners = Ga, r; })(); var Dg = { id: "tooltip", _element: bg, positioners: Ga, afterInit(r, s, n) { n && (r.tooltip = new bg({ chart: r, options: n })); }, beforeUpdate(r, s, n) { r.tooltip && r.tooltip.initialize(n); }, reset(r, s, n) { r.tooltip && r.tooltip.initialize(n); }, afterDraw(r) { const s = r.tooltip, n = { tooltip: s }; !1 !== r.notifyPlugins("beforeTooltipDraw", n) && (s && s.draw(r.ctx), r.notifyPlugins("afterTooltipDraw", n)); }, afterEvent(r, s) { r.tooltip && r.tooltip.handleEvent(s.event, s.replay, s.inChartArea) && (s.changed = !0); }, defaults: { enabled: !0, external: null, position: "average", backgroundColor: "rgba(0,0,0,0.8)", titleColor: "#fff", titleFont: { weight: "bold" }, titleSpacing: 2, titleMarginBottom: 6, titleAlign: "left", bodyColor: "#fff", bodySpacing: 2, bodyFont: {}, bodyAlign: "left", footerColor: "#fff", footerSpacing: 2, footerMarginTop: 6, footerFont: { weight: "bold" }, footerAlign: "left", padding: 6, caretPadding: 2, caretSize: 5, cornerRadius: 6, boxHeight: (r, s) => s.bodyFont.size, boxWidth: (r, s) => s.bodyFont.size, multiKeyBackground: "#fff", displayColors: !0, boxPadding: 0, borderColor: "rgba(0,0,0,0)", borderWidth: 0, animation: { duration: 400, easing: "easeOutQuart" }, animations: { numbers: { type: "number", properties: ["x", "y", "width", "height", "caretX", "caretY"] }, opacity: { easing: "linear", duration: 200 } }, callbacks: { beforeTitle: Ee, title(r) { if (r.length > 0) {
                        const s = r[0], n = s.chart.data.labels, o = n ? n.length : 0;
                        if (this && this.options && "dataset" === this.options.mode)
                            return s.dataset.label || "";
                        if (s.label)
                            return s.label;
                        if (o > 0 && s.dataIndex < o)
                            return n[s.dataIndex];
                    } return ""; }, afterTitle: Ee, beforeBody: Ee, beforeLabel: Ee, label(r) { if (this && this.options && "dataset" === this.options.mode)
                        return r.label + ": " + r.formattedValue || r.formattedValue; let s = r.dataset.label || ""; s && (s += ": "); const n = r.formattedValue; return ce(n) || (s += n), s; }, labelColor(r) { const n = r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex); return { borderColor: n.borderColor, backgroundColor: n.backgroundColor, borderWidth: n.borderWidth, borderDash: n.borderDash, borderDashOffset: n.borderDashOffset, borderRadius: 0 }; }, labelTextColor() { return this.options.bodyColor; }, labelPointStyle(r) { const n = r.chart.getDatasetMeta(r.datasetIndex).controller.getStyle(r.dataIndex); return { pointStyle: n.pointStyle, rotation: n.rotation }; }, afterLabel: Ee, afterBody: Ee, beforeFooter: Ee, footer: Ee, afterFooter: Ee } }, defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" }, descriptors: { _scriptable: r => "filter" !== r && "itemSort" !== r && "external" !== r, _indexable: !1, callbacks: { _scriptable: !1, _indexable: !1 }, animation: { _fallback: !1 }, animations: { _fallback: "animation" } }, additionalOptionScopes: ["interaction"] }; class Ao extends bo {
            constructor(s) { super(s), this._startValue = void 0, this._valueRange = 0, this._addedLabels = []; }
            init(s) { const n = this._addedLabels; if (n.length) {
                const o = this.getLabels();
                for (const { index: l, label: u } of n)
                    o[l] === u && o.splice(l, 1);
                this._addedLabels = [];
            } super.init(s); }
            parse(s, n) { if (ce(s))
                return null; const o = this.getLabels(); return ((r, s) => null === r ? null : ze(Math.round(r), 0, s))(n = isFinite(n) && o[n] === s ? n : function _r(r, s, n, o) { const l = r.indexOf(s); return -1 === l ? ((r, s, n, o) => ("string" == typeof s ? (n = r.push(s) - 1, o.unshift({ index: n, label: s })) : isNaN(s) && (n = null), n))(r, s, n, o) : l !== r.lastIndexOf(s) ? n : l; }(o, s, Je(n, s), this._addedLabels), o.length - 1); }
            determineDataLimits() { const { minDefined: s, maxDefined: n } = this.getUserBounds(); let { min: o, max: l } = this.getMinMax(!0); "ticks" === this.options.bounds && (s || (o = 0), n || (l = this.getLabels().length - 1)), this.min = o, this.max = l; }
            buildTicks() { const s = this.min, n = this.max, o = this.options.offset, l = []; let u = this.getLabels(); u = 0 === s && n === u.length - 1 ? u : u.slice(s, n + 1), this._valueRange = Math.max(u.length - (o ? 0 : 1), 1), this._startValue = this.min - (o ? .5 : 0); for (let d = s; d <= n; d++)
                l.push({ value: d }); return l; }
            getLabelForValue(s) { const n = this.getLabels(); return s >= 0 && s < n.length ? n[s] : s; }
            configure() { super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels); }
            getPixelForValue(s) { return "number" != typeof s && (s = this.parse(s)), null === s ? NaN : this.getPixelForDecimal((s - this._startValue) / this._valueRange); }
            getPixelForTick(s) { const n = this.ticks; return s < 0 || s > n.length - 1 ? null : this.getPixelForValue(n[s].value); }
            getValueForPixel(s) { return Math.round(this._startValue + this.getDecimalForPixel(s) * this._valueRange); }
            getBasePixel() { return this.bottom; }
        } function kc(r, s, { horizontal: n, minRotation: o }) { const l = ei(o), u = (n ? Math.sin(l) : Math.cos(l)) || .001; return Math.min(s / u, .75 * s * ("" + r).length); } Ao.id = "category", Ao.defaults = { ticks: { callback: Ao.prototype.getLabelForValue } }; class Jr extends bo {
            constructor(s) { super(s), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0; }
            parse(s, n) { return ce(s) || ("number" == typeof s || s instanceof Number) && !isFinite(+s) ? null : +s; }
            handleTickRangeOptions() { const { beginAtZero: s } = this.options, { minDefined: n, maxDefined: o } = this.getUserBounds(); let { min: l, max: u } = this; const d = y => l = n ? l : y, h = y => u = o ? u : y; if (s) {
                const y = En(l), D = En(u);
                y < 0 && D < 0 ? h(0) : y > 0 && D > 0 && d(0);
            } if (l === u) {
                let y = 1;
                (u >= Number.MAX_SAFE_INTEGER || l <= Number.MIN_SAFE_INTEGER) && (y = Math.abs(.05 * u)), h(u + y), s || d(l - y);
            } this.min = l, this.max = u; }
            getTickLimit() { const s = this.options.ticks; let l, { maxTicksLimit: n, stepSize: o } = s; return o ? (l = Math.ceil(this.max / o) - Math.floor(this.min / o) + 1, l > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${o} would result generating up to ${l} ticks. Limiting to 1000.`), l = 1e3)) : (l = this.computeTickLimit(), n = n || 11), n && (l = Math.min(n, l)), l; }
            computeTickLimit() { return Number.POSITIVE_INFINITY; }
            buildTicks() { const s = this.options, n = s.ticks; let o = this.getTickLimit(); o = Math.max(2, o); const d = function Cg(r, s) { const n = [], { bounds: l, step: u, min: d, max: h, precision: y, count: D, maxTicks: T, maxDigits: P, includeBounds: U } = r, Q = u || 1, ee = T - 1, { min: ue, max: Ce } = s, Ie = !ce(d), dt = !ce(h), At = !ce(D), pt = (Ce - ue) / (P + 1); let Rt, Ft, Qt, tn, st = Wn((Ce - ue) / ee / Q) * Q; if (st < 1e-14 && !Ie && !dt)
                return [{ value: ue }, { value: Ce }]; tn = Math.ceil(Ce / st) - Math.floor(ue / st), tn > ee && (st = Wn(tn * st / ee / Q) * Q), ce(y) || (Rt = Math.pow(10, y), st = Math.ceil(st * Rt) / Rt), "ticks" === l ? (Ft = Math.floor(ue / st) * st, Qt = Math.ceil(Ce / st) * st) : (Ft = ue, Qt = Ce), Ie && dt && u && function Ji(r, s) { const n = Math.round(r); return n - s <= r && n + s >= r; }((h - d) / u, st / 1e3) ? (tn = Math.round(Math.min((h - d) / st, T)), st = (h - d) / tn, Ft = d, Qt = h) : At ? (Ft = Ie ? d : Ft, Qt = dt ? h : Qt, tn = D - 1, st = (Qt - Ft) / tn) : (tn = (Qt - Ft) / st, tn = si(tn, Math.round(tn), st / 1e3) ? Math.round(tn) : Math.ceil(tn)); const $n = Math.max(ti(st), ti(Ft)); Rt = Math.pow(10, ce(y) ? $n : y), Ft = Math.round(Ft * Rt) / Rt, Qt = Math.round(Qt * Rt) / Rt; let Mn = 0; for (Ie && (U && Ft !== d ? (n.push({ value: d }), Ft < d && Mn++, si(Math.round((Ft + Mn * st) * Rt) / Rt, d, kc(d, pt, r)) && Mn++) : Ft < d && Mn++); Mn < tn; ++Mn)
                n.push({ value: Math.round((Ft + Mn * st) * Rt) / Rt }); return dt && U && Qt !== h ? n.length && si(n[n.length - 1].value, h, kc(h, pt, r)) ? n[n.length - 1].value = h : n.push({ value: h }) : (!dt || Qt === h) && n.push({ value: Qt }), n; }({ maxTicks: o, bounds: s.bounds, min: s.min, max: s.max, precision: n.precision, step: n.stepSize, count: n.count, maxDigits: this._maxDigits(), horizontal: this.isHorizontal(), minRotation: n.minRotation || 0, includeBounds: !1 !== n.includeBounds }, this._range || this); return "ticks" === s.bounds && qt(d, this, "value"), s.reverse ? (d.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), d; }
            configure() { const s = this.ticks; let n = this.min, o = this.max; if (super.configure(), this.options.offset && s.length) {
                const l = (o - n) / Math.max(s.length - 1, 1) / 2;
                n -= l, o += l;
            } this._startValue = n, this._endValue = o, this._valueRange = o - n; }
            getLabelForValue(s) { return q(s, this.chart.options.locale, this.options.ticks.format); }
        } class $a extends Jr {
            determineDataLimits() { const { min: s, max: n } = this.getMinMax(!0); this.min = Ne(s) ? s : 0, this.max = Ne(n) ? n : 1, this.handleTickRangeOptions(); }
            computeTickLimit() { const s = this.isHorizontal(), n = s ? this.width : this.height, o = ei(this.options.ticks.minRotation), l = (s ? Math.sin(o) : Math.cos(o)) || .001, u = this._resolveTickFontOptions(0); return Math.ceil(n / Math.min(40, u.lineHeight / l)); }
            getPixelForValue(s) { return null === s ? NaN : this.getPixelForDecimal((s - this._startValue) / this._valueRange); }
            getValueForPixel(s) { return this._startValue + this.getDecimalForPixel(s) * this._valueRange; }
        } function Nc(r) { return r / Math.pow(10, Math.floor(Dn(r))) == 1; } $a.id = "linear", $a.defaults = { ticks: { callback: hl.formatters.numeric } }; class za extends bo {
            constructor(s) { super(s), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0; }
            parse(s, n) { const o = Jr.prototype.parse.apply(this, [s, n]); if (0 !== o)
                return Ne(o) && o > 0 ? o : null; this._zero = !0; }
            determineDataLimits() { const { min: s, max: n } = this.getMinMax(!0); this.min = Ne(s) ? Math.max(0, s) : null, this.max = Ne(n) ? Math.max(0, n) : null, this.options.beginAtZero && (this._zero = !0), this.handleTickRangeOptions(); }
            handleTickRangeOptions() { const { minDefined: s, maxDefined: n } = this.getUserBounds(); let o = this.min, l = this.max; const u = y => o = s ? o : y, d = y => l = n ? l : y, h = (y, D) => Math.pow(10, Math.floor(Dn(y)) + D); o === l && (o <= 0 ? (u(1), d(10)) : (u(h(o, -1)), d(h(l, 1)))), o <= 0 && u(h(l, -1)), l <= 0 && d(h(o, 1)), this._zero && this.min !== this._suggestedMin && o === h(this.min, 0) && u(h(o, -1)), this.min = o, this.max = l; }
            buildTicks() { const s = this.options, o = function Bc(r, s) { const n = Math.floor(Dn(s.max)), o = Math.ceil(s.max / Math.pow(10, n)), l = []; let u = qe(r.min, Math.pow(10, Math.floor(Dn(s.min)))), d = Math.floor(Dn(u)), h = Math.floor(u / Math.pow(10, d)), y = d < 0 ? Math.pow(10, Math.abs(d)) : 1; do {
                l.push({ value: u, major: Nc(u) }), ++h, 10 === h && (h = 1, ++d, y = d >= 0 ? 1 : y), u = Math.round(h * Math.pow(10, d) * y) / y;
            } while (d < n || d === n && h < o); const D = qe(r.max, u); return l.push({ value: D, major: Nc(u) }), l; }({ min: this._userMin, max: this._userMax }, this); return "ticks" === s.bounds && qt(o, this, "value"), s.reverse ? (o.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), o; }
            getLabelForValue(s) { return void 0 === s ? "0" : q(s, this.chart.options.locale, this.options.ticks.format); }
            configure() { const s = this.min; super.configure(), this._startValue = Dn(s), this._valueRange = Dn(this.max) - Dn(s); }
            getPixelForValue(s) { return (void 0 === s || 0 === s) && (s = this.min), null === s || isNaN(s) ? NaN : this.getPixelForDecimal(s === this.min ? 0 : (Dn(s) - this._startValue) / this._valueRange); }
            getValueForPixel(s) { const n = this.getDecimalForPixel(s); return Math.pow(10, this._startValue + n * this._valueRange); }
        } function Dl(r) { const s = r.ticks; if (s.display && r.display) {
            const n = oi(s.backdropPadding);
            return Je(s.font && s.font.size, fn.font.size) + n.height;
        } return 0; } function sy(r, s, n) { return n = fe(n) ? n : [n], { w: In(r, s.string, n), h: n.length * s.lineHeight }; } function So(r, s, n, o, l) { return r === o || r === l ? { start: s - n / 2, end: s + n / 2 } : r < o || r > l ? { start: s - n, end: s } : { start: s, end: s + n }; } function Rd(r, s, n, o, l) { const u = Math.abs(Math.sin(n)), d = Math.abs(Math.cos(n)); let h = 0, y = 0; o.start < s.l ? (h = (s.l - o.start) / u, r.l = Math.min(r.l, s.l - h)) : o.end > s.r && (h = (o.end - s.r) / u, r.r = Math.max(r.r, s.r + h)), l.start < s.t ? (y = (s.t - l.start) / d, r.t = Math.min(r.t, s.t - y)) : l.end > s.b && (y = (l.end - s.b) / d, r.b = Math.max(r.b, s.b + y)); } function Vc(r) { return 0 === r || 180 === r ? "center" : r < 180 ? "left" : "right"; } function Eg(r, s, n) { return "right" === n ? r -= s : "center" === n && (r -= s / 2), r; } function Ag(r, s, n) { return 90 === n || 270 === n ? r -= s / 2 : (n > 270 || n < 90) && (r -= s), r; } function Pd(r, s, n, o) { const { ctx: l } = r; if (n)
            l.arc(r.xCenter, r.yCenter, s, 0, je);
        else {
            let u = r.getPointPosition(0, s);
            l.moveTo(u.x, u.y);
            for (let d = 1; d < o; d++)
                u = r.getPointPosition(d, s), l.lineTo(u.x, u.y);
        } } za.id = "logarithmic", za.defaults = { ticks: { callback: hl.formatters.logarithmic, major: { enabled: !0 } } }; class Mo extends Jr {
            constructor(s) { super(s), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = []; }
            setDimensions() { const s = this._padding = oi(Dl(this.options) / 2), n = this.width = this.maxWidth - s.width, o = this.height = this.maxHeight - s.height; this.xCenter = Math.floor(this.left + n / 2 + s.left), this.yCenter = Math.floor(this.top + o / 2 + s.top), this.drawingArea = Math.floor(Math.min(n, o) / 2); }
            determineDataLimits() { const { min: s, max: n } = this.getMinMax(!1); this.min = Ne(s) && !isNaN(s) ? s : 0, this.max = Ne(n) && !isNaN(n) ? n : 0, this.handleTickRangeOptions(); }
            computeTickLimit() { return Math.ceil(this.drawingArea / Dl(this.options)); }
            generateTickLabels(s) { Jr.prototype.generateTickLabels.call(this, s), this._pointLabels = this.getLabels().map((n, o) => { const l = rt(this.options.pointLabels.callback, [n, o], this); return l || 0 === l ? l : ""; }).filter((n, o) => this.chart.getDataVisibility(o)); }
            fit() { const s = this.options; s.display && s.pointLabels.display ? function jc(r) { const s = { l: r.left + r._padding.left, r: r.right - r._padding.right, t: r.top + r._padding.top, b: r.bottom - r._padding.bottom }, n = Object.assign({}, s), o = [], l = [], u = r._pointLabels.length, d = r.options.pointLabels, h = d.centerPointLabels ? lt / u : 0; for (let y = 0; y < u; y++) {
                const D = d.setContext(r.getPointLabelContext(y));
                l[y] = D.padding;
                const T = r.getPointPosition(y, r.drawingArea + l[y], h), P = ii(D.font), U = sy(r.ctx, P, r._pointLabels[y]);
                o[y] = U;
                const Q = ne(r.getIndexAngle(y) + h), ee = Math.round(Un(Q));
                Rd(n, s, Q, So(ee, T.x, U.w, 0, 180), So(ee, T.y, U.h, 90, 270));
            } r.setCenterPoint(s.l - n.l, n.r - s.r, s.t - n.t, n.b - s.b), r._pointLabelItems = function wg(r, s, n) { const o = [], l = r._pointLabels.length, u = r.options, d = Dl(u) / 2, h = r.drawingArea, y = u.pointLabels.centerPointLabels ? lt / l : 0; for (let D = 0; D < l; D++) {
                const T = r.getPointPosition(D, h + d + n[D], y), P = Math.round(Un(ne(T.angle + jt))), U = s[D], Q = Ag(T.y, U.h, P), ee = Vc(P), ue = Eg(T.x, U.w, ee);
                o.push({ x: T.x, y: Q, textAlign: ee, left: ue, top: Q, right: ue + U.w, bottom: Q + U.h });
            } return o; }(r, o, l); }(this) : this.setCenterPoint(0, 0, 0, 0); }
            setCenterPoint(s, n, o, l) { this.xCenter += Math.floor((s - n) / 2), this.yCenter += Math.floor((o - l) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(s, n, o, l)); }
            getIndexAngle(s) { return ne(s * (je / (this._pointLabels.length || 1)) + ei(this.options.startAngle || 0)); }
            getDistanceFromCenterForValue(s) { if (ce(s))
                return NaN; const n = this.drawingArea / (this.max - this.min); return this.options.reverse ? (this.max - s) * n : (s - this.min) * n; }
            getValueForDistanceFromCenter(s) { if (ce(s))
                return NaN; const n = s / (this.drawingArea / (this.max - this.min)); return this.options.reverse ? this.max - n : this.min + n; }
            getPointLabelContext(s) { const n = this._pointLabels || []; if (s >= 0 && s < n.length) {
                const o = n[s];
                return function Tg(r, s, n) { return Cs(r, { label: n, index: s, type: "pointLabel" }); }(this.getContext(), s, o);
            } }
            getPointPosition(s, n, o = 0) { const l = this.getIndexAngle(s) - jt + o; return { x: Math.cos(l) * n + this.xCenter, y: Math.sin(l) * n + this.yCenter, angle: l }; }
            getPointPositionForValue(s, n) { return this.getPointPosition(s, this.getDistanceFromCenterForValue(n)); }
            getBasePosition(s) { return this.getPointPositionForValue(s || 0, this.getBaseValue()); }
            getPointLabelPosition(s) { const { left: n, top: o, right: l, bottom: u } = this._pointLabelItems[s]; return { left: n, top: o, right: l, bottom: u }; }
            drawBackground() { const { backgroundColor: s, grid: { circular: n } } = this.options; if (s) {
                const o = this.ctx;
                o.save(), o.beginPath(), Pd(this, this.getDistanceFromCenterForValue(this._endValue), n, this._pointLabels.length), o.closePath(), o.fillStyle = s, o.fill(), o.restore();
            } }
            drawGrid() { const s = this.ctx, n = this.options, { angleLines: o, grid: l } = n, u = this._pointLabels.length; let d, h, y; if (n.pointLabels.display && function Sg(r, s) { const { ctx: n, options: { pointLabels: o } } = r; for (let l = s - 1; l >= 0; l--) {
                const u = o.setContext(r.getPointLabelContext(l)), d = ii(u.font), { x: h, y, textAlign: D, left: T, top: P, right: U, bottom: Q } = r._pointLabelItems[l], { backdropColor: ee } = u;
                if (!ce(ee)) {
                    const ue = oi(u.backdropPadding);
                    n.fillStyle = ee, n.fillRect(T - ue.left, P - ue.top, U - T + ue.width, Q - P + ue.height);
                }
                ss(n, r._pointLabels[l], h, y + d.lineHeight / 2, d, { color: u.color, textAlign: D, textBaseline: "middle" });
            } }(this, u), l.display && this.ticks.forEach((D, T) => { 0 !== T && (h = this.getDistanceFromCenterForValue(D.value), function Mg(r, s, n, o) { const l = r.ctx, u = s.circular, { color: d, lineWidth: h } = s; !u && !o || !d || !h || n < 0 || (l.save(), l.strokeStyle = d, l.lineWidth = h, l.setLineDash(s.borderDash), l.lineDashOffset = s.borderDashOffset, l.beginPath(), Pd(r, n, u, o), l.closePath(), l.stroke(), l.restore()); }(this, l.setContext(this.getContext(T - 1)), h, u)); }), o.display) {
                for (s.save(), d = u - 1; d >= 0; d--) {
                    const D = o.setContext(this.getPointLabelContext(d)), { color: T, lineWidth: P } = D;
                    !P || !T || (s.lineWidth = P, s.strokeStyle = T, s.setLineDash(D.borderDash), s.lineDashOffset = D.borderDashOffset, h = this.getDistanceFromCenterForValue(n.ticks.reverse ? this.min : this.max), y = this.getPointPosition(d, h), s.beginPath(), s.moveTo(this.xCenter, this.yCenter), s.lineTo(y.x, y.y), s.stroke());
                }
                s.restore();
            } }
            drawBorder() { }
            drawLabels() { const s = this.ctx, n = this.options, o = n.ticks; if (!o.display)
                return; const l = this.getIndexAngle(0); let u, d; s.save(), s.translate(this.xCenter, this.yCenter), s.rotate(l), s.textAlign = "center", s.textBaseline = "middle", this.ticks.forEach((h, y) => { if (0 === y && !n.reverse)
                return; const D = o.setContext(this.getContext(y)), T = ii(D.font); if (u = this.getDistanceFromCenterForValue(this.ticks[y].value), D.showLabelBackdrop) {
                s.font = T.string, d = s.measureText(h.label).width, s.fillStyle = D.backdropColor;
                const P = oi(D.backdropPadding);
                s.fillRect(-d / 2 - P.left, -u - T.size / 2 - P.top, d + P.width, T.size + P.height);
            } ss(s, h.label, 0, -u, T, { color: D.color }); }), s.restore(); }
            drawTitle() { }
        } Mo.id = "radialLinear", Mo.defaults = { display: !0, animate: !0, position: "chartArea", angleLines: { display: !0, lineWidth: 1, borderDash: [], borderDashOffset: 0 }, grid: { circular: !1 }, startAngle: 0, ticks: { showLabelBackdrop: !0, callback: hl.formatters.numeric }, pointLabels: { backdropColor: void 0, backdropPadding: 2, display: !0, font: { size: 10 }, callback: r => r, padding: 5, centerPointLabels: !1 } }, Mo.defaultRoutes = { "angleLines.color": "borderColor", "pointLabels.color": "color", "ticks.color": "color" }, Mo.descriptors = { angleLines: { _fallback: "grid" } }; const Jo = { millisecond: { common: !0, size: 1, steps: 1e3 }, second: { common: !0, size: 1e3, steps: 60 }, minute: { common: !0, size: 6e4, steps: 60 }, hour: { common: !0, size: 36e5, steps: 24 }, day: { common: !0, size: 864e5, steps: 30 }, week: { common: !1, size: 6048e5, steps: 4 }, month: { common: !0, size: 2628e6, steps: 12 }, quarter: { common: !1, size: 7884e6, steps: 4 }, year: { common: !0, size: 3154e7 } }, fs = Object.keys(Jo); function Hc(r, s) { return r - s; } function Fd(r, s) { if (ce(s))
            return null; const n = r._adapter, { parser: o, round: l, isoWeekday: u } = r._parseOpts; let d = s; return "function" == typeof o && (d = o(d)), Ne(d) || (d = "string" == typeof o ? n.parse(d, o) : n.parse(d)), null === d ? null : (l && (d = "week" !== l || !Yn(u) && !0 !== u ? n.startOf(d, l) : n.startOf(d, "isoWeek", u)), +d); } function Ld(r, s, n, o) { const l = fs.length; for (let u = fs.indexOf(r); u < l - 1; ++u) {
            const d = Jo[fs[u]], h = d.steps ? d.steps : Number.MAX_SAFE_INTEGER;
            if (d.common && Math.ceil((n - s) / (h * d.size)) <= o)
                return fs[u];
        } return fs[l - 1]; } function eo(r, s, n) { if (n) {
            if (n.length) {
                const { lo: o, hi: l } = Vr(n, s);
                r[n[o] >= s ? n[o] : n[l]] = !0;
            }
        }
        else
            r[s] = !0; } function Uc(r, s, n) { const o = [], l = {}, u = s.length; let d, h; for (d = 0; d < u; ++d)
            h = s[d], l[h] = d, o.push({ value: h, major: !1 }); return 0 !== u && n ? function Bd(r, s, n, o) { const l = r._adapter, u = +l.startOf(s[0].value, o), d = s[s.length - 1].value; let h, y; for (h = u; h <= d; h = +l.add(h, 1, o))
            y = n[h], y >= 0 && (s[y].major = !0); return s; }(r, o, l, n) : o; } let Gc = (() => { class r extends bo {
            constructor(n) { super(n), this._cache = { data: [], labels: [], all: [] }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0; }
            init(n, o) { const l = n.time || (n.time = {}), u = this._adapter = new x._date(n.adapters.date); ht(l.displayFormats, u.formats()), this._parseOpts = { parser: l.parser, round: l.round, isoWeekday: l.isoWeekday }, super.init(n), this._normalized = o.normalized; }
            parse(n, o) { return void 0 === n ? null : Fd(this, n); }
            beforeLayout() { super.beforeLayout(), this._cache = { data: [], labels: [], all: [] }; }
            determineDataLimits() { const n = this.options, o = this._adapter, l = n.time.unit || "day"; let { min: u, max: d, minDefined: h, maxDefined: y } = this.getUserBounds(); function D(T) { !h && !isNaN(T.min) && (u = Math.min(u, T.min)), !y && !isNaN(T.max) && (d = Math.max(d, T.max)); } (!h || !y) && (D(this._getLabelBounds()), ("ticks" !== n.bounds || "labels" !== n.ticks.source) && D(this.getMinMax(!1))), u = Ne(u) && !isNaN(u) ? u : +o.startOf(Date.now(), l), d = Ne(d) && !isNaN(d) ? d : +o.endOf(Date.now(), l) + 1, this.min = Math.min(u, d - 1), this.max = Math.max(u + 1, d); }
            _getLabelBounds() { const n = this.getLabelTimestamps(); let o = Number.POSITIVE_INFINITY, l = Number.NEGATIVE_INFINITY; return n.length && (o = n[0], l = n[n.length - 1]), { min: o, max: l }; }
            buildTicks() { const n = this.options, o = n.time, l = n.ticks, u = "labels" === l.source ? this.getLabelTimestamps() : this._generate(); "ticks" === n.bounds && u.length && (this.min = this._userMin || u[0], this.max = this._userMax || u[u.length - 1]); const d = this.min, y = function Bs(r, s, n) { let o = 0, l = r.length; for (; o < l && r[o] < s;)
                o++; for (; l > o && r[l - 1] > n;)
                l--; return o > 0 || l < r.length ? r.slice(o, l) : r; }(u, d, this.max); return this._unit = o.unit || (l.autoSkip ? Ld(o.minUnit, this.min, this.max, this._getLabelCapacity(d)) : function kd(r, s, n, o, l) { for (let u = fs.length - 1; u >= fs.indexOf(n); u--) {
                const d = fs[u];
                if (Jo[d].common && r._adapter.diff(l, o, d) >= s - 1)
                    return d;
            } return fs[n ? fs.indexOf(n) : 0]; }(this, y.length, o.minUnit, this.min, this.max)), this._majorUnit = l.major.enabled && "year" !== this._unit ? function Nd(r) { for (let s = fs.indexOf(r) + 1, n = fs.length; s < n; ++s)
                if (Jo[fs[s]].common)
                    return fs[s]; }(this._unit) : void 0, this.initOffsets(u), n.reverse && y.reverse(), Uc(this, y, this._majorUnit); }
            initOffsets(n) { let u, d, o = 0, l = 0; this.options.offset && n.length && (u = this.getDecimalForValue(n[0]), o = 1 === n.length ? 1 - u : (this.getDecimalForValue(n[1]) - u) / 2, d = this.getDecimalForValue(n[n.length - 1]), l = 1 === n.length ? d : (d - this.getDecimalForValue(n[n.length - 2])) / 2); const h = n.length < 3 ? .5 : .25; o = ze(o, 0, h), l = ze(l, 0, h), this._offsets = { start: o, end: l, factor: 1 / (o + 1 + l) }; }
            _generate() { const n = this._adapter, o = this.min, l = this.max, u = this.options, d = u.time, h = d.unit || Ld(d.minUnit, o, l, this._getLabelCapacity(o)), y = Je(d.stepSize, 1), D = "week" === h && d.isoWeekday, T = Yn(D) || !0 === D, P = {}; let Q, ee, U = o; if (T && (U = +n.startOf(U, "isoWeek", D)), U = +n.startOf(U, T ? "day" : h), n.diff(l, o, h) > 1e5 * y)
                throw new Error(o + " and " + l + " are too far apart with stepSize of " + y + " " + h); const ue = "data" === u.ticks.source && this.getDataTimestamps(); for (Q = U, ee = 0; Q < l; Q = +n.add(Q, y, h), ee++)
                eo(P, Q, ue); return (Q === l || "ticks" === u.bounds || 1 === ee) && eo(P, Q, ue), Object.keys(P).sort((Ce, Ie) => Ce - Ie).map(Ce => +Ce); }
            getLabelForValue(n) { const l = this.options.time; return this._adapter.format(n, l.tooltipFormat ? l.tooltipFormat : l.displayFormats.datetime); }
            _tickFormatFunction(n, o, l, u) { const d = this.options, h = d.time.displayFormats, y = this._unit, D = this._majorUnit, P = D && h[D], U = l[o], ee = this._adapter.format(n, u || (D && P && U && U.major ? P : y && h[y])), ue = d.ticks.callback; return ue ? rt(ue, [ee, o, l], this) : ee; }
            generateTickLabels(n) { let o, l, u; for (o = 0, l = n.length; o < l; ++o)
                u = n[o], u.label = this._tickFormatFunction(u.value, o, n); }
            getDecimalForValue(n) { return null === n ? NaN : (n - this.min) / (this.max - this.min); }
            getPixelForValue(n) { const o = this._offsets, l = this.getDecimalForValue(n); return this.getPixelForDecimal((o.start + l) * o.factor); }
            getValueForPixel(n) { const o = this._offsets, l = this.getDecimalForPixel(n) / o.factor - o.end; return this.min + l * (this.max - this.min); }
            _getLabelSize(n) { const o = this.options.ticks, l = this.ctx.measureText(n).width, u = ei(this.isHorizontal() ? o.maxRotation : o.minRotation), d = Math.cos(u), h = Math.sin(u), y = this._resolveTickFontOptions(0).size; return { w: l * d + y * h, h: l * h + y * d }; }
            _getLabelCapacity(n) { const o = this.options.time, l = o.displayFormats, u = l[o.unit] || l.millisecond, d = this._tickFormatFunction(n, 0, Uc(this, [n], this._majorUnit), u), h = this._getLabelSize(d), y = Math.floor(this.isHorizontal() ? this.width / h.w : this.height / h.h) - 1; return y > 0 ? y : 1; }
            getDataTimestamps() { let o, l, n = this._cache.data || []; if (n.length)
                return n; const u = this.getMatchingVisibleMetas(); if (this._normalized && u.length)
                return this._cache.data = u[0].controller.getAllParsedValues(this); for (o = 0, l = u.length; o < l; ++o)
                n = n.concat(u[o].controller.getAllParsedValues(this)); return this._cache.data = this.normalize(n); }
            getLabelTimestamps() { const n = this._cache.labels || []; let o, l; if (n.length)
                return n; const u = this.getLabels(); for (o = 0, l = u.length; o < l; ++o)
                n.push(Fd(this, u[o])); return this._cache.labels = this._normalized ? n : this.normalize(n); }
            normalize(n) { return os(n.sort(Hc)); }
        } return r.id = "time", r.defaults = { bounds: "data", adapters: {}, time: { parser: !1, unit: !1, round: !1, isoWeekday: !1, minUnit: "millisecond", displayFormats: {} }, ticks: { source: "auto", major: { enabled: !1 } } }, r; })(); function To(r, s, n) { let u, d, h, y, o = 0, l = r.length - 1; n ? (s >= r[o].pos && s <= r[l].pos && ({ lo: o, hi: l } = rs(r, "pos", s)), ({ pos: u, time: h } = r[o]), ({ pos: d, time: y } = r[l])) : (s >= r[o].time && s <= r[l].time && ({ lo: o, hi: l } = rs(r, "time", s)), ({ time: u, pos: h } = r[o]), ({ time: d, pos: y } = r[l])); const D = d - u; return D ? h + (y - h) * (s - u) / D : h; } class Cl extends Gc {
            constructor(s) { super(s), this._table = [], this._minPos = void 0, this._tableRange = void 0; }
            initOffsets() { const s = this._getTimestampsForTable(), n = this._table = this.buildLookupTable(s); this._minPos = To(n, this.min), this._tableRange = To(n, this.max) - this._minPos, super.initOffsets(s); }
            buildLookupTable(s) { const { min: n, max: o } = this, l = [], u = []; let d, h, y, D, T; for (d = 0, h = s.length; d < h; ++d)
                D = s[d], D >= n && D <= o && l.push(D); if (l.length < 2)
                return [{ time: n, pos: 0 }, { time: o, pos: 1 }]; for (d = 0, h = l.length; d < h; ++d)
                T = l[d + 1], y = l[d - 1], D = l[d], Math.round((T + y) / 2) !== D && u.push({ time: D, pos: d / (h - 1) }); return u; }
            _getTimestampsForTable() { let s = this._cache.all || []; if (s.length)
                return s; const n = this.getDataTimestamps(), o = this.getLabelTimestamps(); return s = n.length && o.length ? this.normalize(n.concat(o)) : n.length ? n : o, s = this._cache.all = s, s; }
            getDecimalForValue(s) { return (To(this._table, s) - this._minPos) / this._tableRange; }
            getValueForPixel(s) { const n = this._offsets, o = this.getDecimalForPixel(s) / n.factor - n.end; return To(this._table, o * this._tableRange + this._minPos, !0); }
        } Cl.id = "timeseries", Cl.defaults = Gc.defaults; var Vd = V(1884); const Io = function wl(r, s) { return r === s || r != r && s != s; }, ea = function Ud(r, s) { for (var n = r.length; n--;)
            if (Io(r[n][0], s))
                return n; return -1; }; var zc = Array.prototype.splice; function Ya(r) { var s = -1, n = null == r ? 0 : r.length; for (this.clear(); ++s < n;) {
            var o = r[s];
            this.set(o[0], o[1]);
        } } Ya.prototype.clear = function $c() { this.__data__ = [], this.size = 0; }, Ya.prototype.delete = function Wa(r) { var s = this.__data__, n = ea(s, r); return !(n < 0 || (n == s.length - 1 ? s.pop() : zc.call(s, n, 1), --this.size, 0)); }, Ya.prototype.get = function $d(r) { var s = this.__data__, n = ea(s, r); return n < 0 ? void 0 : s[n][1]; }, Ya.prototype.has = function Pg(r) { return ea(this.__data__, r) > -1; }, Ya.prototype.set = function Wc(r, s) { var n = this.__data__, o = ea(n, r); return o < 0 ? (++this.size, n.push([r, s])) : n[o][1] = s, this; }; const Ka = Ya, Qd = "object" == typeof global && global && global.Object === Object && global; var Vg = "object" == typeof self && self && self.Object === Object && self; const ta = Qd || Vg || Function("return this")(); var Hg = ta.Symbol, bn = Object.prototype, Xd = bn.hasOwnProperty, Zd = bn.toString, na = Hg ? Hg.toStringTag : void 0; var Ug = Object.prototype.toString; var Sl = Hg ? Hg.toStringTag : void 0; const Qa = function ry(r) { return null == r ? void 0 === r ? "[object Undefined]" : "[object Null]" : Sl && Sl in Object(r) ? function Al(r) { var s = Xd.call(r, na), n = r[na]; try {
            r[na] = void 0;
            var o = !0;
        }
        catch (u) { } var l = Zd.call(r); return o && (s ? r[na] = n : delete r[na]), l; }(r) : function Yc(r) { return Ug.call(r); }(r); }, xr = function oy(r) { var s = typeof r; return null != r && ("object" == s || "function" == s); }, Zc = function ay(r) { if (!xr(r))
            return !1; var s = Qa(r); return "[object Function]" == s || "[object GeneratorFunction]" == s || "[object AsyncFunction]" == s || "[object Proxy]" == s; }; var r, Gg = ta["__core-js_shared__"], tf = (r = /[^.]+$/.exec(Gg && Gg.keys && Gg.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : ""; var cy = Function.prototype.toString; var eu = /^\[object .+?Constructor\]$/, gy = RegExp("^" + Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"); const my = function py(r) { return !(!xr(r) || function nf(r) { return !!tf && tf in r; }(r)) && (Zc(r) ? gy : eu).test(function sf(r) { if (null != r) {
            try {
                return cy.call(r);
            }
            catch (s) { }
            try {
                return r + "";
            }
            catch (s) { }
        } return ""; }(r)); }, br = function _y(r, s) { var n = function yy(r, s) { return null == r ? void 0 : r[s]; }(r, s); return my(n) ? n : void 0; }, af = br(ta, "Map"), Oo = br(Object, "create"); var iu = Object.prototype.hasOwnProperty; var qg = Object.prototype.hasOwnProperty; function tr(r) { var s = -1, n = null == r ? 0 : r.length; for (this.clear(); ++s < n;) {
            var o = r[s];
            this.set(o[0], o[1]);
        } } tr.prototype.clear = function cf() { this.__data__ = Oo ? Oo(null) : {}, this.size = 0; }, tr.prototype.delete = function Wg(r) { var s = this.has(r) && delete this.__data__[r]; return this.size -= s ? 1 : 0, s; }, tr.prototype.get = function Kg(r) { var s = this.__data__; if (Oo) {
            var n = s[r];
            return "__lodash_hash_undefined__" === n ? void 0 : n;
        } return iu.call(s, r) ? s[r] : void 0; }, tr.prototype.has = function qa(r) { var s = this.__data__; return Oo ? void 0 !== s[r] : qg.call(s, r); }, tr.prototype.set = function sa(r, s) { var n = this.__data__; return this.size += this.has(r) ? 0 : 1, n[r] = Oo && void 0 === s ? "__lodash_hash_undefined__" : s, this; }; const ff = tr, Ro = function pf(r, s) { var n = r.__data__; return function ru(r) { var s = typeof r; return "string" == s || "number" == s || "symbol" == s || "boolean" == s ? "__proto__" !== r : null === r; }(s) ? n["string" == typeof s ? "string" : "hash"] : n.map; }; function ra(r) { var s = -1, n = null == r ? 0 : r.length; for (this.clear(); ++s < n;) {
            var o = r[s];
            this.set(o[0], o[1]);
        } } ra.prototype.clear = function hf() { this.size = 0, this.__data__ = { hash: new ff, map: new (af || Ka), string: new ff }; }, ra.prototype.delete = function Xg(r) { var s = Ro(this, r).delete(r); return this.size -= s ? 1 : 0, s; }, ra.prototype.get = function xy(r) { return Ro(this, r).get(r); }, ra.prototype.has = function vf(r) { return Ro(this, r).has(r); }, ra.prototype.set = function _f(r, s) { var n = Ro(this, r), o = n.size; return n.set(r, s), this.size += n.size == o ? 0 : 1, this; }; const Ps = ra; function Za(r) { var s = this.__data__ = new Ka(r); this.size = s.size; } Za.prototype.clear = function Fg() { this.__data__ = new Ka, this.size = 0; }, Za.prototype.delete = function Lg(r) { var s = this.__data__, n = s.delete(r); return this.size = s.size, n; }, Za.prototype.get = function Js(r) { return this.__data__.get(r); }, Za.prototype.has = function Kd(r) { return this.__data__.has(r); }, Za.prototype.set = function tp(r, s) { var n = this.__data__; if (n instanceof Ka) {
            var o = n.__data__;
            if (!af || o.length < 199)
                return o.push([r, s]), this.size = ++n.size, this;
            n = this.__data__ = new Ps(o);
        } return n.set(r, s), this.size = n.size, this; }; const xf = Za; var Dy = function () { try {
            var r = br(Object, "defineProperty");
            return r({}, "", {}), r;
        }
        catch (s) { } }(); const Tl = Dy, Il = function au(r, s, n) { "__proto__" == s && Tl ? Tl(r, s, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : r[s] = n; }, lu = function np(r, s, n) { (void 0 !== n && !Io(r[s], n) || void 0 === n && !(s in r)) && Il(r, s, n); }; var rp = function ip(r) { return function (s, n, o) { for (var l = -1, u = Object(s), d = o(s), h = d.length; h--;) {
            var y = d[r ? h : ++l];
            if (!1 === n(u[y], y, u))
                break;
        } return s; }; }(); const bf = rp; var Df = "object" == typeof exports && exports && !exports.nodeType && exports, Cf = Df && "object" == typeof module && module && !module.nodeType && module, cu = Cf && Cf.exports === Df ? ta.Buffer : void 0, Ef = cu ? cu.allocUnsafe : void 0; const Af = ta.Uint8Array, lp = function ap(r, s) { var n = s ? function Cy(r) { var s = new r.constructor(r.byteLength); return new Af(s).set(new Af(r)), s; }(r.buffer) : r.buffer; return new r.constructor(n, r.byteOffset, r.length); }; var Mf = Object.create, up = function () { function r() { } return function (s) { if (!xr(s))
            return {}; if (Mf)
            return Mf(s); r.prototype = s; var n = new r; return r.prototype = void 0, n; }; }(); const Ol = up; var hu = function fu(r, s) { return function (n) { return r(s(n)); }; }(Object.getPrototypeOf, Object); const Rl = hu; var Tf = Object.prototype; const If = function dp(r) { var s = r && r.constructor; return r === ("function" == typeof s && s.prototype || Tf); }, oa = function fp(r) { return null != r && "object" == typeof r; }, pu = function Rf(r) { return oa(r) && "[object Arguments]" == Qa(r); }; var mu = Object.prototype, kr = mu.hasOwnProperty, Pl = mu.propertyIsEnumerable, hp = pu(function () { return arguments; }()) ? pu : function (r) { return oa(r) && kr.call(r, "callee") && !Pl.call(r, "callee"); }; const yu = hp, Ja = Array.isArray, aa = function vu(r) { return "number" == typeof r && r > -1 && r % 1 == 0 && r <= 9007199254740991; }, el = function gp(r) { return null != r && aa(r.length) && !Zc(r); }; var Fl = "object" == typeof exports && exports && !exports.nodeType && exports, Nf = Fl && "object" == typeof module && module && !module.nodeType && module, _u = Nf && Nf.exports === Fl ? ta.Buffer : void 0; const jf = (_u ? _u.isBuffer : void 0) || function kf() { return !1; }; var Vf = Function.prototype.toString, _p = Object.prototype.hasOwnProperty, xp = Vf.call(Object); var ci = {}; ci["[object Float32Array]"] = ci["[object Float64Array]"] = ci["[object Int8Array]"] = ci["[object Int16Array]"] = ci["[object Int32Array]"] = ci["[object Uint8Array]"] = ci["[object Uint8ClampedArray]"] = ci["[object Uint16Array]"] = ci["[object Uint32Array]"] = !0, ci["[object Arguments]"] = ci["[object Array]"] = ci["[object ArrayBuffer]"] = ci["[object Boolean]"] = ci["[object DataView]"] = ci["[object Date]"] = ci["[object Error]"] = ci["[object Function]"] = ci["[object Map]"] = ci["[object Number]"] = ci["[object Object]"] = ci["[object RegExp]"] = ci["[object Set]"] = ci["[object String]"] = ci["[object WeakMap]"] = !1; var Ll = "object" == typeof exports && exports && !exports.nodeType && exports, tl = Ll && "object" == typeof module && module && !module.nodeType && module, Cu = tl && tl.exports === Ll && Qd.process, Tp = function () { try {
            return tl && tl.require && tl.require("util").types || Cu && Cu.binding && Cu.binding("util");
        }
        catch (s) { } }(), Jf = Tp && Tp.isTypedArray; const eh = Jf ? function Py(r) { return function (s) { return r(s); }; }(Jf) : function qf(r) { return oa(r) && aa(r.length) && !!ci[Qa(r)]; }, no = function kl(r, s) { if (("constructor" !== s || "function" != typeof r[s]) && "__proto__" != s)
            return r[s]; }; var nl = Object.prototype.hasOwnProperty; const Pp = function Rp(r, s, n) { var o = r[s]; (!nl.call(r, s) || !Io(o, n) || void 0 === n && !(s in r)) && Il(r, s, n); }; var Nl = /^(?:0|[1-9]\d*)$/; const Bl = function zs(r, s) { var n = typeof r; return !!(s = null == s ? 9007199254740991 : s) && ("number" == n || "symbol" != n && Nl.test(r)) && r > -1 && r % 1 == 0 && r < s; }; var da = Object.prototype.hasOwnProperty; const ha = function fa(r, s) { var n = Ja(r), o = !n && yu(r), l = !n && !o && jf(r), u = !n && !o && !l && eh(r), d = n || o || l || u, h = d ? function il(r, s) { for (var n = -1, o = Array(r); ++n < r;)
            o[n] = s(n); return o; }(r.length, String) : [], y = h.length; for (var D in r)
            (s || da.call(r, D)) && (!d || !("length" == D || l && ("offset" == D || "parent" == D) || u && ("buffer" == D || "byteLength" == D || "byteOffset" == D) || Bl(D, y))) && h.push(D); return h; }; var ya = Object.prototype.hasOwnProperty; const th = function va(r) { if (!xr(r))
            return function ga(r) { var s = []; if (null != r)
                for (var n in Object(r))
                    s.push(n); return s; }(r); var s = If(r), n = []; for (var o in r)
            "constructor" == o && (s || !ya.call(r, o)) || n.push(o); return n; }, Eu = function nh(r) { return el(r) ? ha(r, !0) : th(r); }, sh = function ih(r) { return function wu(r, s, n, o) { var l = !n; n || (n = {}); for (var u = -1, d = s.length; ++u < d;) {
            var h = s[u], y = o ? o(n[h], r[h], h, n, r) : void 0;
            void 0 === y && (y = r[h]), l ? Il(n, h, y) : Pp(n, h, y);
        } return n; }(r, Eu(r)); }, oh = function rh(r, s, n, o, l, u, d) { var h = no(r, n), y = no(s, n), D = d.get(y); if (D)
            lu(r, n, D);
        else {
            var T = u ? u(h, y, n + "", r, s, d) : void 0, P = void 0 === T;
            if (P) {
                var U = Ja(y), Q = !U && jf(y), ee = !U && !Q && eh(y);
                T = y, U || Q || ee ? Ja(h) ? T = h : function Ff(r) { return oa(r) && el(r); }(h) ? T = function cp(r, s) { var n = -1, o = r.length; for (s || (s = Array(o)); ++n < o;)
                    s[n] = r[n]; return s; }(h) : Q ? (P = !1, T = function Dr(r, s) { if (s)
                    return r.slice(); var n = r.length, o = Ef ? Ef(n) : new r.constructor(n); return r.copy(o), o; }(y, !0)) : ee ? (P = !1, T = lp(y, !0)) : T = [] : function $s(r) { if (!oa(r) || "[object Object]" != Qa(r))
                    return !1; var s = Rl(r); if (null === s)
                    return !0; var n = _p.call(s, "constructor") && s.constructor; return "function" == typeof n && n instanceof n && Vf.call(n) == xp; }(y) || yu(y) ? (T = h, yu(h) ? T = sh(h) : (!xr(h) || Zc(h)) && (T = function gu(r) { return "function" != typeof r.constructor || If(r) ? {} : Ol(Rl(r)); }(y))) : P = !1;
            }
            P && (d.set(y, T), l(T, y, o, u, d), d.delete(y)), lu(r, n, T);
        } }, ah = function Au(r, s, n, o, l) { r !== s && bf(s, function (u, d) { if (l || (l = new xf), xr(u))
            oh(r, s, d, n, Au, o, l);
        else {
            var h = o ? o(no(r, d), u, d + "", r, s, l) : void 0;
            void 0 === h && (h = u), lu(r, d, h);
        } }, Eu); }, Su = function Fp(r) { return r; }, lh = function Lp(r, s, n) { switch (n.length) {
            case 0: return r.call(s);
            case 1: return r.call(s, n[0]);
            case 2: return r.call(s, n[0], n[1]);
            case 3: return r.call(s, n[0], n[1], n[2]);
        } return r.apply(s, n); }; var Mu = Math.max; const Bp = function ch(r) { return function () { return r; }; }; var uh = Tl ? function (r, s) { return Tl(r, "toString", { configurable: !0, enumerable: !1, value: Bp(s), writable: !0 }); } : Su, Hp = Date.now, Up = function Tu(r) { var s = 0, n = 0; return function () { var o = Hp(), l = 16 - (o - n); if (n = o, l > 0) {
            if (++s >= 800)
                return arguments[0];
        }
        else
            s = 0; return r.apply(void 0, arguments); }; }(uh); const Ly = Up, Ny = function ky(r, s) { return Ly(function kp(r, s, n) { return s = Mu(void 0 === s ? r.length - 1 : s, 0), function () { for (var o = arguments, l = -1, u = Mu(o.length - s, 0), d = Array(u); ++l < u;)
            d[l] = o[s + l]; l = -1; for (var h = Array(s + 1); ++l < s;)
            h[l] = o[l]; return h[s] = n(d), lh(r, this, h); }; }(r, s, Su), r + ""); }; var _a = function By(r) { return Ny(function (s, n) { var o = -1, l = n.length, u = l > 1 ? n[l - 1] : void 0, d = l > 2 ? n[2] : void 0; for (u = r.length > 3 && "function" == typeof u ? (l--, u) : void 0, d && function Gp(r, s, n) { if (!xr(n))
            return !1; var o = typeof s; return !!("number" == o ? el(n) && Bl(s, n.length) : "string" == o && s in n) && Io(n[s], r); }(n[0], n[1], d) && (u = l < 3 ? void 0 : u, l = 1), s = Object(s); ++o < l;) {
            var h = n[o];
            h && r(s, h, o, u);
        } return s; }); }(function (r, s, n) { ah(r, s, n); }); const hh = _a; var gh = V(1135); let $p = (() => { class r {
            constructor() { this.colorschemesOptions = new gh.X(void 0); }
            setColorschemesOptions(n) { this.pColorschemesOptions = n, this.colorschemesOptions.next(n); }
            getColorschemesOptions() { return this.pColorschemesOptions; }
        } return r.\u0275fac = function (n) { return new (n || r); }, r.\u0275prov = _.Yz7({ token: r, factory: r.\u0275fac, providedIn: "root" }), r; })(), ph = (() => { class r {
            constructor(n, o, l) { this.element = n, this.zone = o, this.themeService = l, this.type = "bar", this.plugins = [], this.chartClick = new _.vpe, this.chartHover = new _.vpe, this.subs = [], this.ctx = n.nativeElement.getContext("2d"), this.subs.push(this.themeService.colorschemesOptions.pipe((0, Vd.x)()).subscribe(u => this.themeChanged(u))); }
            ngOnChanges(n) { const o = ["type"], l = Object.getOwnPropertyNames(n); if (l.some(u => o.includes(u)) || l.every(u => n[u].isFirstChange()))
                this.render();
            else {
                const u = this.getChartConfiguration();
                this.chart && (Object.assign(this.chart.config.data, u.data), Object.assign(this.chart.config.plugins, u.plugins), Object.assign(this.chart.config.options, u.options)), this.update();
            } }
            ngOnDestroy() { this.chart && (this.chart.destroy(), this.chart = void 0), this.subs.forEach(n => n.unsubscribe()); }
            render() { return this.chart && this.chart.destroy(), this.zone.runOutsideAngular(() => this.chart = new La(this.ctx, this.getChartConfiguration())); }
            update(n) { this.chart && this.zone.runOutsideAngular(() => { var o; return null === (o = this.chart) || void 0 === o ? void 0 : o.update(n); }); }
            hideDataset(n, o) { this.chart && (this.chart.getDatasetMeta(n).hidden = o, this.update()); }
            isDatasetHidden(n) { var o, l; return null === (l = null === (o = this.chart) || void 0 === o ? void 0 : o.getDatasetMeta(n)) || void 0 === l ? void 0 : l.hidden; }
            toBase64Image() { var n; return null === (n = this.chart) || void 0 === n ? void 0 : n.toBase64Image(); }
            themeChanged(n) { this.themeOverrides = n, this.chart && (Object.assign(this.chart.config.options, this.getChartOptions()), this.update()); }
            getChartOptions() { return hh({ onHover: (n, o) => { !this.chartHover.observed && !this.chartHover.observers.length || this.zone.run(() => this.chartHover.emit({ event: n, active: o })); }, onClick: (n, o) => { !this.chartClick.observed && !this.chartClick.observers.length || this.zone.run(() => this.chartClick.emit({ event: n, active: o })); } }, this.themeOverrides, this.options, { plugins: { legend: { display: this.legend } } }); }
            getChartConfiguration() { return { type: this.type, data: this.getChartData(), plugins: this.plugins, options: this.getChartOptions() }; }
            getChartData() { return this.data ? this.data : { labels: this.labels || [], datasets: this.datasets || [] }; }
        } return r.\u0275fac = function (n) { return new (n || r)(_.Y36(_.SBq), _.Y36(_.R0b), _.Y36($p)); }, r.\u0275dir = _.lG2({ type: r, selectors: [["canvas", "baseChart", ""]], inputs: { type: "type", legend: "legend", data: "data", options: "options", plugins: "plugins", labels: "labels", datasets: "datasets" }, outputs: { chartClick: "chartClick", chartHover: "chartHover" }, exportAs: ["base-chart"], features: [_.TTD] }), r; })(); const jl = [[255, 99, 132], [54, 162, 235], [255, 206, 86], [231, 233, 237], [75, 192, 192], [151, 187, 205], [220, 220, 220], [247, 70, 74], [70, 191, 189], [253, 180, 92], [148, 159, 177], [77, 83, 96]], zp = { datasets: { line: { backgroundColor: r => Xi(hs(r.datasetIndex), .4), borderColor: r => Xi(hs(r.datasetIndex), 1), pointBackgroundColor: r => Xi(hs(r.datasetIndex), 1), pointBorderColor: "#fff", pointHoverBackgroundColor: "#fff", pointHoverBorderColor: r => Xi(hs(r.datasetIndex), .8) }, bar: { backgroundColor: r => Xi(hs(r.datasetIndex), .6), borderColor: r => Xi(hs(r.datasetIndex), 1), hoverBackgroundColor: r => Xi(hs(r.datasetIndex), .8), hoverBorderColor: r => Xi(hs(r.datasetIndex), 1) }, get radar() { return this.line; }, doughnut: { backgroundColor: r => Xi(hs(r.dataIndex), .6), borderColor: "#fff", hoverBackgroundColor: r => Xi(hs(r.dataIndex), 1), hoverBorderColor: r => Xi(hs(r.dataIndex), 1) }, get pie() { return this.doughnut; }, polarArea: { backgroundColor: r => Xi(hs(r.dataIndex), .6), borderColor: r => Xi(hs(r.dataIndex), 1), hoverBackgroundColor: r => Xi(hs(r.dataIndex), .8), hoverBorderColor: r => Xi(hs(r.dataIndex), 1) }, get bubble() { return this.doughnut; }, get scatter() { return this.doughnut; }, get area() { return this.polarArea; } } }; function Xi(r, s) { return "rgba(" + r.concat(s).join(",") + ")"; } function Iu(r, s) { return Math.floor(Math.random() * (s - r + 1)) + r; } function hs(r = 0) { return jl[r] || function Wp() { return [Iu(0, 255), Iu(0, 255), Iu(0, 255)]; }(); } La.register(wd, Dg, bd, Cd, Ea, qo, ig, $a, Ao, po, ja, mo, ka, vo, Mo, jo, Kr, tc, Qr, Cl); let mh = (() => { class r {
        } return r.\u0275fac = function (n) { return new (n || r); }, r.\u0275prov = _.Yz7({ token: r, factory: r.\u0275fac, providedIn: "root" }), r; })(), Yp = (() => { class r {
            constructor(n) { (null == n ? void 0 : n.plugins) && La.register(...null == n ? void 0 : n.plugins); const o = hh(zp, (null == n ? void 0 : n.defaults) || {}); fn.set(o); }
            static forRoot(n) { return { ngModule: r, providers: [{ provide: mh, useValue: n }] }; }
        } return r.\u0275fac = function (n) { return new (n || r)(_.LFG(mh, 8)); }, r.\u0275mod = _.oAB({ type: r }), r.\u0275inj = _.cJS({ imports: [[]] }), r; })(); } }, St => { St(St.s = 2865); }]);
//# sourceMappingURL=main.99d3482bdd6736be.js.map