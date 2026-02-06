# 🟩 Blocktopia 5.0

## 🔌 Server Info

**Minecraft Version:** Fabric 1.21.11  
**Proximity Voice Chat:** [Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat)

🌍 **Server Address:**  
`blocktopia-5.mc.gg`

🗺 **Live Map:**  
[blocktopia-5.mc.gg:9001/](http://blocktopia-5.mc.gg:9001/)

---

## 🛠 Fabric Installer

If you don't already have Fabric installed:

**Fabric Installer:**

- Download for [Windows](files/fabric-installer-1.1.1.exe)
- Download for [Mac/Linux](files/fabric-installer-1.1.1.jar)

### Fabric install steps

1. Run the installer
2. Select **Minecraft 1.21.11**
3. Loader version: **latest**
4. Click Install

### Steam Deck

If using Steam Deck, you can install fabric and configure mods/shaders etc. using [Prism Launcher](https://prismlauncher.org/)

---

## 📦 Required Mods

These mods **must** be installed or you will not be able to join the server.

### Installation

1. Download required mods [here](files/mods.zip) AND this mod [enderscape-fabric-2.1.0+mc1.21.11.jar](https://cdn.modrinth.com/data/btCrWvHr/versions/3cYKvu3m/enderscape-fabric-2.1.0%2Bmc1.21.11.jar) _(it's above GitHub's 100MB limit so you have to download it from their website)_
2. Open mods folder

Windows:

```
%appdata%\.minecraft\mods\
```

MacOS:

```
/Users/<USERNAME>/Library/Application Support/minecraft/mods/
```

3. Extract **all contents** of `mods.zip` into the `mods` folder like so:

```
.minecraft/mods/voicechat-fabric-1.21.11-2.6.11.jar
```

4. Launch the game using the Fabric profile

---

## 🔊 In-Game Voice chat setup

1. Join the server
2. Press `V` to open Voice Chat settings  
   (bind it in Controls if nothing happens)
3. Select the **correct microphone**  
   ⚠️ Do not trust “Default”
4. Choose **Push-to-Talk** (recommended)
5. Speak and confirm the mic level moves

---

## ✨ Recommended Shader Pack

_\*to use shader packs you must install Iris [here](#iris-shaders)_

- **Bliss Shader (Chocapic13 edit)**  
  [Download](<files/shaderpacks/Bliss_v2.1.2_(Chocapic13_Shaders_edit).zip>)

### Installation

1. Open shadarpacks folder

Windows:

```
%appdata%\.minecraft\shaderpacks\
```

MacOS:

```
/Users/<USERNAME>/Library/Application Support/minecraft/shaderpacks/
```

2. Place the shader zip in shaderpacks folder _(do not unzip!)_
3. Enable it in Video Settings → Shaders

---

## 🎮 Optional Client Mods (recommended)

These are **client-side only**. They improve performance and visuals but are not required.

## 🚀 Optimisation Mods

### Distant Horizons

Adds level-of-detail (LOD) terrain rendering so you can see extremely far without killing performance.  
Best used alongside shaders.

[Download](files/optimisation/DistantHorizons-2.4.5-b-1.21.11-fabric-neoforge.jar)

---

### Entity Culling

Prevents the game from rendering entities and block entities that are not visible to the player.  
Massive FPS gains in bases and mob-heavy areas.

[Download](files/optimisation/entityculling-fabric-1.9.5-mc1.21.11.jar)

---

### Sodium

A high-performance renderer that dramatically increases FPS and reduces stutter.  
This replaces Minecraft’s default rendering engine.

[Download](files/optimisation/sodium-fabric-0.8.2+mc1.21.11.jar)

---

## 🎨 Aesthetic Mods

### Continuity

Adds connected textures (glass panes connect properly, blocks blend smoothly).  
Purely visual, no gameplay changes.

[Download](files/aesthetics/continuity-3.0.1-beta.1+1.21.11.jar)

---

### Entity Model Features

Allows resource packs to use custom 3D mob models.  
Required by some advanced texture packs.

[Download](files/aesthetics/entity_model_features_1.21.11-fabric-3.0.10.jar)

---

### Entity Texture Features

Adds support for advanced mob textures (emissive eyes, blinking, random textures).  
Works alongside Entity Model Features.

[Download](files/aesthetics/entity_texture_features_1.21.11-fabric-7.0.8.jar)

---

### Iris Shaders

Shader loader that works seamlessly with Sodium.  
Required if you want to use shader packs.

[Download](files/aesthetics/iris-fabric-1.10.4+mc1.21.11.jar)

---

### LambDynamicLights

Adds dynamic lighting to items and entities (torches, lanterns, glowing mobs).  
May slightly impact FPS on lower-end systems.

[Download](files/aesthetics/lambdynamiclights-4.9.1+1.21.11.jar)

---

### Not Enough Animations

Adds missing player animations (item use, eating, swinging, etc.).  
Makes first- and third-person movement feel more natural.

[Download](files/aesthetics/notenoughanimations-fabric-1.11.1-mc1.21.11.jar)

---

### 3D Skin Layers

Turns flat Minecraft skins into proper 3D layers.  
Purely cosmetic.

[Download](files/aesthetics/skinlayers3d-fabric-1.10.1-mc1.21.11.jar)

---

## 🧰 Quality of Life Mods

### Controlify

Adds full controller support and advanced input configuration.  
Great for Steam Deck or controller-based play.

[Download](files/qol/controlify-2.5.2+1.21.11-fabric.jar)

---

### Hide Item Frame

Allows item frames to be hidden while keeping the displayed item visible.  
Perfect for clean builds and map walls.

[Download](files/qol/hide-item-frame-fabric-1.3+1.21.9.jar)

---

### NetherCoords

Displays your Overworld-equivalent coordinates while in the Nether.  
Prevents calculator-induced brain damage.

[Download](files/qol/NetherCoords%202.0.2%20for%201.21.9-1.21.10.jar)

---

### Shulker Box Tooltip

Shows the contents of shulker boxes when hovering over them.  
Once installed, vanilla feels broken without it.

[Download](files/qol/shulkerboxtooltip-fabric-5.2.14+1.21.11.jar)

---

### Simple Mod Manager

Lets you enable and disable mods from inside the game without touching files.  
Useful for quick testing and troubleshooting.

[Download](files/qol/simple-mod-manager-1.3.0.jar)

---

### Zoomify

Adds an OptiFine-style zoom with configurable settings.  
Great for scouting terrain and builds.

[Download](files/qol/Zoomify-2.14.6+1.21.11.jar)
