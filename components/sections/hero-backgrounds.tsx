"use client"

import { useEffect, useRef } from "react"

/* ─────────────────────────────────────────────
   DARK / CODER: Matrix digital rain canvas
───────────────────────────────────────────── */
export function MatrixRainBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+[]{}|<>/\\~`ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ01"

        const fontSize = 14
        let columns: number[] = []
        let animationId: number

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            const colCount = Math.floor(canvas.width / fontSize)
            columns = Array.from({ length: colCount }, () =>
                Math.floor(Math.random() * -canvas.height / fontSize)
            )
        }

        const draw = () => {
            // Fade trail
            ctx.fillStyle = "rgba(10, 10, 20, 0.05)"
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            const colCount = columns.length
            for (let i = 0; i < colCount; i++) {
                const y = columns[i]
                if (y < 0) {
                    columns[i]++
                    continue
                }

                const char = chars[Math.floor(Math.random() * chars.length)]
                const x = i * fontSize

                // Head: bright white/cyan flash
                if (y === columns[i]) {
                    ctx.fillStyle = "#ffffff"
                    ctx.shadowBlur = 12
                    ctx.shadowColor = "#00ffd0"
                } else {
                    // Body gradient: bright emerald → dim teal
                    const brightness = Math.max(0, 1 - (columns[i] - y) / 20)
                    const r = Math.floor(0 + brightness * 0)
                    const g = Math.floor(180 + brightness * 75)
                    const b = Math.floor(120 + brightness * 80)
                    ctx.fillStyle = `rgba(${r},${g},${b},${0.2 + brightness * 0.8})`
                    ctx.shadowBlur = brightness * 8
                    ctx.shadowColor = "#10b981"
                }

                ctx.font = `${fontSize}px monospace`
                ctx.fillText(char, x, y * fontSize)
                ctx.shadowBlur = 0

                // Reset column when it exits the screen (random chance)
                if (y * fontSize > canvas.height && Math.random() > 0.975) {
                    columns[i] = 0
                } else {
                    columns[i]++
                }
            }

            animationId = requestAnimationFrame(draw)
        }

        resize()
        // fill black initially
        ctx.fillStyle = "rgb(10,10,20)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        draw()

        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-60"
            style={{ display: "block" }}
        />
    )
}

/* ─────────────────────────────────────────────
   LIGHT / DESIGNER: Floating blueprint sheets
───────────────────────────────────────────── */
interface BlueprintPanel {
    x: number
    y: number
    w: number
    h: number
    vx: number
    vy: number
    rotation: number
    vr: number
    opacity: number
    kind: "rect" | "hex" | "cross"
}

function hexPath(ctx: CanvasRenderingContext2D, cx: number, cy: number, r: number) {
    ctx.beginPath()
    for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6
        const px = cx + r * Math.cos(angle)
        const py = cy + r * Math.sin(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
    }
    ctx.closePath()
}

export function BlueprintBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let panels: BlueprintPanel[] = []
        let animationId: number
        let W = 0
        let H = 0

        const kindList: BlueprintPanel["kind"][] = ["rect", "rect", "rect", "hex", "cross"]

        const makePanel = (initial = false): BlueprintPanel => {
            const kind = kindList[Math.floor(Math.random() * kindList.length)]
            const w = 60 + Math.random() * 120
            const h = kind === "rect" ? 40 + Math.random() * 80 : w
            return {
                x: initial ? Math.random() * W : -w - 20,
                y: Math.random() * H,
                w,
                h,
                vx: 0.15 + Math.random() * 0.3,
                vy: (Math.random() - 0.5) * 0.15,
                rotation: (Math.random() - 0.5) * 0.4,
                vr: (Math.random() - 0.5) * 0.0008,
                opacity: 0.07 + Math.random() * 0.13,
                kind,
            }
        }

        const resize = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
            W = canvas.width
            H = canvas.height
            panels = Array.from({ length: 22 }, () => makePanel(true))
        }

        const drawPanel = (p: BlueprintPanel) => {
            ctx.save()
            ctx.translate(p.x + p.w / 2, p.y + p.h / 2)
            ctx.rotate(p.rotation)
            ctx.globalAlpha = p.opacity

            const accent = "#6366f1" // indigo — matches light mode gradient

            ctx.strokeStyle = accent
            ctx.lineWidth = 1.2

            if (p.kind === "rect") {
                // Outer border
                ctx.strokeRect(-p.w / 2, -p.h / 2, p.w, p.h)
                // Inner cross lines (like a panel layout)
                ctx.beginPath()
                ctx.moveTo(-p.w / 2, 0)
                ctx.lineTo(p.w / 2, 0)
                ctx.moveTo(0, -p.h / 2)
                ctx.lineTo(0, p.h / 2)
                ctx.stroke()
                // Corner marks
                const m = 8
                ;([[- p.w / 2, -p.h / 2], [p.w / 2, -p.h / 2], [-p.w / 2, p.h / 2], [p.w / 2, p.h / 2]] as [number, number][]).forEach(([cx, cy]) => {
                    ctx.beginPath()
                    ctx.moveTo(cx + (cx > 0 ? -m : m), cy)
                    ctx.lineTo(cx, cy)
                    ctx.lineTo(cx, cy + (cy > 0 ? -m : m))
                    ctx.stroke()
                })
            } else if (p.kind === "hex") {
                hexPath(ctx, 0, 0, p.w / 2)
                ctx.stroke()
                // Inner smaller hex
                hexPath(ctx, 0, 0, p.w / 4)
                ctx.stroke()
                // Axis lines
                ctx.beginPath()
                ctx.moveTo(-p.w / 2, 0); ctx.lineTo(p.w / 2, 0)
                ctx.stroke()
            } else {
                // Cross / plus sign (like a CNC registration mark)
                const arm = p.w / 2
                ctx.beginPath()
                ctx.moveTo(-arm, 0); ctx.lineTo(arm, 0)
                ctx.moveTo(0, -arm); ctx.lineTo(0, arm)
                ctx.stroke()
                // Circle
                ctx.beginPath()
                ctx.arc(0, 0, arm * 0.45, 0, Math.PI * 2)
                ctx.stroke()
            }

            ctx.restore()
        }

        const draw = () => {
            ctx.clearRect(0, 0, W, H)

            // Blueprint grid overlay (very faint)
            ctx.globalAlpha = 0.035
            ctx.strokeStyle = "#6366f1"
            ctx.lineWidth = 0.5
            const gridSize = 32
            for (let gx = 0; gx < W; gx += gridSize) {
                ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, H); ctx.stroke()
            }
            for (let gy = 0; gy < H; gy += gridSize) {
                ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke()
            }
            ctx.globalAlpha = 1

            // Update + draw panels
            panels = panels.map(p => {
                const np = {
                    ...p,
                    x: p.x + p.vx,
                    y: p.y + p.vy,
                    rotation: p.rotation + p.vr,
                }
                // Recycle offscreen
                if (np.x > W + np.w + 20) {
                    return { ...makePanel(), x: -np.w - 20, y: Math.random() * H }
                }
                return np
            })

            panels.forEach(drawPanel)

            animationId = requestAnimationFrame(draw)
        }

        resize()
        draw()

        window.addEventListener("resize", resize)
        return () => {
            window.removeEventListener("resize", resize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-80"
            style={{ display: "block" }}
        />
    )
}
