import { createFileRoute } from '@tanstack/react-router'
import { useState, useMemo } from 'react'
import products from '@/data/products'
import type { Product } from '@/data/products'

export const Route = createFileRoute('/')({
  component: HomePage,
})

// ── Config ──────────────────────────────────────────────
const BUSINESS_NAME = 'বাংলা শপ'
const WHATSAPP_NUMBER = '8801700000000' // Replace with real number
const FACEBOOK_URL = 'https://facebook.com/bangla.shop' // Replace with real page
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

// ── Types ────────────────────────────────────────────────
interface CartItem {
  product: Product
  qty: number
}

// ── Bengali numerals ─────────────────────────────────────
function toBengaliNum(n: number): string {
  const digits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
  return String(n).replace(/\d/g, (d) => digits[parseInt(d)])
}

function formatTaka(n: number): string {
  return '৳' + toBengaliNum(n).replace(/(\d)(?=(\d{3})+$)/g, '$1,')
}

// ── Icons (inline SVG) ───────────────────────────────────
function IconMenu() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}
function IconSearch() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}
function IconCart() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}
function IconClose() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
function IconHome() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}
function IconUser() {
  return (
    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  )
}
function IconPlus() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}
function IconMinus() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}
function IconTrash() {
  return (
    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  )
}
function IconWhatsApp({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  )
}
function IconFacebook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}
function IconStar() {
  return (
    <svg width="16" height="16" fill="#FFD600" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

// ── Sidebar Drawer ────────────────────────────────────────
function SidebarDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null
  const navLinks = [
    { label: 'হোম', href: '#home' },
    { label: 'সব পণ্য', href: '#products' },
    { label: 'গ্রীষ্মকালীন পণ্য', href: '#products' },
    { label: 'শীতকালীন পণ্য', href: '#products' },
    { label: 'গ্যাজেট', href: '#products' },
    { label: 'কেন আমরা?', href: '#why-us' },
    { label: 'যোগাযোগ', href: '#contact' },
  ]
  return (
    <>
      <div className="overlay animate-fadeIn" onClick={onClose} />
      <div className="drawer-left animate-slideInLeft">
        <div style={{ padding: '24px' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: '22px', fontWeight: 800 }}>
              <span className="gradient-text">{BUSINESS_NAME}</span>
            </div>
            <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer', padding: '4px' }}>
              <IconClose />
            </button>
          </div>
          {/* Nav links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onClose}
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  color: '#D1D5DB',
                  textDecoration: 'none',
                  fontSize: '16px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,107,0,0.1)'
                  e.currentTarget.style.color = 'var(--primary)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = '#D1D5DB'
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        {/* Social buttons */}
        <div style={{ marginTop: 'auto', padding: '24px', borderTop: '1px solid #1F2937' }}>
          <p style={{ color: '#6B7280', fontSize: '13px', marginBottom: '12px' }}>আমাদের সোশ্যাল মিডিয়া</p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}
            >
              <IconWhatsApp size={18} /> WhatsApp
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-facebook"
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '10px', borderRadius: '10px', textDecoration: 'none', fontSize: '14px' }}
            >
              <IconFacebook size={18} /> Facebook
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

// ── Cart Drawer ───────────────────────────────────────────
function CartDrawer({
  open,
  onClose,
  items,
  onUpdateQty,
  onRemove,
}: {
  open: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQty: (id: number, delta: number) => void
  onRemove: (id: number) => void
}) {
  const total = items.reduce((sum, i) => sum + i.product.price * i.qty, 0)

  function buildWhatsAppMessage() {
    const lines = items.map((i) => `• ${i.product.name} × ${toBengaliNum(i.qty)} = ${formatTaka(i.product.price * i.qty)}`)
    const msg = `🛒 অর্ডার:\n${lines.join('\n')}\n\n💰 মোট: ${formatTaka(total)}\n\nঅনুগ্রহ করে আমার অর্ডারটি কনফার্ম করুন।`
    return `${WHATSAPP_URL}?text=${encodeURIComponent(msg)}`
  }

  if (!open) return null
  return (
    <>
      <div className="overlay animate-fadeIn" onClick={onClose} />
      <div className="drawer-right animate-slideInRight">
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: '1px solid #1F2937', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: '20px', fontWeight: 700 }}>
            🛒 কার্ট ({toBengaliNum(items.reduce((s, i) => s + i.qty, 0))})
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer', padding: '4px' }}>
            <IconClose />
          </button>
        </div>
        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 24px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#6B7280', paddingTop: '60px' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🛒</div>
              <p>কার্ট খালি আছে</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {items.map(({ product, qty }) => (
                <div key={product.id} style={{ background: '#0A0F1E', borderRadius: '12px', padding: '14px', border: '1px solid #1F2937' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <span style={{ fontSize: '28px' }}>{product.emoji}</span>
                      <div>
                        <p style={{ fontSize: '14px', fontWeight: 600 }}>{product.name}</p>
                        <p style={{ fontSize: '13px', color: 'var(--primary)' }}>{formatTaka(product.price)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => onRemove(product.id)}
                      style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer', padding: '4px' }}
                    >
                      <IconTrash />
                    </button>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0', border: '1px solid #374151', borderRadius: '8px', overflow: 'hidden' }}>
                      <button
                        onClick={() => onUpdateQty(product.id, -1)}
                        style={{ background: '#1F2937', border: 'none', color: 'white', cursor: 'pointer', padding: '6px 10px' }}
                      >
                        <IconMinus />
                      </button>
                      <span style={{ padding: '6px 14px', fontSize: '14px', fontWeight: 600 }}>{toBengaliNum(qty)}</span>
                      <button
                        onClick={() => onUpdateQty(product.id, 1)}
                        style={{ background: '#1F2937', border: 'none', color: 'white', cursor: 'pointer', padding: '6px 10px' }}
                      >
                        <IconPlus />
                      </button>
                    </div>
                    <p style={{ fontWeight: 700, color: 'var(--yellow)' }}>{formatTaka(product.price * qty)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Footer */}
        {items.length > 0 && (
          <div style={{ padding: '20px 24px', borderTop: '1px solid #1F2937' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
              <span style={{ color: '#9CA3AF' }}>মোট:</span>
              <span style={{ fontSize: '20px', fontWeight: 800, fontFamily: "'Baloo Da 2', sans-serif" }} className="gradient-text">
                {formatTaka(total)}
              </span>
            </div>
            <a
              href={buildWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp animate-pulse-ring"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '14px',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: 700,
              }}
            >
              <IconWhatsApp size={20} />
              WhatsApp-এ অর্ডার করুন
            </a>
          </div>
        )}
      </div>
    </>
  )
}

// ── Search Modal ──────────────────────────────────────────
function SearchModal({ open, onClose, onAddToCart }: { open: boolean; onClose: () => void; onAddToCart: (p: Product) => void }) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => {
    if (!query.trim()) return products
    return products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.shortDescription.toLowerCase().includes(query.toLowerCase()))
  }, [query])

  if (!open) return null
  return (
    <div className="search-modal" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div style={{ width: 'min(560px, 95vw)', background: '#111827', borderRadius: '16px', border: '1px solid #1F2937', overflow: 'hidden' }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #1F2937', display: 'flex', gap: '12px', alignItems: 'center' }}>
          <IconSearch />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="পণ্য খুঁজুন..."
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              outline: 'none',
              color: 'white',
              fontSize: '16px',
              fontFamily: "'Hind Siliguri', sans-serif",
            }}
          />
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#6B7280', cursor: 'pointer' }}>
            <IconClose />
          </button>
        </div>
        <div style={{ maxHeight: '60vh', overflowY: 'auto', padding: '12px' }}>
          {results.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#6B7280', padding: '24px' }}>কোনো পণ্য পাওয়া যায়নি</p>
          ) : (
            results.map((p) => (
              <div
                key={p.id}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderRadius: '10px', marginBottom: '4px', transition: 'background 0.2s', cursor: 'pointer' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#1F2937')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{ fontSize: '28px' }}>{p.emoji}</span>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 600 }}>{p.name}</p>
                    <p style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: 700 }}>{formatTaka(p.price)}</p>
                  </div>
                </div>
                <button
                  onClick={() => { onAddToCart(p); onClose() }}
                  className="btn-primary"
                  style={{ padding: '7px 14px', borderRadius: '8px', fontSize: '13px', whiteSpace: 'nowrap' }}
                >
                  কার্টে যোগ
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

// ── Header ────────────────────────────────────────────────
function Header({
  cartCount,
  onMenuClick,
  onCartClick,
  onSearchClick,
}: {
  cartCount: number
  onMenuClick: () => void
  onCartClick: () => void
  onSearchClick: () => void
}) {
  return (
    <header className="sticky-header">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left */}
        <button onClick={onMenuClick} style={{ background: 'none', border: 'none', color: '#D1D5DB', cursor: 'pointer', padding: '8px', borderRadius: '8px' }}>
          <IconMenu />
        </button>
        {/* Center logo */}
        <a href="#home" style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: '22px', fontWeight: 800, textDecoration: 'none' }}>
          <span className="gradient-text">{BUSINESS_NAME}</span>
        </a>
        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <button onClick={onSearchClick} style={{ background: 'none', border: 'none', color: '#D1D5DB', cursor: 'pointer', padding: '8px', borderRadius: '8px' }}>
            <IconSearch />
          </button>
          <button onClick={onCartClick} style={{ background: 'none', border: 'none', color: '#D1D5DB', cursor: 'pointer', padding: '8px', borderRadius: '8px', position: 'relative' }}>
            <IconCart />
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '2px', right: '2px', background: 'var(--primary)', color: 'white', fontSize: '10px', fontWeight: 700, width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {cartCount > 9 ? '৯+' : toBengaliNum(cartCount)}
              </span>
            )}
          </button>
        </div>
      </div>
      {/* Desktop nav */}
      <div style={{ borderTop: '1px solid #1F2937', display: 'none' }} className="desktop-nav">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 16px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <nav style={{ display: 'flex', gap: '4px' }}>
            {[{ label: 'হোম', href: '#home' }, { label: 'গ্রীষ্মকালীন', href: '#products' }, { label: 'শীতকালীন', href: '#products' }, { label: 'গ্যাজেট', href: '#products' }, { label: 'কেন আমরা?', href: '#why-us' }].map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{ padding: '6px 14px', borderRadius: '6px', color: '#D1D5DB', textDecoration: 'none', fontSize: '14px', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.background = 'rgba(255,107,0,0.08)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#D1D5DB'; e.currentTarget.style.background = 'transparent' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '7px 16px', borderRadius: '8px', textDecoration: 'none', fontSize: '13px', fontWeight: 600 }}
          >
            <IconWhatsApp size={16} /> এখনই অর্ডার করুন
          </a>
        </div>
      </div>
    </header>
  )
}

// ── Bottom Nav ────────────────────────────────────────────
function BottomNav({
  cartCount,
  onCartClick,
  onSearchClick,
}: {
  cartCount: number
  onCartClick: () => void
  onSearchClick: () => void
}) {
  return (
    <nav className="bottom-nav" style={{ display: 'flex' }}>
      {[
        { icon: <IconHome />, label: 'হোম', href: '#home' },
        { icon: <span style={{ fontSize: '18px' }}>☰</span>, label: 'মেনু', href: '#products' },
      ].map((item) => (
        <a
          key={item.label}
          href={item.href}
          style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 4px', color: '#6B7280', textDecoration: 'none', fontSize: '10px', gap: '3px', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
        >
          {item.icon}
          {item.label}
        </a>
      ))}
      {/* Cart */}
      <button
        onClick={onCartClick}
        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 4px', color: '#6B7280', background: 'none', border: 'none', cursor: 'pointer', fontSize: '10px', gap: '3px', position: 'relative', transition: 'color 0.2s' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
      >
        <div style={{ position: 'relative' }}>
          <IconCart />
          {cartCount > 0 && (
            <span style={{ position: 'absolute', top: '-6px', right: '-6px', background: 'var(--primary)', color: 'white', fontSize: '9px', fontWeight: 700, width: '15px', height: '15px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {cartCount > 9 ? '৯+' : toBengaliNum(cartCount)}
            </span>
          )}
        </div>
        কার্ট
      </button>
      {/* Search */}
      <button
        onClick={onSearchClick}
        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 4px', color: '#6B7280', background: 'none', border: 'none', cursor: 'pointer', fontSize: '10px', gap: '3px', transition: 'color 0.2s' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
      >
        <IconSearch />
        সার্চ
      </button>
      {/* Account */}
      <button
        style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '8px 4px', color: '#6B7280', background: 'none', border: 'none', cursor: 'pointer', fontSize: '10px', gap: '3px', transition: 'color 0.2s' }}
        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
      >
        <IconUser />
        অ্যাকাউন্ট
      </button>
    </nav>
  )
}

// ── Hero Section ──────────────────────────────────────────
function HeroSection() {
  return (
    <section id="home" className="hero-gradient" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,107,0,0.1), transparent)', borderRadius: '50%', filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(124,58,237,0.15), transparent)', borderRadius: '50%', filter: 'blur(60px)' }} />

      <div style={{ maxWidth: '800px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,107,0,0.15)', border: '1px solid rgba(255,107,0,0.3)', padding: '6px 16px', borderRadius: '50px', marginBottom: '24px' }}>
          <span style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', display: 'inline-block', animation: 'pulse-ring 2s infinite' }} />
          <span style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: 600 }}>বাংলাদেশের সেরা অনলাইন শপ</span>
        </div>

        {/* Heading */}
        <h1 style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: 'clamp(32px, 7vw, 64px)', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px' }}>
          সেরা মানের পণ্য <br />
          <span className="gradient-text">সরাসরি আপনার দরজায়</span>
        </h1>

        <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#9CA3AF', lineHeight: 1.8, marginBottom: '36px', maxWidth: '600px', margin: '0 auto 36px' }}>
          গরমে ঠান্ডা, শীতে উষ্ণ থাকুন। সেরা মানের রিচার্জেবল ফ্যান, এয়ার কুলার, হিটার ও গ্যাজেট পাচ্ছেন সেরা দামে।
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '52px' }}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp animate-float"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, fontFamily: "'Baloo Da 2', sans-serif" }}
          >
            <IconWhatsApp size={22} /> WhatsApp-এ অর্ডার করুন
          </a>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-facebook"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 28px', borderRadius: '12px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, fontFamily: "'Baloo Da 2', sans-serif" }}
          >
            <IconFacebook size={22} /> Facebook পেজ
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { value: '৫০০+', label: 'সন্তুষ্ট গ্রাহক' },
            { value: '৩০+', label: 'মানসম্পন্ন পণ্য' },
            { value: '২৪/৭', label: 'কাস্টমার সাপোর্ট' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: '28px', fontWeight: 800 }} className="gradient-text">{stat.value}</div>
              <div style={{ fontSize: '13px', color: '#6B7280', marginTop: '2px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Product Card ──────────────────────────────────────────
function ProductCard({ product, onAddToCart }: { product: Product; onAddToCart: (p: Product) => void }) {
  const [added, setAdded] = useState(false)

  function handleAdd() {
    onAddToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const badgeLabel = product.badge === 'hot' ? 'হট' : product.badge === 'new' ? 'নতুন' : product.badge === 'offer' ? 'অফার' : null
  const badgeClass = product.badge === 'hot' ? 'badge-hot' : product.badge === 'new' ? 'badge-new' : 'badge-offer'

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  const waMsg = `আমি ${product.name} অর্ডার করতে চাই। মূল্য: ${formatTaka(product.price)}`

  return (
    <div className="product-card">
      {/* Image / emoji area */}
      <div style={{ background: 'linear-gradient(135deg, #1F2937, #111827)', padding: '32px 20px', textAlign: 'center', position: 'relative' }}>
        {badgeLabel && (
          <span className={badgeClass} style={{ position: 'absolute', top: '12px', left: '12px', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700 }}>
            {badgeLabel}
          </span>
        )}
        {discount > 0 && (
          <span style={{ position: 'absolute', top: '12px', right: '12px', background: '#7C3AED', color: 'white', padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 700 }}>
            -{toBengaliNum(discount)}%
          </span>
        )}
        <div style={{ fontSize: '64px', lineHeight: 1 }}>{product.emoji}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2px', marginTop: '8px' }}>
          {[1, 2, 3, 4, 5].map((s) => <IconStar key={s} />)}
        </div>
      </div>
      {/* Info */}
      <div style={{ padding: '16px' }}>
        <h3 style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: '16px', fontWeight: 700, marginBottom: '6px' }}>{product.name}</h3>
        <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '12px' }}>{product.shortDescription}</p>
        {/* Price */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <span style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: '20px', fontWeight: 800, color: 'var(--primary)' }}>
            {formatTaka(product.price)}
          </span>
          <span style={{ fontSize: '13px', color: '#6B7280', textDecoration: 'line-through' }}>
            {formatTaka(product.originalPrice)}
          </span>
        </div>
        {/* Buttons */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={handleAdd}
            className="btn-primary"
            style={{ flex: 1, padding: '10px', borderRadius: '10px', fontSize: '13px', fontWeight: 600 }}
          >
            {added ? '✓ যোগ হয়েছে' : '+ কার্টে যোগ'}
          </button>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(waMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', borderRadius: '10px', textDecoration: 'none', flexShrink: 0 }}
            title="WhatsApp অর্ডার"
          >
            <IconWhatsApp size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Products Section ──────────────────────────────────────
function ProductsSection({ onAddToCart }: { onAddToCart: (p: Product) => void }) {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { key: 'all', label: '⭐ সব পণ্য' },
    { key: 'summer', label: '☀️ গ্রীষ্মকালীন' },
    { key: 'winter', label: '❄️ শীতকালীন' },
    { key: 'gadget', label: '📱 গ্যাজেট' },
  ]

  const filtered = activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory)

  return (
    <section id="products" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 800, marginBottom: '12px' }}>
          আমাদের <span className="gradient-text">পণ্যসমূহ</span>
        </h2>
        <p style={{ color: '#9CA3AF', fontSize: '16px' }}>সেরা মানের পণ্য, সেরা দামে</p>
      </div>
      {/* Category filter */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '36px' }}>
        {categories.map((c) => (
          <button
            key={c.key}
            className={`cat-pill${activeCategory === c.key ? ' active' : ''}`}
            onClick={() => setActiveCategory(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>
      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}

// ── Why Us Section ────────────────────────────────────────
function WhyUsSection() {
  const features = [
    { icon: '✅', title: '১০০% অরিজিনাল', desc: 'শুধুমাত্র খাঁটি ও মানসম্পন্ন পণ্য বিক্রি করি' },
    { icon: '🚀', title: 'দ্রুত ডেলিভারি', desc: 'ঢাকায় ১-২ দিন, সারা বাংলাদেশে ২-৫ দিন' },
    { icon: '🛎️', title: '২৪/৭ সাপোর্ট', desc: 'যেকোনো সমস্যায় আমরা সবসময় আপনার পাশে' },
    { icon: '🔄', title: 'রিটার্ন পলিসি', desc: 'পণ্যে সমস্যা হলে ৭ দিনের মধ্যে ফেরত নেওয়া হবে' },
    { icon: '💰', title: 'সেরা দাম', desc: 'বাজারের সেরা দামে পণ্য পাচ্ছেন আমাদের কাছে' },
  ]

  return (
    <section id="why-us" className="why-us-gradient" style={{ padding: '60px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2 style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 800, marginBottom: '12px' }}>
            কেন <span className="gradient-text-cyan">আমাদের বেছে নেবেন?</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '16px' }}>আমরা কেবল পণ্য বিক্রি করি না, বিশ্বাস বিক্রি করি</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{ background: 'rgba(17,24,39,0.8)', border: '1px solid #1F2937', borderRadius: '16px', padding: '28px 20px', textAlign: 'center', transition: 'all 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--cyan)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,212,255,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#1F2937'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '14px' }}>{f.icon}</div>
              <h3 style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{f.title}</h3>
              <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact Section ───────────────────────────────────────
function ContactSection() {
  return (
    <section id="contact" style={{ padding: '60px 20px', maxWidth: '700px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: 'clamp(26px, 5vw, 40px)', fontWeight: 800, marginBottom: '12px' }}>
          <span className="gradient-text">যোগাযোগ করুন</span>
        </h2>
        <p style={{ color: '#9CA3AF', fontSize: '16px' }}>অর্ডার বা যেকোনো প্রশ্নের জন্য আমাদের সাথে যোগাযোগ করুন</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)', borderRadius: '16px', padding: '28px', textDecoration: 'none', textAlign: 'center', transition: 'all 0.3s' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,211,102,0.2)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
        >
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>
            <IconWhatsApp size={48} />
          </div>
          <h3 style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: '18px', fontWeight: 700, color: 'var(--whatsapp)', marginBottom: '6px' }}>WhatsApp</h3>
          <p style={{ color: '#9CA3AF', fontSize: '13px' }}>সরাসরি মেসেজ করুন, দ্রুত সাড়া পাবেন</p>
        </a>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', background: 'rgba(24,119,242,0.1)', border: '1px solid rgba(24,119,242,0.3)', borderRadius: '16px', padding: '28px', textDecoration: 'none', textAlign: 'center', transition: 'all 0.3s' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(24,119,242,0.2)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
        >
          <div style={{ fontSize: '48px', marginBottom: '12px', color: 'var(--facebook)', display: 'flex', justifyContent: 'center' }}>
            <IconFacebook size={48} />
          </div>
          <h3 style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: '18px', fontWeight: 700, color: 'var(--facebook)', marginBottom: '6px' }}>Facebook পেজ</h3>
          <p style={{ color: '#9CA3AF', fontSize: '13px' }}>আমাদের পেজে লাইক দিন, আপডেট পান</p>
        </a>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #1F2937', padding: '30px 20px', textAlign: 'center', color: '#6B7280', fontSize: '14px' }}>
      <p style={{ fontFamily: "'Baloo Da 2', sans-serif", fontSize: '18px', fontWeight: 700, marginBottom: '8px' }}>
        <span className="gradient-text">{BUSINESS_NAME}</span>
      </p>
      <p>© {new Date().getFullYear()} {BUSINESS_NAME}। সর্বস্বত্ব সংরক্ষিত।</p>
      <p style={{ marginTop: '6px' }}>Made with ❤️ in Bangladesh</p>
    </footer>
  )
}

// ── Floating Buttons ──────────────────────────────────────
function FloatingButtons() {
  return (
    <div className="floating-btns" style={{ display: 'none' }} id="floating-btns">
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ background: '#111827', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', whiteSpace: 'nowrap', opacity: 0, transition: 'opacity 0.2s' }} className="floating-tooltip">WhatsApp অর্ডার</span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp animate-pulse-ring"
          style={{ width: '52px', height: '52px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
          title="WhatsApp অর্ডার"
        >
          <IconWhatsApp size={24} />
        </a>
      </div>
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ background: '#111827', color: 'white', padding: '4px 10px', borderRadius: '6px', fontSize: '12px', whiteSpace: 'nowrap', opacity: 0, transition: 'opacity 0.2s' }} className="floating-tooltip">Facebook পেজ</span>
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-facebook"
          style={{ width: '52px', height: '52px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
          title="Facebook পেজ"
        >
          <IconFacebook size={22} />
        </a>
      </div>
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────
function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0)

  function addToCart(product: Product) {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) return prev.map((i) => i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { product, qty: 1 }]
    })
  }

  function updateQty(id: number, delta: number) {
    setCartItems((prev) => {
      return prev
        .map((i) => i.product.id === id ? { ...i, qty: i.qty + delta } : i)
        .filter((i) => i.qty > 0)
    })
  }

  function removeItem(id: number) {
    setCartItems((prev) => prev.filter((i) => i.product.id !== id))
  }

  return (
    <>
      <SidebarDrawer open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} items={cartItems} onUpdateQty={updateQty} onRemove={removeItem} />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} onAddToCart={addToCart} />

      <Header cartCount={cartCount} onMenuClick={() => setSidebarOpen(true)} onCartClick={() => setCartOpen(true)} onSearchClick={() => setSearchOpen(true)} />

      <main>
        <HeroSection />
        <ProductsSection onAddToCart={addToCart} />
        <WhyUsSection />
        <ContactSection />
        <Footer />
      </main>

      <BottomNav cartCount={cartCount} onCartClick={() => setCartOpen(true)} onSearchClick={() => setSearchOpen(true)} />

      <FloatingButtons />

      {/* Desktop nav & floating btn styles injected via style tag */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .bottom-nav { display: none !important; }
          #floating-btns { display: flex !important; }
        }
        #floating-btns a:hover + .floating-tooltip,
        #floating-btns div:hover .floating-tooltip {
          opacity: 1 !important;
        }
      `}</style>
    </>
  )
}
